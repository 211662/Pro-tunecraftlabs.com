---
name: site-brand-seo-rebrand
description: Rebrand and apply truthful on-page SEO to a website the user owns or is authorized to manage. Use for replacing a verified brand, domain, metadata, canonical URLs, structured data, sitemap entries, and internal calls to action; do not use for impersonation, copied branding, keyword stuffing, or deceptive SEO.
---

# Site Brand & SEO Rebrand

Use this skill only after the user has identified the site/brand they own or are authorized to edit.

## Workflow

1. Inspect the current project before changing it. Identify entry pages, shared styles/scripts, assets, current domain, existing metadata, structured data, robots.txt, sitemap.xml, and outbound CTA URLs.
2. Confirm the rebrand inputs from the user when supplied: brand name, canonical domain, primary keyword, contact address, and intended CTA destination. Do not infer an external brand or domain.
3. Update only truthful site identity and SEO signals:
   - `<title>`, meta description, Open Graph metadata, canonical link, and visible brand name.
   - `Organization`, `WebSite`, `WebPage`, and FAQ JSON-LD when its questions and answers are visibly present on the page.
   - `robots.txt` and `sitemap.xml`, including every indexable local HTML page.
   - Internal navigation and user-authorized CTA destinations.
4. Keep the keyword natural. Use it in places that describe the service, not repeated filler. Do not claim ownership of an unrelated brand, duplicate another site’s identity/content, or create misleading schema.
5. Preserve valid existing work and avoid overwriting unrelated user changes.
6. Validate before handoff:
   - Parse every JSON-LD block as JSON.
   - Confirm canonical URLs match the user-provided domain.
   - Confirm sitemap URLs map to local pages and robots.txt references the sitemap.
   - Check local asset and link targets.

## Output

Report changed files, validation results, and any fields that require the user’s real-world information (such as a verified contact address, social profiles, or logo URL).
