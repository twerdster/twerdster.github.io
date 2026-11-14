# Aaron Wetzler academic website

This repository serves Aaron Wetzler's academic homepage and a static HandNet
sample viewer at <https://twerdster.github.io/>. It contains HTML, CSS,
JavaScript, publication/project metadata, citations and downloadable documents.
It has no application backend or training service. The homepage identifies
Aaron as CTO of an early-stage company building toward a future enabled by
Physical AI.

## What the site does

The homepage lists 19 publications, 23 student projects, two theses, six
research videos and nine patent groups. Code & Data links 12
software/data repositories. These counts describe the content index, not
runnable applications or benchmark coverage.

The sections run from About Me to Publications, Theses, Code & Data, Student
Projects, Experience & Education, Research Videos and Patents. Each heading
expands or collapses its section; all sections start expanded. These controls
also work without JavaScript.

`index.html` contains the rendered academic records. `data/site-content.json`
provides a machine-readable index and provenance; it is maintained alongside
the HTML rather than rendered into it by a build step. `llms.txt` is a compact
resource index. Keep all three consistent when academic resources change.

`site.js` adds publication filtering, fetched BibTeX previews/copy controls,
active-section navigation, reopening sections for fragment links and a locally
saved theme preference. Core text and citation links remain usable without
JavaScript. `archive.html` redirects old
section URLs to the homepage and supplies direct links when JavaScript is off.

## Run locally

Use Python 3 from the repository root:

```sh
git clone https://github.com/twerdster/twerdster.github.io.git
cd twerdster.github.io
python3 -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173/>. With npm installed, `npm run dev` starts the same
Python command. No `npm install`, package build or dataset download is needed.
Use HTTP: opening HTML as a local file can prevent citation and viewer fetches.

## HandNet viewer and external data

[HandNet/index.html](HandNet/index.html) embeds the
[standalone viewer](HandNet/explorer/index.html). Its local JSON, PNG previews,
little-endian float32 XYZ point files and vendored Three.js let the viewer
display 20 precomputed rows with eight matched original/transformed pairs. Coordinates
are in millimetres. Ground-truth derotation uses recorded palm orientation;
the viewer does not execute a learned detector or infer a full hand skeleton.
See the [viewer README](HandNet/explorer/README.md) for file conventions and terms.

The [complete dataset](https://huggingface.co/datasets/twerdster/HandNet) is
hosted separately on Hugging Face in seven distribution archives. The
[research Space](https://huggingface.co/spaces/twerdster/HandNet-Explorer) uses the
[Parquet preview](https://huggingface.co/datasets/twerdster/HandNet/resolve/main/preview/samples.parquet),
which contains 96 visualization rows. Neither preview is a replacement for the native
archives. The tracked viewer code uses same-origin assets, without a CDN,
Hugging Face iframe or backend request.

## Updated project guides

Nine student-project entries and four software entries have a **New!** link
labeled **Updated and ported for modern hardware**. It opens each repository's
updated guide, where a brief account of the changes precedes setup, results and
limitations. The historical network-tools entry links the separate Blender
Neural Composer continuation; it does not describe the historical Caffe fork as
ported. Existing source records and recorded validation keep their own scope.

HandNet's dataset page and Code & Data entry link its
[browser-viewer update guide](HandNet/updated/README.md). The 20-example/eight-pair
viewer is separate from MATLAB training and learned inference. RobotRun's
browser game is newly written code, not a compilation of recovered Unity source.

## Maintenance and validation

Read SUMMARY.md, then SKILL.md and AGENTS.md before editing. The
[maintenance guide](docs/MAINTENANCE.md) covers file organization, content
updates, browser checks, publication and the historical local-server setup.
[STUDENT_PROJECTS.md](STUDENT_PROJECTS.md) describes source availability and
links the 23 project repositories; repository presence does not imply a full
build. GrayOwl's repository contains project records only; its source was withdrawn.

The existing maintenance record describes browser checks for mobile/desktop
layouts, publication filters, citation previews, image loading, no-JavaScript
links and same-origin viewer asset loading with no external requests. Those are website checks, separate
from the previously recorded component tests/notebook executions in the linked
software repositories. The
[provenance guide](docs/PROVENANCE.md) records the historical source and limits.

The archive importer has six offline path-containment regression tests. They
require Node.js with the built-in `node:test` module:

```sh
node --test scripts/fetch-wayback.test.mjs
```

They cover accepted archive mappings, traversal/absolute paths, hostname
restrictions, Git metadata targets and symlink destinations. They do not
validate recovered scientific software or close filesystem race conditions.
The importer itself performs network downloads and is not needed to serve or
publish the site; its separate workflow is in
[ARCHIVE_RECOVERY_NOTES.md](ARCHIVE_RECOVERY_NOTES.md).

## Publication and licensing

GitHub Pages publishes the repository root from `main`. A normal push triggers
the Pages build; verify its result and the public URLs after publication.
There is no local production bundling step. Fonts, icons and viewer dependencies
are served locally. No visitor analytics script is installed.

HandNet data are [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/):
credit Aaron Wetzler, Ron Slossberg and Ron Kimmel, link the license and indicate
changes. Please also cite their BMVC 2015 paper. The viewer code and Three.js
have their own MIT notices. Historical MATLAB code, papers, images and other
external materials retain their respective terms; this README adds no blanket
repository license. See [provenance and attribution](docs/PROVENANCE.md).
