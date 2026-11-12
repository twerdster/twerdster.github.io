import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { checkedOutputPath, isInternalUrl, localOutputPath, localPathFromUrl } from "./fetch-wayback.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("valid archived files and directories map inside the repository", () => {
  for (const [url, expected] of [
    ["https://www.cs.technion.ac.il/~twerd/", "index.html"],
    ["http://cs.technion.ac.il/~twerd/HandNet/", "HandNet/index.html"],
    ["/~twerd/Projects/student/report.pdf", "Projects/student/report.pdf"],
    ["https://www.cs.technion.ac.il/~twerd/Project%20Report.pdf", "Project Report.pdf"],
  ]) {
    assert.equal(localPathFromUrl(url), expected);
    assert.equal(localOutputPath(expected), path.join(repoRoot, expected));
  }
});

test("decoded parent components cannot escape the repository", () => {
  for (const suffix of ["%2e%2e%2foutside.txt", "nested%2f..%2f..%2foutside.txt", "%2e%2e%5coutside.txt"]) {
    assert.throws(() => localPathFromUrl(`https://www.cs.technion.ac.il/~twerd/${suffix}`));
  }
});

test("absolute and platform-specific escapes are rejected at the write boundary", () => {
  for (const target of ["../outside", "nested/../../outside", "/tmp/outside", "//host/share", "C:\\outside", "C:outside", "..\\outside", "", ".", "bad\u0000name"]) {
    assert.throws(() => localOutputPath(target));
  }
  for (const suffix of ["%2ftmp%2foutside", "%2f%2fhost%2fshare", "C%3a%5coutside"]) {
    assert.throws(() => localPathFromUrl(`https://www.cs.technion.ac.il/~twerd/${suffix}`));
  }
});

test("only the exact archived hostname and user directory are accepted", () => {
  for (const url of ["https://example.com/~twerd/file", "https://cs.technion.ac.il/~twerd-other/file", "/~twerd-other/file"]) {
    assert.equal(isInternalUrl(url), false);
    assert.throws(() => localPathFromUrl(url));
  }
});

test("archive paths cannot target Git metadata", () => {
  for (const target of [".git/config", "nested/.GIT/hooks/pre-commit"]) {
    assert.throws(() => localOutputPath(target));
  }
  assert.throws(() => localPathFromUrl("https://cs.technion.ac.il/~twerd/.git%2fconfig"));
});

test("existing symlink parents and destination files are rejected", async () => {
  const temporary = await fs.mkdtemp(path.join(os.tmpdir(), "website-archive-paths-"));
  try {
    const root = path.join(temporary, "repo");
    const outside = path.join(temporary, "outside");
    await fs.mkdir(root);
    await fs.mkdir(outside);
    await fs.writeFile(path.join(outside, "file.txt"), "preserve");
    await fs.symlink(outside, path.join(root, "linked-directory"));
    await fs.symlink(path.join(outside, "file.txt"), path.join(root, "linked-file.txt"));
    await fs.symlink(root, path.join(temporary, "linked-root"));
    await assert.rejects(checkedOutputPath("linked-directory/new.txt", root), /symbolic links/);
    await assert.rejects(checkedOutputPath("linked-file.txt", root), /symbolic links/);
    await assert.rejects(checkedOutputPath("new.txt", path.join(temporary, "linked-root")), /real directory/);
    assert.equal(await checkedOutputPath("new/directory/file.txt", root), path.join(root, "new/directory/file.txt"));
    await fs.mkdir(path.join(root, "existing"));
    await fs.writeFile(path.join(root, "existing/file.txt"), "safe");
    assert.equal(await checkedOutputPath("existing/file.txt", root), path.join(root, "existing/file.txt"));
    assert.equal(await fs.readFile(path.join(outside, "file.txt"), "utf8"), "preserve");
  } finally {
    await fs.rm(temporary, { recursive: true, force: true });
  }
});
