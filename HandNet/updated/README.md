# HandNet browser viewer

## Updated and ported for modern hardware

The 2026 update adds a self-contained browser viewer for measured HandNet
examples, with calibrated depth point clouds, images, sensor positions and
orientations, and controls for comparing original and transformed samples.
It uses local JavaScript and assets to replace the need for a MATLAB session
when inspecting this small selection. The historical MATLAB scripts, training
pipeline and learned fingertip detector have not been modernized by this viewer.

### Open and use

Open the [HandNet page](https://twerdster.github.io/HandNet/#explorer) for the
embedded viewer, or the [standalone viewer](https://twerdster.github.io/HandNet/explorer/).
Select an example, rotate the point cloud, inspect image/heatmap channels and
recorded sensor measurements, or compare a matched pair. Viewing requires a
browser with JavaScript; it needs no account, backend or full-dataset download.

For a local copy, run `npm run dev` from the website repository root and open
`http://127.0.0.1:4173/HandNet/explorer/`. No package installation or build is
required. The [viewer guide](../explorer/README.md) describes source coordinates,
rendering conventions, controls and local assets. The [implementation](../explorer/)
and [sample provenance](../explorer/SAMPLE_PROVENANCE.json) are tracked with the site.

### Scope and recorded checks

The local selection contains **20 examples and eight matched pairs**: five test
originals with their perturbed counterparts, three validation originals with
ground-truth-derotated counterparts, and four derotated training examples.
The provenance record identifies source frames and hashes, calibration,
paired-source consistency and point-array lengths. It records checks of the
precomputed assets; it is not a detector evaluation or a full-dataset benchmark.
The separate [Hugging Face research viewer](https://huggingface.co/spaces/twerdster/HandNet-Explorer)
contains 96 examples. Neither selection replaces the original distribution archives.

Depth previews are contrast-rendered, and point clouds are downsampled for
display. Ground-truth normalization uses measured palm orientation. Six tracked
sensor locations do not form a full anatomical hand skeleton. The viewer runs
no learned model inference and reports no new training or accuracy result.

### Data, code and attribution

Credit Aaron Wetzler, Ron Slossberg and Ron Kimmel and cite
*Rule of Thumb: Deep Derotation for Improved Fingertip Detection*, BMVC 2015.
The [HandNet dataset](https://huggingface.co/datasets/twerdster/HandNet) and
precomputed examples are [CC BY 4.0](../explorer/DATA_LICENSE.txt).
New viewer code is [MIT](../explorer/LICENSE); bundled Three.js retains its
[own MIT notice](../explorer/vendor/THREE-LICENSE.txt). The
[original MATLAB repository](https://github.com/twerdster/HandNet) retains its
historical code terms.
