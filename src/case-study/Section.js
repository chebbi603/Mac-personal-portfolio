import React from "react";
import "./casestudy.css";
import AnimatedCursor from "react-animated-cursor";
import MediaQuery from "react-responsive";
import img1 from "./assets/h4tp-01.png";
import img2 from "./assets/h4tp-02.png";
import img3 from "./assets/h4tp-03.png";
import img4 from "./assets/h4tp-04.png";
import img5 from "./assets/h4tp-05.png";
import img6 from "./assets/h4tp-06.png";
import logo from "./assets/logo.svg";
import MagneticButton from "../gsap";
import { Link } from "react-router-dom";
function Sections() {
  return (
    <div className="section-container">
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
      <div className="section-content">
        <p className="section-sub">About the project</p>
        <p className="section-title">Tuniscovery</p>
        <p className="section-text">
          <b>#TourismTechJam</b> was an intense 24-hour Hackathon hosted at The
          Dot, organized by GIZ Tunisie as part of the <b>Tounes Wijhetouna</b>.
          <br />
          This event was an incredible opportunity to delve into the current
          state of <b>Tourism</b> in Tunisia and collaborate on innovative
          solutions alongside the five active DMOs in the country. <br /> <br />
          Our project focused on <b>developing a mobile app </b>designed to be
          the ultimate gateway for tourists visiting Tunisia. We dedicated
          significant effort to creating an intuitive User Experience to ensure
          easy navigation and exploration.
        </p>
        <br />
        <p className="section-sub">Role</p>
        <p className="section-text">UX/UI Designer</p>
      </div>
      <div className="section-content">
        <p className="section-sub">The Problem</p>
        <p className="section-title">
          90% of tourists rely heavily on travel agencies to plan their trips,
          limiting their ability to explore destinations independently.
        </p>
        <p className="section-text">
          This dependency reduces the sense of adventure and customization,
          leaving travelers with less opportunity to uncover hidden gems on
          their own. It also causes some problems with local businesses that are
          not affiliated with travel agencies <br /> <br />
          The challenge is to create a tool that empowers tourists to
          independently discover attractions, such as monuments, hotels, and
          restaurants, while offering tailored suggestions that fit their unique
          preferences and location in real-time.
        </p>
      </div>
      <div className="section-container">
        <div className="section-content">
          <p className="section-title-fancy">
            What if we could develop a mobile application that serves as the
            <span className="fanciness"> ultimate gateway</span> for every
            tourist?
          </p>
        </div>
      </div>
      <div className="section-content">
        <p className="section-sub">What we created</p>
        <p className="section-title">
          Sites, Hotels, Restaurants, and journey planning in one package
        </p>
        <p className="section-text">
          Our aim was to make Tuniscovery the first application to download when
          landing in Tunisia.
          <br /> <br />
          <b>Core features:</b>
          <br /> - Robust trip planning system
          <br /> - A space for every tunisian Destination Management
          Organizations
          <br /> - Exploring sites with immersive view features
        </p>
      </div>
      <div className="section-content">
        <p className="section-sub">The Challenge</p>
        <p className="section-title">Consistency vs Diversity</p>
        <p className="section-text">
          One of the challenges of this hackathon was to offer a space for
          tunisian DMOs given that each DMO got a distinct color palette and
          design language that represents the diversity of the tunisian
          landscape (beaches, deserts, forests, ancient ruines...)
          <br /> <br />
          We crafted a set of color palettes for destination featured on our
          application taking into account the landscapes and the activities that
          can be done in each destination and applying the 60-30-10 rule. <br />{" "}
          <br />
          We also created a main color palette for our application that reflects
          on our iconic tunisian culture
          <br /> <br />
          <div className="section-color-tile">
            <p className="dmo-title">
              <b>Tuniscovery</b>
            </p>
            <div className="colors">
              <div className="colorpick" style={{ backgroundColor: "#F7F9FC" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#0A131F" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#E63946" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#1D3557" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#F1FAEE" }}>
                {" "}
              </div>
            </div>
          </div>
          <br />
          <div className="section-color-tile">
            <p className="dmo-title">DMO Tunis Carthage</p>
            <div className="colors">
              <div className="colorpick" style={{ backgroundColor: "#715AFF" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#102E4A" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#A682FF" }}>
                {" "}
              </div>
            </div>
          </div>
          <div className="section-color-tile">
            <p className="dmo-title">DMO Zaghouan</p>
            <div className="colors">
              <div className="colorpick" style={{ backgroundColor: "#588157" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#FEFAE0" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#283618" }}>
                {" "}
              </div>
            </div>
          </div>
          <div className="section-color-tile">
            <p className="dmo-title">DMO Mehdia</p>
            <div className="colors">
              <div className="colorpick" style={{ backgroundColor: "#4361EE" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#F72585" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#3A0CA3" }}>
                {" "}
              </div>
            </div>
          </div>
          <div className="section-color-tile">
            <p className="dmo-title">DMO Djerba</p>
            <div className="colors">
              <div className="colorpick" style={{ backgroundColor: "#6798C0" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#FDC921" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#FFFDF7" }}>
                {" "}
              </div>
            </div>
          </div>
          <div className="section-color-tile">
            <p className="dmo-title">DMO Dahar</p>
            <div className="colors">
              <div className="colorpick" style={{ backgroundColor: "#D36135" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#282B28" }}>
                {" "}
              </div>
              <div className="colorpick" style={{ backgroundColor: "#3E5641" }}>
                {" "}
              </div>
            </div>
          </div>
        </p>
      </div>
      <div className="section-content">
        <p className="section-sub">The result</p>
        <p className="section-title">We were awarded the second prize 🏆</p>
        <p className="section-text">
          Our application was highly appreciated by the jury especially for it's
          design. Huge shoutout to{" "}
          <a
            href="https://www.linkedin.com/in/ahmed-trabelsi-42986116b/"
            target="_blank"
          >
            <b>@AhmedTrabelsi </b>
          </a>
          for this effective partnership!
          <br /> <br />
        </p>
        <div className="section-image-container">
          <img className="section-image" src={img6} />
          <img className="section-image" src={img5} />
          <img className="section-image" src={img4} />
          <img className="section-image" src={img3} />
          <img className="section-image" src={img2} />
          <img className="section-image" src={img1} />
        </div>
      </div>
      <div className="fin">
        <p className="section-sub">UX Case Study</p>
        <img src={logo} className="logo" />
        <Link to="/" target="_blank">
          <MagneticButton>
            <div className="studycase-btn">
              <p className="studycase-txt">Home Page</p>
            </div>
          </MagneticButton>
        </Link>
      </div>
    </div>
  );
}

export default Sections;
