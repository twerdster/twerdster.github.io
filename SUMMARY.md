# Academic homepage and HandNet integration

The production academic homepage is https://twerdster.github.io/ and publishes from the main branch of twerdster/twerdster.github.io (GitHub Pages legacy root source). AGENTS.md requires README.md, data/site-content.json and llms.txt to remain synchronized.

## NeurIPS publication image (2026-11-12)

Aaron supplied Photo 1.jpg for Democratizing Data-Efficient Robot Learning with Robot-Free Demonstrations. The unchanged 1099-by-816 JPEG is assets/publications/neurips-robot-free-demonstrations.jpg (163,930 bytes; SHA-256 d66938245b44978b0cfdc051c3e7097e5c0cbe59dfdfe219d17601e1cc366a38). Its full wearable-glove and matched-robot-hand figure fits inside the existing 184-by-115 thumbnail frame without cropping or CSS changes. The thumbnail links to the same OpenReview paper PDF. JSON provenance explicitly records the user-supplied source; README.md, llms.txt and this maintenance context no longer describe the figure as pending. Desktop and 390-pixel phone previews confirm decoding, contain fitting, unchanged frame dimensions and no horizontal overflow. Robotics filtering shows the paper and All restores 19 publications; there are no browser errors or external page assets. Both context files were reviewed and updated before commit.

## Current role metadata (2026-11-12)

The profile, biography, experience and machine-readable role metadata use a generic company description. Existing anchor styles, assets and site runtime are preserved.

## Current organization (2026-11-12)

The main page now consolidates the former archive: About, 19 Publications, 23 Student Projects, two Theses, Code & Data, Experience & Education, six Research Videos, and nine patent lines. The 21 original student projects retain their titles, student credits and images; descriptions are tightened to factual summaries. Mobile Point Fusion and Freehand Voxel Carving Scanning on a Mobile Device moved from Publications to Student Projects, retaining their figures, source links and citations. The ECCV Beam/prism demo remains a publication. Duplicate research highlight cards and the separate Teaching & Supervision summary were removed in favor of the complete sections.

All publication, student-project and undergraduate-thesis thumbnail frames are 184 by 115 pixels, unchanged across desktop and phone widths. The eight approved WebP assets retain their bytes. CoBe now uses an exact original car photograph without the black frame; Deep Stereo uses two matching original PDF panels stacked at equal widths, fixing the earlier crop misalignment without altering disparity values. The burger, horse and mobile projects use larger display-only CSS fitting, with a brightness filter for voxel carving. The NeurIPS paper links directly to its verified OpenReview record czwjjI5kkm; its thumbnail now uses Aaron’s supplied wearable-glove and matched-robot-hand JPEG, displayed in full. The PhD thesis Topics in Computational Geometric Vision, Technion, August 2017, advisor Ron Kimmel, is included as Wetzler-PhD-2017.pdf (151 pages). Its author, degree, date and advisor were checked against the original PDF's front matter in Aaron's personal Google Drive.

## Student project recovery (2026-11-12)

Five updated Python components are now published separately from archival source:
HeartBeat signal processing (20 tests), Volume Carving geometry/occupancy (16),
Face Depth difference features (18), GrayOwl curve geometry (16), and a newly
composed CutOut Fast Marching/scribble example (16). All 86 tests and five actual
Jupyter notebook executions pass on this Mac with Python 3.14. Original-code
harness comparisons cover HeartBeat's supported algorithm, original C++ carving
occupancy/mask changes and 1,005 CutOut local-stencil comparisons (maximum absolute
difference 7.11e-15). Face/Gray validation uses synthetic mathematical invariants;
MATLAB/Octave was not available. These are components, not rebuilt full iOS,
Android, aircraft or recognition systems. The website project rows and JSON now
link each notebook and Colab; updated_component records scope and validation
separately from historical source_status. Checked-in notebooks have cleared outputs.
The private Jupyter environment is
/Users/aaron/repos/student-projects/.notebook-venv; raw or executed private evidence
remains outside the repositories. No training jobs or new hosted Spaces started. The five public notebook files resolve and retain cleared outputs; the follow-up website checks again pass all four screen widths, image decoding, original thumbnail dimensions, no horizontal overflow/browser errors and no-JavaScript links. Both context files were reviewed and synchronized for this notebook-link publication.

All 35 project/software repositories now have representative top README figures
and three factual badges; original images are retained and new schematics are
explicitly labeled. Claude Code completed the initial 18 student presentation
updates and drafted further work before its five-hour usage limit. Codex reviewed,
completed and published the remaining work; CutOut's new solver/demo is explicitly
Codex-authored after the actual Claude call was quota-blocked. No quota, account,
model or payment changes were made. Original source, student credits, legal terms
and confirmed security disclosures are preserved. Original-code and updated-code
sections document the difference. Mobile and Stereo Xcode project listing works;
unsigned arm64 builds fail at concrete omitted/missing assets/legacy dependencies.
All other legacy build/hardware limits are recorded in the private per-project
matrix. Runtime success for these five components is not a full-app build claim.

Student outreach is private: 23 verified unsent Gmail drafts cover 45 students.
Three current public professional addresses are verified; 42 remain dated
historical correspondence addresses with present use unverified. Ten LinkedIn
identities are corroborated. Alon Zvirin is separately credited as lab engineer.
The private review sheet/drafts are under
/Users/aaron/.codex/website-student-outreach-2026-11-12. No mail was sent or contact
data published. The separate GitHub profile website field is now set to
https://twerdster.github.io/ through user-approved CLI profile access and verified
with the public user API. The avatar was updated from the website profile.jpg;
GitHub Settings confirmed the upload and the public profile displays the portrait.
README and repository About links also work.


The second source search rechecked Gmail, live Dropbox, migrated Dropbox archives
and connected Google Drive. Five source imports are now published: Mobile Point
Fusion v2.3 (28 project files, 17 source; January 2015 snapshot), original iPhone
stereo source pinned at 69a76767b2ce74f7b580ddb7b81a43fbb1dd346b, three Face Depth
MATLAB fragments, 51 GrayOwl MATLAB/Python/C#/web files, and three project-specific
CutOut prototype files. The latter is strongly related to the archived result
materials; authorship is unverified and it is not the Android application. Of 85
newly imported files, 73 retain original bytes and 12 have privacy/security edits.
Credentials, private endpoints/identifiers and paths are removed from GrayOwl;
one Mobile comment path is redacted. Per-repo provenance manifests record this.
Raw originals remain private at
/Volumes/AgentSSD/agent-work/website-student-recheck-2026-11-12; search evidence is
/Users/aaron/.codex/website-source-recheck-2026-11-12. No full modern app build is
implied. Separately labeled updated/ work is being tested and is documented in
the project repositories; original/ snapshots and upstream pins are preserved.

Code & Data now links all 12 public software/data repositories, adding Beltrami
Denoising, Deep Patch-Beltrami, Blender Neural Composer, iPTAM, servo tools and
historical Caffe/network tools and shared-memory code. Forks and hardware or
legacy requirements are described explicitly. The 12 repository About links now
point back to the appropriate website resource/section. The public profile README
already links the homepage, and the separate profile website field now points to
https://twerdster.github.io/. The avatar now uses the website profile.jpg, with
a successful upload confirmed in GitHub Settings and visible on the public profile.
New commits use Aaron Wetzler's
canonical GitHub-linked noreply identity; the old global Pete identity was fixed.
No historical authors or commit IDs were rewritten. A .mailmap normalizes the former Pete default identity in Git author summaries. The Android scanner credit now distinguishes its two students from lab engineer Alon Zvirin, matching the recovered final report and current Technion staff listings; the historical spelling is retained in metadata.

Before publication, local browser checks passed at 320, 390, 768 and 1440 pixels:
23 projects, nine Code & Data rows covering 12 software/data repositories, all
images decoded, unchanged 184-by-115 thumbnail frames, no horizontal overflow or
browser errors, and the new links available without JavaScript. Desktop/mobile
light/dark screenshots were reviewed. Independent primary-repository checks
confirmed the software descriptions, native iOS paths, Blender release and all
student source paths. The stereo code link targets the pinned public upstream;
GitHub's wrapper submodule tree URL returns 404. SUMMARY.md and SKILL.md were both
reviewed and updated before this commit.


All 23 student projects have separate public GitHub repositories under twerdster and direct homepage repository links. STUDENT_PROJECTS.md is the public GitHub menu. Fifteen repositories have reviewed historical source or pinned original public code. CutOut has a related algorithm prototype whose Android app remains missing. Three repositories have documents without verified app source, and four have introductory READMEs. Original public source is pinned for OpenFusion, HeartBeat, Alex Fish's Freehand Voxel Carving and the preserved Predator iOS implementation. Recovered private source comprises nine Hand Tracking files, 21 iPhone Volume Carving files, and 225 source files across QRoom, AR Posters, Marker Tracking, Android 3D Scanner and the Oculus War-Room. Of these 255 private-source files, 253 retain original bytes and two QRoom database configurations were sanitized. Original SDKs/binaries, private data and licensing-uncertain dependencies are excluded; several snapshots are intentionally partial. The initial archive restoration did not establish modern application builds. OpenFusion's configuration fails at its obsolete CMake minimum; MATLAB/PMD and legacy mobile/Windows/Unity setups were unavailable. The later, separately labeled component ports below have their own executed tests and notebooks.

Nine recovered PDFs across eight project repositories provide reports, slides, summaries and a CutOut poster. The main page adds verified original lab pages, student GitHub code, demos, GrayOwl team/report/poster material, and Elad Richardson's CutOut portfolio. Private or broken links were not promoted as public resources. The intro removes currently; HeartBeat's summary avoids the old incorrect red-channel-specific claim. Existing section counts, original student credits, publications, patents, theses, HandNet data and viewer files remain intact. No analytics were added.

A follow-up security audit found readable application login records in a raster database screenshot on slide 7 of the iPhone multi-view presentation; text-only credential scans had missed it. The public PDF now removes that entire image object and retains all 16 slides. Other slides are pixel-identical. The original was first published in that project's commit 0e055f1; older Git copies still contain it, and no history rewrite has been performed. Record authenticity and current validity are unknown. The project README discloses the redaction and historical exposure. QRoom's README now records confirmed SQL injection, missing application-level authentication/CSRF checks, and database-content eval; its PHP backend must not be deployed. A pinned Freehand upstream also contains a historical SDK application key and restrictive vendor material; archival availability is not security or licensing approval. Current GitHub secret alerts and default scanner results alone are insufficient evidence that documents or custom SDK credentials are safe.

The archive-recovery maintainer script now rejects decoded path traversal, absolute/drive/backslash/control-character paths, Git metadata targets and existing symlink roots/components/files before filesystem reads/writes. It accepts only the exact archived hostname/user-directory prefix. The module can be imported without running recovery. Six offline regression tests pass with `node --test scripts/fetch-wayback.test.mjs`; all 75 captured archive mappings remain unchanged. No archive download was run. These checks do not provide atomic protection against a hostile concurrent local process replacing filesystem components between validation and use.

Raw email attachments and archives are private on the verified SSD at /Volumes/AgentSSD/agent-work/website-student-recovery (about 151 MB). Native Git working copies are /Users/aaron/repos/student-projects. Per-project .recovery-private evidence is ignored and must never be staged. Public source allowlists and hashes were checked, credential/private-key/ID/vendor-marker scans passed, and 33 XML/project files parsed across the five newly recovered projects. No original recovered code or binaries were executed. Source restoration does not assign a new blanket license.

The website link is added to the public GitHub profile through the standard twerdster/twerdster profile README, containing only Aaron Wetzler's name and the personal website link. After Aaron approved the CLI device authorization, the separate profile website field was set to https://twerdster.github.io/ and verified through the public user API. The avatar was also updated from the website profile.jpg, and GitHub Settings confirmed the successful upload; the public profile displays the portrait and website link. The existing website and repository remain public, with the repository's About link intact. The requested robot-paper image is now Aaron’s supplied wearable-glove and matched-robot-hand figure.

archive.html now redirects old section links to the homepage; it is no longer a separate archive experience or a primary navigation item. A no-JavaScript fallback links to each consolidated section. Historical source is preserved in Git at 462ebe0; the obsolete office/email details were not promoted to current contact information. data/site-content.json separates publications, student_projects, theses and research_videos and records the canonical section anchors and compatibility redirects. README.md and llms.txt describe the unified organization. Analytics was researched for an explanation only; no tracking script, account or DNS changes were made.

Local Playwright verification passed at 320, 390, 768 and 1440 pixels in light/dark themes: all 41 thumbnail frames measure 184 by 115 pixels, all images decode, no horizontal overflow or browser errors, all five publication filters work without filtering student projects, and all 18 citation previews work (16 publications and two projects). All 40 unique hosted resource links return success. The no-JavaScript homepage, archive fallback, six archive redirect cases and the HandNet embed with external requests blocked pass. All original publication/project source links, 21 historical student credits/images, six video links, approved figure bytes, dataset metadata and viewer assets are preserved. PhD PDF SHA-256: 0625f414cc8534f0cc2848b65a0a9f6af2c7b8a685e0ba71b1d2e89f971dc1e9 (28,081,200 bytes), identical to the Drive original. Both SUMMARY.md and SKILL.md were reviewed and updated before commit.

HandNet's maintained dataset page is HandNet/index.html. This 2026-11-10 update aligns the dataset terms with Aaron's expressly selected CC BY 4.0 Hugging Face release at https://huggingface.co/datasets/twerdster/HandNet. All seven native distribution archives remain on Hugging Face; this website does not host or download those archives.

The academic browser viewer lives under HandNet/explorer/. It bundles exactly 20 precomputed sample rows: five test originals plus matching perturbations, three validation originals plus matching ground-truth-derotated samples, and four derotated training samples. There are eight matched pairs. Samples, point clouds, images, original heatmaps, metadata, and Three.js are stored locally with this site. Runtime rendering needs only same-origin static files and no dataset account, backend, Hugging Face request or CDN.

The main HandNet page embeds explorer/index.html?embed=1 and links the standalone viewer. The larger Hugging Face Space remains a 96-sample research viewer. Data are CC BY 4.0; new browser code is MIT; historical MATLAB code retains its own terms.

Source preview assets are derived from the verified HandNet release and preserve source frame identifiers. The 20-row pack is a visualization subset, not a benchmark split or the full native depth arrays. Source heatmap peaks differ slightly from geometric sensor projection. The canonicalization demo uses ground truth and does not run learned model inference. No full joint skeleton is inferred.

Local development: npm run dev (port4173). For isolated task QA, a separate Python static server can use another port. Preserve the unrelated installed LaunchAgent/server noted in README.md.

Published integration commit d2046473d156f337a08caddfeaa46f161cb0bd66 on main; GitHub Pages build succeeded. The live HandNet page and standalone viewer pass desktop/mobile controls, recorded measurement/provenance tables, matched-pair controls, source-table invariance during display rotation, stable intrinsic iframe height, no horizontal overflow, no console or missing-asset errors, and operation with all external requests blocked. Website HTML/JS/CSS, the 20-row manifest and site metadata match the reviewed source hashes.

The 213-file viewer is 1,933,773 bytes including runtime and legal notices; all 202 data files match the verified subset. Both SUMMARY.md and SKILL.md were reviewed before the integration and handoff commits. SKILL.md remains accurate; no additional workflow changes are needed. The separate public academic Hugging Face Space is revision c3bf3496f4c4ac93e0ee644370ff5af5e74ccf37 and retains 96 rows. Native dataset archives were unchanged.

## Publication reconciliation (2026-11-10)

The homepage now has 21 research entries, including seven additions from Aaron's complete 32-row Google Scholar profile. Five additions are a book chapter, an ICLR paper, an arXiv preprint, a DIFF-CV workshop paper, and a CIRM article; the other two are explicitly labeled as projects. The Rule of Thumb preprint is linked from the existing BMVC entry, not duplicated. The undergraduate thesis remains in the Thesis section. Learning Invariant Representations of Planar Curves uses its verified ICLR 2017 year, with 2016 recorded as the preprint year in the machine-readable index.

All 11 Scholar patent records are represented by the nine patent-title lines at the bottom. Four missing application publications were added to the corresponding stereoscopic-capture, encoded-beacon, and structured-light lines, without duplicating inventions. The HTML, JSON index, README and llms.txt are synchronized. Seven new BibTeX files bring the main publication list to 18 citation previews/downloads.

Local browser checks cover all 21 publication rows, research filters, all 18 citations, 40 hosted resource links, light/dark themes, no-JavaScript fallback and 320/390/768/1440-pixel layouts without horizontal overflow or browser errors. Existing HandNet public downloads, viewer assets, licensing and provenance are preserved when integrating the newer upstream HandNet work. Both context files were reviewed; SKILL.md now also records publication reconciliation conventions.

## Selected publication thumbnails (2026-11-11)

Aaron selected 1A, 2A, 3A, 4A, 5B, 6A, 7A and 8A from the three-option review PDF. These correspond to CoBe, the RGBD-Fusion book chapter, planar curves, deep stereo, facial action normalization, Mobile Point Fusion, mobile voxel carving and curvature. Eight text-only year blocks are replaced with linked square images; publication text, existing resource links and all unrelated images remain unchanged. The NeurIPS entry was initially text-only; Aaron supplied its wearable-glove and matched-robot-hand figure on 2026-11-12, and that original JPEG is now its thumbnail.

The approved 512-by-512 crops are served as lossless WebP files under assets/publications/ (988,736 bytes total). Pixel equality against all eight selected PNGs was verified. Source URLs and figure references are stored with each publication's image path in data/site-content.json; README.md and llms.txt describe these resources. A square thumbnail modifier preserves the existing rectangular-image styling and caps the new images at 184 pixels on phones. No HandNet assets, historical archive or dataset files changed.

Local Playwright checks passed at 320, 390, 768 and 1440 pixels: all eight images decode at their native 512-pixel dimensions and render square; all 21 entries, five filters and 18 citation previews work in light and dark themes without horizontal overflow or browser errors. All 38 unique hosted publication resource links respond successfully. The no-JavaScript fallback retains the images, publications and original BibTeX links. Publication text, order, existing resource links and non-image JSON data are unchanged. Screenshots were visually reviewed. SUMMARY.md and SKILL.md were both reviewed and updated for this change before commit.
