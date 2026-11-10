# Website and embedded HandNet maintenance

Read SUMMARY.md then this file, followed by AGENTS.md/README.md and the site content index before editing.

Use the current academic design and factual tone. Keep HandNet/index.html, root index.html resource links, data/site-content.json and llms.txt consistent when data resources or licensing change. Preserve original paper/poster/slides/supplement links and unrelated homepage/archive content.

The 20-sample viewer is a self-contained static copy of the academic Hugging Face viewer using only a local data/samples.json subset. Copy only referenced subset assets, local archive metadata, locally vendored Three.js and MIT/CC BY license notices. Do not copy full dataset archives or add runtime requests to Hugging Face or CDNs.

The embed flag hides duplicate publication/method/download headers while retaining scientific visualization controls, figure captions, measurements and provenance. The iframe height message is accepted only from the same origin and the exact viewer frame. Report intrinsic content height without a viewport feedback loop.

Before each commit review/update SUMMARY.md and SKILL.md; explicitly check both. Validate desktop/mobile layout, interactions and network isolation before pushing. Push main to publish the user-authorized site changes and verify the Pages build plus real public URLs. Never force-push or rewrite existing history.

HandNet data terms match the explicit 2026 CC BY 4.0 release. New viewer source is MIT; no relicensing of historical MATLAB source is implied. Preserve native archive hashes and scientific conventions.

The current academic viewer and parent iframe passed the above local checks before the initial integration commit. Its data pack is exactly 20 rows/eight pairs; the full Hugging Face viewer remains 96 rows. Preserve this distinction in future content and verification. Check the actual deployed Pages URL after pushing, not only the source checkout.
