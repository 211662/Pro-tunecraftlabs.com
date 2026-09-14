# TuneCraft Labs — Website Specification for Codex

## Objective

Build a polished, responsive, single-page company website for **TuneCraft Labs**, a mobile-app studio that makes simple music tools for everyday players.

Primary goals:

- Establish a credible publisher brand for Google Play and future app stores.
- Showcase a growing portfolio of music utility apps.
- Provide a clear path to app store downloads and support.
- Include legal/support links expected for mobile apps that may use ads, analytics, subscriptions, or device permissions.
- Feel like a modern product landing page, not a generic corporate template.

This is a **brand hub / landing page**, similar in purpose to a LadiPage. It should be lightweight, fast, SEO-friendly, mobile-first, and easy to extend with individual app pages later.

---

## Brand

### Brand name

**TuneCraft Labs**

### Brand positioning

> Simple music tools for better practice.

Alternative supporting line:

> Tune, practice, and play with confidence.

### Audience

- Beginner and casual guitar, bass, and ukulele players.
- Musicians needing simple tuning and practice utilities.
- Users looking for metronomes, chord tools, ear-training tools, and music practice apps.
- International Android users, with English as the initial site language.

### Brand boundary

TuneCraft Labs is focused on **practical music tools for players**:

- Instrument tuners.
- Metronomes and BPM trainers.
- Chord, scale, and progression tools.
- Pitch and ear-training tools.
- Practice and rhythm tools.

Do **not** position the company as an AI song generator, AI music studio, music-distribution service, or music-streaming platform.

### Tone

- Clear, calm, musician-friendly.
- Modern and trustworthy.
- Useful rather than hype-driven.
- Avoid exaggerated claims such as “#1,” “best,” “professional-grade,” “millions of users,” or “perfect accuracy” unless these are backed by real data.

---

## Technical requirements

Build with:

- Next.js (App Router) + TypeScript.
- Tailwind CSS.
- Lucide React icons.
- No external UI component library required.
- Static-first design. The site should work without a database.
- Use reusable components and structured data so additional app landing pages can be added easily.

Required quality:

- Fully responsive: 320px mobile through large desktop.
- Good Lighthouse performance practices.
- Semantic HTML and accessible labels.
- Keyboard-navigable menu and buttons.
- Respect `prefers-reduced-motion`.
- Avoid excessive heavy animation.
- Use CSS gradients, inline SVG/CSS illustration, or generated placeholders instead of external stock images.
- Do not require API keys, authentication, or payment integration.

Use these routes:

```text
/
/apps
/privacy
/terms
/support
/account-deletion
```

The homepage can be the most detailed page. The other routes should be clean, complete starter pages rather than dead links.

---

## Visual direction

### Style

Create a dark, premium music-tech visual style:

- Main background: very dark navy/charcoal, not pure black.
- Accent colors: electric violet, indigo, cyan/teal, and a subtle warm coral/pink accent.
- Use soft radial gradients and low-opacity glow effects.
- Use glass-like cards sparingly with subtle borders.
- Use waveform, strings, fretboard, tuner dial, or sound-wave motifs as decorative abstract shapes.
- The site should feel closer to a clean modern mobile-product studio than a nightclub/DJ brand.

### Suggested colors

```css
--bg: #080A12;
--surface: #101423;
--surface-2: #151A2D;
--text: #F5F7FF;
--muted: #AAB1C5;
--line: rgba(255,255,255,0.10);
--violet: #875CFF;
--indigo: #4F46E5;
--cyan: #2DD4BF;
--coral: #FF6B8A;
--success: #62E6B2;
```

### Typography

- Use a modern sans-serif system stack or Inter if loaded through `next/font`.
- High contrast, readable paragraph spacing.
- Headings should be bold but not overly condensed.

### Logo treatment

Create a text-based logo:

```text
TuneCraft
LABS
```

or a horizontal logo:

```text
[small waveform/tuning icon] TuneCraft Labs
```

Use a small custom inline SVG mark that combines a tuning fork / sound wave / abstract “T” shape. Do not use copyrighted logos or third-party brand marks.

---

## Homepage layout

### 1. Sticky navigation

Desktop nav:

```text
Logo | Apps | About | Support | Privacy | [Explore Apps]
```

Mobile nav:

- Logo left.
- Hamburger menu right.
- Collapsible accessible menu.

Navigation behavior:

- Sticky with a slightly blurred dark background once scrolling.
- “Explore Apps” scrolls to the app portfolio section.
- “About” scrolls to the mission section.
- “Support” goes to `/support`.
- “Privacy” goes to `/privacy`.

### 2. Hero section

Layout:

- Desktop: two columns.
- Left: headline, text, CTAs, small trust/value pills.
- Right: an abstract music-tool visual / phone mockup with a tuner UI.
- Mobile: text first, visual second.

Exact copy:

```text
TuneCraft Labs

Music tools made for everyday players.

Tune instruments, build better practice habits, and make every session more enjoyable with simple, focused apps.

[Explore our apps]  [Get support]

No complicated setup · Made for practice · Built for musicians
```

Hero visual requirements:

- Build a fictitious mobile phone mockup labeled “Guitar Tuner.”
- Show a tuner dial with note `A`, frequency `440 Hz`, and status `IN TUNE`.
- Include a tiny waveform or string visual behind the phone.
- It must look like a UI concept; do not claim it is a released screenshot.
- Add an unobtrusive label: `Concept preview`.

### 3. Brand/value strip

A horizontal section with three concise value cards:

```text
Focused tools
One clear job, designed to be easy to use.

Built for practice
Helpful tools for daily sessions, not unnecessary complexity.

Growing portfolio
From tuning and tempo to chords and ear training.
```

Use small Lucide icons: SlidersHorizontal, Music2, Layers3 or similar.

### 4. Apps section

Section title and copy:

```text
Apps for every practice session

A growing set of practical tools for tuning, rhythm, chords, and musical progress.
```

Display four responsive app cards. The first card is the primary/available app. The other three are clearly marked “Coming soon” and should not pretend to have store availability.

#### Card 1 — available

```text
Guitar Tuner
Guitar, Bass & Ukulele

Tune your instrument with a simple, focused tuner built for everyday practice.

Features:
• Standard and alternate tunings
• Clear note and cents display
• Designed for guitar, bass and ukulele

[Get it on Google Play]
```

Implementation note:

- Use a placeholder constant for the Play Store URL: `https://play.google.com/store`.
- Include `target="_blank"` and safe `rel="noopener noreferrer"`.
- Add an inline note in the code showing where to replace it with the real store listing URL.

#### Card 2 — coming soon

```text
Chord Compass
Chords, scales & progressions

Explore chord shapes, discover useful scales, and find progressions for your next practice session.

[Coming soon]
```

#### Card 3 — coming soon

```text
Tempo Practice
Metronome & BPM trainer

Keep steady time, train rhythm, and build consistency at every tempo.

[Coming soon]
```

#### Card 4 — coming soon

```text
Pitch Trainer
Ear training & vocal pitch

Develop your ear, recognize notes, and improve pitch awareness through focused practice.

[Coming soon]
```

App-card visual requirements:

- Each card has a distinct abstract icon/app-icon illustration made with CSS/SVG.
- Guitar Tuner: tuning fork / gauge.
- Chord Compass: chord grid / compass.
- Tempo Practice: metronome.
- Pitch Trainer: waveform / ear.
- Card badges: `Available` in green for Guitar Tuner; `Coming soon` in muted violet for the rest.

### 5. How it works section

Use 3 numbered steps with a compact visual timeline:

```text
01 — Pick the tool
Choose a focused app for tuning, rhythm, chords, or pitch practice.

02 — Start practicing
Open the app and get useful feedback without a complicated setup.

03 — Play with confidence
Use small, repeatable practice sessions to support your musical progress.
```

### 6. About / mission section

Two-column layout with an abstract “sound wave grid” visual.

Exact copy:

```text
Made for the moments between the songs.

TuneCraft Labs creates practical music apps for the everyday moments that help musicians keep moving: checking a tuning, finding a chord, practicing rhythm, and building confidence one session at a time.

We believe music tools should be clear, reliable, and welcoming—whether you are picking up an instrument for the first time or returning to practice after a long day.
```

Add a small line:

```text
Tune. Practice. Play.
```

### 7. Support CTA section

Use a large distinct gradient card.

Copy:

```text
Need help with an app?

Visit our support center for installation help, common questions, privacy requests, and feedback.

[Visit Support]
```

Link to `/support`.

### 8. Footer

Footer content:

```text
TuneCraft Labs
Simple music tools for better practice.

Apps
Guitar Tuner
Chord Compass
Tempo Practice
Pitch Trainer

Company
About
Support
Privacy Policy
Terms of Service
Account & Data Deletion

Contact
support@tunecraftlabs.com
privacy@tunecraftlabs.com

© 2026 TuneCraft Labs. All rights reserved.
```

Use internal route links where applicable. App names can link to `/apps` until individual pages are built.

---

## Apps page

Route: `/apps`

Purpose: show the full product directory in a clean grid. Reuse the same four app cards, with a more prominent page heading.

Copy:

```text
Our apps

Focused music tools for tuning, practice, rhythm, and musical exploration.
```

Add a note below the grid:

```text
We are building new tools thoughtfully. Availability may vary by device and region.
```

---

## Support page

Route: `/support`

Build a support page with:

```text
Support

We are here to help you get the most from TuneCraft Labs apps.
```

Include an FAQ accordion with these questions and answers:

1. `How do I get help with an app?`
   - `Email support@tunecraftlabs.com with the app name, your device model, Android version, and a short description of the issue. Screenshots are helpful when available.`

2. `Why does a tuner need microphone access?`
   - `Tuner apps use your device microphone to detect the pitch of an instrument. Microphone access is used only for the tuning feature when enabled. Review the applicable app privacy policy for full details.`

3. `How do I restore a purchase?`
   - `Open the app and look for Restore Purchases in Settings or the purchase screen. If you still need help, contact support with the Google Play order number when available.`

4. `How do I report a bug or send feedback?`
   - `Send feedback to support@tunecraftlabs.com. Include the app name, device, Android version, and steps that help us reproduce the issue.`

5. `How can I request deletion of my data?`
   - `Visit the Account & Data Deletion page or email privacy@tunecraftlabs.com.`

Include contact cards for:

```text
General support: support@tunecraftlabs.com
Privacy requests: privacy@tunecraftlabs.com
```

Use `mailto:` links.

---

## Privacy page

Route: `/privacy`

Create a clean, readable starter privacy policy page. It must contain a strong visual disclaimer at the top:

```text
Important: This is a starter template and must be reviewed and updated to match each released app’s actual data practices, SDKs, permissions, advertising partners, analytics configuration, and applicable laws before publication.
```

Then include structured sections:

```text
Privacy Policy
Last updated: September 14, 2026

1. Scope
This policy describes how TuneCraft Labs handles information in connection with its websites and mobile applications.

2. Information apps may process
Depending on the app and features you use, this may include device and app information, diagnostic information, usage events, purchase status, and permissions such as microphone access for instrument tuning. Do not state that data is collected unless the released app actually does so.

3. Microphone access
Where a tuner or audio feature requires microphone access, the microphone is used to provide the requested audio or tuning functionality. The final wording must accurately describe whether audio is processed on-device, stored, transmitted, or shared.

4. Advertising and analytics
Some apps may use advertising, analytics, crash reporting, or measurement providers. The published policy must name the actual providers and accurately describe the data they receive and why.

5. Purchases
Purchases made through Google Play are processed by Google Play. TuneCraft Labs may receive purchase-status information needed to provide purchased features.

6. Data sharing
Explain actual sharing practices, including service providers, legal requirements, and business transfers, if applicable.

7. Data retention
Describe actual retention periods or the criteria used to determine them.

8. Security
Describe reasonable safeguards, without making guarantees that cannot be supported.

9. Children’s privacy
State the actual age policy for each app and comply with relevant requirements if an app is directed to children.

10. Your choices and requests
Users can contact privacy@tunecraftlabs.com for privacy questions and eligible requests.

11. Changes to this policy
We may update this policy and will revise the Last updated date when we do.

12. Contact
TuneCraft Labs
privacy@tunecraftlabs.com
```

Do not make legal claims that cannot be verified. Keep it prominently labeled as a starter template.

---

## Terms page

Route: `/terms`

Create a starter Terms of Service page, with a visible disclaimer at the top:

```text
Important: This is a starter template and must be reviewed by a qualified professional and updated for the actual apps, subscriptions, advertisements, content, and jurisdictions before publication.
```

Use sections:

```text
Terms of Service
Last updated: September 14, 2026

1. Acceptance of terms
2. Eligibility
3. License to use the apps
4. App functionality and availability
5. Purchases, subscriptions, and refunds
6. Advertising and third-party services
7. Acceptable use
8. Intellectual property
9. Disclaimers
10. Limitation of liability
11. Changes to the service or terms
12. Contact
```

Use cautious, non-overreaching starter text. Explain that Google Play may handle payment, cancellation, and refund processes for purchases made through Google Play, subject to applicable Google Play policies.

---

## Account & Data Deletion page

Route: `/account-deletion`

This page should work even if the first app has no user account. It provides a public process for privacy/data requests and improves store readiness.

Copy:

```text
Account & Data Deletion

TuneCraft Labs respects your privacy and provides a way to request account deletion or deletion of eligible personal data.

If an app does not create an account or store personal data associated with you, there may be no account data to delete. Some information may be retained where required for security, fraud prevention, legal obligations, transaction records, or legitimate operational purposes.
```

Request process:

```text
To submit a request, email privacy@tunecraftlabs.com with:

• The name of the TuneCraft Labs app
• The email address or account identifier used in the app, if applicable
• Your device/platform (for example, Android)
• The type of request: account deletion, data deletion, access, or correction
• Any information that helps us identify the relevant record
```

Add:

```text
We may need to verify your request before acting on it. This page is a starter process and must be updated to reflect the actual data practices of each released application.
```

---

## SEO metadata

Set metadata per page.

Homepage:

```text
Title: TuneCraft Labs | Simple Music Tools for Better Practice
Description: TuneCraft Labs creates simple music apps for tuning instruments, practicing rhythm, exploring chords, and building musical confidence.
```

Apps:

```text
Title: Our Apps | TuneCraft Labs
Description: Explore TuneCraft Labs music tools for tuning, chords, tempo, rhythm, and practice.
```

Support:

```text
Title: Support | TuneCraft Labs
Description: Get help with TuneCraft Labs music apps, purchases, permissions, privacy requests, and feedback.
```

Add Open Graph metadata with a generated brand-themed image or fallback site metadata. Do not use external image URLs.

Add JSON-LD `Organization` schema on the homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TuneCraft Labs",
  "url": "https://tunecraftlabs.com",
  "email": "support@tunecraftlabs.com",
  "description": "TuneCraft Labs creates simple music tools for better practice."
}
```

Do not include false social profiles, reviews, ratings, app downloads, physical addresses, founders, or awards.

---

## Content and compliance notes

- The privacy and terms pages are placeholders/starter templates only. Clearly retain the warnings until professionally reviewed.
- Do not claim that microphone audio stays on-device unless the actual app architecture confirms that.
- Do not state data collection/sharing details that have not been verified in the implemented apps and SDK configuration.
- Do not include invented testimonials, ratings, user counts, awards, client logos, app screenshots, or claims of store availability.
- The “Guitar Tuner” card may say `Available` only if there is an actual published app. If it is not published yet, change its badge and CTA to `Coming soon` / `Join the waitlist` before launch.
- Add a concise code comment near configuration constants explaining what must be replaced before production: Play Store URL, availability state, support emails, legal text, and real app screenshots.

---

## Suggested project structure

```text
app/
  layout.tsx
  page.tsx
  apps/page.tsx
  privacy/page.tsx
  terms/page.tsx
  support/page.tsx
  account-deletion/page.tsx
components/
  logo.tsx
  navbar.tsx
  footer.tsx
  app-card.tsx
  section-heading.tsx
  music-visuals.tsx
  faq-accordion.tsx
lib/
  site-config.ts
  apps.ts
public/
  (optional generated SVG assets only)
```

Create a `lib/site-config.ts` file containing:

```ts
export const siteConfig = {
  name: 'TuneCraft Labs',
  url: 'https://tunecraftlabs.com',
  description: 'Simple music tools for better practice.',
  supportEmail: 'support@tunecraftlabs.com',
  privacyEmail: 'privacy@tunecraftlabs.com',
  year: 2026,
};
```

Create a `lib/apps.ts` file containing app card data and status flags, so it is easy to change availability and URLs later.

---

## Acceptance checklist

Deliver a complete working Next.js project that:

- Has all six routes working.
- Uses the exact brand/copy direction above, with reasonable minor formatting improvements allowed.
- Looks polished on mobile and desktop.
- Has a functional mobile navigation menu.
- Has a functional FAQ accordion.
- Uses no broken links.
- Uses placeholder Google Play URL only where explicitly specified and marks it clearly in code for replacement.
- Includes all required privacy/support/legal routes in navigation or footer.
- Does not use invented social proof, user reviews, user/download counts, brand logos, or false claims.
- Has no external image dependency.
- Keeps content easy to edit through configuration files.
- Is ready to deploy to Vercel or export as a static site with minimal changes.
