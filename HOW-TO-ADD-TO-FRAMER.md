# How to bring this design into Framer

Two files matter here:

| File | What it's for |
|---|---|
| `index.html` + `style.css` + `script.js` | The full upgraded site (development version) |
| `maneesh-portfolio-standalone.html` | Everything in ONE file — open it in a browser, share it, or paste it into a Framer Embed |

There are two ways to get this into Framer. **Option A** takes 5 minutes but isn't
editable as Framer layers. **Option B** rebuilds it natively so you can edit
everything visually later — this is the recommended path for a portfolio you'll
keep updating.

---

## Option A — Quick embed (5 minutes, not visually editable)

Good for previewing the design inside Framer or shipping it as-is.

1. Open your Framer project → press **Insert (Cmd/Ctrl + I)** → search **"Embed"**.
2. Drag the Embed component onto the canvas, set **Width: 1fr / Fill** and
   **Height: Fit content** (or a fixed viewport height).
3. In the right panel set **Type: HTML**.
4. Open `maneesh-portfolio-standalone.html` in a text editor, **Select All → Copy**,
   and paste into the Embed's HTML field.
5. Publish. Done — but you'll edit by editing the code, not the canvas.

> Tip: you can also embed just one section (e.g. only the testimonials or the
> contact CTA) by copying that section's HTML plus the `<style>` block.

## Option B — Rebuild natively in Framer (fully editable, recommended)

Open `index.html` in your browser side-by-side with Framer and recreate each
section. Below is the exact recipe with Framer settings.

### Step 1 — Set up styles (10 min)

1. **Fonts:** Site Settings → no setup needed; just pick fonts in text styles.
   Create text styles (Assets panel → Text Styles → +):
   - `Heading/H1` — Space Grotesk Bold, 84px desktop / 40px phone, letter-spacing −2%, line-height 1.1
   - `Heading/H2` — Space Grotesk Bold, 48px / 30px, letter-spacing −2%
   - `Heading/H3` — Space Grotesk SemiBold, 21px
   - `Body` — Inter Regular, 17px, line-height 1.6
   - `Eyebrow` — Space Grotesk SemiBold, 14px, letter-spacing 12%, UPPERCASE
2. **Colors:** Assets panel → Color Styles → add:
   - `bg` `#0A0A0C` · `bg-alt` `#101014` · `surface` `#16161C`
   - `text` `#F2F2F0` · `text-dim` `#9B9BA3`
   - `accent` `#C9F24E` · `border` white at 8% opacity
3. Set the page background to `bg`.

### Step 2 — Navigation (15 min)

1. Insert → **Navigation/Navbar** or build a Frame: pin **Fixed** to top,
   width 1120, padding 10×24, **Radius 999**, horizontal stack, gap 32.
2. Add logo text "MJ." (color the dot `accent`), 5 links, and a "Let's talk"
   pill button (`accent` fill, dark text).
3. Add a **Scroll Variant**: on scroll past 50px, switch to a variant with
   background `#101014` at 72% + **Backdrop blur 16**, border `border`,
   and max-width ~880 (this recreates the shrinking glass pill).
4. Transition: Spring, gentle.

### Step 3 — Hero (20 min)

1. Section frame: min-height 100vh, vertical stack, left-aligned, padding 150 top.
2. Availability badge: small pill (border `border`, 8×16 padding) with an 8px
   `accent` circle + "Available for new projects". Add **Loop animation**
   (scale pulse) on the dot if you like.
3. H1: "Designing digital experiences that feel *effortless*." — select the word
   "effortless" and give it a **gradient text fill** `#C9F24E → #7DF2CE`.
4. Sub-paragraph (`text-dim`, max-width 560), then two buttons:
   - Primary: `accent` fill, dark text, radius 999, hover variant: lift −2px +
     soft `accent` shadow.
   - Ghost: transparent, `border` stroke, hover: stroke white 30%.
5. Stats row: three vertical stacks — big number (Space Grotesk 42) + small
   `text-dim` label. The "+" after numbers: separate `accent` colored span.
6. **Appear effects** (Effects → Appear → Fade Up): set delays 0 / 0.1 / 0.2 /
   0.3s down the stack to recreate the stagger.

### Step 4 — Marquee (5 min)

Insert → search **"Ticker"** (built-in Framer component). Add your skills as
text items separated by ✦ glyphs (color the ✦ `accent`). Speed slow,
**pause on hover ON**, top/bottom border `border`, background `bg-alt`.

### Step 5 — Work grid (30 min)

1. Grid: 2 columns, gap 28. Make the first card **span 2 columns** (Framer
   grid → child → Column Span 2).
2. Card = vertical stack, background `surface`, border `border`, **Radius 20**,
   clip content ON:
   - Thumbnail frame (gradient fill, e.g. `#23254D → #6E5AFF` at 135°) — drop
     a real project screenshot in here; until then a simple mock works.
   - Meta row: H3 + one-line outcome (`text-dim`) + a 44px circular arrow
     button (border `border`).
   - Tag pills row.
3. **Hover variant:** card lifts −6px, border brightens, arrow circle becomes
   `accent` fill + rotates −45°, screenshot shifts up ~8px.
   Transition: Spring, gentle. This is the single highest-impact interaction.
4. Repeat for 4 projects. Real screenshots > placeholders, always.

### Step 6 — Services (15 min)

3-column grid, gap 24. Each card: `surface` bg, radius 20, padding 32/28,
number glyph ① in `accent`, H3, short paragraph, then a list where each row
starts with a tiny `accent` ✦. Hover: lift −6px + border tint `accent` 40%.

### Step 7 — About (15 min)

2-column grid (0.8fr / 1.2fr). Left: portrait frame 4:5, radius 20 — use your
photo. Overlap a small glass card (bottom-left, blur 12, border `border`) with
the pulse dot + "Currently — open to freelance & full-time roles".
Right: eyebrow, H2, two paragraphs, skill chips (pills, hover: `accent` border).

### Step 8 — Experience (10 min)

Vertical stack with a 1px left border. Each row: grid 160px + 1fr; absolute
9px `accent` dot on the line (give it an outer glow: shadow `accent` 15%,
blur 0, spread 5).

### Step 9 — Testimonials (10 min)

3-column grid of `surface` cards: ★★★★★ row in `accent`, quote, then avatar
circle (initials, `accent` 12% bg) + name + role. Hover: lift −6px.

### Step 10 — Contact + footer (10 min)

Centered section: eyebrow, huge H2 (up to 67px), sub-line, then two buttons —
your email as a big `accent` pill (`mailto:maneesh148@gmail.com`) and a ghost
"Copy email" beside it. Social links as plain text with `accent` hover.
Footer: © line + "Back to top ↑" anchor.

### Step 11 — Appear effects everywhere (10 min)

Select each section's content → **Effects → Appear → Fade Up**
(Y offset 28, duration 0.7, ease-out, **stagger children 70ms**). Use this ONE
style everywhere — consistency reads as polish. Framer automatically respects
reduced-motion preferences.

### Step 12 — Publish checklist

- Site Settings → General: Title "Maneesh Jaiswal — Designer & Developer",
  description under 155 chars.
- Upload a 1200×630 social share image (screenshot your own hero!).
- Add favicon (dark square, lime "MJ").
- Breakpoints: check Tablet (work grid → 1 col) and Phone (menu, full-width buttons).
- Run Framer's built-in accessibility checker; one H1 per page.

---

## Previewing the HTML version

- **Live preview link (no setup):**
  `https://raw.githack.com/maneesh148-beep/Maneesh-portfolio-website/claude/practical-fermi-fr3ngu/index.html`
- Or download `maneesh-portfolio-standalone.html` and double-click it — it's
  fully self-contained.

## What to replace before going live

- [ ] 4 project cards → real projects, real screenshots, real links
- [ ] Experience roles → real companies and dates
- [ ] Testimonials → real quotes (or delete the section)
- [ ] Social links (`#` placeholders) → your real profiles
- [ ] Stats (4 years / 20 projects / 12 clients) → your real numbers
- [ ] Portrait placeholder "MJ" → your photo
