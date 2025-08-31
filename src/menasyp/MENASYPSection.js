import React from "react";
import "../case-study/casestudy.css";
import MagneticButton from "../gsap";
import { Link } from "react-router-dom";
import ScrollVideoComponent from "../case-study/ScrollVideoComponent";

import presentation1 from "./assets/menapresentation-1.webp";
import presentation2 from "./assets/menapresentation-2.webp";
import presentation3 from "./assets/menapresentation-3.webp";
import presentation4 from "./assets/menapresentation-4.webp";
import presentation5 from "./assets/menapresentation-5.webp";
import presentation6 from "./assets/menapresentation-6.webp";
import presentation7 from "./assets/menapresentation-7.webp";
import presentation8 from "./assets/menapresentation-8.webp";
import presentation9 from "./assets/menapresentation-9.webp";
import presentation10 from "./assets/menapresentation-10.webp";
// import menasypVideo from "./assets/menasyp_with_audio.webm";
import MediaQuery from "react-responsive";
const menasypVideo = "/menasyp_mobile_optimized.mp4";
const menasypVideoWebm = "/menasyp_with_audio.webm";

function MENASYPSections() {
  return (
    <div className="mena-section-container">
      <div className="section-content">
        <MediaQuery query="(max-device-width: 1000px)">
          <div style={{ height: "100px" }}></div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1000px)">
          <div style={{ height: "200px" }}></div>
        </MediaQuery>
        <p className="section-sub">OVERVIEW</p>
        <p className="section-title" style={{ color: "#FF2057" }}>
          IEEE R8 MENA SYP 2025
        </p>
        <p className="section-text">
          The <b>R8 MENA SYP 2025</b>, organized by IEEE INSAT, will be the{" "}
          <b>first-ever fusion of MESYP and NASYP.</b> It will take place in
          Gammarth, Tunis, Tunisia, from August 27 to 29, 2025.
          <br />
          <b>
            MENA SYP 2025 will combine technological innovation, international
            networking, and cultural immersion
          </b>
          , marking a turning point for IEEE events.
        </p>
        <br />
        <p className="section-sub">Role</p>
        <p className="section-text">
          <b>Graphic & Brand Designer</b>
        </p>
        <br />
        <p className="section-sub">Tools</p>
        <p className="section-text">
          <b>Figma - After Effects - Premiere Pro</b>
        </p>
      </div>
      <MediaQuery query="(min-device-width: 1000px)">
        <ScrollVideoComponent
          frameCount={80}
          framePrefix="frame_"
          frameExtension="jpg"
        />
      </MediaQuery>
      <div className="section-content">
        <p className="section-sub">Design Process</p>
        <p className="section-title">Visual Identity & Brand Development</p>
        <p className="section-text">
          The design process focused on creating a cohesive visual identity that
          represents the fusion of MENA cultures while highlighting Tunisia's
          role as the host country.
        </p>
        <br />
        <div className="section-image-container">
          <img src={presentation1} className="section-image" />
          <img src={presentation2} className="section-image" />
          <img src={presentation3} className="section-image" />
          <img src={presentation4} className="section-image" />
          <img src={presentation5} className="section-image" />
        </div>
      </div>

      <div className="section-content">
        <p className="section-sub">Final Results</p>
        <p className="section-title">Brand Implementation</p>
        <p className="section-text">
          The final brand identity successfully captures the essence of the MENA
          region while maintaining a modern and professional appearance suitable
          for an international congress.
        </p>
        <br />
        <div className="section-image-container">
          <img src={presentation6} className="section-image" />
          <img src={presentation7} className="section-image" />
          <img src={presentation8} className="section-image" />
          <img src={presentation9} className="section-image" />
          <img src={presentation10} className="section-image" />
        </div>
      </div>

      <div className="section-content">
        <p className="section-sub">Final Presentation</p>
        <p className="section-title">Project Showcase</p>
        <p className="section-text">
          Watch the complete presentation showcasing the MENASYP brand identity
          and design process.
        </p>
        <br />
        <video
          controls
          className="section-image"
          style={{ width: "100%" }}
          preload="metadata"
          playsInline
          webkit-playsinline="true"
        >
          <source src={menasypVideo} type="video/mp4" />
          <source src={menasypVideoWebm} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="fin">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <p className="section-sub">Project Presentation</p>
          <p className="section-title-fancy">MENASYP</p>
          <br />
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <Link to="/">
            <div className="studycase-btn">
              <p className="studycase-txt">HOME PAGE</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MENASYPSections;
