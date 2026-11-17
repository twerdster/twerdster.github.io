# Website maintenance

Read ../SUMMARY.md, ../SKILL.md and ../AGENTS.md before changes. The site is a
static file tree: there is no content-generation or application-server build.

## Source files

- `index.html`: academic records and fallback links; update visible resources here.
- `data/site-content.json`: structured publications, projects, software, theses,
  videos, patents and provenance. Synchronize it with HTML and `llms.txt`.
- `styles.css` and `site.js`: shared layout, themes, filtering and citations.
- `assets/fonts/` and `assets/icons/`: self-hosted assets with existing notices.
- `HandNet/index.html`: dataset page, downloads and embedded viewer.
- `HandNet/explorer/`: local sample JSON, PNG/XYZ assets and browser code.
- `archive.html`: compatibility redirects for former archive section links.
- `robots.txt`, `sitemap.xml` and canonical/structured HTML metadata: discovery.
- `site.css` and `HandNet/style/`: retained legacy styles, not the current pages.

Keep publication, student-project and undergraduate-thesis thumbnail frames at 184 by 115 pixels
on desktop and phone. Preserve the approved original figures and their source
metadata. The NeurIPS figure is Aaron's supplied glove/robot JPEG, shown in full;
CoBe and Deep Stereo retain their verified source-panel crops. Do not redraw
scientific values or label display-only fitting as a new result.

Keep the homepage order About Me, Publications, Theses, Code & Data, Student
Projects, Experience & Education, Research Videos and Patents. Each outer
section retains its fragment ID and heading ID, with an independent native
`details[open]` control inside. Do not give these controls a shared `name`:
readers can leave several sections open. Existing capitalized fragment aliases
remain outside the controls. All sections start expanded; collapse state is
not saved between visits.

[STUDENT_PROJECTS.md](../STUDENT_PROJECTS.md) separates recovered source,
related prototypes, documents and unavailable code. Keep the HTML, JSON source
status and directory truthful. Four updated Python components have previously recorded tests
and notebooks; they are not complete rebuilds of the historical mobile apps.
GrayOwl remains documentation-only. No private recovery evidence belongs in
this site. Original credits and third-party terms must remain visible.

## Preview and checks

From the repository root, run `python3 -m http.server 4173 --bind 127.0.0.1`
or `npm run dev`. If a separate local server already uses that port, use another
port for task-specific checks. Do not replace a running service just to preview.

For changes affecting rendered pages or resources, check desktop and phone
widths, light/dark themes, publication filtering, citation fetch/copy/download,
image decoding and horizontal overflow. Test with JavaScript disabled: the
homepage records, citations and archive fallback should remain accessible.
Check each heading with pointer, Enter and Space, and verify a visible keyboard
focus indicator. With JavaScript enabled, navigation and fragment links must
reopen closed sections, including repeated clicks on the current hash and
links to records inside a section. Check that filtering and citation state
survive closing and reopening Publications. Printing opens all sections and
restores the reader's previous open/closed state afterward.
Check HandNet standalone and embedded URLs and confirm viewer controls work
with external requests blocked. Counts in the content index are content counts;
a passing browser check is not model or scientific-software validation.

Review staged changes, including new Markdown files, with `git diff --cached
--check`. Verify links and referenced files, then synchronize SUMMARY.md and
SKILL.md before committing. Keep commits under Aaron Wetzler's canonical
identity and preserve historical authors and revisions.

## Publish

Push normally to the existing `main` branch. GitHub Pages serves the repository
root; no production build command or package installation is required locally.
Check the Pages build and actual public homepage, HandNet and changed-resource
URLs. Do not infer deployment success solely from a successful push.

## Optional macOS local-server template

[ops/org.example.academic-site.plist](../ops/org.example.academic-site.plist)
is an optional LaunchAgent example for serving a local checkout. Set the Python
interpreter and website directory to absolute paths on your system before using
it. It binds to `127.0.0.1:4173` and writes to generic `/tmp/academic-site` log
files. Rename the label and log paths if you run multiple instances.

The normal Python command in the README works without a background service.
This repository update does not install, activate or restart a LaunchAgent.
A template is not evidence that a local or remote server is available.

Dedicated Camerai or Apple project material requires approved public text and
media before inclusion, as recorded in AGENTS.md/SKILL.md. No visitor tracking
or analytics is part of this repository's maintained site.
