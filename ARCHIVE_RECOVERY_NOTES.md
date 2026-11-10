# Aaron Wetzler Archived Academic Website

This directory is a local static reconstruction of the archived Technion academic website at:

<http://web.archive.org/web/20191025064408/https://www.cs.technion.ac.il/~twerd/>

The homepage is from the October 25, 2019 Wayback snapshot. Supporting files are pulled from the closest available Wayback captures under `www.cs.technion.ac.il/~twerd/`.

## Run Locally

```sh
npm run dev
```

Then open:

<http://127.0.0.1:4173/>

This site has no runtime dependencies. The npm script only starts Python's built-in static file server.

## Refresh The Archive

```sh
npm run fetch:archive
```

The fetch script downloads the archived internal files, rewrites Technion-hosted internal links to local paths, removes the old Google Analytics snippet, and writes `archive-manifest.json`.

## Recovery Notes

- External links, including YouTube and collaborator/project pages outside `~twerd/`, remain external.
- The recovered files include the original homepage, `site.css`, images, project thumbnails, PDFs, BibTeX files, PowerPoint slides, supplementary ZIP material, and the `HandNet/` subpage.
- `OrelHershkowitzWetzlerRosmanBrucksteinKimmel-CVPR-2016.bib` is reconstructed from the CVF Open Access BibTeX entry because Wayback did not capture the original linked file.
- Wayback and the live Technion site do not currently have `Beltrami.zip` or the `PeretzFurshpan/projImg.jpg` project thumbnail.
- `archive-manifest.json` records the Wayback source URL for each recovered file and any local references that could not be found.
