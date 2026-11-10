# Aaron Wetzler academic website

A static academic homepage built from the recovered Technion website. The public page is intentionally simple: biography, code and data, publications, thesis, project supervision, and education.

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
- `data/site-content.json`: machine-readable publication and resource index.
- `llms.txt`: compact index for agents and crawlers.
- `robots.txt` and `sitemap.xml`: search-engine discovery files.
- `archive.html`: recovered 2019 homepage.
- `ARCHIVE_RECOVERY_NOTES.md`: Wayback recovery notes.

Dedicated Camerai and Apple project material is intentionally absent from the public page until suitable text, images, videos, and public links are supplied.
