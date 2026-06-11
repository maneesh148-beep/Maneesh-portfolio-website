# How to bring this design into Framer

This build matches your existing site's visual identity (deep plum + grain,
gold headlines, pink "Hey! 👋" badge, big rounded case cards) with your real
content from the site and CV — then layers on polish: scroll reveals, sticky
blur nav, scroll progress bar, awards marquee, copy-email button, SEO schema.

| File | What it's for |
|---|---|
| `index.html` + `style.css` + `script.js` | The full site (development version) |
| `maneesh-portfolio-standalone.html` | Everything in ONE file — open in a browser, share, or paste into a Framer Embed |

---

## Option A — Quick embed (5 minutes, not visually editable)

1. In Framer press **Insert (Cmd/Ctrl + I)** → search **"Embed"**.
2. Drag it onto the canvas → set **Type: HTML**.
3. Open `maneesh-portfolio-standalone.html`, Select All → Copy → paste into the Embed.
4. Publish. Edits happen in code, not on the canvas.

## Option B — Rebuild natively in Framer (fully editable — recommended)

Since this design intentionally mirrors your current Framer site, most of your
existing project stays. You're **upgrading sections in place**, not starting over.

### Step 1 — Styles (10 min)

**Color Styles** (Assets → Color Styles → +):
- `bg` `#1E0F2D` · `bg-deep` `#170B24` · `surface` `#2A1640`
- `gold` `#F2B53D` · `pink` `#CF3D96` · `navy` `#1B1038`
- `text` `#EFE7FA` · `text-dim` `#C9B8DE`
- `paper` `#FAF6EF` (white experience cards) · `paper-ink` `#241536`
- Card fills: purple `#8D4485→#A25899`, teal `#28564C→#336C5F`, blue `#3A648C→#4878A6` (135° gradients)

**Text Styles** — rounded faces to match your site:
- `Hero/Title` — Baloo 2 ExtraBold, ~77px desktop / 40px phone, color `gold`
- `Heading/H2` — Baloo 2 Bold, ~51px / 32px
- `Card/H3` — Baloo 2 ExtraBold, ~46px / 30px, white
- `Body` — Quicksand Medium, 17–18px, line-height 1.65
(If you prefer your current fonts, keep them — only the sizes/weights matter.)

**Grain:** your site already has it. If rebuilding: add a Frame over the page,
fill with a noise PNG at ~9% opacity, blend mode Overlay, ignore events.

### Step 2 — Navigation (10 min)

Fixed top bar: "MJ." logo (gold dot), links — Case Studies / Experience /
About / Contact — and a "Let's talk" outline pill. Add a **scroll variant**
past 50px: background `#170B24` at 80% + backdrop blur 14. Add a thin
gradient progress bar (pink→gold) pinned to the very top if you want the
extra polish.

### Step 3 — Hero (15 min)

Centered vertical stack:
1. Your photo, 168px circle, with a **dashed circle ring** behind it
   (stroke white 25%, dashed). Optional: slow Loop rotation on the ring.
2. Pink "Hey! 👋" pill — fill `pink`, radius 16, **rotate −3°**, soft pink shadow.
3. "I'm Maneesh Jaiswal" (Baloo 2 SemiBold ~34px).
4. H1 in `gold`: "Lead UX designer (L6) @Target Corp."
5. Your two intro paragraphs (second one in `text-dim`).
6. Two buttons: gold pill "View case studies ↓" + outline "Get in touch".
7. **Appear effects**: Fade Up, stagger each element ~100ms down the stack.

### Step 4 — Case-study cards (20 min)

These are your existing three cards, polished:
- Card frame: radius 28, padding ~64, 2-column grid (copy | screenshot),
  gradient fills from Step 1 (purple / teal / blue).
- Gold label ("Most recommended read ✦ 2023"), white H3, white copy.
- CTA: navy pill, **gold uppercase text** "READ CASE STUDY ›".
- **Hover variant:** card lifts −6px + bigger shadow; screenshot drifts up
  ~8px. Transition: Spring, gentle.
- Keep your real product screenshots — they're the heart of these cards.
- Below the three, add two `surface` mini-cards for **Crystal Design System**
  and **LazyPay BNPL** (from the CV) — title, one-liner, subtle border that
  glows gold on hover.

### Step 5 — Experience (10 min)

"13+ Years of Diverse Experience / With leading tech startups in India",
then a 3-column grid of **white (`paper`) cards**: logo, company + domain,
role + dates, one-paragraph description. This build adds two more cards —
**PayU / Citrus Pay (2016–18)** and **Ola & Earlier (2012–16)** — so the full
13 years is visible. Hover: lift −6px + shadow.

### Step 6 — Awards marquee (5 min)

Insert → **Ticker** component: your real awards
(Act Like an Owner — Meesho '22 · Star Team of the Quarter — Meesho '23 ·
You Rock — PayU '17 · Mile of Service Excellence ×2 — BlackBuck ·
Academic Excellence — Aptech) separated by gold ✦. Slow speed, pause on hover.

### Step 7 — "Beyond the pixels" (10 min)

3-column grid of `surface` cards from your CV's Leadership & Practice:
🤝 Team building · 🧩 Design systems & ops · 🤖 AI-augmented practice.
Hover: border tint `pink`.

### Step 8 — Contact + footer (10 min)

Centered: small pink "Say hi 👋" pill, gold H2 "Let's build something great
together.", then your email as a **gold pill button** (`mailto:`) + outline
"Copy email" beside it. Social text links: LinkedIn / Behance / Dribbble.
Footer: © line + "Back to top ↑".

### Step 9 — Motion & publish checklist

- One Appear style everywhere: **Fade Up, 28px, 0.7s, ease-out, stagger 80ms.**
- Check Tablet/Phone breakpoints: case cards stack (screenshot above text),
  experience grid → 1 column, full-width buttons.
- Site Settings: title "Maneesh Jaiswal — Lead UX Designer (L6) @ Target Corp.",
  description ≤155 chars, social share image 1200×630 (screenshot your hero),
  favicon (plum square, gold "MJ").
- One H1 per page; run Framer's accessibility checker.

---

## Previewing the HTML version

- **Live link:** `https://raw.githack.com/maneesh148-beep/Maneesh-portfolio-website/claude/practical-fermi-fr3ngu/index.html`
- **Backup:** `https://htmlpreview.github.io/?https://github.com/maneesh148-beep/Maneesh-portfolio-website/blob/claude/practical-fermi-fr3ngu/index.html`
- Or download `maneesh-portfolio-standalone.html` and double-click it.

## Remaining placeholders

- [ ] Hero photo — swap the "MJ" circle for your photo (see the HTML comment in the hero)
- [ ] Case-study links (`href="#"`) → your Framer case-study page URLs
- [ ] CSS mockups inside case cards → your real product screenshots
