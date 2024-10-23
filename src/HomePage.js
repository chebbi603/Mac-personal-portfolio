import "./App.css";
import Home from "./home";
import AboutMe from "./aboutme/aboutme";
import Contact from "./contact/contact";
import Expertise from "./expertise/expertise";
import ProjectsHeader from "./projects/projectsheader";
import AboutMeMobile from "./aboutme/aboutme_mobile";
import ProjectsList from "./projects/projectexample";
import MediaQuery from "react-responsive";
import AnimatedCursor from "react-animated-cursor";
import Preloader from "./preloader/preloader";

function HomePage() {
  return (
    <div>
      <header className="App-header">
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
            clickables={["a", "select", "textarea", "button", ".link", "Link"]}
          />
        </MediaQuery>
        <section className={"section1"}>
          <Preloader id={1} />
          <Home />
        </section>
        <section>
          <MediaQuery query="(max-width: 1000px)">
            <AboutMeMobile />
          </MediaQuery>
          <MediaQuery query="(min-width: 1000px)">
            <AboutMe />
          </MediaQuery>
        </section>
        <Expertise />
        <ProjectsHeader />
        <ProjectsList />
        <Contact />
      </header>
    </div>
  );
}

export default HomePage;
