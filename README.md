# Khadija Sajid — AI &amp; Data Engineering Portfolio

A premium, production-quality personal portfolio for **Khadija Sajid** — AI &amp; Data Engineer, Cloud &amp; AWS Builder, and Community Leader. Built as a competition submission for the **AWS Student Builder Challenge: Build Your Tech Superpower** (October–November 2026).

The portfolio positions Khadija as an emerging technology professional who builds intelligent systems, data pipelines, AI-powered applications, and cloud-native solutions, while also leading technical communities.

---

## Portfolio overview

A responsive, single-page portfolio with smooth navigation and the following sections:

- **Hero** — identity, mission, an interactive terminal-inspired element, and primary CTAs.
- **Beyond the Code** — about, with three operating principles.
- **Discover My Superpowers** — the creative interactive competition feature (see below).
- **What I Engineer** — technical capabilities grouped into AI &amp; ML, Data Engineering, AWS &amp; Cloud, and Development &amp; DevOps.
- **Selected Engineering Work** — featured projects with real links.
- **Engineering Beyond the Screen** — AWS Student Builder Group leadership, impact stats, and a timeline.
- **Milestones &amp; Recognition** — credentials and recognition.
- **Sharing What I Build** — writing and knowledge-sharing channels.
- **Have an Interesting Problem to Solve?** — contact with a copy-email button.

---

## Creative feature — "Discover My Superpowers"

This is the centerpiece of the submission, titled **"Everyone Has a Superpower. Discover Mine."**

The visitor is invited with a clear hint: *"Curious? Pick a superpower to unlock a different side of my journey."*

Three genuinely clickable cards reveal different facets of the journey:

1. **The Builder** (code / terminal) — AI-powered applications, data pipeline automation, AWS cloud architecture, technical projects. Featured projects: Data Quality Inspector and Project Ullo.
2. **The Leader** (users / network) — AWS Student Builder Group leadership, 15 AWS-focused events in 8 months, 3,000+ community members, AWS Student Community Day Sahiwal 2026 with 1,000+ registrations in a week and 500+ attendees.
3. **The Enabler** (lightbulb / graduation cap) — technical mentoring, hands-on workshops, AWS technical talks, 170+ girls mentored in person.

**Interaction behavior**
- All three cards are fully clickable buttons with `role="tab"`.
- Selecting a card reveals the matching content panel with a smooth fade-up transition and a key swap so React re-mounts the panel cleanly on change.
- The selected card is visually distinguished (ember border + glow shadow + "Unlocked" indicator); unselected cards show an "Unlock" affordance.
- A secondary switch row inside the panel lets visitors jump between superpowers without scrolling back up.
- Fully functional on mobile and desktop. Keyboard accessible. Respects `prefers-reduced-motion`.

---

## Technologies used

- **React 18** + **TypeScript** — type-safe, component-driven UI.
- **Vite 6** — fast dev server and production bundler.
- **Tailwind CSS 3** — design system with a custom near-black / warm-orange palette.
- **Lucide React** — clean, consistent iconography.
- **Custom CSS** — grid backdrops, aurora accents, and CSS-based project previews (no image libraries).
- No unnecessary dependencies. No backend. No exposed credentials.

### Design tokens

| Token | Value | Use |
| --- | --- | --- |
| Background | `#0B0D10` | near-black / deep charcoal |
| Primary accent | `#FF8A35` | warm orange |
| Secondary accent | `#FFB36B` | muted amber |
| Text | `#F5F5F2` | off-white |
| Secondary text | `#A1A1AA` | muted gray |

Typography: **Inter** for UI, **JetBrains Mono** for code/terminal elements.

---

## AWS services used

This portfolio is a static front-end application intended for **AWS Amplify Hosting**. The AWS services *referenced by the portfolio content and projects* include:

- **AWS Amplify Hosting** — the deployment target for this site.
- **Amazon S3**, **AWS Lambda**, **Amazon API Gateway**, **Amazon RDS**, **AWS IAM** — referenced by featured projects (e.g., Data Quality Inspector).
- **Amazon Bedrock** — referenced by AI/RAG and agentic project work.
- **Dagster**, **Apache Iceberg**, **PostgreSQL** — referenced by the DataOps project (Project Ullo).

> Note: These services are referenced in the portfolio content. The portfolio site itself is a static build deployed via AWS Amplify Hosting. Do not assume a service was used in a project unless it has been verified in that project's own documentation.

---

## Architecture overview

```
index.html                 # SEO/OG metadata, fonts, root mount
amplify.yml                # AWS Amplify Hosting build spec
public/
  favicon.svg              # KS brand favicon
src/
  main.tsx                 # React root
  App.tsx                  # Section composition + hooks
  index.css                # Tailwind + design tokens + reveal/motion CSS
  components/              # Navigation, Terminal, BackToTop, Footer, etc.
  sections/                # Hero, About, Superpowers, Skills, Projects,
                            # Impact, Achievements, Writing, Contact
  data/                    # Single source of truth:
                            # profile, links, superpowers, skills,
                            # projects, achievements, impact, nav
  hooks/                   # useReveal, useTheme, useActiveSection
```

All personal information, project links, achievements, and social links live in `src/data/` so they can be updated in one place.

---

## Local setup instructions

Prerequisites: **Node.js 18+** (tested on Node 22) and **npm 10+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# open the printed localhost URL

# 3. Type-check
npm run lint

# 4. Production build
npm run build
# output is written to dist/

# 5. Preview the production build locally
npm run preview
```

---

## AWS Amplify deployment instructions

This repository is configured for **AWS Amplify Hosting**.

### Option A — Connect via GitHub (recommended)

1. Push this repository to GitHub.
2. Open the **AWS Amplify Console** → **New app** → **Host web app**.
3. Select **GitHub** and authorize Amplify to read the repository.
4. Choose the repository and branch (e.g., `main`).
5. Amplify auto-detects the `amplify.yml` build specification:
   - **Build command:** `npm ci` then `npm run build`
   - **Output directory:** `dist`
6. Save and deploy. Amplify provisions a `https://...amplifyapp.com` URL and a custom domain can be attached later.
7. Verify the public deployment by opening the Amplify URL — the site should load with no console errors, the hero terminal should animate, and the superpower cards should switch on click.

### Option B — Manual upload

If you prefer not to connect a repo, use `amplify publish` from the Amplify CLI after running `npm run build`, or drag-and-drop the `dist/` folder into an Amplify Hosting app created with the "Manual deploy" option.

### SPA routing

This is a single-page portfolio with in-page anchor navigation. There is no client-side router, so no SPA fallback rewrites are required. The `amplify.yml` does not include custom rewrites; default static hosting is sufficient.

---

## Key implementation challenges

1. **The superpower interaction without a framework.** The reveal needs to feel deliberate, not like tabs. Solved with a tab-role pattern plus a React `key` swap so the panel re-mounts and re-animates on each switch, plus a secondary inline switch for quick navigation.
2. **Hero terminal typing effect.** Built a small sequential typing loop that stops gracefully on the last line and degrades to a static render under `prefers-reduced-motion`.
3. **Type-safe, central data layer.** Every fact (name, links, projects, achievements, metrics) lives in `src/data/` with explicit TypeScript types. This makes the portfolio trivially editable and prevents fabricating URLs — links flagged `pending: true` are visually marked as "to be configured".
4. **Accessibility on an interactive feature.** Cards are real buttons with `aria-selected`/`aria-controls`, the panel has `role="tabpanel"`, focus rings use the brand ember color, and motion is disabled when the OS requests reduced motion.
5. **Light/dark toggle on a dark-first design.** Default is the premium dark theme; the toggle persists to `localStorage` and flips the `<html>` class while CSS handles the inversions.

---

## What I learned

- Designing a *deliberate* interactive feature that stays accessible — tabs, keyboard, reduced motion, and visible state all have to align.
- Keeping a design system disciplined: a small token set (near-black + warm orange) carried through every section beats adding ad-hoc colors.
- Treating content as data. Centralizing profile/links/projects in typed files made the components cleaner and the content auditable — no invented metrics or links slipped in.
- Preparing a Vite app for AWS Amplify Hosting is straightforward with a small, correct `amplify.yml`; the build output (`dist/`) is what matters.

---

## Screenshots checklist

When you capture screenshots for the submission, include:

- [ ] Hero section with the interactive terminal on desktop
- [ ] Hero section on mobile (responsive)
- [ ] "Discover My Superpowers" with The Builder selected
- [ ] "Discover My Superpowers" with The Leader selected (metrics visible)
- [ ] "Discover My Superpowers" with The Enabler selected
- [ ] "What I Engineer" skills grid
- [ ] "Selected Engineering Work" project cards
- [ ] "Engineering Beyond the Screen" impact stats + timeline
- [ ] "Milestones &amp; Recognition" grid
- [ ] Contact section with the copy-email button
- [ ] Mobile navigation menu open
- [ ] Light theme variant

---

## Live website URL

> Replace this with the Amplify Hosting URL once deployed:
>
> `https://<your-app-id>.amplifyapp.com`

---

## Things still to configure

Before final submission, update these in `src/data/`:

- `src/data/links.ts` — confirm LinkedIn, AWS Builder Center, Medium, and DEV Community URLs (currently `pending`).
- `src/data/profile.ts` — replace the placeholder email `khadija.sajid@example.com` with the real address.
- `src/data/projects.ts` — confirm the Project Ullo GitHub URL; add a live demo URL only if one exists.
- `src/data/achievements.ts` — add real verification URLs to credentials when available; confirm the IBM Data Science certificate status (currently flagged `pending`).

---

## License

Personal portfolio. Content © Khadija Sajid. Code structure available for learning purposes; do not reuse the personal content, project descriptions, or metrics.
