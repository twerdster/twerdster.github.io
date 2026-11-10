# Academic homepage and HandNet integration

The production academic homepage is https://twerdster.github.io/ and publishes from the main branch of twerdster/twerdster.github.io (GitHub Pages legacy root source). AGENTS.md requires README.md, data/site-content.json and llms.txt to remain synchronized.

HandNet's maintained dataset page is HandNet/index.html. This 2026-11-10 update aligns the dataset terms with Aaron's expressly selected CC BY 4.0 Hugging Face release at https://huggingface.co/datasets/twerdster/HandNet. All seven native distribution archives remain on Hugging Face; this website does not host or download those archives.

The academic browser viewer lives under HandNet/explorer/. It bundles exactly 20 precomputed sample rows: five test originals plus matching perturbations, three validation originals plus matching ground-truth-derotated samples, and four derotated training samples. There are eight matched pairs. Samples, point clouds, images, original heatmaps, metadata, and Three.js are stored locally with this site. Runtime rendering needs only same-origin static files and no dataset account, backend, Hugging Face request or CDN.

The main HandNet page embeds explorer/index.html?embed=1 and links the standalone viewer. The larger Hugging Face Space remains a 96-sample research viewer. Data are CC BY 4.0; new browser code is MIT; historical MATLAB code retains its own terms.

Source preview assets are derived from the verified HandNet release and preserve source frame identifiers. The 20-row pack is a visualization subset, not a benchmark split or the full native depth arrays. Source heatmap peaks differ slightly from geometric sensor projection. The canonicalization demo uses ground truth and does not run learned model inference. No full joint skeleton is inferred.

Local development: npm run dev (port4173). For isolated task QA, a separate Python static server can use another port. Preserve the unrelated installed LaunchAgent/server noted in README.md.

Local validation passed for the 20-row standalone viewer and embedded page: desktop/mobile controls, recorded measurement/provenance tables, paired samples, stable intrinsic iframe height, no horizontal overflow, no console or missing-asset errors, and all external requests blocked. The 213-file viewer is 1,933,773 bytes including runtime and legal notices; all 202 data files match the verified subset. Both SUMMARY.md and SKILL.md were reviewed before commit. Publication to main is authorized; push and live Pages build checks follow this commit.
