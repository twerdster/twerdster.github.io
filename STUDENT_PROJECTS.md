# Student Project Repositories

Historical Technion student projects supervised by Aaron Wetzler. Each project has a separate repository so its original authors can contribute updates or request corrections or removal.

Fourteen repositories contain reviewed historical source or a pinned public upstream. Separately, Smartphone Game links source hosted on Idan Banani's GitHub account; it is not imported here and its build is unverified. GrayOwl retains project information and public resource links; its source code and updated notebook have been withdrawn. CutOut additionally contains a related algorithm prototype, with the Android app still missing. Three repositories contain documents without verified app source, and three have introductory READMEs. Historical snapshots may be partial and are not complete modern application releases. Four repositories now also have separately labeled, tested Python components and executable Jupyter/Colab notebooks; these do not replace the original applications. Consult each README for missing dependencies and the exact recovery status; a source link does not imply a complete, runnable application.

| Project | Repository | Recovery Status |
| --- | --- | --- |
| Mobile Point Fusion | [mobile-point-fusion](https://github.com/twerdster/mobile-point-fusion) | Partial historical iOS source; untested |
| Freehand Voxel Carving Scanning on a Mobile Device | [freehand-voxel-carving](https://github.com/twerdster/freehand-voxel-carving) | Original code pinned; untested |
| AR / 3D Skype to Android | [android-3d-skype](https://github.com/twerdster/android-3d-skype) | Coming soon |
| Augmented Reality Posters | [augmented-reality-posters](https://github.com/twerdster/augmented-reality-posters) | Partial source; untested |
| QR code applications on Android | [android-qr-applications](https://github.com/twerdster/android-qr-applications) | Partial source; untested |
| Smartphone Game | [smartphone-game](https://github.com/twerdster/smartphone-game) | Report and linked source files; no Xcode project in inspected snapshot; unbuilt |
| Hebrew Speech Recognition on iPad | [hebrew-speech-ipad](https://github.com/twerdster/hebrew-speech-ipad) | Coming soon |
| 3D Stereo Reconstruction using iPhones | [iphone-stereo-reconstruction](https://github.com/twerdster/iphone-stereo-reconstruction) | Original code pinned; untested |
| Marker tracking | [marker-tracking](https://github.com/twerdster/marker-tracking) | Partial source; untested |
| Predator TLD on iOS | [predator-tld-ios](https://github.com/twerdster/predator-tld-ios) | Original code pinned; untested |
| 3D Volume Carving on iPhone | [iphone-volume-carving](https://github.com/twerdster/iphone-volume-carving) | Partial original; tested carving component and notebook |
| Hand tracking | [hand-tracking-pmd](https://github.com/twerdster/hand-tracking-pmd) | Source recovered; untested |
| OpenFusion | [openfusion](https://github.com/twerdster/openfusion) | Original code pinned; untested |
| CamPong | [campong](https://github.com/twerdster/campong) | Report, poster, slides and project overview; application source unavailable |
| Face Depth Estimation from a Single Color Image | [face-depth-estimation-from-a-single-color-image](https://github.com/twerdster/face-depth-estimation-from-a-single-color-image) | Three MATLAB fragments; tested feature notebook |
| HeartBeat for iOS | [heartbeat-ios](https://github.com/twerdster/heartbeat-ios) | Pinned original; tested signal port and notebook |
| 3D Scanner on Android | [android-3d-scanner](https://github.com/twerdster/android-3d-scanner) | Partial source; untested |
| Multi-View 3D reconstruction application for iPhone | [iphone-multiview-reconstruction](https://github.com/twerdster/iphone-multiview-reconstruction) | Documents; code coming soon |
| Multi-user virtual war-room for Oculus Rift | [oculus-virtual-war-room](https://github.com/twerdster/oculus-virtual-war-room) | Scripts recovered; untested |
| Full positional tracking for Oculus Rift | [oculus-positional-tracking](https://github.com/twerdster/oculus-positional-tracking) | Original presentation and demo link; application source unavailable |
| AUVSI Seafarer 2014 GrayOwl Image Processing team | [grayowl-auvsi-2014](https://github.com/twerdster/grayowl-auvsi-2014) | Project information and links; source code withdrawn |
| CutOut for Android | [cutout-android](https://github.com/twerdster/cutout-android) | Related prototype; tested new solver notebook; Android missing |
| RobotRun game | [robotrun-game](https://github.com/twerdster/robotrun-game) | Coming soon |

## Source and Attribution

Public original code is pinned as a Git submodule in OpenFusion, HeartBeat, Freehand Voxel Carving, Predator for iOS and iPhone Stereo Reconstruction. Clone those repositories with `--recurse-submodules`. Other recovered code is stored under `source/`; the new recovery imports use `source/original/`. Separately labeled modern implementations, when present, live under `updated/` and do not replace the historical snapshots. Original student credits, existing notices and third-party terms are retained; this directory does not assign a blanket code license.

Privately recovered SDK binaries, signing material, private deployment values, personal records and raw submission archives are not published. Two QRoom database configuration files use environment variables. One Mobile Point Fusion comment path is also redacted. GrayOwl source and updated code are no longer published. Per-repository provenance manifests distinguish unchanged originals from sanitized files. The unmodified raw originals remain private. Reports and slides are linked separately from source availability.

The current multi-view iPhone slides have a database screenshot removed from slide 7 to protect application login details; the original remains in historical Git copies. QRoom's archived PHP backend has confirmed security vulnerabilities and must not be deployed. Pinned public upstreams require separate credential and vendor-license review before reuse.

The [homepage](https://twerdster.github.io/#projects) links project-specific code, reports, posters, demonstrations and original laboratory pages where available. The machine-readable [site index](data/site-content.json) records `repository`, `source_status`, `resources`, and pinned upstream revisions where applicable.

The 2026-11-13 author follow-up added Smartphone Game’s source link, CamPong’s additional original documents and supplied video/profile links, and the original RiftFusion presentation with its authors’ supplied profile links. These resources do not establish a current application build. Individual correspondence permissions are described in the affected repository READMEs without publishing the messages or assigning a new blanket license.
