import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Work from "./components/Work";
import Approach from "./components/Approach";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useTheme } from "./hooks/useTheme";
import { useScroll } from "./hooks/useScroll";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = ["work", "approach", "skills", "about", "experience", "contact"];

export default function App() {
  const { theme, toggle } = useTheme();
  const { progress, scrolled } = useScroll();
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#work">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <Background />
      <Nav scrolled={scrolled} active={active} theme={theme} onToggleTheme={toggle} />
      <main id="top">
        <Hero />
        <Logos />
        <Work />
        <Approach />
        <Expertise />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
