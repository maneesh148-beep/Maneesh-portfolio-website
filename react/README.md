# Maneesh Jaiswal — Portfolio (React)

React + Vite port of the portfolio. Same design, content, and animations as the
static `index.html` at the repo root, restructured into components.

## Run

```bash
cd react
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Structure

```
react/
├── index.html              # Vite entry; fonts, SEO meta, JSON-LD, pre-paint theme
├── public/
│   ├── images/             # project thumbnails + photo
│   └── Maneesh-Jaiswal-Resume.pdf
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # composes sections, wires theme/scroll/active-section
    ├── index.css           # full stylesheet (ported 1:1 from style.css)
    ├── data.js             # all copy: hero, projects, expertise, experience, socials
    ├── components/         # Nav, Hero, Marquee, Work, Expertise, About,
    │                       # Experience, Contact, Footer, Background
    └── hooks/
        ├── usePrefs.js          # reduced-motion / fine-pointer flags
        ├── useTheme.js          # dark/light toggle, persisted
        ├── useScroll.js         # scroll progress + sticky-nav state
        ├── useActiveSection.js  # nav highlight via IntersectionObserver
        ├── useReveal.js         # scroll-in reveal per element
        ├── useCountUp.js        # eased stat counters
        └── useInteractions.js   # spotlight / tilt / magnetic / sticker parallax
```

## Editing content

Everything text-based lives in `src/data.js`. Add a project to the `PROJECTS`
array (drop its image in `public/images/`), edit `EXPERIENCE`, etc. No component
changes needed for content updates.

## Deploy (Vercel)

Set the project root to `react/`. Framework preset: **Vite**. Build command
`npm run build`, output `dist`. The root static site can stay as-is or be
replaced once you're happy with this version.
