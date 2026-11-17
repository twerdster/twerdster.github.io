# Maintain the academic website

## Current student-project update — 2026-11-17

Current index: 26 student projects, 16 repositories with historical source or pinned public upstream, 19 publications and 14 Code & Data entries. Earlier dated counts below describe earlier snapshots. TermiNet adds Itai Caspi's Spring 2016 work (GIP listing 2017), an unchanged public source subset and fixed original upstream, plus a new browser policy lab and historical playback. It does not run the legacy model. Original GIP animation bytes match the private final-submission image; private archive/report/slides stay private. The site retains generic content and unchanged navigation/runtime. Student demo resource links will be verified before publication and distinguish illustrations, saved-output viewers and algorithm execution. GrayOwl stays source-free with no runnable-demo addition.


Read SUMMARY.md first, then this file, AGENTS.md/README.md and the relevant HTML, content
index, source/provenance and validation records. Keep SUMMARY.md and this file
accurate before every commit. New commits use Aaron Wetzler with
409920+twerdster@users.noreply.github.com; preserve historical authors/revisions.

## Content and documentation

Use direct academic/technical prose. Explain inputs, operations, outputs and
limitations; distinguish maintained content, historical recovery, source
inspection and executed validation. Label schematics, procedural data and
untrained examples. Do not turn file/test counts into correctness or model
performance claims. Keep essential local requirements in README, longer
maintenance/provenance material in the linked guides, and original citations,
credits and license boundaries intact.

Update index.html, data/site-content.json and llms.txt together when academic
resources change. For documentation-only revisions, explicitly check that
runtime/content/index/llms updates are unnecessary. Publications, student
projects, theses and code/data stay separate; combine duplicate conference and
preprint records. Preserve archive redirects, no-JavaScript links and BibTeX.
Verify new factual publication metadata against primary sources. The current role is CTO of an unnamed early-stage company building toward a
future enabled by Physical AI. Preserve the approved biography opening and do
not add an employer name or link without a new request.
Use `Current` as the current-role label in the Experience list.
Add Camerai/Apple material only with approved public text/media.
Keep the opening profile header to the name, portrait and social links.
Role/history prose belongs in About Me and Experience, without repeated
role or previous-employer lines beneath the name.

Preserve the homepage order About Me, Publications, Theses, Code & Data,
Student Projects, Experience & Education, Research Videos and Patents. Each
section uses its own native details/summary control, expanded by default with
no persisted collapse state. Retain section/heading IDs and legacy aliases;
do not make this an exclusive accordion. Same-page links reopen their target
section with JavaScript, including repeated current-hash clicks. Native
heading controls must remain usable without JavaScript. Print all sections
and restore their previous states afterward. The shared script and stylesheet
also serve HandNet, so keep homepage-specific behavior optional there.

## Source, data and figures

Preserve the exact approved figures and provenance. All publication,
student-project and undergraduate-thesis frames remain 184 by 115 pixels on
phone/desktop. Keep the supplied NeurIPS JPEG in full and source-panel alignment
for CoBe/Deep Stereo. CSS fitting/brightness is display-only, not scientific
processing. Do not invent unavailable figures or detector output.

Keep the HandNet 20-row/eight-pair local viewer distinct from the 96-row research
preview and full archives. Preserve sensor units, source IDs, camera conventions,
raw-table invariance during display rotation and ground-truth normalization
labels. Local runtime needs same-origin assets, not a CDN/Hugging Face iframe.
The parent accepts height messages only from the same origin and viewer frame;
retain stable intrinsic sizing. Data CC BY 4.0, viewer/Three.js MIT and historical
MATLAB terms remain separate.

Keep student source_status, repository/source/notebook links and provenance
truthful. Original source snapshots and public submodule pins belong in their
project repos; reviewed ports remain separately labeled updated work.
GrayOwl stays documentation-only: no source, updated code, notebook/Colab link
or source-bearing history may be restored without a new explicit request.
Keep CutOut's author-supplied original Android source under its explicit
android-app link, separate from the related prototype of unverified authorship
and the updated Python exercise. The historical Eclipse interface remains
unbuilt. Keep separately recorded updated/native, updated/desktop and
updated/android, updated/ios and updated/browser execution distinct from original-app validation
and the earlier 16 Python tests. Native macOS and Ubuntu Linux records have
separate dependency environments. Linux checks cover the native CLI, not the
drawing interface; external system OpenCV is not sanitizer-instrumented. Link
the durable Linux validation JSON and retain the run URL as metadata. Keep each
mobile 14-case fixture record
separate from actual interface tests; generic build instructions and declared
minimum versions are not additional runtime evidence. A UI runner that builds but stops
before executing test cases must remain recorded as unexecuted, not as an
interface pass. Do not infer general
OS/device compatibility, photographic accuracy, cross-device bitwise identity
or historical APK equivalence. Link platform guides and completed validation
records using generic instructions; keep signing/device identifiers private.
Retain missing dependencies and third-party terms in the project repo.

Never stage raw mail/archive evidence, private endpoints/identifiers,
credentials, signing material, proprietary SDK binaries or unreviewed personal
data. Scan/OCR/render recovered documents, including raster screenshots and
embedded objects, before publication. Existing multi-view database-screenshot/history
and QRoom deployment warnings remain. Retain per-file sanitization manifests
and review custom SDK/vendor terms even when generic scanners pass. Source
publication alone does not establish licensing or safe execution.

## Verify and publish

Serve via Python 3 / npm run dev; use a task-specific loopback port if the existing
server is running. Do not modify installed LaunchAgent/Tailscale services for a
documentation check; docs/MAINTENANCE.md records their historical setup.

For page/resource changes, validate desktop/phone layouts, images, filters,
citation fetch/copy/download, theme state, no-JavaScript links and archive
redirects. Check standalone/embedded HandNet controls with external requests
blocked. Distinguish current checks from previous recorded results. When archive
mapping/filesystem code changes, run its existing six offline regressions and
check captured-manifest compatibility; no full recovery download is needed.
For disclosure changes, check all eight controls by pointer/Enter/Space,
fragment and legacy-alias reopening, same-hash clicks, active navigation,
filter/citation state across toggles and print-state restoration.

Inspect newly staged files as well as tracked edits. Run git diff --cached
--check, verify Markdown rendering, repository-relative links, images and source
scope, then reread/synchronize both context files. Request real Claude editorial
review when directed; verify factual suggestions against code/records and
review substantial revisions again. Never claim a review/run that did not finish.

Push normally to existing main. History rewrites require an explicit request;
the 2026-11-13 cleanup was authorized separately. Use a fresh clone after that
cleanup, or rebase reviewed unpublished changes onto the new main. Do not merge
or push pre-cleanup history back. Preserve historical authors and dates when
cleaning content. Verify the Pages build and actual public changed URLs, not
merely the push. A static site build or browser check is not scientific-model
or legacy-app validation.

Author follow-ups must preserve the distinction between externally linked source
and imported/pinned code. Smartphone Game's source is linked, not imported;
CamPong and RiftFusion documents do not imply recovered application code.
Preserve preferred author-supplied public profiles and original document hashes.
Keep private correspondence and shared-folder access keys outside this site.

Hand tracking's newly linked April 2013 presentation is an unfinished historical
draft, with a first-order approximation step the author had already removed. Preserve its
original bytes and draft label; it does not supersede the June report or add
code/runtime validation. Keep individual author permissions scoped to their
actual replies and avoid adding duplicate resources when an author confirms
an existing link.

RobotRun’s browser implementation is new work under updated/browser/, not
recovered or compiled Unity source. Keep its play/code/setup/validation links
synchronized across index.html, data/site-content.json, llms.txt,
STUDENT_PROJECTS.md and docs/PROVENANCE.md. Preserve original
source_files=0, the historical screenshot and student attribution. Do not add it
to the fifteen historical source-bearing/pinned repositories or duplicate it
in Code & Data. Distinguish actual MediaPipe inference from prerecorded input,
unit tests with synthetic control inputs and live-person/device tests. The
new implementation’s chosen 1,000-metre course, ten-point coins and ten-second
fire reversal apply to this new implementation; no equivalence to the
historical game is claimed.

## GitHub README update scope

Aaron clarified on 2026-11-14 that New! badges and the exact Updated and ported
for modern hardware link belong in individual GitHub project READMEs, with
brief changes and further details in their updated sections. Do not add those
callouts, catalog navigation fields or an extra update guide to this website
for that repository task. Preserve the website's existing project/resource
links, HandNet viewer and approved content/layout. GitHub README work does not
require website changes.

## Recovered scanner sources

Beam’s current Eclipse tree, earlier Eclipse snapshot and Android Studio import retain separate version/provenance records; do not overwrite the original 27 source/config files or imply hardware/build validation from source recovery. Freehand Laser is the Slossberg/Wetzler/Kimmel research project, distinct from Freehand Voxel Carving. Link its repository from the publication and Code & Data; preserve the scoped MIT sample and third-party notices while excluding proprietary PointCloud SDK binaries/headers and private key/signing data. Source publication checks are separate from application execution. The current resource index has fourteen software/data repositories; historical records above may retain their earlier counts. Record reviewed source commit IDs in SUMMARY.md, verify public repository trees before publishing website links, and distinguish excluded private dependencies from claims that those dependencies are unavailable.

Keep the separately requested scanner simulation/replay links in the existing
Beam student row and Freehand Laser Code & Data row. Beam's new Android replay
processes generated Gray captures with supplied calibration; Freehand's native
iOS simulator replay processes generated PNGs and supplied poses/metric board.
Original full applications remain dependency-blocked. Link stable updated guides
and explicit synthetic results, preserve documented algorithm changes, and do
not infer physical camera/projector/laser accuracy, recovered tracking, live
capture or paper reproduction. These resource updates do not add cards, change
counts, alter Winqi/CoBe, or authorize the previously excluded New! badges. Verify
new source paths are published before publishing website links.

## CoBe / WinQI resource scope

The CoBe publication's `code` resource targets `twerdster/winqi`: archived WinQI MATLAB research and a separate updated binary-observation decoder. Keep its original research, new code and procedural demonstrations distinct from the upstream `baklawe/CoBe` camera/tracking application. Link validation/media records for their actual tested scope; do not infer camera, association, background rejection, pose, SLAM or historical Android execution. Aaron subsequently requested a separate Winqi Code & Data entry. Preserve that entry and its source, sample video, generated Blender scene, original Winqi v1 and later CoBe v3 paper links in synchronized HTML/JSON/llms records; the current software/data repository count is fourteen. Winqi and CoBe are versions of the same arXiv record, with separate authorship by version. Preserve the original CoBe car figure. Verify the reviewed public source tree, sample media and actual CI results before publishing the website link; a passing binary-model test suite or rendered replay does not validate the upstream camera/localization application.

## Award records and additional archival projects

Keep OpenFusion's 2013 Amdocs contest / March 2014 ceremony link distinct from
modern execution. CutOut's Amdocs and Intel Challenge records describe separate
2015 events. Preserve source-specific historical credits rather than replacing
them with a news story's credits.

Planar Marionettes/Puppify and Snake3D are separate student projects with original
lab images and public archival repositories. Preserve their authors, supervisors,
2016 project context and the 2016/2017 award distinctions. The 2017 ceremony's
repeated Marionettes entry is not a third project. Neither archival repository
has recovered historical application code. Puppify now has a separately labeled
new browser implementation; Snake3D has no verified current VR runtime. Do not
infer recovered code or source-bearing counts from either documentation or new
implementations. Keep
reviewed report links, figure provenance and code availability synchronized
across the HTML, JSON, llms, project directory and repository records. Current
student count is 25; software/data count remains 14 and historical source-bearing
or pinned project count remains fifteen.

## Puppify browser resources

Keep Puppify's browser app, new source, guide and validation links synchronized
across HTML, JSON, llms.txt, STUDENT_PROJECTS.md and provenance. The new
MediaPipe/Canvas 2D implementation uses a whole-person mask and geometric
body-part assignment; it does not run the unavailable Caffe/FashionPose,
Dijkstra/FIGTree or D3 implementation. Preserve source_status documentation_recovered,
original source_files=0, the historical pipeline figure and student/supervisor
attribution. New source is credited to Aaron Wetzler. Fixed photo cutouts,
joint correction and video-driven posing are separate from the original
photograph workflow and historical benchmark. Keep geometry tests, browser
workflow checks, phone viewport emulation and physical-device validation
distinct. No accuracy or original-runtime equivalence is established.

There are four document-only repositories, two introductory repositories and
two new browser implementations (RobotRun and Puppify) without recovered
historical source. Historical source-bearing/pinned repositories remain
fifteen, total student projects 25 and software/data repositories 14. No
website New! badge or duplicate Code & Data entry is needed. Publish and
verify the actual browser app and linked repository paths before publishing
the website resource update.

Puppify's sixteen browser cases are eight user flows repeated at two Chrome
viewports, not sixteen independent scenes or a photographic benchmark. The
recorded CPU delegate, single prerecorded subject/scene, procedural negative
controls and absence of physical-phone/Safari/Firefox/GPU checks remain scoped.

Puppify's thirteen geometry/data checks include mirroring asymmetric motion and
leaving a symmetric rig in its rest pose. Mirrored motion flips horizontal
coordinates and exchanges left/right anatomical labels; a coordinate flip alone
would send limb directions across fixed shoulder/hip attachments. Keep those
regressions separate from real-media browser flows and model accuracy.

Keep Puppify's local macOS/Chrome CPU record distinct from its successful Linux
GitHub Actions/Chromium repeat. Published app commit and CI run belong in JSON,
provenance and SUMMARY.md; repeated platform runs do not increase the number of
independent input scenes or establish untested device/browser compatibility.

## Student follow-ups and CutOut browser scope

Preserve CamPong's supplied author profile and linked source-recovery note while
historical application source remains unrecovered. Do not import a differently
identified scanner archive as CamPong or infer its authorship from delivery.
Individual author responses in linked repositories do not add a collective
license or runtime coverage. Keep correspondence and shared-folder keys private.

CutOut's browser interface compiles the same updated recovered C++ segmentation
core to WebAssembly; it is separate from the independent Python Fast Marching
exercise and unbuilt historical Android interface. Keep app/source/guide/checks
links synchronized across HTML, JSON, llms and provenance. Describe local pixel
processing, Worker execution and PNG outputs factually. Sixteen mask/alpha byte
comparisons are eight operator combinations on two inputs, not a photograph benchmark
or general equivalence claim. Keep interaction, viewport emulation, physical
device, browser family and deployment evidence separate. Original source files,
figures, attribution and mixed third-party terms remain preserved. Verify the
app and linked records are public before publishing website links; no new card,
Code & Data row or source-bearing count is warranted.

## Student demo resource checks — 2026-11-17

All 26 student project READMEs received actual Claude review. Every project except intentionally source-withdrawn GrayOwl now has a project-specific browser demo. Website resources link all 25 demos and identify recorded-output viewers, new illustrations, existing updated applications and synthetic feature calculations in machine-readable scope metadata; source availability remains separately recorded. TermiNet adds one historical source-bearing/pinned repository (16 total), not a recovered modern runtime. Long conversion and validation details stay in linked project guides.

Local website Chrome checks passed at 390/1440px with JavaScript on/off: all 26 cards/resources match JSON, images decode, 25 demo links are present, no overflow/page errors/external requests. Themes, filters and citation fetch smoke checks pass. These are site checks, not application or accuracy validation. The added TermiNet image is unchanged; other figures, navigation, styles and scripts are unchanged. Actual Claude review of the new TermiNet wording completed and factual suggestions were checked.

Independent final review checked 26 concise READMEs, 167 linked Markdown files, all 25 public demo URLs and source/updated boundaries. Generic path cleanup in the linked repositories preserves original source and keeps exact operator logs private. Current documentation revisions are bound in updated_browser_demo.documentation_commit; deployments and application checks remain separately scoped in each repository.

The optional macOS LaunchAgent example is now ops/org.example.academic-site.plist, with generic interpreter/checkout placeholders and log names. Removed personal checkout/hostname values from its active maintenance guide; exact prior records remain private. The plist parses successfully; no service was installed, changed or restarted. README and maintenance links are synchronized.
