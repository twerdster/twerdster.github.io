# Aaron Wetzler academic website

A static academic homepage built from the recovered Technion website. The main page contains the biography, publications, student projects, theses, code and data, experience and education, research videos, and patents.

The layout uses the former academic archive's straightforward section structure, with a sticky section navigation, circular profile photo, serif headings, numbered sections and compact illustrated rows. All publication, project and undergraduate-thesis thumbnail frames are 184 by 115 pixels on desktop and mobile. Publications can be filtered by research area; publication and project BibTeX files open inline with copy and download controls. The theme switch saves the light/dark preference locally. Core academic content and original citation links remain available without JavaScript; the interactive HandNet viewer requires JavaScript.

The homepage and HandNet project page share `styles.css` and `site.js`, including navigation, fonts, light/dark preference, citation previews, and responsive layout. The archive's 21 student projects and six demonstration videos are now on the homepage. Mobile Point Fusion and Freehand Voxel Carving Scanning on a Mobile Device appear in Student Projects, not Publications. `archive.html` is only a compatibility redirect: old section links, including `archive.html#Projects`, point to the corresponding homepage section. Without JavaScript, the compatibility page provides direct section links. The historical source remains in Git history at commit `462ebe0`. PDFs, slides, ZIPs, and external websites retain their native formats.

## HandNet data and viewer

The [HandNet page](https://twerdster.github.io/HandNet/) embeds a [20-sample viewer](https://twerdster.github.io/HandNet/#explorer), also available [standalone](https://twerdster.github.io/HandNet/explorer/). The viewer's scripts, vendored dependencies, images and calibrated point clouds are served from this repository with relative URLs. It does not embed the Hugging Face app or require a CDN. Serve the site over HTTP with the local command below; opening an HTML file directly can prevent browser fetches of sample assets.

The [complete dataset](https://huggingface.co/datasets/twerdster/HandNet) is public and ungated on Hugging Face. Its [seven unchanged archives](https://huggingface.co/datasets/twerdster/HandNet/tree/main/archives) total 25,475,576,842 bytes and contain 214,971 original frames plus transformed variants. Data is available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), including commercial reuse with attribution, a license link and an indication of changes. Credit Aaron Wetzler, Ron Slossberg and Ron Kimmel and cite the BMVC 2015 paper. The linked historical MATLAB source keeps its own original terms.

The [extended research Space](https://huggingface.co/spaces/twerdster/HandNet-Explorer) and [Parquet preview](https://huggingface.co/datasets/twerdster/HandNet/resolve/main/preview/samples.parquet) contain 96 derived visualization rows. The local 20-sample selection and the 96-row preview do not replace the full archives. Images are rendered for display; the viewers show measured sensor annotations and geometric transformations, not new learned detector results.

## Publication index

The homepage has 19 publications, 23 student projects, two theses, six research videos and nine patent lines. The publication records were reconciled with Aaron's full Google Scholar profile on November 10, 2026; the two project records were subsequently moved to Student Projects at Aaron's request. Conference and preprint versions are combined rather than duplicated. Learning Invariant Representations of Planar Curves uses its ICLR 2017 publication year rather than the 2016 preprint year. Sixteen publications and two projects have downloadable BibTeX files. Patent lines group related grant and application publications. Keep `index.html`, `data/site-content.json`, and `llms.txt` synchronized when updating these lists.

Eight entries use Aaron's selected figures in `assets/publications/`. These are lossless WebP copies of the approved 512-pixel crops, displayed inside the same rectangular frames as the older figures. CoBe's white review-canvas padding is compensated for in CSS; the underlying image is unchanged. Image paths, original sources and figure references are recorded in `data/site-content.json`. The NeurIPS workshop entry remains text-only until a source figure is available.

The PhD thesis, *Topics in Computational Geometric Vision* (Technion, August 2017; advisor Ron Kimmel), is hosted as `Wetzler-PhD-2017.pdf`. This is the unchanged 151-page PDF recovered from Aaron's personal Google Drive, alongside the existing 2005 undergraduate thesis. No analytics or tracking script has been added.

## Run locally

```sh
npm run dev
```

Open <http://127.0.0.1:4173/>.

No package installation or build is required to serve the site on GitHub Pages. The HandNet viewer includes its browser dependencies locally.

## Published site

The production site is published from the `main` branch of the `twerdster/twerdster.github.io` repository:

<https://twerdster.github.io/>

Pushing to `main` updates the GitHub Pages site. The repository includes a canonical URL, structured person data, `robots.txt`, and `sitemap.xml` so search engines and software agents can identify the public site and its main resources.

## Tailscale access

The macOS LaunchAgent in `ops/com.aaronwetzler.website.plist` keeps the local server running on `127.0.0.1:4173`. Tailscale Serve proxies that server at:

<http://aw-mbp.tail02f936.ts.net:4173/>

The installed LaunchAgent is `~/Library/LaunchAgents/com.aaronwetzler.website.plist` and writes logs to `/tmp/aaron-website.log` and `/tmp/aaron-website.error.log`.

## Files

- `index.html`: current academic homepage.
- `styles.css`: responsive academic-page styling.
- `site.js`: shared progressive enhancements for themes, optional publication filters, inline citations, and active navigation. Cross-page navigation links are not treated as local section links.
- `assets/fonts/` and `assets/icons/`: self-hosted Google Fonts and Lucide SVG icons, with their licenses. Fonts and icons do not require external services at runtime.
- `data/site-content.json`: machine-readable publications, student projects, theses, videos, patents, resources and legacy redirects.
- `llms.txt`: compact index for agents and crawlers.
- `robots.txt` and `sitemap.xml`: search-engine discovery files.
- `HandNet/index.html`: academic dataset overview, embedded 20-sample viewer, public Hugging Face downloads, citation and CC BY 4.0 data terms.
- `HandNet/explorer/`: standalone viewer with locally vendored dependencies and 20 real sample assets; paths are relative so the app can be embedded or opened directly over HTTP.
- `archive.html`: compatibility redirect from old archive URLs to the unified homepage sections.
- `Wetzler-PhD-2017.pdf`: original, complete PhD thesis PDF.
- `site.css` and `HandNet/style/`: retained legacy assets, unused by the current HTML pages.
- `ARCHIVE_RECOVERY_NOTES.md`: Wayback recovery notes.

Dedicated Camerai and Apple project material is intentionally absent from the public page until suitable text, images, videos, and public links are supplied.
