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
import tuniscovery1 from "./assets/tuniscovery_1.webm";
import tuniscovery2 from "./assets/tuniscovery_2.webm";
import tuniscovery3 from "./assets/tuniscovery_3.webm";
import { IconArrowRight } from "@tabler/icons-react";
function Sections() {
  return (
    <div className="section-container">
      <div className="section-content">
        <p className="section-sub">BACKGROUND</p>
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
        <p className="section-text">
          <b>UX/UI Designer</b>
        </p>
      </div>
      <div className="section-content">
        <p className="section-title">The Process</p>
        <div className="process-container">
          <p className="section-text">Understand</p>
          <IconArrowRight />
          <p className="section-text">Research</p>
          <IconArrowRight />
          <p className="section-text">Analyze</p>
          <IconArrowRight />
          <p className="section-text">Design</p>
          <IconArrowRight />
          <p className="section-text">Limited Testing</p>
          <IconArrowRight />
          <p className="section-text">Present</p>
        </div>
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
      <div className="section-content" style={{ width: "100%" }}>
        <p className="section-sub">User Research</p>
        <p className="section-title">Step 2: Let's do some research</p>
        <br />
        <div className="research-container">
          <div className="research-container-item">
            <p className="section-sub">Research Methods</p>
            <p className="section-text">
              <b>Existing solutions & systems</b>
            </p>
            <p className="section-text">
              <b>Qualitative research (interviews with DMO managers)</b>
            </p>
            <p className="section-text">
              <b>Quantitative research (Reviews of existing solutions)</b>
            </p>
            <p className="section-text" style={{ fontSize: "1rem" }}>
              * Limited access to data due to hackathon constraints
            </p>
          </div>
          <br />
          <div className="research-container-item">
            <p className="section-sub">Target users</p>
            <p className="section-text">
              <b>Tourists who want to explore Tunisian destinations</b>
            </p>
            <p className="section-text">
              <b>DMOs who want to promote their destinations</b>
            </p>
            <p className="section-text">
              <b>Small businesses located in each destination</b>
            </p>
          </div>
        </div>
      </div>
      <div className="section-content">
        <p className="section-sub">Research Insights</p>
        <p className="section-title">Reflecting on pain points</p>
        <br />
        <div className="avatars-container">
          <div className="avatar-container">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_9.png"
              className="avatar-image"
            />
            <div className="avatar-info">
              <p className="avatar-name">Sarah (United Kingdom)</p>
              <p className="avatar-description">
                "I’ve always relied on travel agencies to plan my trips because
                they feel safe and organized. But sometimes, I wonder what I
                might be missing out on. I’d love to explore more of Tunisia on
                my own, but I worry about language barriers, getting lost, or
                ending up in places I don’t feel comfortable. I need a tool that
                gives me confidence to step out of my comfort zone while still
                feeling secure."
              </p>
              <p className="avatar-description" style={{ color: "#fcef71" }}>
                * MAIN HACKATHON TOPIC
              </p>
            </div>
          </div>
          <div className="avatar-container">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png"
              className="avatar-image"
            />
            <div className="avatar-info">
              <p className="avatar-name">Ahmed (Tunisia)</p>
              <p className="avatar-description">
                "Tourists visiting our area often stick to major attractions
                promoted by travel agencies, leaving out many of the unique
                experiences we have to offer. My goal is to showcase everything
                that makes our destination special, from our cultural events to
                our hidden gems. I need a platform that not only highlights
                these attractions but also allows me to directly reach and
                inspire tourists in real time, encouraging them to explore
                beyond their set itineraries."
              </p>{" "}
              <p className="avatar-description" style={{ color: "#fcef71" }}>
                * MAIN HACKATHON TOPIC
              </p>
            </div>
          </div>
          <div className="avatar-container">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png"
              className="avatar-image"
            />
            <div className="avatar-info">
              <p className="avatar-name">Amel (Tunisia)</p>
              <p className="avatar-description">
                "It’s hard to compete with big, agency-affiliated shops that get
                all the attention. My ceramic shop represents the heart of
                Tunisian craftsmanship, but tourists often don’t even know I
                exist. I wish I had a way to promote my business to tourists who
                are already nearby, show them what makes my work special, and
                invite them to experience something truly authentic. It would
                make a huge difference for my livelihood and for preserving our
                culture."
              </p>
            </div>
          </div>
        </div>
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
        <br />
        <div className="cs-video-container">
          <div className="cs-video-container-item">
            <video
              className="cs-video"
              autoPlay
              loop
              muted
              src={tuniscovery1}
            />
          </div>
          <div className="cs-video-container-item">
            <video
              className="cs-video"
              autoPlay
              loop
              muted
              src={tuniscovery2}
            />
          </div>
          <div className="cs-video-container-item">
            <video
              className="cs-video"
              autoPlay
              loop
              muted
              src={tuniscovery3}
            />
          </div>
        </div>
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
        <Link to="/">
          <MagneticButton>
            <div className="studycase-btn">
              <p className="studycase-txt">HOME PAGE</p>
            </div>
          </MagneticButton>
        </Link>
      </div>
    </div>
  );
}

export default Sections;
