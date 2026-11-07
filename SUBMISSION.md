# AWS Student Builder Challenge — Submission Description

**Project:** Khadija Sajid — AI &amp; Data Engineering Portfolio
**Challenge:** Build Your Tech Superpower (October–November 2026)
**Author:** Khadija Sajid

---

## What it is

A premium, production-quality personal portfolio that positions me as an AI &amp; Data Engineer, Cloud &amp; AWS Builder, and Community Leader. It is a responsive single-page application built with React, TypeScript, Vite, and Tailwind CSS, and it is deployed on **AWS Amplify Hosting**.

The portfolio tells my story across nine sections: a hero with an interactive terminal, an about section, the creative "Discover My Superpowers" feature, a technical capabilities grid, featured projects with real links, community impact with stats and a timeline, achievements, writing channels, and a contact section.

---

## What makes the creative feature unique

The creative feature is titled **"Everyone Has a Superpower. Discover Mine."**

Instead of a static list of skills, the visitor unlocks three facets of my journey by clicking cards:

- **The Builder** — how I turn ideas into working systems (AI applications, data pipelines, AWS architecture, featured projects Data Quality Inspector and Project Ullo).
- **The Leader** — how I build communities, not just applications (AWS Student Builder Group Lead, 15 AWS events in 8 months, 3,000+ community members, AWS Student Community Day Sahiwal 2026 with 1,000+ registrations in a week and 500+ attendees).
- **The Enabler** — how I help others become builders (technical mentoring, hands-on workshops, AWS technical talks, 170+ girls mentored in person).

What makes it unique is that the three roles map directly to my professional identity, and switching between them changes not just text but the *metrics* and *featured projects* shown — so the visitor experiences three coherent "sides" of one person rather than three disconnected tabs. The interaction is built with accessible tab semantics, a smooth re-mount animation on switch, a clear "Unlocked" indicator on the active card, and a secondary inline switch for quick navigation. It works fully on mobile and desktop and respects reduced-motion preferences.

---

## How visitors interact with it

1. The visitor sees three cards with a clear hint: *"Curious? Pick a superpower to unlock a different side of my journey."*
2. They click any card. The selected card gains an ember border, a glow shadow, and an "Unlocked" badge; the content panel below updates with that superpower's points and headline metrics.
3. They can switch superpowers either by clicking another card or by using the inline `switch:` row inside the panel.
4. The panel re-animates smoothly on every switch and is keyboard accessible.

---

## How the portfolio is hosted on AWS

The portfolio is a static front-end build hosted on **AWS Amplify Hosting**:

1. The code lives in a GitHub repository.
2. AWS Amplify Hosting is connected to the repository. Amplify reads the included `amplify.yml` build specification, which runs `npm ci` then `npm run build` and serves the `dist/` output directory.
3. Amplify provisions a public HTTPS URL (`https://<app-id>.amplifyapp.com`) and automatically redeploys on every push to the connected branch.
4. The production build has been verified locally with `npm run build` and `npm run preview`. The live Amplify URL is added to the README once the deployment is confirmed.

## AWS services used

- **AWS Amplify Hosting** — deployment, CI/CD, and HTTPS for the portfolio.
- AWS services **referenced by portfolio content and projects** include Amazon Bedrock, AWS Lambda, Amazon API Gateway, Amazon S3, Amazon RDS, and AWS IAM (these describe my project work, not the hosting of this site).

> I only claim an AWS service was used where it is verifiable. The portfolio site itself is a static build on Amplify Hosting.

---

## What I learned during development

- Designing an interactive feature that stays accessible: real tab semantics, keyboard focus, visible state, and reduced-motion handling all had to line up.
- Keeping a design system disciplined: a small token set (near-black + warm orange) carried through every section produced a more premium feel than adding new colors per section.
- Treating content as typed data. Centralizing profile, links, projects, achievements, and metrics in one folder made the components cleaner and prevented invented links or numbers from creeping in.
- Preparing a Vite + React app for AWS Amplify Hosting is straightforward with a correct, minimal `amplify.yml` — the build output (`dist/`) is what matters.

---

## Challenges and how I addressed them

- **Making the reveal feel deliberate, not tabbed.** I used a React `key` swap on the panel so it re-mounts and re-animates on each superpower switch, combined with an inline secondary switch for fast navigation.
- **Terminal typing that never breaks accessibility.** The typing loop degrades to a static render when the OS requests reduced motion, and the cursor uses a CSS blink that also halts under reduced motion.
- **Avoiding fabricated content.** Every link and metric lives in central data files. Items I have not verified are flagged `pending: true` and visually marked "to be configured", so the submission never invents verification URLs, certificate IDs, or demo links.
- **Responsive without horizontal overflow.** The grid backdrops and aurora accents are contained with `overflow-hidden` and mask images; the layout is built on Tailwind responsive grids that collapse cleanly to mobile.

---

## Live URL

> `https://<your-amplify-app-id>.amplifyapp.com` *(add once deployed)*
