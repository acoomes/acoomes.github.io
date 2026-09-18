# andrewcoomes.com

Andrew Coomes’ personal site. A static, responsive portfolio on GitHub Pages.

## Preview

Run from this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://localhost:4173. No installation or build step is needed.

## Editing

- `index.html`: portfolio content, career background, navigation, and contact links.
- `style.css`: responsive layout, fonts, object hover effects, and reduced-motion handling.
- `script.js`: project details, dialog keyboard behavior, navigation state, and email copying.
- `assets/SOURCES.md`: image, logo, font, and icon provenance.

Project links remain usable without JavaScript. Native dialogs add project overviews with live-site and source links. Fonts and all images are served locally.

This version is on `codex/portfolio-next`. The live domain remains https://andrewcoomes.com; publishing uses the repository’s existing GitHub Pages configuration. Do not change `CNAME`.

See `design-qa.md` for design and interaction verification.
