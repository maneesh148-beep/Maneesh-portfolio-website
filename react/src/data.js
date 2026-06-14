// All site content lives here so sections stay declarative.

export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
];

export const LOGOS = ["target", "meesho", "blackbuck", "payu", "citrus", "ola"];

export const APPROACH_INTRO =
  "Every challenge is different, but my approach stays consistent: understand deeply, align early, validate quickly, and measure impact. I work across design, product, engineering, and research to turn ambiguity into meaningful outcomes.";

export const APPROACH = [
  {
    num: "01",
    title: "Discover",
    lead: "Understand the problem before designing the solution.",
    desc: "I combine user insights, business context, and data to uncover opportunities worth solving.",
    tags: "Research • Analytics • Stakeholder Alignment",
  },
  {
    num: "02",
    title: "Define",
    lead: "Align teams around the right opportunity.",
    desc: "I synthesize insights into clear problem statements, priorities, and success metrics.",
    tags: "Problem Framing • Prioritization • Journey Mapping",
  },
  {
    num: "03",
    title: "Explore & Validate",
    lead: "Test assumptions early and reduce risk.",
    desc: "I explore multiple directions, prototype rapidly, and validate ideas before scaling investment.",
    tags: "Ideation • Prototyping • User Testing",
  },
  {
    num: "04",
    title: "Design",
    lead: "Create experiences that are simple, scalable, and intuitive.",
    desc: "I focus on usability, consistency, accessibility, and long-term product growth.",
    tags: "UX Design • UI Design • Design Systems",
  },
  {
    num: "05",
    title: "Deliver",
    lead: "Transform ideas into products through strong collaboration.",
    desc: "I partner closely with product and engineering to ensure quality from concept to launch.",
    tags: "Execution • Design QA • Cross-functional Leadership",
  },
  {
    num: "06",
    title: "Optimize",
    lead: "Measure outcomes and continuously improve.",
    desc: "I use data, feedback, and experimentation to refine experiences and maximize impact.",
    tags: "Metrics • Experimentation • Iteration",
  },
];

export const HERO = {
  badge: "Hey, I'm Maneesh 👋 · Lead Product Designer (L6) @ Target",
  titleLines: ["Turning complex", "business challenges into"],
  titleAccent: "products people love",
  sub: "I combine product strategy, user empathy, systems thinking, and design leadership to build scalable experiences that drive customer and business outcomes. Currently shaping Guest Experience at Target. Previously at Meesho, BlackBuck, PayU, and Ola.",
  stats: [
    { count: 13, label: "Years of experience" },
    { count: 4, label: "0→1 products launched" },
    { count: 6, label: "Company awards" },
  ],
};

export const MARQUEE_ITEMS = [
  "UX Research",
  "Interaction Design",
  "Systems Thinking",
  "Design Systems",
  "Pricing & Seller Intelligence",
  "AI-Augmented Design",
];

// thumb: gradient class. img: real screenshot. free: transparent-PNG treatment.
export const PROJECTS = [
  {
    href: "https://www.figma.com/proto/T4LYDEZcXDKMn1HHyRAZaP/Case-Study--Enhancing-Review-Experience-with-Video-Reviews?node-id=2-3",
    featured: true,
    thumb: "thumb-f",
    flag: "★ Latest case study",
    img: "images/video-reviews.jpg",
    alt: "Video reviews on Target product pages, capture and playback screens",
    title: "Video Reviews",
    desc: "Building shopper confidence and sales with video reviews. I enhanced Target's review experience so guests can add and watch video reviews right on the product page.",
    tags: ["Target", "Guest Experience", "2025"],
  },
  {
    href: "#",
    thumb: "thumb-g",
    img: "images/baby-category.jpg",
    alt: "Elevating Target Baby category case study cover",
    title: "Elevating Target Baby category to help busy parents shop with ease",
    desc: "Business goal: increase average order value (AOV) and units per order (UPO) by improving how parents discover and shop Baby essentials.",
    tags: ["Target", "E-commerce", "2025"],
  },
  {
    href: "https://www.figma.com/deck/vcAxzwC0E8Sr5PezPIEt5S/Untitled?node-id=18-150&t=uXaMpVSxEKyKkEiE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    thumb: "thumb-a",
    flag: "★ Most recommended read",
    img: "images/pricing-tool.png",
    alt: "Meesho Pricing Tool seller dashboard",
    title: "Pricing Tool",
    desc: "How I designed Meesho's pricing tool to change how sellers view their prices and decide whether to lower them, driving lower prices across the platform so customers get the best deals.",
    tags: ["Meesho", "Seller Platform", "2023"],
  },
  {
    href: "https://www.figma.com/proto/wm8E6rRgGpnWy2MwyiZ7b5/Maneesh-UX-Case-Study?node-id=349-12409&t=IoVZPUcyQauzaPSY-0&scaling=scale-down&page-id=349%3A6548&starting-point-node-id=349%3A12409&content-scaling=fixed",
    thumb: "thumb-b",
    img: "images/catalog-mobile.png",
    free: true,
    alt: "Catalog listing flow on two mobile screens",
    title: "Catalog Listing on Mobile",
    desc: "Designing the catalogue listing feature on mobile to onboard millions of long-tail and first-time sellers onto the platform.",
    tags: ["Meesho", "Mobile", "2023"],
  },
  {
    href: "#",
    thumb: "thumb-c",
    img: "images/sourcing-tool.png",
    alt: "Bharat ki Choice sourcing tool for Meesho sellers",
    title: "Sourcing Tool: 'Bharat ki Choice'",
    desc: "Market intelligence that helps sellers decide which products to source and sell on Meesho for better order conversion.",
    tags: ["Meesho", "0→1", "2023"],
  },
];

export const EXPERTISE_INTRO =
  "I help teams turn complex problems into scalable products by combining strategy, user empathy, systems thinking, leadership, and modern design practices. My focus is always on creating measurable impact for both customers and businesses.";

export const EXPERTISE = [
  {
    num: "①",
    title: "Product Strategy & Problem Solving",
    desc: "I help teams uncover the right opportunities, align stakeholders, and define clear product direction before a single screen is designed.",
    list: ["Product vision & strategy", "Opportunity discovery", "Prioritization & trade-offs"],
  },
  {
    num: "②",
    title: "User Empathy & Research",
    desc: "I combine research, customer feedback, and data to deeply understand user needs and design experiences that solve real problems.",
    list: ["User research & synthesis", "Journey mapping", "Insight-driven decisions"],
  },
  {
    num: "③",
    title: "0→1 Product Innovation",
    desc: "From idea to launch, I lead end-to-end product development, validating assumptions early and turning concepts into products people love.",
    list: ["Discovery & experimentation", "Rapid prototyping", "Launch & iteration"],
  },
  {
    num: "④",
    title: "Systems Thinking & Design at Scale",
    desc: "I design scalable platforms, workflows, and design systems that bring consistency, efficiency, and long-term maintainability.",
    list: ["Design systems", "Platform ecosystems", "Operational scalability"],
  },
  {
    num: "⑤",
    title: "AI-Augmented Product Development",
    desc: "I leverage AI across research, ideation, prototyping, and documentation to accelerate workflows and increase team effectiveness.",
    list: ["AI-assisted research", "Faster prototyping", "Workflow automation"],
  },
  {
    num: "⑥",
    title: "Leadership & Business Impact",
    desc: "I mentor designers, influence product direction, and drive outcomes that improve customer experience, growth, and business performance.",
    list: ["Team leadership & coaching", "Cross-functional influence", "Growth & conversion impact"],
  },
];

export const ABOUT = {
  paragraphs: [
    "I work at the intersection of user research, interaction design and systems thinking, with AI in every step of the loop. Over 13 years I've designed consumer and seller-side products across e-commerce, fintech and logistics.",
    "Beyond the pixels, I build teams: hiring and mentoring designers, setting up design rituals, and creating PM–designer frameworks that are still in use at Meesho today.",
  ],
  skills: ["UX Research", "Interaction Design", "Systems Thinking", "Design Systems", "Figma", "Framer", "AI Prototyping", "Mentoring"],
};

export const EXPERIENCE = [
  {
    period: "2024 – Now",
    role: "Lead UX Designer (L6), Guest UX · Target Corp.",
    desc: "Leading product design for discretionary categories, solving digital shopping experiences across discovery, browse and PDP for millions of Target guests in the US.",
  },
  {
    period: "2021 – 2024",
    role: "Lead Product Designer · Meesho",
    desc: "Owned pricing, seller growth and non-GST charters across buyer and seller side. Built the Crystal Design System from scratch and mentored designers across the Pricing and Seller Growth pods.",
  },
  {
    period: "2018 – 2021",
    role: "Senior Product Designer · BlackBuck",
    desc: "Designed supply- and demand-side apps so truckers get max loads and manage truck performance, including the Auto-Recharge Plus FASTag subscription, a top revenue contributor at launch.",
  },
  {
    period: "2016 – 2018",
    role: "Senior Product Designer · PayU / Citrus Pay",
    desc: "Co-designed LazyPay BNPL from 0→1 and the full Citrus consumer payments experience: wallet, UPI, recharge and bill payments across app and web.",
  },
  {
    period: "2012 – 2016",
    role: "Earlier · Ola & Angel Film Studio",
    desc: "Communication design at Ola, including PM Modi's E-rickshaw launch campaign. Before that, 3D, motion and VFX work for film and FMCG branding.",
  },
];

export const SOCIALS = [
  { href: "https://www.linkedin.com/in/maneesh-jaiswwal-16902363/", label: "LinkedIn" },
  { href: "https://www.behance.net/Designermaneesh", label: "Behance" },
  { href: "https://dribbble.com/Designermaneesh", label: "Dribbble" },
];

export const EMAIL = "maneesh148@gmail.com";
