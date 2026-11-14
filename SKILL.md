# Maintain the academic website

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
updated/android and updated/ios execution distinct from original-app validation
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
