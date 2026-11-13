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

The single coffee photograph has no independent reference segmentation; no photographic accuracy value is reported. The same updated debug APK subsequently passed the 14 Activity/JNI segmentation cases on one physical Pixel 2 with Android 10/API 29 arm64-v8a: eight procedural ellipse operator combinations, four coffee cases at the 400-pixel working limit and two at full 600×400 input. All 14 supplied-seed mask/alpha checks and six hard/refined binary-mask pairs passed. This physical-device record remains separate from the Android 14 emulator record. Other Android device/API combinations and Linux execution remain untested; no cross-device bitwise-equivalence claim follows. The new wrappers do not recreate the original camera/compositing/editing interface or establish numerical equivalence to its results. The earlier Python Fast Marching exercise retains its independent 16-test record. Attribution, hosting-permission scope and mixed third-party terms remain unchanged.
