# Academic website: maintenance state

## Current student-project update — 2026-11-17

Current index: 26 student projects, 16 repositories with historical source or pinned public upstream, 19 publications and 14 Code & Data entries. Earlier dated counts below describe earlier snapshots. TermiNet adds Itai Caspi's Spring 2016 work (GIP listing 2017), an unchanged public source subset and fixed original upstream, plus a new browser policy lab and historical playback. It does not run the legacy model. Original GIP animation bytes match the private final-submission image; private archive/report/slides stay private. The site retains generic content and unchanged navigation/runtime. Student demo resource links will be verified before publication and distinguish illustrations, saved-output viewers and algorithm execution. GrayOwl stays source-free with no runnable-demo addition.


Read this file, then SKILL.md, AGENTS.md and README.md before changes. Production
is https://twerdster.github.io/, published by GitHub Pages from the repository
root on main. The source is static HTML/CSS/JavaScript; no application backend,
content-generation build, full dataset download or model inference is required.

## Student follow-ups and CutOut browser resources (2026-11-16)

CamPong now links Rom Herschkovitz's supplied LinkedIn profile and its published
source-recovery note. A candidate archive was inspected privately and contains
structured-light scanner code. Its authorship and relationship to CamPong remain
unconfirmed; no candidate code was published or executed, and no CamPong source
was recovered. Original project materials, figure and source status are preserved.
Rom’s publication response and the individual responses from Liav Sitruk,
Tamir Buchris and Sergey Kucher are
recorded in their repositories without extending licenses or runtime claims.

The existing CutOut card now links its browser app, source, guide and validation
record. A new browser interface runs the shared updated recovered C++ core as
WebAssembly in a Worker, with local image/scribble processing and PNG exports.
Sixteen native/Wasm comparisons cover eight operator combinations on two inputs
(one procedural ellipse and one coffee photograph): binary masks and alpha bytes
match the native CutOut core linked with OpenCV 4.12.0. The Wasm comparison
ran in Node.js 23.11.0, outside browser decode/stroke rasterization. These are
implementation-consistency checks, not
photographic accuracy or restoration of the historical Android interface.
Browser checks completed eight operator combinations on the coffee photograph,
image upload, pointer strokes, undo/clear, stale-result handling, cancellation
recovery and both PNG downloads. Chrome 157 on macOS 15.1.1 passed 390/1440-pixel
layout checks with no external requests or page errors. A separate Chrome UI-driven
smoke run observed one FIGTree/pixel/hard result. Physical mobile browsers and
non-Chrome engines remain untested. Deployment evidence is recorded separately.

HTML, JSON, llms.txt, STUDENT_PROJECTS.md and provenance remain synchronized.
Counts remain 25 projects, 19 publications, 14 software/data repositories and
fifteen historical-source-bearing/pinned repositories. README setup/counts were
explicitly checked and need no change. Original figures, runtime scripts and
HandNet are unchanged. The app source is published at `6edd6e61fddaa76a0901e61cebcd8fc0ec20e5a1`;
[build/test/deploy run 43768661137](https://github.com/twerdster/cutout-android/actions/runs/43768661137)
succeeded. CI repeats comparison and interface checks with native OpenCV 4.6.0
and Wasm OpenCV 4.12.0, separately from the local same-version comparison.
The live app returned HTTP 200, and a Chrome UI-driven run completed
FIGTree/tree/refined segmentation with actual cutout/mask results and PNG links.
The linked public source/guide/validation files match the reviewed publication.

The four local Chrome website contexts passed at 390/1440 pixels with JavaScript
on/off: both changed cards match JSON, all images decode, 44 thumbnail frames
remain 184 by 115 pixels, and there is no overflow, missing asset, page error or
external request. Filters, citations, themes, project disclosures, archive fallback
and standalone/embedded HandNet checks passed. A final two-card text/link delta
check passed at both widths. Five Markdown guides passed GitHub GFM rendering,
local links/anchors and ten document/viewport checks. These are website/document
checks, not additional application accuracy or physical-device evidence. Two
actual tools-disabled Claude reviews of this draft completed; useful factual and
prose qualifications were checked against the source and execution records.


## Puppify browser resources (2026-11-15)

The existing Puppify card links its browser app, new source, guide and browser
validation record. Aaron Wetzler's new TypeScript/MediaPipe/Canvas 2D application
provides reference-photo cutouts, editable joints and video-driven posing.
Its whole-person mask is partitioned geometrically; it does not run the
unrecovered Caffe/FashionPose, scribble/segmentation or D3 implementation.
Thirteen geometry/data tests cover the new rig, mask handling and motion
mirroring, not model accuracy or reproduction of the historical benchmark.
Fixed layer order, occlusions, rigid torso and missing texture remain limitations.

The application record confirms sixteen passing browser cases: eight user flows
repeated at desktop and 390-pixel Chrome phone/touch-emulated viewports. Chrome
157.0.8103.51 on macOS 15.1.1 used the CPU delegate after software-GPU detection.
Real prerecorded photo/video from one subject/scene and procedural negative
controls passed through the actual model. All sixteen contexts recorded zero
external requests and uncaught errors. No physical phone, Safari/Firefox,
GPU-execution or accuracy claim follows. The added flow handles an injected
model-asset HTTP 503, then obtains actual model output and rebuilds the puppet
without reloading the page.

HTML, JSON, llms.txt, STUDENT_PROJECTS.md and provenance preserve historical
source_status documentation_recovered and source_files=0, original report and
figure bytes, and student/supervisor attribution. New code is separately
identified in updated_browser_implementation metadata. Counts remain 25 student
projects, 19 publications, 14 software/data repositories and fifteen historical
source-bearing/pinned project repositories. The other categories now include
four document-only repositories and two new browser implementations without
historical source (RobotRun and Puppify). No website badge or Code & Data card
was added. README setup/counts were explicitly checked and need no edit.

The linked application was published as commit
`e8b939774cb65b4625e2e82d4daf92f556a9239d`. Its
[GitHub Actions run](https://github.com/twerdster/planar-marionettes/actions/runs/43748126885)
passed thirteen geometry/data checks and sixteen bundled-Chromium browser cases
on Ubuntu 24.04.5 with Node.js 24.22.2. This repeats the same eight flows at two
viewports; it does not add independent scenes. The app was deployed and its
public app/source/guide/validation paths were verified before this website
publication. New source/media have separate terms; the website retains its
historical figure. Website link/layout checks do not add application accuracy,
physical-device or original-runtime evidence.

The website update passed Chrome 157.0.8103.51 checks at 390/1440-pixel widths
with JavaScript enabled and disabled. Puppify's nine links and description match
JSON; all 25 projects and 19 publications remain present, all 46 images decode,
and 44 thumbnail frames remain 184 by 115 pixels. There is no overflow, missing
local asset, script error or external request. All eight disclosures passed
pointer/Enter/Space controls; themes, filters, citation fetch/clipboard readback/
download and archive redirect/fallback passed. Standalone and embedded HandNet
retain 20 samples and six sensor rows; rotation and ground-truth normalization
leave recorded table values unchanged. Five website Markdown guides rendered at
both widths with resolved relative links and no page overflow. Static comparison
limits HTML and JSON value changes to Puppify. Figures, scripts, styles and
archive-importer code are unchanged; its separate offline tests were not rerun.
These are website/document checks, separate from the new application's records.

An actual tools-disabled Claude review of the website changes prompted clearer
independent-implementation and MediaPipe/geometric-cutout wording. Factual
suggestions were checked against source and execution records; the review is
not additional application or accuracy validation.

## Award records and missing student projects (2026-11-15)

OpenFusion now links the Technion announcement of the 2013 Amdocs contest's
March 2014 ceremony. CutOut links its July 2015 Amdocs ceremony and separate
November 2015 Intel Challenge award. The original descriptions, credits and
code/execution status are preserved; award coverage is not runtime evidence.

The Student Projects section adds Planar Marionettes (Puppify), by Gil
Ben-Shachar and Elad Richardson under Anastasia Dubrovina and Aaron Wetzler,
and Snake3D, by Sapir Eltanani and Simona Gluzman under Aaron Wetzler. Both
original lab images are copied unchanged with source provenance. Each has a
separate public archival repository, project/demo and award links. Both link
reviewed original reports recovered unchanged from the Internet Archive:
Puppify ten pages (November 2015 metadata), Snake3D six pages (June 2016).
An unrelated archived Puppify presentation is excluded. Historical application
code remains unrecovered. Puppify later gained the separately labeled new browser
implementation above; Snake3D has no verified current VR runtime.
The 2017 article repeats the same Marionettes project and separately names
Snake3D's special citation.

HTML, JSON, llms.txt, README counts, STUDENT_PROJECTS.md and provenance are
synchronized: 25 student projects, 19 publications, 14 software/data repositories
and fifteen historical source-bearing/pinned project repositories. Existing
figures and runtime scripts are unchanged. New documentation repositories do
not add Code & Data records or alter historical software validation results.

Chrome 157.0.8103.51 checks at 390/1440 pixels passed with JavaScript enabled
and disabled: all 25 projects and 19 publications remained present, all 46
homepage images decoded, and 44 thumbnail frames measured 184 by 115 pixels.
The four changed cards' resource lists matched JSON, including both recovered
report links. No overflow, script errors, missing local assets or external
requests occurred. Themes, publication filters, citation fetch/copy/download,
project disclosure pointer/Enter/Space controls and archive redirect/fallback
passed. Standalone and embedded HandNet retained 20 samples and six sensor rows;
standalone rotation and ground-truth normalization preserved recorded table
values. Five changed Markdown guides rendered at both widths with valid
relative file links and no page overflow. Independent content review found no
blocking factual or scope issue. The archive importer is unchanged, so its
separate offline regressions were not rerun. These are website/document checks,
not new historical-application or scientific validation.

Published repository revisions verified before the website commit:
OpenFusion `0e6eaf505bbcf8c4955fbe8517228833f42052af`, CutOut
`ba75ac010f4004571c851a84c385297cb01c3118`, Puppify
`dcbf0f435d5a96920ff96afa8ea719a3ce8394b8` and Snake3D
`2d1c9d3d743577cea4695d0bf05759ab2739095d`. The new repositories' complete
public Git blob trees and selected raw README/report/image bytes match their
reviewed local publications. Both new READMEs received completed actual Claude
editorial review; useful changes were checked against the original materials.
Puppify's report and unrelated-slide exclusion also received independent
material review. Publication and document checks establish archival content,
not recovered application source or modern execution.

## Scanner simulation and replay resources (2026-11-15)

The existing Beam student-project row now links its synthetic reconstruction guide
and Android replay guide. Generated camera/projector Gray-code observations run
through unchanged recovered numerical methods and explicit corrections using
supplied calibration. The existing Freehand Laser Code & Data row now links its
generated-scene reconstruction/iOS simulator guide and synthetic results. Its
adapted filters, laser-plane calibration and reconstruction use supplied poses
and a metric board. Both historical full applications remain dependency-blocked;
synthetic replay is separate from physical scanner validation and paper results.

HTML, JSON, llms.txt, STUDENT_PROJECTS.md and provenance/context are synchronized.
There are still 19 publications, 23 student projects, 14 software/data repositories
and fifteen historical source-bearing/pinned student repositories. Original
figures, runtime scripts, HandNet and Winqi/CoBe records are unchanged. README
setup/counts remain accurate and need no edit. New links target stable `main`
guides in the source repositories. Reviewed source commits are Beam
`43e7c912dc924c8b1a9001072eb66adbfacfa438` and Freehand Laser
`8022886fab8a516c423b30a76d1d294229f00c49`. Their public main commits,
complete Git blob trees and selected raw guides/results match the reviewed
local publications. The new linked paths are published before this website update.

Chrome 157.0.8103.51 checks passed at 390/1440-pixel widths with JavaScript
enabled and disabled: both revised rows and their links matched JSON, all 44
images decoded, thumbnail frames retained 184 by 115 pixels, and no overflow,
script error, missing local asset or external request occurred. Filters, theme,
citation fetch/copy/download and native pointer/keyboard disclosures passed.
Archive redirect/fallback and standalone/embedded HandNet checks passed; the
viewer retained 20 frames and six sensor rows, with recorded measurements
unchanged after rotation and standalone ground-truth normalization. Five guides
rendered at both widths with resolved relative file links and no overflow.
Static comparison limits HTML/JSON changes to the existing Beam/Freehand rows;
Winqi/CoBe and all other records are unchanged. The archive importer itself is
unchanged, so its separate offline recovery tests were not rerun. These are local
website checks, not additional scanner validation.

## GitHub README scope correction (2026-11-14)

Aaron clarified that the **New!** badges and **Updated and ported for modern
hardware** links belong in the individual GitHub project READMEs. Brief changes
and detailed setup/results stay in each repository's updated section. The
website additions for that request have been removed through a forward
restoration. Existing website project links, HandNet viewer, approved anonymous
role text, section order/controls, figures and source/validation records are
preserved. All site files match the pre-navigation version at 21c0f264 apart
from this note and the matching SKILL.md scope instruction. GitHub project
README updates remain separate from the website.

## Entry points and content

`index.html` is the academic homepage. `data/site-content.json` is a separately
maintained machine-readable index, and `llms.txt` is the resource summary. Keep
these consistent for academic-content changes. Current counts: 19 publications,
25 student projects, two theses, 14 software/data repositories, six research
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
four document-only repositories, two introductory repositories, RobotRun’s and
Puppify's new browser implementations without historical source, Smartphone Game’s
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

## Beam and Freehand Laser source recovery (2026-11-14)

Beam Android scanner links the preserved Eclipse source/resources and separate historical Eclipse/Android Studio versions. Its existing 27 text files stay unchanged; recovered pattern/icon assets extend the canonical source snapshot to 62 files. An adjacent iOS renderer is identified separately in the repository. The hardware-dependent historical applications remain unbuilt. Freehand Laser now links its own recovered research repository from the BMVC 2015 publication and a Code & Data entry; it stays distinct from Alex Fish’s Freehand Voxel Carving student project. The research repository preserves MATLAB and modified MIT sample iOS source with original component notices, publication-copy key/signing redactions, and per-file provenance. Proprietary PointCloud SDK material, private recovery archives and credentials are excluded.

Current counts are 19 publications, 23 student projects, 13 software/data repositories and fifteen historical source-bearing/pinned student repositories. HTML, JSON, llms.txt, README counts, STUDENT_PROJECTS.md and provenance were synchronized. No figure, scientific result, site runtime or Winqi/CoBe resource changes are part of this update. Source commits are Beam `07c9a08bbaa881157fb9d4e1bf1210e578d108e3` and Freehand Laser `7bb86f1c924adbc155aafb2dc8d33f1acc072a36`; public Git trees were compared with the reviewed local commits.

Chrome checks at 390/1440 pixels with JavaScript enabled and disabled passed: all 44 homepage images decoded, all 19 publications and 23 projects remained present, new links matched the content index, and there was no overflow, missing local asset or script error. Filters, citation fetch, themes and section controls retained their behavior. With external requests blocked, standalone and embedded HandNet displayed 20 samples and six sensor rows at both widths; display rotation and standalone ground-truth normalization left recorded measurements unchanged. No site runtime files changed. Independent content review confirmed scoped JSON/HTML changes and corrected SDK wording to distinguish excluded private dependencies from availability claims. The five changed Markdown guides rendered at both widths without horizontal overflow, and their relative file links resolved. The archive importer is unchanged, so its separate recovery regressions were not rerun. These checks do not establish historical application execution.

## CoBe / WinQI code resource (2026-11-14)

The CoBe publication's code link targets `https://github.com/twerdster/winqi`, which separates archived WinQI coded-beacon research from an updated Python binary-observation decoder. The original CoBe camera/tracking implementation stays linked upstream at `baklawe/CoBe`. Test/media scope is recorded in the linked repository; no camera, intensity/background rejection, pose, SLAM, or historical-app validation follows from the code resource.

This update changes only the CoBe publication link and its corresponding JSON, llms.txt and provenance/context records. There is no additional Code & Data entry: counts remain 19 publications, 23 student projects and 13 software/data repositories. Figures, other records, layout/runtime scripts, HandNet and scientific results are unchanged. The reviewed WinQI commit is `a4d9dc109848ad5437613ed4b8409fbbd301c694`; its public tree and MP4 hash match the local publication. All fifteen tests, historical-source integrity, new-media integrity and CLI checks passed in GitHub Actions on Python 3.10 and 3.14 (run 43634930223). The 12-second procedural video and generated Blender scene have separate source/model limits in the linked repository.

Targeted Chrome 157.0.8103.51 checks passed at 390/1440-pixel widths with JavaScript enabled and disabled: the single CoBe code link remained available, all 44 homepage images decoded, its original car frame measured 184 by 115 pixels, and there was no overflow, missing local asset, script error or external request. Publication filters, citation fetch, themes and native publication disclosure controls passed. Standalone/embedded HandNet retained 20 source frames and six sensor rows; display rotation and standalone ground-truth normalization left measurement values unchanged. The three changed Markdown guides rendered at both widths without overflow and their relative file links resolved. These are local website checks, not WinQI/CoBe scientific or application validation. README setup/counts remain accurate and require no edit; the unchanged archive importer was not rerun.

## Winqi Code & Data entry (2026-11-14)

Aaron subsequently requested a Winqi entry in Code & Data. This supersedes the earlier publication-only scope above. The new row links the public repository, 12-second procedural sample, generated Blender scene, original 2017 Winqi paper (arXiv v1) and later 2020 CoBe paper (v3). The technology description explains coded beacon identification; binary-stream checks remain distinct from the upstream CoBe camera/localization application. The reviewed Winqi commit is `4b5d5e18d63c5f22438db0c5dc1485b7066456ca`, with Python 3.10/3.14 CI passed (run 43638878357).

HTML, JSON and llms.txt include the same resources; README and current counts now record 14 software/data repositories. Publications remain 19, student projects 23, and the existing CoBe publication code link is preserved. Figures, other records, layout/runtime scripts and HandNet are unchanged. This update adds links and explanatory text, with no additional scientific validation claim.

Chrome 157.0.8103.51 checks at 390/1440 pixels passed with JavaScript enabled and disabled: 11 displayed software rows, five Winqi resources matching JSON, unique IDs, all 44 images decoded, and no overflow, missing local assets, script errors or external requests. Software controls passed pointer/Enter/Space and JavaScript fragment reopening. Publication filters, citation fetch/copy/download and both themes passed. Standalone/embedded HandNet retained 20 source frames and six sensor rows; rotation and standalone ground-truth normalization preserved measurements. Four changed Markdown guides rendered at both widths and their relative file links resolved. Independent content review confirmed that removing the Winqi row/record restores the previous HTML/JSON exactly. These are website checks; unchanged archive-importer regressions were not rerun.

## Student demo resource checks — 2026-11-17

All 26 student project READMEs received actual Claude review. Every project except intentionally source-withdrawn GrayOwl now has a project-specific browser demo. Website resources link all 25 demos and identify recorded-output viewers, new illustrations, existing updated applications and synthetic feature calculations in machine-readable scope metadata; source availability remains separately recorded. TermiNet adds one historical source-bearing/pinned repository (16 total), not a recovered modern runtime. Long conversion and validation details stay in linked project guides.

Local website Chrome checks passed at 390/1440px with JavaScript on/off: all 26 cards/resources match JSON, images decode, 25 demo links are present, no overflow/page errors/external requests. Themes, filters and citation fetch smoke checks pass. These are site checks, not application or accuracy validation. The added TermiNet image is unchanged; other figures, navigation, styles and scripts are unchanged. Actual Claude review of the new TermiNet wording completed and factual suggestions were checked.

Independent final review checked 26 concise READMEs, 167 linked Markdown files, all 25 public demo URLs and source/updated boundaries. Generic path cleanup in the linked repositories preserves original source and keeps exact operator logs private. Current documentation revisions are bound in updated_browser_demo.documentation_commit; deployments and application checks remain separately scoped in each repository.

The optional macOS LaunchAgent example is now ops/org.example.academic-site.plist, with generic interpreter/checkout placeholders and log names. Removed personal checkout/hostname values from its active maintenance guide; exact prior records remain private. The plist parses successfully; no service was installed, changed or restarted. README and maintenance links are synchronized.
