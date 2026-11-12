# Academic website: maintenance state

Read this file, then SKILL.md, AGENTS.md and README.md before changes. Production
is https://twerdster.github.io/, published by GitHub Pages from the repository
root on main. The source is static HTML/CSS/JavaScript; no application backend,
content-generation build, full dataset download or model inference is required.

## Entry points and content

`index.html` is the academic homepage. `data/site-content.json` is a separately
maintained machine-readable index, and `llms.txt` is the resource summary. Keep
these consistent for academic-content changes. Current counts: 19 publications,
23 student projects, two theses, 12 software/data repositories, six research
videos and nine patent groups. Sixteen publications and two projects have
BibTeX files. Conference/preprint versions are combined. Mobile Point Fusion
and Freehand Voxel Carving are student projects; the ECCV Beam/prism demo stays
in Publications. The ICLR planar-curves paper uses 2017 (2016 is its preprint).

`site.js` provides publication filtering, citation fetch/copy controls, theme
storage and active navigation. Core text/links work without JavaScript.
`archive.html` is a compatibility redirect with fallback links; do not restore
a second academic archive. Historical source is in Git at 462ebe0.
`styles.css`, fonts and icons are local, with their existing notices.

## HandNet

`HandNet/index.html` embeds `HandNet/explorer/index.html?embed=1` and links the
standalone viewer. Its local data has 20 precomputed visualization rows and
eight matched pairs, drawn from the separate 96-row research preview. The 20
rows comprise five test original/perturbation pairs, three validation
original/derotation pairs and four unpaired training derotations. These are
source split labels, not a new benchmark split. Recorded camera coordinates are +X right, +Y down,
+Z away in millimetres. The renderer changes display axes; measurement tables
retain source values. Ground-truth palm derotation is not learned inference.

The tracked archive manifest records seven separately hosted archives,
214,971 original frames and 25,475,576,842 bytes. The full data stays on Hugging
Face. Data are CC BY 4.0; new viewer code/Three.js are MIT under their notices.
Historical MATLAB code retains separate terms. Do not imply that the previews
are a benchmark split or a full anatomical skeleton.

## Student code and provenance

STUDENT_PROJECTS.md and JSON distinguish source availability from runnable-app
status: fourteen source-bearing/pinned repositories, CutOut's related prototype,
three document repositories, four introductory repositories, and GrayOwl after
source withdrawal. Original source/pins, student credits, vendor terms and
per-repo provenance must remain intact. Do not add a blanket software license.
Four updated components have previously recorded 70 unit tests in total:
HeartBeat 20, Volume 16, Face Depth 18 and CutOut 16. Their notebooks have
separate execution records; neither check validates full mobile apps.

GrayOwl contains project information/links only. Do not restore source,
updated code, notebooks, Colab links or code-availability metadata without a new
explicit request. CutOut's Android app remains unavailable; its related prototype
has unverified original authorship. Raw mail/archives, credentials, signing
material, proprietary SDK components and private recovery evidence stay outside
this public repository. Existing sanitized-source manifests describe edits.

The multi-view iPhone slides remove a database screenshot from slide 7; older
Git history retains it. QRoom has source-confirmed backend vulnerabilities and
must not be deployed. Retain these disclosures and review raster content,
embedded objects and custom SDK/license material before publishing more files.

## Figures, attribution and links

Keep all publication, student-project and undergraduate-thesis thumbnail frames
184 by 115 pixels at desktop/phone widths. Preserve approved figure bytes and
source metadata. CoBe uses its original car crop; Deep Stereo uses two aligned
source panels. Existing CSS fitting/voxel brightness changes are display-only.
The NeurIPS workshop JPEG is Aaron's supplied glove/robot figure, shown in full.
Keep the current role generic throughout visible/profile metadata. No visitor analytics is installed. Camerai/Apple project additions
require approved public text/media before inclusion.

Wetzler-PhD-2017.pdf is the unchanged 151-page August 2017 thesis supervised by
Ron Kimmel (previously verified SHA256
0625f414cc8534f0cc2848b65a0a9f6af2c7b8a685e0ba71b1d2e89f971dc1e9).
Keep it distinct from the 2005 undergraduate thesis. Dataset, paper and external
asset terms do not become a blanket site license.

## Workflows and evidence

`python3 -m http.server 4173 --bind 127.0.0.1`
or `npm run dev` serves the site. The README links docs/MAINTENANCE.md and
docs/PROVENANCE.md for extended setup, historical local-service records and
content provenance. Preserve unrelated installed servers; task QA uses its own
loopback port. No LaunchAgent/Tailscale service was installed or restarted here.

The archive importer is a separate network recovery tool, not a publishing or
preview command. Its six offline tests cover path mapping, traversal, hostname,
Git metadata and symlink boundaries; they do not provide atomic protection from
hostile concurrent filesystem changes. Do not run full recovery as a test.

The 2026-11-13 documentation pass inspected source/metadata, passed all six
existing offline tests, and smoke-checked the unchanged runtime at commit
90b552bdbb37f093df9a8e3cde16c446430b8e69 in Google Chrome 157.0.8103.51 at
390/1440-pixel widths. Checks covered a representative publication filter and
return to All, one citation fetch, theme toggle, image decoding, no-JavaScript
links, 20 viewer samples and six measurement-table rows, the ground-truth
control, and unchanged measurements during display rotation. The browser
blocked external requests; none were attempted. No errors, missing assets or
overflow occurred. These are website checks, not new component/model/benchmark
evidence. Earlier recorded checks remain in Git history and maintenance records.

This pass revises documentation/context only; academic resources, runtime
HTML/JS/CSS, figures, dataset assets and index/llms content are unchanged.
Two rounds of Claude editorial review and verification records are stored
separately. Review/synchronize this file and SKILL.md before every commit.
