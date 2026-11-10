# Aaron Wetzler Archived Academic Website

This directory is a local static reconstruction of the archived Technion academic website at:

<http://web.archive.org/web/20191025064408/https://www.cs.technion.ac.il/~twerd/>

The homepage is from the October 25, 2019 Wayback snapshot. Supporting files are pulled from the closest available Wayback captures under `www.cs.technion.ac.il/~twerd/`.

The initial reconstruction presented the recovered content in the shared homepage design. `archive.html` preserved the historical publications, student project descriptions and names, thesis, videos, and section anchors. The reconstructed `HandNet/index.html` used the same styles and replaced the original empty download links with real paper, poster, slides, and supplementary-material links. Full HandNet training and test sets were not recovered as part of that Wayback work. The original page appearance remains available in the Wayback snapshot above; legacy CSS and project images are retained locally.

## HandNet update — November 10, 2026

Subsequent work published the existing HandNet dataset copy to [Hugging Face](https://huggingface.co/datasets/twerdster/HandNet). All seven distribution archives retain their original bytes; their hashes and sizes are recorded in the dataset's [manifest](https://huggingface.co/datasets/twerdster/HandNet/resolve/main/manifest.json) and [SHA256SUMS](https://huggingface.co/datasets/twerdster/HandNet/resolve/main/SHA256SUMS). The 214,971 original released frames are distinct from the 2015 paper's historical count; transformed archives reuse examples.

Aaron Wetzler selected [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) for this open data release, including commercial reuse with attribution. The maintained project page now states those terms and links the public data instead of directing access requests to a contact profile. The original MATLAB source repository retains its historical terms and is not relicensed by this website update.

A [20-sample viewer](https://twerdster.github.io/HandNet/explorer/) is hosted within this repository and [embedded in the project page](https://twerdster.github.io/HandNet/#explorer). It serves scripts, vendored dependencies and real sample assets through relative URLs. The separate [research Space](https://huggingface.co/spaces/twerdster/HandNet-Explorer) and [96-row Parquet preview](https://huggingface.co/datasets/twerdster/HandNet/resolve/main/preview/samples.parquet) provide a larger derived visualization selection. These additions are maintained 2026 content, not recovered 2019 material; the Wayback recovery record below remains separate.

## Run Locally

```sh
npm run dev
```

Then open:

<http://127.0.0.1:4173/>

No package installation is required to serve the site. The npm script starts Python's built-in static file server; the maintained HandNet viewer carries its browser dependencies locally.

## Refresh The Archive

```sh
npm run fetch:archive
```

The fetch script downloads the archived internal files, rewrites Technion-hosted internal links to local paths, removes the old Google Analytics snippet, and writes `archive-manifest.json`.

This is a historical recovery utility, not the publishing workflow. Run recovery in a separate checkout when investigating source captures so it cannot rewrite the maintained site pages.

## Recovery Notes

- External links, including YouTube and collaborator/project pages outside `~twerd/`, remain external.
- The recovered files include the original homepage, `site.css`, images, project thumbnails, PDFs, BibTeX files, PowerPoint slides, supplementary ZIP material, and the `HandNet/` subpage.
- `OrelHershkowitzWetzlerRosmanBrucksteinKimmel-CVPR-2016.bib` is reconstructed from the CVF Open Access BibTeX entry because Wayback did not capture the original linked file.
- Wayback and the live Technion site do not currently have `Beltrami.zip` or the `PeretzFurshpan/projImg.jpg` project thumbnail.
- `archive-manifest.json` records the Wayback source URL for each recovered file and any local references that could not be found.
