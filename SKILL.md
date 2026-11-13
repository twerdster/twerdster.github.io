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
Verify new factual publication metadata against primary sources. Keep the current role generic in profile and role metadata.
Add Camerai/Apple material only with approved public text/media.

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
Do not upgrade CutOut's related prototype to a recovered Android-app claim.

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

Inspect newly staged files as well as tracked edits. Run git diff --cached
--check, verify Markdown rendering, repository-relative links, images and source
scope, then reread/synchronize both context files. Request real Claude editorial
review when directed; verify factual suggestions against code/records and
review substantial revisions again. Never claim a review/run that did not finish.

Push normally to existing main; do not force-push or rewrite history. Verify
the Pages build and actual public changed URLs, not merely the push. A static
site build or browser check is not scientific-model or legacy-app validation.

Author follow-ups must preserve the distinction between externally linked source
and imported/pinned code. Smartphone Game's source is linked, not imported;
CamPong and RiftFusion documents do not imply recovered application code.
Preserve preferred author-supplied public profiles and original document hashes.
Keep private correspondence and shared-folder access keys outside this site.
