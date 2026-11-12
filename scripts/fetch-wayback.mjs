#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const homepageTimestamp = "20191025064408";
const homepageOriginal = "https://www.cs.technion.ac.il/~twerd/";
const cdxUrl =
  "https://web.archive.org/cdx?url=www.cs.technion.ac.il/~twerd/*&output=json&fl=timestamp,original,mimetype,statuscode,digest,length&filter=statuscode:200&collapse=urlkey";

const internalHosts = new Set(["cs.technion.ac.il", "www.cs.technion.ac.il"]);
const forceDownload = process.argv.includes("--force");

const supplementalFiles = [
  {
    target: "OrelHershkowitzWetzlerRosmanBrucksteinKimmel-CVPR-2016.bib",
    sourceUrl: "https://openaccess.thecvf.com/CVPR2016",
    note:
      "Reconstructed from the CVF Open Access CVPR 2016 BibTeX entry because Wayback did not capture the linked Technion .bib file.",
    contents: `@InProceedings{Or-El_2016_CVPR,
author = {Or-El, Roy and Hershkovitz, Rom and Wetzler, Aaron and Rosman, Guy and Bruckstein, Alfred M. and Kimmel, Ron},
title = {Real-Time Depth Refinement for Specular Objects},
booktitle = {Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
month = {June},
year = {2016}
}
`,
  },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, options = {}, retries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "user-agent": "tea-website-wayback-recovery/1.0",
          ...options.headers,
        },
        ...options,
      });

      if (response.ok) {
        return response;
      }

      lastError = new Error(`${response.status} ${response.statusText}`);
    } catch (error) {
      lastError = error;
    }

    await sleep(500 * attempt);
  }

  throw lastError;
}

function archiveUrl(record) {
  return `https://web.archive.org/web/${record.timestamp}id_/${record.original}`;
}

export function isInternalUrl(value) {
  try {
    const url = new URL(value);
    return internalHosts.has(url.hostname) && url.pathname.startsWith("/~twerd/");
  } catch {
    return value.startsWith("/~twerd/");
  }
}

export function localOutputPath(relativePath, baseDir = repoRoot) {
  if (
    typeof relativePath !== "string" ||
    /[\\\u0000-\u001f\u007f]/.test(relativePath) ||
    path.isAbsolute(relativePath) ||
    /^[a-z]:/i.test(relativePath) ||
    relativePath.split("/").some((part) => part === ".." || part.toLowerCase() === ".git")
  ) {
    throw new Error("Unsafe archive output path");
  }

  const outputPath = path.resolve(baseDir, relativePath);
  const withinRoot = path.relative(baseDir, outputPath);
  if (!withinRoot || withinRoot === ".." || withinRoot.startsWith(`..${path.sep}`) || path.isAbsolute(withinRoot)) {
    throw new Error("Archive output path must stay inside the repository");
  }
  return outputPath;
}

export async function checkedOutputPath(relativePath, baseDir = repoRoot) {
  const outputPath = localOutputPath(relativePath, baseDir);
  let current = path.resolve(baseDir);
  const rootStats = await fs.lstat(current);
  if (rootStats.isSymbolicLink() || !rootStats.isDirectory()) {
    throw new Error("Archive output root must be a real directory");
  }
  for (const component of path.relative(current, outputPath).split(path.sep)) {
    current = path.join(current, component);
    try {
      const stats = await fs.lstat(current);
      if (stats.isSymbolicLink()) throw new Error("Archive output paths cannot use symbolic links");
    } catch (error) {
      if (error.code === "ENOENT") break;
      throw error;
    }
  }
  return outputPath;
}

export function localPathFromUrl(value) {
  if (!isInternalUrl(value)) {
    throw new Error("Cannot map URL outside the archived website");
  }
  const url = value.startsWith("/~twerd/")
    ? new URL(`https://www.cs.technion.ac.il${value}`)
    : new URL(value);

  const marker = "/~twerd/";
  const markerIndex = url.pathname.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error(`Cannot map URL outside /~twerd/: ${value}`);
  }

  let relativePath = decodeURIComponent(url.pathname.slice(markerIndex + marker.length));

  if (relativePath === "" || relativePath.endsWith("/")) {
    relativePath = `${relativePath}index.html`;
  }

  localOutputPath(relativePath);
  return relativePath;
}

function relativeLink(fromFile, toFile) {
  const fromDir = path.posix.dirname(fromFile);
  const target = toFile.endsWith("/index.html") ? toFile.slice(0, -"index.html".length) : toFile;
  const relative = path.posix.relative(fromDir, target || "index.html");

  if (relative === "") {
    return path.posix.basename(target);
  }

  return relative.startsWith(".") ? relative : `./${relative}`;
}

function rewriteHtml(html, filePath) {
  let rewritten = html
    .replace(/^\uFEFF/, "")
    .replace(/\u0013/g, "")
    .replace(/\n\s*var _gaq = _gaq \|\| \[\];[\s\S]*?\}\)\(\);\s*/i, "\n")
    .replace(
      /\s*<script>\s*\(function\(i,s,o,g,r,a,m\)[\s\S]*?ga\('send',\s*'pageview'\);\s*<\/script>\s*/i,
      "\n",
    );

  if (!/<!doctype html>/i.test(rewritten)) {
    rewritten = `<!doctype html>\n${rewritten}`;
  }

  if (!/<meta\s+charset=/i.test(rewritten)) {
    rewritten = rewritten.replace(/<head>/i, '<head>\n<meta charset="utf-8"/>');
  }

  if (!/<meta\s+name=["']viewport["']/i.test(rewritten)) {
    rewritten = rewritten.replace(
      /<head>/i,
      '<head>\n<meta name="viewport" content="width=device-width, initial-scale=1"/>',
    );
  }

  rewritten = rewritten.replace(/\b(href|src)=["']([^"']*)["']/gi, (match, attr, value) => {
    if (!value || value.startsWith("#") || !isInternalUrl(value)) {
      if (value === "site.css" && filePath !== "index.html") {
        return `${attr}="${relativeLink(filePath, "site.css")}"`;
      }

      return match;
    }

    const target = localPathFromUrl(value);
    const link = relativeLink(filePath, target);

    return `${attr}="${link}"`;
  });

  return rewritten;
}

function recordScore(record) {
  const url = new URL(record.original);
  let score = 0;

  if (!url.search) {
    score += 100;
  }

  if (record.timestamp === homepageTimestamp && localPathFromUrl(record.original) === "index.html") {
    score += 10_000;
  }

  score += Number(record.timestamp.slice(0, 8)) / 100_000_000;

  return score;
}

function dedupeRecords(records) {
  const selected = new Map();

  for (const record of records) {
    if (!isInternalUrl(record.original)) {
      continue;
    }

    const target = localPathFromUrl(record.original);
    const existing = selected.get(target);

    if (!existing || recordScore(record) > recordScore(existing)) {
      selected.set(target, record);
    }
  }

  return [...selected.entries()]
    .map(([target, record]) => ({ ...record, target }))
    .sort((a, b) => a.target.localeCompare(b.target));
}

async function getCdxRecords() {
  const response = await fetchWithRetry(cdxUrl);
  const rows = await response.json();
  const [headers, ...records] = rows;

  return records.map((row) =>
    Object.fromEntries(headers.map((header, index) => [header, row[index]])),
  );
}

async function downloadRecord(record) {
  const url = archiveUrl(record);
  const outputPath = await checkedOutputPath(record.target);

  if (!forceDownload && (await fileExists(outputPath))) {
    const stats = await fs.stat(outputPath);

    return {
      ...record,
      archiveUrl: url,
      bytes: stats.size,
      reused: true,
    };
  }

  const response = await fetchWithRetry(url);
  const bytes = Buffer.from(await response.arrayBuffer());

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await checkedOutputPath(record.target);
  await fs.writeFile(outputPath, bytes);

  return {
    ...record,
    archiveUrl: url,
    bytes: bytes.length,
  };
}

async function writeSupplementalFiles() {
  const writtenFiles = [];

  for (const file of supplementalFiles) {
    const outputPath = await checkedOutputPath(file.target);

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await checkedOutputPath(file.target);
    await fs.writeFile(outputPath, file.contents);

    writtenFiles.push({
      target: file.target,
      sourceUrl: file.sourceUrl,
      note: file.note,
      bytes: Buffer.byteLength(file.contents),
    });
  }

  return writtenFiles;
}

async function rewriteDownloadedHtml(downloads) {
  const htmlFiles = downloads.filter((download) => download.target.endsWith(".html"));

  for (const file of htmlFiles) {
    const outputPath = await checkedOutputPath(file.target);
    const html = await fs.readFile(outputPath, "utf8");
    await checkedOutputPath(file.target);
    await fs.writeFile(outputPath, rewriteHtml(html, file.target));
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function findMissingLocalReferences(downloads) {
  const missing = [];
  const htmlFiles = downloads.filter((download) => download.target.endsWith(".html"));

  for (const file of htmlFiles) {
    const html = await fs.readFile(path.join(repoRoot, file.target), "utf8");
    const refs = html.matchAll(/\b(?:href|src)=["']([^"']*)["']/gi);

    for (const [, value] of refs) {
      if (
        !value ||
        value.startsWith("#") ||
        value.startsWith("http:") ||
        value.startsWith("https:") ||
        value.startsWith("mailto:")
      ) {
        continue;
      }

      const withoutHash = value.split("#")[0].split("?")[0];

      if (!withoutHash) {
        continue;
      }

      const target = path.posix.normalize(
        path.posix.join(path.posix.dirname(file.target), withoutHash.endsWith("/") ? `${withoutHash}index.html` : withoutHash),
      );
      const exists = await fileExists(await checkedOutputPath(target));

      if (!exists) {
        missing.push({ from: file.target, reference: value, resolvedTarget: target });
      }
    }
  }

  return missing;
}

async function main() {
  console.log("Reading Wayback CDX inventory...");

  const cdxRecords = await getCdxRecords();
  const records = dedupeRecords([
    ...cdxRecords,
    {
      timestamp: homepageTimestamp,
      original: homepageOriginal,
      mimetype: "text/html",
      statuscode: "200",
      digest: "requested-2019-homepage",
      length: "",
    },
  ]);

  console.log(`Downloading ${records.length} archived files...`);

  const downloads = [];

  for (const [index, record] of records.entries()) {
    process.stdout.write(`[${index + 1}/${records.length}] ${record.target}\n`);
    downloads.push(await downloadRecord(record));
    await sleep(150);
  }

  await rewriteDownloadedHtml(downloads);
  const supplementalDownloads = await writeSupplementalFiles();

  const missingLocalReferences = await findMissingLocalReferences(downloads);
  const manifest = {
    source: {
      requestedUrl:
        "http://web.archive.org/web/20191025064408/https://www.cs.technion.ac.il/~twerd/",
      homepageTimestamp,
      cdxUrl,
    },
    generatedAt: new Date().toISOString(),
    files: downloads,
    supplementalFiles: supplementalDownloads,
    missingLocalReferences,
  };

  await fs.writeFile(
    await checkedOutputPath("archive-manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  console.log(`Recovered ${downloads.length} files.`);
  console.log(`Wrote ${supplementalDownloads.length} supplemental files.`);

  if (missingLocalReferences.length > 0) {
    console.log(`Missing local references: ${missingLocalReferences.length}`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
