import "../App.css";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe/aboutme";
import Contact from "../components/Contact/contact";
import Expertise from "../components/Expertise/expertise";
import CaseStudies from "../components/CaseStudies/CaseStudies";
// import AboutMeMobile from "./aboutme/aboutme_mobile"; // Deleted
// import MediaQuery from "react-responsive"; // Deleted
import Preloader from "../components/Preloader/preloader";
import Navbar from "../components/Navbar/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Pictures from "../components/Pictures/Picture";
import Companies from "../components/Companies/Companies";
import { useSectionNavigation } from "../hooks/useSectionNavigation";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { useProjectsAnimation } from "../hooks/useProjectsAnimation";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

function HomePage() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  const navbarColors = [
    { trigger: ".aboutme-container", color: "#252422" },
    { trigger: ".expertise-container", color: "#22333b" },
    { trigger: ".casestudies-container", color: "#121212" },
    { trigger: ".contact-container", color: "#121212" },
  ];

  // --- Animations ---

  // Fade In Expertise
  useScrollFadeIn(el, ".expertiseelement", {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    scrollTrigger: { start: "top 90%", end: "bottom 50%", scrub: true }
  }, preloaderFinished);

  // Animate Contact
  useScrollFadeIn(el, ".contact-text", {
    from: { opacity: 0 },
    to: { opacity: 1, y: -100, zIndex: 5 },
    scrollTrigger: { trigger: ".contact-content", start: "20% 60%", end: "bottom 90%", scrub: true }
  }, preloaderFinished);

  // Projects Animation
  useProjectsAnimation(el, preloaderFinished);

  // Footer Animation
  // Was: gsap.fromTo(q(".footer"), { autoAlpha: 0, scale: 0.9 }, { scrollTrigger: {...}, autoAlpha: 1, scale: 1 })
  useScrollFadeIn(el, ".footer", {
    from: { autoAlpha: 0, scale: 0.9 },
    to: { autoAlpha: 1, scale: 1 },
    scrollTrigger: { start: "top 70%", end: "bottom bottom", scrub: true }
  }, preloaderFinished);

  // Navbar Colors
  useSectionNavigation(el, navbarColors, preloaderFinished);


  return (
    <div ref={el}>
      <div className="blur"></div>
      <Navbar />
      <div className="App-header">
        <Preloader
          text1={"LOADING"}
          text2={"PORTFOLIO..."}
          onLoadComplete={() => setPreloaderFinished(true)}
        />
        <Hero startAnimation={preloaderFinished} />
        <Companies />
        <AboutMe />
        {/* <Pictures line={2} both={true} startAnimation={preloaderFinished} /> */}
        <Expertise />
        <CaseStudies />
        {/* <ProjectsList /> */}
        {/* <ProjectsList /> */}
        <div className="footer">
          <Contact />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
