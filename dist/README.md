# danielgasser.com — static build (Cloudflare Pages)

Pure static rebuild of the old Node/Express "Fixer" site. **No runtime required** — just serve these files.

## Contents
- `index.html` — English (`/`)
- `de/index.html` — German (`/de`)
- `fr/index.html` — French (`/fr`)
- `imgs/favicon/*` — favicons + web manifest
- `_redirects` — Cloudflare Pages routing (reproduces the old Express routes)

## Cloudflare Pages settings
- **Build command:** _(none — static)_
- **Build output directory:** `dist`
- **Framework preset:** None

`_redirects` reproduces the old `server.js`: `/de` and `/fr` serve their pages (200, no redirect),
and any unknown path falls back to the English page (200), exactly like `app.get('*')`.

## Parity with the old Node site
- Content/copy/SEO (titles, `lang`, favicons) 1:1 across EN/DE/FR.
- GA4 tag `G-C2392SJZGD` preserved on all three pages.
- Contact = `tel:` + `mailto:fixer@daniel-gasser.com` (no form; nothing to re-platform).

## Intentional changes vs. the old site
- Favicon/manifest paths made absolute (`/imgs/favicon/...`) so they resolve from `/de/` and `/fr/`.
- `site.webmanifest` fixed: real name + corrected icon paths (was placeholder `MyWebSite` with broken `/web-app-manifest-*.png` roots).
- Dropped the unused `regular-free-icon-svgs/` pack (606 SVGs, referenced by nothing). Still in git history.

## Rollback
Original Node site tagged `node-site-pre-static-2026-06-27` in this repo
(remote: github.com/danielgasser/danielgasser.com). `public/` + `server.js` remain untouched.
