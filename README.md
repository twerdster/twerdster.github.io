# Aaron Wetzler academic website

A static academic homepage built from the recovered Technion website. The main page contains the biography, publications, student projects, theses, code and data, experience and education, research videos, and patents.

The layout uses the former academic archive's straightforward section structure, with a sticky section navigation, circular profile photo, serif headings, numbered sections and compact illustrated rows. All publication, project and undergraduate-thesis thumbnail frames are 184 by 115 pixels on desktop and mobile. Publications can be filtered by research area; publication and project BibTeX files open inline with copy and download controls. The theme switch saves the light/dark preference locally. Core academic content and original citation links remain available without JavaScript; the interactive HandNet viewer requires JavaScript.

The homepage and HandNet project page share `styles.css` and `site.js`, including navigation, fonts, light/dark preference, citation previews, and responsive layout. The archive's 21 student projects and six demonstration videos are now on the homepage. Mobile Point Fusion and Freehand Voxel Carving Scanning on a Mobile Device appear in Student Projects, not Publications. `archive.html` is only a compatibility redirect: old section links, including `archive.html#Projects`, point to the corresponding homepage section. Without JavaScript, the compatibility page provides direct section links. The historical source remains in Git history at commit `462ebe0`. PDFs, slides, ZIPs, and external websites retain their native formats.

## HandNet data and viewer

The [HandNet page](https://twerdster.github.io/HandNet/) embeds a [20-sample viewer](https://twerdster.github.io/HandNet/#explorer), also available [standalone](https://twerdster.github.io/HandNet/explorer/). The viewer's scripts, vendored dependencies, images and calibrated point clouds are served from this repository with relative URLs. It does not embed the Hugging Face app or require a CDN. Serve the site over HTTP with the local command below; opening an HTML file directly can prevent browser fetches of sample assets.

The [complete dataset](https://huggingface.co/datasets/twerdster/HandNet) is public and ungated on Hugging Face. Its [seven unchanged archives](https://huggingface.co/datasets/twerdster/HandNet/tree/main/archives) total 25,475,576,842 bytes and contain 214,971 original frames plus transformed variants. Data is available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), including commercial reuse with attribution, a license link and an indication of changes. Credit Aaron Wetzler, Ron Slossberg and Ron Kimmel and cite the BMVC 2015 paper. The linked historical MATLAB source keeps its own original terms.

The [extended research Space](https://huggingface.co/spaces/twerdster/HandNet-Explorer) and [Parquet preview](https://huggingface.co/datasets/twerdster/HandNet/resolve/main/preview/samples.parquet) contain 96 derived visualization rows. The local 20-sample selection and the 96-row preview do not replace the full archives. Images are rendered for display; the viewers show measured sensor annotations and geometric transformations, not new learned detector results.

## Publication index

The homepage has 19 publications, 23 student projects, two theses, six research videos and nine patent lines. The publication records were reconciled with Aaron's full Google Scholar profile on November 10, 2026; the two project records were subsequently moved to Student Projects at Aaron's request. Conference and preprint versions are combined rather than duplicated. Learning Invariant Representations of Planar Curves uses its ICLR 2017 publication year rather than the 2016 preprint year. Sixteen publications and two projects have downloadable BibTeX files. Patent lines group related grant and application publications. Keep `index.html`, `data/site-content.json`, and `llms.txt` synchronized when updating these lists.

Eight entries use source figures in `assets/publications/`, displayed in the same 184-by-115-pixel frames as older figures. CoBe now uses the original car photograph without its black frame; Deep Stereo uses two matched original panels with a common horizontal alignment. Both come from the source PDFs without redrawing or changing scientific values. The burger, horse and mobile-project figures use display-only CSS fitting; the voxel figure also uses a brightness filter. The eight previously approved WebP files remain unchanged. Image paths, original sources and figure references are recorded in `data/site-content.json`. The NeurIPS workshop paper now links directly to its verified OpenReview forum/PDF, but remains text-only until the requested first image of Figure 1 is available.

## Code and data directory

Code & Data now links all 12 public software/data repositories: HandNet, Tea,
Beltrami Denoising, Deep Patch-Beltrami, Blender Neural Composer, iPTAM, Servo
Tests, Feetech Servo SDK, Simulink-Caffe-Builder, Caffe-GUI-Tool, the Caffe research
fork and DirtyDataSharing. Forks, hardware requirements and historical experiments
are identified explicitly. Student repositories remain in their dedicated section.
Repository About links point back to the relevant website section.

## Student project repositories

[STUDENT_PROJECTS.md](STUDENT_PROJECTS.md) is the GitHub directory for all 23 independent project repositories. Fifteen have recovered historical source or pinned original public code, CutOut has a related algorithm prototype with its Android app still missing, three have documents without verified app source, and four have introductory READMEs. The homepage links every repository and adds verified original project pages, source, reports, posters and demos. The JSON index records explicit source statuses and upstream revisions; a repository link must not be mislabeled as available code when it contains only a README.

Project READMEs document historical build entrypoints, missing SDKs and untested runtime status. Private source recovery excludes credentials, signing material, proprietary SDK components, personal identifiers and raw submission archives. Two QRoom DB configuration files use environment-variable lookups. The latest GrayOwl imports remove historical credentials, private endpoints, identifiers and paths; one Mobile Point Fusion comment path is also redacted. Per-repository manifests identify unchanged originals and sanitized files. No blanket license is applied to student or third-party code. Public originals are pinned as submodules rather than silently relabeled.

A follow-up audit removed a database screenshot containing application login details from slide 7 of the multi-view iPhone presentation. Its current public PDF retains all 16 slides; historical Git copies still contain the original screenshot. The QRoom README records confirmed backend vulnerabilities and prohibits deployment of the archived PHP application. Pinned upstream source also needs its own credential and vendor-license review before reuse.

The PhD thesis, *Topics in Computational Geometric Vision* (Technion, August 2017; advisor Ron Kimmel), is hosted as `Wetzler-PhD-2017.pdf`. This is the unchanged 151-page PDF recovered from Aaron's personal Google Drive, alongside the existing 2005 undergraduate thesis. No analytics or tracking script has been added.

## Run locally

```sh
npm run dev
```

Open <http://127.0.0.1:4173/>.

No package installation or build is required to serve the site on GitHub Pages. The HandNet viewer includes its browser dependencies locally.

The historical archive-recovery command is `npm run fetch:archive`; it performs network downloads and is not needed to serve or publish the site. Its path-containment regression checks run offline with `node --test scripts/fetch-wayback.test.mjs`. The importer rejects unsafe decoded paths, Git metadata targets and existing symlinks before filesystem access.

## Published site

The production site is published from the `main` branch of the `twerdster/twerdster.github.io` repository:

<https://twerdster.github.io/>

Pushing to `main` updates the GitHub Pages site. The repository includes a canonical URL, structured person data, `robots.txt`, and `sitemap.xml` so search engines and software agents can identify the public site and its main resources.

## Tailscale access

The macOS LaunchAgent in `ops/com.aaronwetzler.website.plist` keeps the local server running on `127.0.0.1:4173`. Tailscale Serve proxies that server at:

<http://aw-mbp.tail02f936.ts.net:4173/>

The installed LaunchAgent is `~/Library/LaunchAgents/com.aaronwetzler.website.plist` and writes logs to `/tmp/aaron-website.log` and `/tmp/aaron-website.error.log`.

## Files

- `index.html`: current academic homepage.
- `styles.css`: responsive academic-page styling.
- `site.js`: shared progressive enhancements for themes, optional publication filters, inline citations, and active navigation. Cross-page navigation links are not treated as local section links.
- `assets/fonts/` and `assets/icons/`: self-hosted Google Fonts and Lucide SVG icons, with their licenses. Fonts and icons do not require external services at runtime.
- `data/site-content.json`: machine-readable publications, student projects, theses, videos, patents, resources and legacy redirects.
- `llms.txt`: compact index for agents and crawlers.
- `robots.txt` and `sitemap.xml`: search-engine discovery files.
- `HandNet/index.html`: academic dataset overview, embedded 20-sample viewer, public Hugging Face downloads, citation and CC BY 4.0 data terms.
- `HandNet/explorer/`: standalone viewer with locally vendored dependencies and 20 real sample assets; paths are relative so the app can be embedded or opened directly over HTTP.
- `archive.html`: compatibility redirect from old archive URLs to the unified homepage sections.
- `Wetzler-PhD-2017.pdf`: original, complete PhD thesis PDF.
- `site.css` and `HandNet/style/`: retained legacy assets, unused by the current HTML pages.
- `ARCHIVE_RECOVERY_NOTES.md`: Wayback recovery notes.

Dedicated Camerai and Apple project material is intentionally absent from the public page until suitable text, images, videos, and public links are supplied.
