import "./App.css";
import { initLenis, setupScrollTrigger } from "./utils/scroll";
import { initializeApp } from "firebase/app";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router";
import { useLocation } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import MediaQuery from "react-responsive";
import { CursorProvider } from "./context/CursorContext";
import IPadCursor from "./components/iPadCursor/iPadCursor";

import { calculateAge } from "./utils/time";
import ContactAudit from "./components/ContactAudit/ContactAudit";
import { TransitionProvider } from "./context/TransitionContext";

// Lazy Loaded Components
const HomePage = lazy(() => import("./pages/HomePage"));
const CaseStudy = lazy(() => import("./pages/CaseStudy/CaseStudy"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const P404 = lazy(() => import("./pages/404/404"));
const ProjectPage = lazy(() => import("./pages/Projects/ProjectPage"));
const UnidebNotes = lazy(() => import("./pages/UnidebNotes/UnidebNotes"));
const MENASYP = lazy(() => import("./pages/MENASYP/MENASYP"));
const DSAIInfra = lazy(() => import("./pages/DSAIInfra/DSAIInfra"));

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

  initializeApp(firebaseConfig);

  // Initialise Lenis only on desktop (mobile uses native scroll)
  initLenis();

  const useScrollRestoration = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      // Scroll to the top when the path changes
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  useScrollRestoration();

  const age = calculateAge("2002-12-03");

  const location = useLocation();

  return (
    <HelmetProvider>
      <CursorProvider>
        <TransitionProvider>
          <div className="App">
            <Helmet>
              <meta
                name="description"
                content={`Welcome to Mohamed Ayoub Chebbi's portfolio, a ${age} year old UX/UI Designer and Developer studying in Hungary`}
              />
              <meta
                name="keywords"
                content="freelancer, tunisia, tunisian designer, mohamed ayoub chebbi, ayoub chebbi, UX design, UI design, user interface, web design, graphic design, software development, photography, programming, HTML, CSS, JavaScript, React, Figma, Upwork, Design Freelancer, Java, Android"
              />
              <meta property="og:url" content="https://chebbimedayoub.com" />
              {/* <script src="https://unpkg.com/react-scan@0.3.3/dist/auto.global.js"></script> */}
            </Helmet>
            <MediaQuery query="(min-device-width: 700px)">
              <IPadCursor />
            </MediaQuery>
            <Suspense fallback={<div className="preloader-fallback">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tuniscovery" element={<CaseStudy />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/unidebnotes" element={<UnidebNotes />} />
                <Route path="/menasyp25" element={<MENASYP />} />
                <Route path="/swatch-mcp" element={<DSAIInfra />} />
                <Route path="/*" element={<P404 />} />
              </Routes>
            </Suspense>
            <ContactAudit />
          </div>
        </TransitionProvider>
      </CursorProvider>
    </HelmetProvider>
  );
}

export default App;
