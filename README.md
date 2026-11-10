# Aaron Wetzler academic website

A static academic homepage built from the recovered Technion website. The public page is intentionally simple: biography, code and data, publications, thesis, project supervision, education, and patents.

The layout is inspired by Ariel Ephrat's academic homepage: a sticky section navigation, circular profile photo, serif headings, numbered sections, illustrated research highlights, and compact publication rows. Publications can be filtered by research area, and existing BibTeX files open inline with copy and download controls. The theme switch saves the light/dark preference locally. All content and original citation links remain available without JavaScript.

## Run locally

```sh
npm run dev
```

Open <http://127.0.0.1:4173/>.

The site has no runtime dependencies and can be hosted directly with GitHub Pages.

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
- `site.js`: progressive enhancements for themes, publication filters, inline citations, and active navigation.
- `assets/fonts/` and `assets/icons/`: self-hosted Google Fonts and Lucide SVG icons, with their licenses. Fonts and icons do not require external services at runtime.
- `data/site-content.json`: machine-readable publication, patent, and resource index.
- `llms.txt`: compact index for agents and crawlers.
- `robots.txt` and `sitemap.xml`: search-engine discovery files.
- `archive.html`: recovered 2019 homepage.
- `ARCHIVE_RECOVERY_NOTES.md`: Wayback recovery notes.

Dedicated Camerai and Apple project material is intentionally absent from the public page until suitable text, images, videos, and public links are supplied.
