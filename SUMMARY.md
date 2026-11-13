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
status: fifteen source-bearing/pinned repositories,
three document repositories, three introductory repositories, Smartphone Game’s
linked author-hosted source, and GrayOwl after
source withdrawal. Original source/pins, student credits, vendor terms and
per-repo provenance must remain intact. Do not add a blanket software license.
Four updated components have previously recorded 70 unit tests in total:
HeartBeat 20, Volume 16, Face Depth 18 and CutOut 16. Their notebooks have
separate execution records; neither check validates full mobile apps.

GrayOwl contains project information/links only. Do not restore source,
updated code, notebooks, Colab links or code-availability metadata without a new
explicit request. CutOut's original Android Java/JNI C++ source was recovered
from Elad Richardson on 2026-11-13; its historical Eclipse interface remains
unbuilt. The separately updated C++/OpenCV core has Android and iOS interfaces, a
local drawing interface and a native CLI with recorded macOS/Linux checks.
Its separate related prototype still has unverified original
authorship. Raw mail/archives, credentials, signing
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
The current role names no company: CTO of an early-stage company building
toward a future enabled by Physical AI. Keep profile, biography, experience and
metadata consistent with that wording. No visitor analytics is installed. Camerai/Apple project additions
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

The earlier documentation pass revised context/docs only. The later 2026-11-13
author follow-up updates index.html, data/site-content.json, llms.txt and
STUDENT_PROJECTS.md together: Smartphone Game links Idan Banani’s external
source (not imported; observed 270b45c, untested), CamPong adds original
poster/presentation/project overview plus supplied video/profile links, and
RiftFusion adds its original presentation and supplied author profiles.
CamPong/RiftFusion application source is still unavailable. Counts remain
19 publications and 23 projects; all approved figures, CSS, runtime scripts,
HandNet assets and scientific validation records are unchanged.
The earlier documentation pass had two rounds of Claude editorial review.
Its responses and the separate author-update review/verification records are
stored privately. Review/synchronize this file and SKILL.md before every commit.

The author-resource update was checked in Google Chrome 157.0.8103.51 at
390- and 1440-pixel widths. The 23 project rows and 19 publication rows remained.
The three changed resource lists and supplied profile links matched the JSON;
images decoded, thumbnail frames measured 184 by 115 pixels, and no overflow,
script errors or missing assets occurred. New links remained available without
JavaScript. External requests were blocked and none were attempted. These
checks do not validate historical software.

The later CutOut contribution updates index.html, data/site-content.json,
llms.txt, STUDENT_PROJECTS.md and docs/PROVENANCE.md together. It adds an explicit
Android source link and directs the separate related-prototype link to its
actual subfolder. The source-bearing/pinned count increases from 14 to 15;
there are still 23 student projects. The original Android snapshot, related
prototype of unverified authorship and separately tested Python exercise remain
distinct. No build, runtime, scientific-validation, licensing or manuscript
approval claim follows from source recovery. README.md's setup and site
behavior remain accurate; no README or runtime edit is required for this update.

CutOut recovery checks in Chrome 157.0.8103.51 covered 390/1440-pixel layouts,
all 44 homepage images, 42 thumbnail frames at 184 by 115 pixels, matched
HTML/JSON resources and no-JavaScript links, without overflow, missing assets
or script errors. Theme persistence, publication filters, citation
fetch/copy/download, archive redirect/fallback and standalone/embedded HandNet
controls passed. Existing measurement values stayed unchanged during display
rotation and ground-truth normalization. All 86 unchanged served files matched
the current Git baseline. These are site checks, not Android execution checks.
Two Claude documentation review rounds prompted the clearer Python exercise
notebook label, precise permission scope and Jupyter-versus-Colab execution
wording. The final longer-label rerun also passed at both widths with nine
links available without JavaScript.

The later CutOut runtime update links updated/native, updated/desktop and
updated/android guides. It adapts recovered Lab density, pixel/tree Dijkstra
and alpha operators; the new wrappers and fixes stay separate from the
unchanged original snapshot. The updated native record reports 31 named
ASan/UBSan checks, repeated with `-funsigned-char`; 25 CLI cases (15 successful, including eight
operator combinations on one photograph, and 10 expected errors); and six isolated original-body fail/updated-pass cases. The desktop
record covers eight browser-to-native photo operator combinations at
390/1440-pixel widths.
Android 14-emulator records cover 14 segmentation runs. A later physical
Pixel 2 check on Android 10/API 29 arm64-v8a repeated the 14 Activity/JNI
segmentation cases using the same updated debug APK; these are separate
execution records, not 28 distinct algorithm cases. Other Android device/API
combinations remain untested; later Linux and iOS records have their own scope. These are scoped execution/regression checks, not
ground-truth photographic accuracy or historical APK equivalence. Keep the
earlier 16-test Python exercise metadata unchanged and independently scoped.
Counts stay 15 source-bearing/pinned repos, 23 projects and 322 original CutOut
files (319 Android + 3 related prototype). No site runtime, figure or other project
row changes are needed. README setup remains accurate. Current review and
website QA for this runtime-link update must be recorded separately from the
earlier recovery checks above.

The CutOut runtime-link update passed Chrome 157.0.8103.51 checks at 390/1440
widths: 12 CutOut links and its description matched JSON, all 44 homepage images
decoded and 42 thumbnail frames measured 184 by 115 pixels, with no overflow,
missing assets or script errors. Theme, filter, citation copy/download, archive
redirect/fallback and standalone/embedded HandNet controls passed; recorded
measurements stayed unchanged during display rotation. All 12 CutOut links
remained available without JavaScript. The 86 unchanged served files matched
b44278f, including 68 read-only fallback assets. These are website checks only.

The CutOut runtime revision received actual Claude code and maintainer-documentation reviews, followed by a focused review of subsequent fixes. Review feedback was checked against source and executed results; website wording distinguishes implementation authorship, the native CLI case breakdown and the unbuilt historical interface. These editorial reviews add no runtime or photographic accuracy evidence.

The physical Pixel 2 status update passed targeted Chrome 157 checks at 390/1440 widths: all 12 CutOut links and its description matched JSON, the unchanged figure decoded at 184 by 115 pixels, both themes and no-JavaScript links worked, and no overflow, script errors, missing assets or external requests occurred. Other 22 project rows and earlier Python metadata remained unchanged. Two real Claude reviews covered the source/device-record follow-up; factual and scope corrections were applied. The final APK lint count in the JSON was corrected from 25 to 32. No website runtime or figure changes were needed.

CutOut platform resources link the iOS guide and durable Linux validation record.
The Linux record pins run 43465063049 at 0ff79f7: 31 native checks repeated with
unsigned char, 25 CLI cases and six original-function comparisons. The iOS
record covers 14 scripted fixture segmentations; do not infer XCTest, touch
interaction, simulator or minimum-version coverage from those calls. Keep
platform evidence separate, preserve original source and older Python metadata,
and use generic build/use descriptions rather than personal-machine history.
The site remains 23 projects and 15 source-bearing/pinned repositories, with
322 original CutOut files and unchanged figures/runtime.

The iOS/Linux resource update passed targeted Chrome 157 checks at 390/1440
widths: 14 CutOut links and the description matched JSON, the unchanged figure
decoded at 184 by 115 pixels, both themes and no-JavaScript links worked, and
no overflow, script errors or missing assets occurred. All homepage images
decoded; unchanged served assets matched 35b8756. Other 22 project rows and
earlier Python metadata stayed unchanged. These are website checks only.

The Linux metadata distinguishes tested native/CLI code from the untested Linux
drawing interface. ASan/UBSan cover the port and bundled ANN/FIGTree/MegaWave;
the system OpenCV package is uninstrumented. Resource links use the durable
Linux JSON record; its originating run remains pinned in metadata. Android
interaction evidence stays distinct from iOS fixture execution, and the
macOS native record and accuracy/equivalence limits remain linked.

The final iOS fixture record is pinned to CutOut commit 490992b (2026-11-13):
14 saved runs, 70 PNGs and 98 files pass independent consistency checks. Six
coffee inputs match the pinned fixture, and six hard/refined pairs preserve
their binary masks. The current UI-test runner builds, but its execution attempt
stopped at automation initialization before any test case started. The actual
phone screenshot was inspected for layout; touch, picker and share interactions
have no completed iOS UI-test result. These limits are explicit in JSON and the
linked platform record. The final source and documentation received real Claude
reviews; the final focused code review found no blockers.
