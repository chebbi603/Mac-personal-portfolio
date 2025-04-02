import "./App.css";
import Lenis from "@studio-freight/lenis";
import { initializeApp } from "firebase/app";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router";
import HomePage from "./HomePage";
import CaseStudy from "./case-study/CaseStudy";
import { useLocation } from "react-router";
import { useEffect } from "react";
import ContactPage from "./contact/ContactPage";
import P404 from "./404/404";
import ProjectPage from "./projects/ProjectPage";
import MediaQuery from "react-responsive";
import AnimatedCursor from "react-animated-cursor";
import UnidebNotes from "./unidebnotes/UnidebNotes";

function App() {
  //FIREBASE
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "mac-portfolio-3a56b.firebaseapp.com",
    projectId: "mac-portfolio-3a56b",
    storageBucket: "mac-portfolio-3a56b.appspot.com",
    messagingSenderId: "569080617747",
    appId: "1:569080617747:web:78ff432fa0ba47358698e6",
    measurementId: "G-VJYQN03EW8",
  };
  //

  const app = initializeApp(firebaseConfig);

  const lenis = new Lenis({
    duration: 0.6,
    easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const useScrollRestoration = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      // Scroll to the top when the path changes
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  useScrollRestoration();

  return (
    <div className="App">
      <Helmet>
        <meta
          name="description"
          content="Welcome to Mohamed Ayoub Chebbi's portfolio, a 22 year old UX/UI Designer and Developer studying in Hungary"
        />
        <meta
          name="keywords"
          content="freelancer, tunisia, tunisian designer, mohamed ayoub chebbi, ayoub chebbi, UX design, UI design, user interface, web design, graphic design, software development, photography, programming, HTML, CSS, JavaScript, React, Figma, Upwork, Design Freelancer, Java, Android"
        />
        <meta property="og:url" content="https://chebbimedayoub.com" />
        {/* <script src="https://unpkg.com/react-scan@0.3.3/dist/auto.global.js"></script> */}
      </Helmet>
      <MediaQuery query="(min-device-width: 700px)">
        <AnimatedCursor
          backgroundColor={"#000"}
          innerSize={8}
          outerSize={25}
          innerScale={1}
          outerScale={1.7}
          hasBlendMode={true}
          outerAlpha={0}
          zIndex={500}
          outerStyle={{
            mixBlendMode: "exclusion",
            backgroundColor: "#fff",
          }}
          innerStyle={{
            mixBlendMode: "difference",
            backgroundColor: "#fff",
          }}
          clickables={[
            "a",
            "select",
            "textarea",
            "button",
            ".link",
            "Link",
            ".menu-link-element",
          ]}
        />
      </MediaQuery>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tuniscovery" element={<CaseStudy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/unidebnotes" element={<UnidebNotes />} />
        <Route path="/*" element={<P404 />} />
      </Routes>
    </div>
  );
}

export default App;
