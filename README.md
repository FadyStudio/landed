# Landed — land the gig, secure the client

A bilingual (English / Egyptian Arabic) course teaching freelancers how to win and deliver work on
Upwork, from complete beginner to advanced. Built as a static site, designed to feel native to the
platform it teaches.

Created by **Fady George** — [@_fadygeorge](https://instagram.com/_fadygeorge)

---

## It is live

**https://fadystudio.github.io/landed/**

No build step, no dependencies, no Actions workflow. It is plain HTML, CSS and JavaScript served
straight off the `main` branch — Pages is set to **Deploy from a branch → main → / (root)**, so
every push to `main` is live within about a minute.

```bash
git clone https://github.com/FadyStudio/landed.git
cd landed
# edit content.js, commit, push. That is the whole deploy process.
```

`.nojekyll` is in the repo on purpose: it tells Pages to serve the files exactly as they are
instead of running them through Jekyll.

### Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### How someone moves through it

There is one HTML file. The landing page is a route inside it, not a separate page.

```
#/            landing page — the sales page. Nav is stripped back to
              logo + language toggle + one green button.
                │
                │  they press "Start Chapter 1"
                ▼
              name gate — a modal, cannot be dismissed. "Before you start —
              what should we call you?" The name is what gets printed on
              the certificate, so it is asked once, up front.
                │
                ▼
#/learn       the course home. Full nav appears, the rail comes back,
              their initials sit in the corner.

#/m/03        a chapter          #/glossary   the glossary
#/l/3.2       a lesson           #/tools      the four calculators
#/certificate the certificate
```

A returning visitor already has a name in `localStorage`, so the landing button reads **Continue
where you left off** and skips the gate entirely. The gate also still fires if someone deep-links
straight to `#/l/3.2` without ever having entered a name.

`body.on-landing` is what strips the chrome — it hides the rail and lets `.wrap` go full-width.

### The certificate

Unlocks at 100% completion, renders in portrait or landscape, and offers **Print / save as PDF**
(uses a print stylesheet, so it keeps the real fonts) and **Download SVG** (vector, for anyone who
wants to edit it).

---

## What is in here

| File | What it does |
|---|---|
| `index.html` | The only page. Loads the stylesheet, the figures, the content and the app. |
| `styles.css` | The whole design system. Upwork's real design tokens — greens, gray ramp, radius scale, and the positive letter-tracking that makes the platform look like itself. |
| `content.js` | **All course content.** Modules, lessons, glossary, tools. Every string is a bilingual pair. This is the only file you edit to write the course. |
| `app.js` | Routing, state, rendering, the landing page (`landingHTML`), the name gate (`askName`), the four calculators, and the certificate. |
| `figures.js` | The teaching diagrams, drawn as SVG in code. Bilingual labels, no image files. |
| `assets/og.png` | Social preview image. `assets/favicon.svg` is the tab icon. |
| `assets/fonts/` | Instrument Sans (Latin) and Almarai (Arabic), both open source. |
| `build_single.py` | Optional. Inlines everything into one portable `landed-preview.html` for sharing offline. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is instead of running Jekyll over them. |

## Writing lessons

Open `content.js`. A lesson is an object:

```js
const L001 = {
  id: '0.1', mins: 8, tool: null,
  en: { title: '…', lede: '…', outcome: '…', blocks: [ … ] },
  ar: {}                       // Arabic title/lede/outcome live in the AR map at the bottom
};
```

Blocks are built with small helpers, each taking English and Arabic:

| Helper | Renders |
|---|---|
| `P(en, ar)` | A paragraph |
| `H(en, ar)` | A section heading |
| `PULL(en, ar)` | A pull quote |
| `PLAIN(en, ar)` | A blue "in plain words" box — use for anything a beginner would not know |
| `NOTE(t_en, t_ar, en, ar)` | A green callout with its own title |
| `STEPS(en[], ar[])` | A numbered list of `[title, description]` pairs |
| `COMPARE(a_en, a_ar, b_en, b_ar)` | The tabbed before/after comparison |
| `TODO(mins, en[], ar[])` | The checklist at the end of a lesson |
| `FAQ([[q_en, q_ar, a_en, a_ar], …])` | Expandable questions |
| `W('connects' \| 'scorer' \| 'payout' \| 'jss')` | Drops in an interactive calculator |

All 41 lessons are written in both languages. A lesson with no `blocks` renders as "being written"
and is not clickable, so new lessons can be outlined before they are drafted.

**On sourcing.** The course draws on exactly two things: Upwork's own published help documentation,
and nine Top Rated Plus / Expert-Vetted profiles ($60K–$800K+ lifetime earnings) read page by page.
Where a claim comes from the second source it says so — "across all nine profiles", not "studies
show". Anything Upwork does not publish is labelled in the text as unverified: the JSS weighting
multiplier, the private-feedback thresholds, the arbitration fee, the badge numbers. The Egypt tax
lesson deliberately refuses to print a bracket table, because published summaries contradict each
other; it teaches the record-keeping and sends the reader to the Egyptian Tax Authority and an
accountant instead.

There are no student counts, no testimonials, no star ratings and no screenshots of anyone's
earnings anywhere in this site — Chapter 3 tells students not to fabricate proof, so the site does
not either. Keep that discipline when you edit: a number without a source is a liability, not a
feature.

Arabic titles for every lesson live in the `AR` map at the bottom of `content.js`, keyed by lesson id.

## Language and register

- English is the reference text.
- Arabic is **Egyptian Arabic (عامية مصرية)**, written natively rather than translated.
- Platform and industry terms deliberately stay in English inside Arabic prose — Connects, proposal,
  milestone, escrow, JSS, retainer — because that is how Egyptian freelancers actually speak.
- Numerals switch to Arabic-Indic (٠١٢٣) automatically in Arabic mode.

## Progress and the certificate

The student enters their name at the gate between the landing page and the course. Their initials
appear in the corner while they study, their full name sits in the rail card, and it is what gets
printed on the certificate. Name, progress, saved modules and language are stored in `localStorage`,
with an in-memory fallback so nothing breaks in sandboxed previews. There is no backend and no
account — nothing leaves the browser.

## A note on the design

The interface deliberately resembles Upwork's own, so that students learn the platform's visual
language while they learn its mechanics. The footer carries a disclaimer stating no affiliation.
Keep it there.

Fonts are open-source stand-ins: Upwork licenses Neue Montreal, so **Instrument Sans** is used as the
closest freely licensable match.

## Licence

Course content © Fady George. Fonts are under the SIL Open Font License.
