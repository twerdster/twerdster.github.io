# Content provenance and limits

The homepage combines maintained academic records with material recovered from
Aaron Wetzler's former Technion website. [ARCHIVE_RECOVERY_NOTES.md](../ARCHIVE_RECOVERY_NOTES.md)
and the repository-root `archive-manifest.json` describe the October 2019 Wayback recovery; later
content changes are recorded separately. `archive.html` now redirects historical
anchors, and the former page is retained in Git history rather than serving as
a second academic index.

## Publications and project materials

The current index contains 19 publications, 23 student projects, two theses,
12 software/data repositories, six research videos and nine patent groups. Conference/preprint records
are combined. Sixteen publications and two projects have BibTeX files. These
counts were checked against the tracked HTML/JSON, not inferred from a search
result count. Source URLs and figure references live in `data/site-content.json`.

The PhD thesis is *Topics in Computational Geometric Vision*, Technion,
August 2017, supervised by Ron Kimmel. `Wetzler-PhD-2017.pdf` retains the
151-page PDF recovered from Aaron's Drive. The separate undergraduate thesis
is the 2005 *Low Cost 3D Laser Scanning Unit with Application to Face Recognition*.
Papers, slides, ZIPs and third-party figures retain their native formats/terms.

The student-repository directory records historical source, pinned public
upstreams, partial recoveries and documents separately. Four updated Python
components have previously recorded unit tests/notebook executions: HeartBeat (20), Volume
Carving (16), Face Depth features (18) and CutOut Fast Marching (16). The 70 tests
refer to those specific components and were not rerun for this documentation
revision. They do not validate complete legacy
applications. GrayOwl code and its later geometry notebook were withdrawn;
only project information and public resource links remain.

Recovery excludes raw mail, credentials, signing material, unreviewed personal
data and proprietary dependencies. Per-project source manifests describe edits.
The multi-view iPhone slides have a database screenshot removed from slide 7;
older Git history still retains that screenshot. QRoom's archived PHP backend
has vulnerabilities confirmed by the earlier source audit and must not be deployed. Source availability
does not establish safe execution or permission to redistribute dependencies.

## HandNet

The maintained dataset page links seven native distribution archives on Hugging
Face. The tracked `HandNet/explorer/data/archive-manifest.json` records 214,971
original frames and 25,475,576,842 archive bytes; the original-frame count excludes
transformed variants. Archive hashes and sizes are in the
[dataset manifest](https://huggingface.co/datasets/twerdster/HandNet/resolve/main/manifest.json).
The Wayback recovery alone did not supply the full dataset.

The local viewer uses 20 precomputed rows, including eight matched pairs. The
separate research Space/Parquet preview has 96 rows. Display images, point
clouds, sensor labels and transformations demonstrate recorded annotations;
they are not a new trained detector, full raw-depth export or benchmark split.
The ground-truth normalization demonstration is distinct from learned inference.

Data are CC BY 4.0 with attribution, license link and change indication; please
also cite Wetzler, Slossberg and Kimmel's BMVC 2015 paper. Viewer source is MIT,
Three.js has its own MIT notice, and the historical MATLAB repository keeps
its original source terms. No new blanket license is applied to the site,
student code, papers or external assets.

## Author-supplied project resources, 2026-11-13

Smartphone Game now links [Idan Banani's source repository](https://github.com/IdanBanani/iOS-4-2D-game-for-iPad). Inspection at commit 270b45c found historical source and resources but no Xcode project/workspace; it has not been built and is not imported into this website or its archival repository.

[CamPong](https://github.com/twerdster/campong) adds the original poster, project overview and 15-slide presentation (with an embedded historical recording) supplied by Nofar Carmeli. Her supplied report matches the previously archived report byte for byte. The repository records the hashes and document/media inspection scope. Nofar's supplied public video and preferred website are linked; application source is still unavailable.

[Full positional tracking for Oculus Rift (RiftFusion)](https://github.com/twerdster/oculus-positional-tracking) now includes the original 13-slide presentation supplied by Dor Goldbaum and the authors' supplied public profile links. The presentation describes KinectFusion/Vicon alternatives and an API; the application source remains unavailable and no new headset/runtime test is claimed. Individual author replies do not add a blanket license or replace third-party terms. Raw correspondence and private access links remain outside the public repositories.

CamPong's homepage video link now uses the public YouTube URL supplied by Nofar; its title metadata identifies the Technion Pong project, but this update did not review its contents. The earlier Dropbox video URL remains in the CamPong README and original documents. Linking the Smartphone Game source does not assign reuse terms to the application or extend the bundled libraries' licenses to other material.

[CutOut](https://github.com/twerdster/cutout-android) now includes the original Android source supplied by Elad Richardson on 2026-11-13. The [Android source snapshot](https://github.com/twerdster/cutout-android/tree/main/source/original/android-app) contains the Java interface, JNI C++ code, resources and historical build metadata. [Source/build notes](https://github.com/twerdster/cutout-android/blob/main/docs/original-android.md) distinguish preserved original files from missing dependencies and unverified build/runtime behavior. The earlier three-file MATLAB/C++ prototype remains separate, with unverified authorship. The 16 Python component tests apply only to the new Fast Marching exercise; neither the recovery nor those tests validate the historical Android interface. Existing third-party notices remain in place, and Elad Richardson’s permission to host recovered project code is his permission only; it does not speak for other contributors, assign a blanket software license or authorize a new manuscript.

## Updated CutOut execution, 2026-11-13

The [native port](https://github.com/twerdster/cutout-android/blob/main/updated/native/README.md) adapts the recovered Android C++ segmentation operators to OpenCV 4: Lab color density through FIGTree or histograms, pixel-grid Dijkstra or MegaWave FLST followed by tree Dijkstra, and optional boundary-alpha refinement. The [desktop drawing interface](https://github.com/twerdster/cutout-android/blob/main/updated/desktop/README.md) and [new Android Java/JNI runner](https://github.com/twerdster/cutout-android/blob/main/updated/android/README.md) call that updated core. Fixes and wrapper behavior are documented separately; all 319 recovered Android files remain unchanged, and the historical Eclipse interface remains unbuilt.

The [native validation record](https://github.com/twerdster/cutout-android/blob/main/updated/validation/VALIDATION.json) reports 31 named ASan/UBSan checks on macOS arm64, repeated in a separate `-funsigned-char` build, 25 CLI cases (15 successful, including eight operator combinations on one photograph, and 10 expected errors), and six selected original-body fail/updated-pass comparisons. The sanitizer scope includes the port and bundled ANN/FIGTree/MegaWave sources, not separate OpenCV/system libraries. Separate interface records cover eight browser-to-native photograph operator choices at 390/1440 widths and 14 actual segmentation runs in an Android 14 ARM64 emulator. Counts describe specific execution/regression cases, not benchmark photographs or general correctness.

The single coffee photograph has no independent reference segmentation; no photographic accuracy value is reported. The same updated debug APK subsequently passed the 14 Activity/JNI segmentation cases on one physical Pixel 2 with Android 10/API 29 arm64-v8a: eight procedural ellipse operator combinations, four coffee cases at the 400-pixel working limit and two at full 600×400 input. All 14 supplied-seed mask/alpha checks and six hard/refined binary-mask pairs passed. This physical-device record remains separate from the Android 14 emulator record. Those Android checks do not establish other device/API combinations or cross-device bitwise equivalence. Linux and iOS results are recorded separately below. The new wrappers do not recreate the original camera/compositing/editing interface or establish numerical equivalence to its results. The earlier Python Fast Marching exercise retains its independent 16-test record. Attribution, hosting-permission scope and mixed third-party terms remain unchanged.

## CutOut platform interfaces

The updated core also supports an [iOS UIKit/Objective-C++ interface](https://github.com/twerdster/cutout-android/blob/main/updated/ios/README.md) and a [native desktop CLI](https://github.com/twerdster/cutout-android/blob/main/updated/native/README.md) with macOS and Linux build instructions. These are separately maintained updated implementations; they do not change the original Android snapshot or resolve the older prototype's authorship.

The [Linux validation record](https://github.com/twerdster/cutout-android/blob/main/updated/validation/LINUX_VALIDATION.json) records completed CI run 43465063049 on Ubuntu 24.04 with Clang 18.1.3 and OpenCV 4.6.0. It reports 31 native checks, repeated with unsigned char under ASan/UBSan, 25 CLI cases (15 successful including eight operator combinations on one photograph, 10 expected errors) and six isolated original-body fail/updated-pass comparisons. The sanitizer flags cover the port and bundled ANN/FIGTree/MegaWave sources; the separately installed OpenCV 4.6.0 package and system libraries are not instrumented, and leak checking is not claimed. This is native/CLI execution evidence, not a Linux drawing-interface or general segmentation-quality benchmark.

The iOS implementation has a recorded 14-case physical-device fixture batch: eight ellipse operator combinations, four coffee cases at a 400-pixel working limit and two full-input coffee cases. Its [platform record](https://github.com/twerdster/cutout-android/blob/main/updated/ios/VALIDATION.json) documents fixture execution separately from interaction tests. The declared iOS 16 minimum, simulator instructions and another platform's results are not additional runtime tests. The coffee photograph has no independent reference mask, and no cross-platform bitwise-equivalence claim is made.

The final [iOS device record](https://github.com/twerdster/cutout-android/blob/490992bbe3466577f0bc808ea500fc3901508efd/updated/ios/VALIDATION.json) pins the 2026-11-13 source/build snapshot: 14 saved runs, 70 PNGs and 98 files passed independent consistency checks. The current UI-test target builds, but its recorded attempt stopped at automation initialization before any test case started. The actual phone layout was inspected; that is separate from touch, picker and share interaction coverage.

## Later student replies, 2026-11-13

[Hand tracking's draft slides](https://github.com/twerdster/hand-tracking-pmd/blob/main/docs/real-time-hand-tracking-draft-2013.pptx) are the unchanged 59-slide presentation supplied by Sa'ar Zehavi. The draft was shared in April 2013, before the June report, and retains placeholder illustrations and a first-order approximation step that the author said he had already removed. It is historical design material, with no new tracking, accuracy or current-platform validation. The nine recovered source files and the June report stay unchanged. The [project provenance record](https://github.com/twerdster/hand-tracking-pmd/blob/main/PROVENANCE.md) records the exact original hash and distinguishes the draft from the June report and recovered source.

Sa'ar approved website inclusion on 2026-11-12 and supplied the slides in response to the public-archive request. This contribution adds no standard reuse license; the embedded third-party illustrations retain their original rights.

Amit Bekerman's response approves keeping RobotRun on Aaron's website with Amit credited by name; it supplies no Unity code or execution evidence. The two authors' individual replies retain their individual scope in the project README. Vlad Ostrovski's response confirms the already-linked RiftFusion historical video; it does not recover application source or establish a current working build. These replies add no blanket license. Raw messages and personal contact addresses remain private.

## RobotRun browser implementation, 2026-11-13

[RobotRun](https://github.com/twerdster/robotrun-game) now links a [playable browser implementation](https://twerdster.github.io/robotrun-game/), with [source](https://github.com/twerdster/robotrun-game/tree/main/updated/browser), [setup](https://github.com/twerdster/robotrun-game/blob/main/updated/browser/README.md) and [recorded checks](https://github.com/twerdster/robotrun-game/blob/main/updated/browser/docs/VALIDATION.md). This new TypeScript implementation generates its obstacle layouts and meshes; Three.js renders the scene and MediaPipe supplies hand landmarks. It follows the documented three-lane running-game design. No Unity project, C# source, original assets or camera integration was recovered. The privately inspected historical report and slides contain student identifiers and are not redistributed. The archived screenshot remains unchanged and illustrates the original game.

The new course ends at 1,000 metres, awards ten points per coin and reverses controls for ten seconds after contact with fire. The chosen course length and added ducking, overhead barriers and keyboard/touch controls are documented separately from the historical record. Chrome 157 production-preview checks include Hand Landmarker with its GPU delegate processing a prerecorded Google hand test photo, spatially shifted across video frames. They cover game interaction, desktop layout and 390-pixel Chrome mobile emulation. Camera lifecycle/error checks used an emulated stream, with synthetic camera-ended and visibility events. They do not establish live-person tracking accuracy, physical-camera or mobile-device performance, or equivalence to the historical Unity/Intel-camera implementation. The Content Security Policy blocked the SDK's external metrics reporter through connect-src; recorded Chrome sessions made no external requests. No Safari/Firefox, recognition-accuracy, frame-rate or cross-browser benchmark is claimed.

Hadar Reuveny and Amit Bekerman retain credit for the original project; Aaron Wetzler, with coding-agent assistance, is credited for the new implementation. Existing individual author replies retain their stated scope. New code under updated/browser/ is MIT-licensed; MediaPipe runtime/model files, other dependencies and historical material retain separate terms. The fifteen repositories with historical source/pins remain fifteen: RobotRun moves from the introductory category to a browser-reimplementation category without historical source; introductory repositories drop from three to two. README.md was checked and its site setup/runtime description needs no change.
