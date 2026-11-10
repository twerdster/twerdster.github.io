# Academic homepage and HandNet integration

The production academic homepage is https://twerdster.github.io/ and publishes from the main branch of twerdster/twerdster.github.io (GitHub Pages legacy root source). AGENTS.md requires README.md, data/site-content.json and llms.txt to remain synchronized.

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
