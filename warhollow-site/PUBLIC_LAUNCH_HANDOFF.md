# Public Launch Website — Handoff Note

Last updated: November 2, 2026

## Current state

- Work is isolated in the worktree at `/home/warhollow/warhollow/warhollow-website-public-launch`.
- Active branch: `feature/public-launch-website`
- Latest implementation commit: `016b5fc` (`Refine homepage status motion and launch Sentinel pricing`)
- The production checkout remains on `main` at `b1355f5` and has not been modified, merged, pushed, or deployed by this workstream.
- The feature worktree is clean at this checkpoint.

## Completed

- Redesigned the global homepage around “Your Personal AI Headquarters” and “AI infrastructure, simplified.”
- Added a shared Ghost, Shadow, and Sentinel product catalogue used by both marketing pages.
- Added the Singapore landing page at `/singapore.html` with the approved U.S.-hosted positioning and six use cases.
- Preserved links to the customer portal, contact email, Privacy Policy, and Terms of Service.
- Added responsive layouts, accessibility treatments, canonical metadata, Open Graph metadata, structured data, and a prepared sitemap.
- Kept indexing disabled with page-level `noindex` on the two new marketing pages and a site-wide `robots.txt` disallow.
- Preserved the Warhollow brand cursor in shared branding while respecting reduced-motion preferences.
- Removed both blinking cursors from the homepage “Ready to build” console card.
- Added a restrained looping activity bar beside “Ready to build,” with a static reduced-motion state.
- Updated Sentinel to **available at $399/month** with 16 vCPU, 64 GB RAM, and 320 GB storage.

## Validation completed

- JavaScript syntax checks passed.
- `git diff --check` passed.
- All local page and asset links resolved.
- Homepage, Singapore page, legal pages, scripts, stylesheet, sitemap, and robots file returned HTTP 200 from the local preview server.
- The global homepage and primary navigation contain no Singapore-specific promotion.
- Product data is shared so the homepage and Singapore page remain consistent.

## Preview

When the local preview server is running from `warhollow-site/`:

- Homepage: `http://127.0.0.1:4173/`
- Singapore: `http://127.0.0.1:4173/singapore.html`

Start it with:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

## Remaining before launch

1. Confirm the exact Ubuntu distribution/version for each headquarters configuration. The canonical catalogue confirms Ubuntu Linux but does not record a release version, so none was invented.
2. Configure and validate Sentinel purchasing at $399/month in the customer portal and billing system. The public website now presents Sentinel as available, but this branch does not change portal, Stripe, provisioning, or infrastructure behavior.
3. Push the feature branch and deploy it to the designated staging environment.
4. Perform visual browser review at desktop, tablet, and mobile widths. No installed headless browser was available during local validation.
5. After explicit launch approval, remove the two `noindex` tags, change `robots.txt` to allow crawling, and advertise `sitemap.xml`.
6. Merge and deploy only after explicit approval. Do not publish directly from this checkpoint.
