# HandNet: self-contained research viewer

This GitHub Pages viewer contains 20 precomputed examples and all required browser-rendering assets. It does not fetch the full dataset, Hugging Face, external JavaScript, or a backend while viewing. Open index.html through a static HTTP server, or the deployed /HandNet/explorer/ URL. The parent HandNet page embeds index.html?embed=1; the standalone page includes methods, data links and citation.

The subset contains 5 test originals and their 5 perturbed counterparts, 3 validation originals and their 3 ground-truth-derotated counterparts, and 4 derotated training examples. There are 8 matched pairs. The 20 source rows and preprocessing/calibration metadata are in data/samples.json. SAMPLE_PROVENANCE.json records source asset SHA-256 hashes and validation. The precomputed data pack is approximately 1.02 MiB; the viewer adds locally vendored Three.js and small HTML/CSS/JS files.

Each frame includes calibrated sparse XYZ points in millimetres, recorded fingertip/palm sensor positions and orientations, depth/infrared/label preview PNGs, and six original heatmap-channel PNGs. These display assets are derived from the original MATLAB archives; they are not a full raw-depth export or a benchmark split. The original frame identity and MAT hash remain attached to every row.

Use the source camera coordinates (+X right, +Y down, +Z away). The 3D renderer flips Y and Z together while tables preserve the recorded measurements. Source heatmap peaks and geometric sensor projections remain distinct. No full anatomical hand skeleton or learned inference is fabricated. The ground-truth normalization control is a geometric demonstration using measured palm orientation.

Full data: https://huggingface.co/datasets/twerdster/HandNet
Larger 96-sample research explorer: https://huggingface.co/spaces/twerdster/HandNet-Explorer
Paper: https://arxiv.org/abs/1507.05726
Original code: https://github.com/twerdster/HandNet

## Licenses and attribution

Precomputed HandNet data: CC BY 4.0 (DATA_LICENSE.txt). Credit Aaron Wetzler, Ron Slossberg and Ron Kimmel; link the license and indicate changes. Please cite their BMVC 2015 paper, Rule of Thumb: Deep Derotation for Improved Fingertip Detection.

New browser viewer: MIT (LICENSE). Three.js/OrbitControls: MIT (vendor/THREE-LICENSE.txt). The historical MATLAB repository retains its own source-code terms and is not copied here.

## Run locally

From the website repository root, run npm run dev and open http://127.0.0.1:4173/HandNet/explorer/. No build or package installation is required.
