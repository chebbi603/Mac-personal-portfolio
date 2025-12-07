import React from "react";
import "../case-study/casestudy.css";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import unidebnotes from "./assets/unideb-video.mov";
import VideoHeader from "../case-study/VideoHeader";
import homepage from "./assets/unideb-homepage.png";
import pdfv from "./assets/unideb-pdf.png";
import searchv from "./assets/unideb-search.mp4";
import sorafont from "./assets/sora-text.svg";
import MediaQuery from "react-responsive";

function UnidebSections() {
  return (
    <div className="section-container">
      <div className="section-content">
        <MediaQuery query="(max-device-width: 1000px)">
          <div style={{ height: "100px" }}></div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1000px)">
          <div style={{ height: "200px" }}></div>
        </MediaQuery>
        <p className="section-sub">OVERVIEW</p>
        <p className="section-title" style={{ color: "#3DA885" }}>
          Unideb Notes
        </p>
        <p className="section-text">
          <b>Unideb Notes</b> is a collaborative platform designed to{" "}
          <b>
            help university students easily share and access study materials.
          </b>{" "}
          The project aims to create a centralized hub where students can
          upload, organize, and find reliable lecture notes and academic
          resources. <br /> By streamlining the process of sharing educational
          content,{" "}
          <b>
            UnidebNotes addresses the fragmented nature of current file-sharing
            solutions
          </b>{" "}
          while ensuring proper organization and documentation of materials.
        </p>
        <br />
        <p className="section-sub">Role</p>
        <p className="section-text">
          <b>UX/UI Designer - Frontend Developer</b>
        </p>
        <br />
        <p className="section-sub">Tools</p>
        <p className="section-text">
          <b>Figma - React - Spring - Trello - Postman</b>
        </p>
      </div>
      <MediaQuery query="(min-device-width: 1000px)">
        <VideoHeader src={unidebnotes} />
      </MediaQuery>
      <div className="section-content">
        <p className="section-title">The Process</p>
        <div className="process-container">
          <p className="section-text">Ideation</p>
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
        <br />
        <p className="section-sub">Duration</p>
        <p className="section-text">
          <b>3 months</b>
        </p>
        <br />
        <p className="section-sub">Team</p>
        <p className="section-text">
          <b>Mohamed Ayoub Chebbi</b>
          <br />
          UX/UI Designer & Frontend Developer
          <br />
          <br />
          <b>Rayhane Ben Aissa</b>
          <br />
          Backend Developer
          <br />
          <br />
          <b>Apostol Cans{"ı"}n Litopulos</b>
          <br />
          Unit Testing
          <br />
          <br />
          <b>Mohamed Yassine Dakhlia</b>
          <br />
          Database Management
        </p>
      </div>
      <div className="section-content" style={{ width: "100%" }}>
        <p className="section-sub">User Research</p>
        <p className="section-title">Let's do some research</p>
        <br />
        <div className="research-container">
          <div className="research-container-item">
            <p className="section-sub">Research Methods</p>
            <p className="section-text">
              <b>Inteviews with students</b>
            </p>
            <p className="section-text">
              <b>Analysis of usage patterns</b>
            </p>
          </div>
          <br />
          <div className="research-container-item">
            <p className="section-sub">Target users</p>
            <p className="section-text">
              <b>University of Debrecen students</b>
            </p>
          </div>
        </div>
        <br />
        <p className="section-sub">Key pain points</p>
        <p className="section-text">
          <b>- Lack of centralized storage for study materials</b>
        </p>
        <p className="section-text">
          <b>- Multiple links needed to access different resources</b>
        </p>
        <p className="section-text">
          <b>- Poor organization and incomplete file details</b>
        </p>
      </div>
      <div className="section-content">
        <p className="section-sub">Competitor Analysis</p>
        <p className="section-title">Let's see what others are doing</p>
        <br />
        <p className="section-text">
          <b>Google Drive</b>
        </p>
        <p className="section-text">- Files become disorganized over time</p>
        <p className="section-text">
          - Difficult to maintain consistent folder structure
        </p>
        <p className="section-text">
          - No dedicated features for academic content
        </p>
        <br />
        <p className="section-text">
          <b>Moodle</b>
        </p>
        <p className="section-text">
          - Limited to professor-provided resources
        </p>
        <p className="section-text">
          - No student-to-student sharing capabilities
        </p>
        <p className="section-text">- Rigid structure with restricted access</p>
      </div>
      <div className="section-content">
        <p className="section-sub">Research Insights</p>
        <p className="section-title">Reflecting on pain points</p>
        <br />
        <div className="avatars-container">
          <div className="avatar-container">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_21.png"
              className="avatar-image"
              alt="Sarah - The Active Sharer"
            />
            <div className="avatar-info">
              <p className="avatar-name">Sarah - The Active Sharer</p>
              <p className="avatar-description">
                "I love helping others succeed and seeing them thrive. My
                detailed notes could really make a difference for my classmates,
                and I take pride in creating comprehensive study materials that
                everyone can benefit from."
              </p>
            </div>
          </div>
          <div className="avatar-container">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png"
              className="avatar-image"
              alt="Michael - The Resource Seeker"
            />
            <div className="avatar-info">
              <p className="avatar-name">Michael - The Resource Seeker</p>
              <p className="avatar-description">
                "I'm always looking for quality study materials to complement my
                learning. Organization is key for me, and I appreciate when
                resources are well-structured and easy to find, helping me stay
                focused on actually learning the material."
              </p>{" "}
            </div>
          </div>
          <div className="avatar-container">
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_26.png"
              className="avatar-image"
              alt="Emma - The Collaborative Learner"
            />
            <div className="avatar-info">
              <p className="avatar-name">Emma - The Collaborative Learner</p>
              <p className="avatar-description">
                "Studying is better when we work together and share our
                different perspectives. I believe in the power of shared
                knowledge because it helps us all understand complex topics
                better and builds a stronger learning community."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content">
          <p className="section-title-fancy">
            How Can We Build a <br />
            <span style={{ color: "#6256CA" }}>
              Better Note-Sharing Platform
            </span>{" "}
            for <span style={{ color: "#3DA885" }}>University of Debrecen</span>{" "}
            students?
          </p>
        </div>
      </div>
      <div className="section-content">
        <p className="section-sub">Features & capabilities</p>
        <p className="section-title">Your Content, Perfectly Organized</p>
        <p className="section-text">
          Our hierarchical structure naturally follows your university's
          curriculum layout, from major programs down to specific courses. The
          clear categorization ensure that every piece of content is exactly
          where you expect it to be.
        </p>
        <br />
        <img src={homepage} className="section-image" alt="Unideb Notes Homepage" />
      </div>

      <div className="section-content">
        <p className="section-sub">Features & capabilities</p>
        <p className="section-title">
          Immersive Note Viewing: Focus on What Matters
        </p>
        <p className="section-text">
          Unideb Notes offers a simple PDF viewing experience. Users can view
          documents with their basic details and navigate through pages using
          next and previous buttons.
        </p>
        <br />
        <img src={pdfv} className="section-image" alt="PDF Viewer Interface" />
      </div>

      <div className="section-content">
        <p className="section-sub">Features & capabilities</p>
        <p className="section-title">
          Search & Discovery: Find What You Need, When You Need It
        </p>
        <p className="section-text">
          Our search bar allows students to quickly find materials by typing
          keywords. Results update in real-time as you type to help you find
          what you need.
        </p>
        <br />
        <video src={searchv} autoPlay loop muted className="section-image" />
      </div>

      <div className="section-content">
        <p className="section-title">Visual Identity & Design System</p>
        <p className="section-text">
          The color palette was carefully selected to align with the
          university's brand identity while enhancing user experience. Building
          upon the university's existing green primary color, we introduced a
          complementary purple accent to:
        </p>
        <p className="section-text">
          - <b>Create visual hierarchy and improve navigation</b>
        </p>
        <p className="section-text">
          - <b>Enhance readability and content organization</b>
        </p>
        <p className="section-text">
          - <b>Maintain brand consistency while adding a modern touch</b>
        </p>
        <br />
        <p className="section-text">
          We chose Sora as our primary typeface for its modern, geometric design
          that perfectly balances professionalism with approachability. The
          font's clean lines and excellent readability across different screen
          sizes make it ideal for an academic platform, while its slightly
          rounded edges add a friendly, contemporary feel that resonates with
          our student user base.
        </p>
        <br />
        <img src={sorafont} className="font-svg" alt="Sora Font Specimen" />
        <br />
        <div className="colors">
          <div className="colorpick" style={{ backgroundColor: "#6256CA" }}>
            {" "}
          </div>
          <div className="colorpick" style={{ backgroundColor: "#3DA885" }}>
            {" "}
          </div>
          <div className="colorpick" style={{ backgroundColor: "#F4CE15" }}>
            {" "}
          </div>
          <div className="colorpick" style={{ backgroundColor: "#F5F7F8" }}>
            {" "}
          </div>
          <div className="colorpick" style={{ backgroundColor: "#0A2A35" }}>
            {" "}
          </div>
        </div>
      </div>
      <div className="section-content">
        <p className="section-sub">Testing & Presentation</p>
        <p className="section-title">User testing & imporvement</p>
        <p className="section-text">
          Through comprehensive testing sessions with Unideb students, we
          identified key areas for improvement in the platform's user
          experience. Based on their feedback, we simplified the navigation
          structure and streamlined the file management system. These
          enhancements resulted in a more intuitive and efficient platform that
          better serves our student community.
        </p>
        <br />
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
          <p className="section-title-fancy">Unideb Notes</p>
          <br />
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <Link to="https://github.com/chebbi603/UniNotesApp">
            <div className="studycase-btn">
              <p className="studycase-txt">GITHUB REPO</p>
            </div>
          </Link>
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

export default UnidebSections;
