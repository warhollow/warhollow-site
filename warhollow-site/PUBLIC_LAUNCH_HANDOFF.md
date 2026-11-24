# Public Launch Website — Handoff Note

Last updated: November 23, 2026

## Current state

- The redesigned public-launch website is live at `https://warhollow.com/`.
- Pull request `#1` launched the redesign through merge commit `5f909a4`.
- Pull request `#2` deployed the Firefox presentation fix through merge commit `91f56f3`.
- Cloudflare Pages reported successful production deployments for both merges.
- Development continues in the worktree at `/home/warhollow/warhollow/warhollow-website-public-launch` on `feature/public-launch-website`.

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
- Replaced the text-heavy homepage status panel with an animated headquarters map connecting AI, tools, applications, and files.
- Added explicit Firefox-compatible ring, connection, node, core, and signal motion while retaining reduced-motion behavior.
- Kept product cards horizontal at full desktop widths and in two columns at compact desktop/tablet widths; small phones use one column.
- Published the Privacy Policy and Terms of Service dated November 23, 2026.
- Improved legal-page typography, section navigation, list rendering, disclaimer treatment, and responsive behavior.

## Validation completed

- JavaScript syntax checks passed.
- `git diff --check` passed.
- All local page and asset links resolved.
- Homepage, Singapore page, legal pages, scripts, stylesheet, sitemap, and robots file returned HTTP 200 from the local preview server.
- The global homepage and primary navigation contain no Singapore-specific promotion.
- Product data is shared so the homepage and Singapore page remain consistent.
- Production homepage, Singapore page, Privacy Policy, and Terms of Service returned HTTP 200 after launch.
- The live homepage was verified to contain the new headquarters map.
- The live Singapore page and November 23 legal-policy references were verified after deployment.
- The Firefox-specific compatibility deployment completed successfully in Cloudflare Pages.

## Preview

When the local preview server is running from `warhollow-site/`:

- Homepage: `http://127.0.0.1:4173/`
- Singapore: `http://127.0.0.1:4173/singapore.html`

Start it with:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

## Remaining follow-up

1. Confirm the exact Ubuntu distribution/version for each headquarters configuration. The canonical catalogue confirms Ubuntu Linux but does not record a release version, so none was invented.
2. Configure and validate Sentinel purchasing at $399/month in the customer portal and billing system. The public website now presents Sentinel as available, but this branch does not change portal, Stripe, provisioning, or infrastructure behavior.
3. The user reviewed the production site in Firefox and approved the presentation after the compatibility fix. Continue cross-browser review after future visual changes.
4. The homepage and Singapore page still use `noindex`, and `robots.txt` still disallows crawling. Remove those controls and advertise `sitemap.xml` only when public search indexing is explicitly approved.
5. Keep the November 23, 2026 legal text files as the canonical website sources unless replacement policies are approved.
6. Use pull requests and require a successful Cloudflare Pages check for subsequent production changes.

## Production references

- Homepage: `https://warhollow.com/`
- Singapore page: `https://warhollow.com/singapore`
- Privacy Policy: `https://warhollow.com/privacy`
- Terms of Service: `https://warhollow.com/terms`
- Launch pull request: `https://github.com/warhollow/warhollow-site/pull/1`
- Firefox fix pull request: `https://github.com/warhollow/warhollow-site/pull/2`
