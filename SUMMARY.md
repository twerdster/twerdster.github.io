# Academic website: maintenance state

Read this file, then SKILL.md, AGENTS.md and README.md before changes. Production
is https://twerdster.github.io/, published by GitHub Pages from the repository
root on main. The source is static HTML/CSS/JavaScript; no application backend,
content-generation build, full dataset download or model inference is required.

## Modern-update navigation (2026-11-14)

Nine student entries, four modern software entries, HandNet's existing dataset
page/Code & Data row and the historical Caffe-GUI-Tool continuation portal now
carry the exact **Updated and ported for modern hardware** link with a local
**New!** badge. There are 16 callouts to 15 guides. Brief changes and further
setup/results/limitations remain in the linked updated sections. iPTAM and
Caffe-GUI-Tool links use master; other project links use main. HandNet's guide
is `HandNet/updated/README.md`; its 20 examples/eight pairs remain distinct from
the 96-row research preview and from historical MATLAB training/inference.
RobotRun remains new browser code without recovered Unity source; the Caffe
portal points to separately maintained Blender Neural Composer work.

This revision starts from the current sanitized main, 21c0f264, and preserves
approved company anonymization, profile content, section ordering/controls,
author follow-ups, all existing CutOut source/platform records and original
source statuses. Catalog `updated_guide` fields are additive navigation only;
existing component/runtime/resource values are unchanged. The new HandNet guide
and shared badge styling do not change viewer or project code. Both context
files were reread and synchronized. Static QA verifies all 16 callouts and 15
guide headings, original HTML outside callouts/the stylesheet cache key, all
existing JSON values, section controls/order, approved anonymous role text,
publication figures and HandNet viewer assets. CutOut retains its original file
count of 322, existing resource links and separate native/mobile validation metadata.
The new badge has 4.52:1 white-text contrast. Maintenance/provenance guides were
reviewed and remain accurate. No account tools, browser or replacement server
were used; public HTTPS and desktop/mobile rendering remain publication checks.
This documentation work adds no scientific or platform runtime evidence.

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
a second academic archive. Historical source is in Git at 7361111.
`styles.css`, fonts and icons are local, with their existing notices.

The opening profile header shows Aaron's name, portrait and social links.
The role and previous-employer lines beneath the name were removed at Aaron's
request on 2026-11-14. Role/history prose remains in About Me and Experience;
the structured role metadata and llms.txt summary remain accurate.
Targeted Chrome 157 checks at 390/1440-pixel widths passed with JavaScript
enabled and disabled: the portrait, name, social links and native section
controls remained usable. JavaScript checks also covered light/dark themes,
publication filtering and citation fetch. No overflow, missing assets or
script errors occurred. CSS, runtime scripts and academic records did not change.

The homepage section order is About Me, Publications, Theses, Code & Data,
Student Projects, Experience & Education, Research Videos and Patents. All
eight use independent native details/summary controls and start expanded.
Pointer and keyboard toggles work without JavaScript. JavaScript reopens a
closed section for same-page fragment links, including repeated current-hash
clicks, and refreshes active navigation after toggles. Collapse state is not
persisted. Printing opens every section and restores the previous states
afterward. Existing section/heading IDs, capitalized aliases and the six-link
header navigation are retained; header links follow the new content order.
The shared stylesheet/script are cache-versioned for this change. Academic
records, approved figures, resource links and content counts are unchanged.

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
three document repositories, two introductory repositories, RobotRun’s
new browser implementation without historical source, Smartphone Game’s
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
toward a future enabled by Physical AI. Keep biography, experience and
metadata consistent with that wording. No visitor analytics is installed. Camerai/Apple project additions
require approved public text/media before inclusion.

The Experience entry uses the display label `Current`, as requested on
2026-11-14. This label-only change adds no role or organization information;
the existing structured role and llms.txt summary already describe the current
position and need no content change.

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
fe1eb1968532dc5c71b655bd7ba37500460fa345 in Google Chrome 157.0.8103.51 at
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
187f540, including 68 read-only fallback assets. These are website checks only.

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
decoded; unchanged served assets matched dd590d1. Other 22 project rows and
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

## Repository history maintenance (2026-11-13)

An explicitly requested cleanup replaced the previous named-employer references
and company links throughout the website's reachable history, including one
commit message. The 27 existing commits, their parent relationships, historical
authors/dates and unrelated file contents were preserved. The approved current
website tree stayed identical; this follow-up changes maintenance context and
website commit references only. Website commit IDs above refer to rewritten
equivalents; earlier external test records retain their original identifiers.
Scientific results and other repositories' commit references are unchanged.

Clones made before the cleanup contain the old history. Start a fresh clone,
or rebase reviewed unpublished changes onto the new main; do not merge or push
the earlier history back. A rewritten branch does not guarantee deletion of
GitHub's cached old objects, deployment records or independent copies. Routine
updates still use normal pushes; another rewrite requires an explicit request.

## Later student materials and replies (2026-11-13)

Hand tracking adds a link to Sa'ar Zehavi's unchanged 59-slide April 2013 draft.
It contains unfinished illustrations and a first-order approximation step the
author had already removed. Keep it distinct from the June report, nine
unchanged source files and any execution evidence. HTML, JSON, llms.txt,
STUDENT_PROJECTS.md and provenance describe the same draft resource. Counts and
source availability are unchanged. No additional code arrived in the attachment.
RobotRun records Amit Bekerman's individual credited-name/website-inclusion
approval in its repository. Vlad Ostrovski confirmed the existing RiftFusion
video; no duplicate link or application-source claim is needed. README setup,
site runtime, approved figures, HandNet and scientific records need no changes.

## RobotRun browser resources (2026-11-13)

RobotRun now links play, new browser source, setup and validation resources.
The new TypeScript/Three.js/MediaPipe implementation runs a three-lane,
1,000-metre course with ten points per coin and ten-second fire control reversal.
Original Unity source remains unrecovered (original source_files stays zero);
new browser code is not student-authored historical code or a compiled original.
Chrome 157 production-preview checks used Hand Landmarker with its GPU delegate
and a prerecorded Google hand test photo, spatially shifted across video frames.
Checks cover keyboard/touch input, camera lifecycle/errors with an emulated
stream, desktop layout and 390-pixel Chrome mobile emulation. Camera-ended and
visibility events were synthetic.
No live-person camera session or mobile-device runtime was tested. Keep those
limits separate from the historical unbuilt Unity/Intel-camera interface.

HTML/JSON, llms.txt, STUDENT_PROJECTS.md and provenance describe the same new
resources. Counts remain 23 projects, 19 publications, 12 software/data rows and
fifteen historical source-bearing/pinned repositories; the remaining categories
are three document repositories, two introductory repositories, RobotRun’s
new browser code without historical source, linked Smartphone Game source and withdrawn GrayOwl
source. The archived screenshot, all other rows/figures, site runtime, HandNet
and approved biography are unchanged. README setup was explicitly checked and
requires no edit. This checkout starts from the sanitized main at a5a8fa3.
The site update passed Chrome 157 checks at 390/1440 widths with JavaScript
enabled and disabled, plus both themes: all five RobotRun links match JSON,
all 44 homepage images decode, the original figure stays 184 by 115 pixels,
and no overflow, missing assets, script errors or external requests occurred.
The two changed public Markdown guides rendered at both widths. One actual
Claude editorial review prompted clearer new-code authorship, historical
screenshot labeling and precise inference/emulation scope; useful feedback was
checked against the code and results. Other HTML rows and JSON records are
unchanged. The linked browser source was published at RobotRun commit
72b3e08de13c89e61e8db0cf2e6b8c9354157703. Verify the playable project Pages
deployment before publishing these links, then use a normal website push and
a separate site deployment check.

## Section controls (2026-11-14)

Chrome 157.0.8103.51 checks at 390/1440-pixel widths, with JavaScript enabled
and disabled, covered all eight controls by pointer, Enter and Space. Section
order/numbering, fragment and legacy-alias links, repeated current-hash clicks,
archive redirect, publication filter/citation state across toggles,
citation fetch/copy/download and theme persistence passed. All 44 images
decoded and all 42 thumbnail frames remained 184 by 115 pixels. Additional
320/390/1440-pixel checks found no overflow or sticky-header overlap. These
are Chrome layout/input checks, not physical phone or assistive-technology
tests. No script errors, missing assets or external requests occurred.

Actual PDF printing with JavaScript opened every section and restored the
previous three closed states; repeated beforeprint events were also checked.
Without JavaScript, Chrome's print CSS exposed all eight content blocks and
left their screen states unchanged. Static comparison confirmed unchanged
academic section payloads apart from numbering/wrappers/whitespace and
unchanged JSON values apart from the section-map ordering. The revised
Markdown rendered without overflow, and its relative links resolved. The
archive importer was not changed, so its separate recovery tests were not
rerun. Independent source/documentation review found no blocking issues.
At both main widths, the shared HandNet page retained navigation, theme and
citation controls; its embedded viewer displayed 20 samples and six sensor
rows. Standalone rotation and ground-truth normalization left recorded
measurements unchanged. These are viewer regression checks only.
