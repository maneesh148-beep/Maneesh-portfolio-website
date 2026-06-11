# UI/UX Upgrade Guide for maneeshjaiswal.framer.website

A practical checklist to level up the portfolio directly inside the Framer editor.
The `index.html` in this folder is a working reference design — open it in a browser
and recreate what you like in Framer.

## 1. First impression (hero)

- **One clear headline, one clear job.** Lead with what you do and the outcome you
  create (e.g. "Designing digital experiences that feel effortless"), not just your name.
- **Add an availability badge** ("● Available for new projects") — it invites contact
  and signals you're active.
- **Two CTAs max:** a primary ("View my work") and a secondary ("Get in touch").
  In Framer, give the primary button the accent fill and the secondary a subtle border.
- **Show proof immediately:** a small stats row (years, projects, clients) under the CTAs.

## 2. Typography

- Use **two fonts max**: a display face for headings (Space Grotesk, Sora, or
  Clash Display) and Inter for body text.
- Set a **fluid type scale** — in Framer use breakpoint-specific sizes:
  hero ~80px desktop / ~40px phone; body 17px, line-height 1.6.
- Add **-2% letter-spacing on large headings**; it instantly looks more designed.
- Keep paragraphs under ~560px wide for readability.

## 3. Color & contrast

- Pick **one background, one surface, one accent**. Dark theme example:
  `#0A0A0C` background, `#16161C` cards, `#C9F24E` accent, `#9B9BA3` secondary text.
- Use the accent **sparingly** — eyebrow labels, dots, hover states, one button.
  If everything is accented, nothing is.
- Check text contrast (4.5:1 minimum) with Framer's built-in accessibility checks
  or webaim.org/resources/contrastchecker.

## 4. Layout & spacing

- Use a consistent **8px spacing system** and a max content width of ~1120px.
- Give sections generous breathing room: 100–140px vertical padding on desktop,
  ~80px on mobile (use Framer breakpoints).
- Number your sections in eyebrow labels ("01 — Selected Work") to create rhythm
  and scannability.

## 5. Work section (the most important part)

- **Lead with work, not about.** Visitors decide in seconds; show projects first.
- Each card needs: thumbnail, project name, **one-line outcome** ("2× conversion
  lift", "cut drop-off 30%") and tags. Outcomes beat feature lists.
- Add a hover state in Framer: card lifts 6px + arrow rotates. Use the
  "Transition: Spring, gentle" preset — avoid bouncy springs.
- 3–4 strong projects beat 8 mediocre ones.

## 6. Motion (less is more)

- One **scroll-reveal style** used everywhere: fade up 28px, ~0.7s, ease-out.
  In Framer: Effects → Appear → "Fade Up", stagger children by ~70ms.
- A slow **marquee strip** of your skills between hero and work adds energy cheaply
  (Framer has a Ticker component built in).
- Respect reduced motion: Framer handles `prefers-reduced-motion` automatically
  for Appear effects — avoid custom motion that doesn't.

## 7. Navigation

- Sticky navbar with **blur background after scrolling** (Framer: scroll variant
  with backdrop blur).
- 4 links max + one "Let's talk" button.
- Add a scroll progress bar (thin accent line at the very top) — small detail,
  big perceived polish.

## 8. Contact & footer

- End with a **big, single-purpose contact section**: oversized headline
  ("Let's build something great together") + your email as a giant button.
  Don't bury contact in a footer.
- Mailto link: `mailto:maneesh148@gmail.com`.
- Social links as plain text links with accent hover — no icon clutter needed.

## 9. SEO & performance (Framer settings)

- Site Settings → General: set a real **title** ("Maneesh Jaiswal — Designer &
  Developer") and **description** (under 155 chars).
- Add a **social share image** (1200×630) — Framer falls back to a screenshot
  otherwise, which usually looks bad.
- Compress images before upload; prefer Framer's responsive image option.
- Set each page's H1 properly (only one per page) in the text style panel.
- Add a custom 404 page and a favicon.

## 10. Quick wins ranked by impact

1. Rewrite hero headline around outcomes, add availability badge + dual CTA.
2. Move Selected Work directly under the hero with outcome-led one-liners.
3. Unify to one accent color and one heading font.
4. Add the big contact CTA section at the end.
5. Add scroll-reveal Appear effects with stagger.
6. Fix SEO title/description + social share image.
