import React, { useRef } from "react";
import "../CaseStudy/casestudy.css";
import "../../components/ServiceSpectrum/servicespectrum.css";
import { Link } from "react-router-dom";
import unidebnotes from "./assets/unideb-video.mov";
import VideoHeader from "../CaseStudy/VideoHeader";
import homepage from "./assets/unideb-homepage.png";
import pdfv from "./assets/unideb-pdf.png";
import searchv from "./assets/unideb-search.mp4";
import sorafont from "./assets/sora-text.svg";
import MediaQuery from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { GraphicPlaceholder, MergedCard, IssueColumn, ValueColumn, HeroBanner } from "../CaseStudy/CaseStudyComponents";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PersonaColumn = ({ name, role, quote, avatarUrl, last }) => (
  <div className={`spectrum-column ${last ? '' : 'spectrum-column-no-border-right'}`}>
    <div className="merged-card-wrapper" style={{ height: "100%", width: "100%", padding: "0" }}>
      <div className="spectrum-merged-card" style={{ height: "100%", padding: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "rgba(254, 250, 224, 0.1)", overflow: "hidden" }}>
            <img src={avatarUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <span className="for-label" style={{ margin: 0, display: "block", color: "#3DA885" }}>{name}</span>
            <span className="for-text" style={{ margin: 0, fontSize: "0.85rem", opacity: 0.7 }}>{role}</span>
          </div>
        </div>
        <p className="for-text" style={{ fontStyle: "italic", borderLeft: "2px solid #3DA885", paddingLeft: "1rem", lineHeight: "1.6" }}>
          "{quote}"
        </p>
      </div>
    </div>
  </div>
);

function UnidebSections() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const columns = gsap.utils.toArray(".spectrum-column");
    const mergedCards = gsap.utils.toArray(".merged-card-wrapper");
    const allElements = [...columns, ...mergedCards];
    const isMobile = window.innerWidth < 900;

    gsap.set(allElements, { opacity: 0, y: 60, filter: "blur(20px)" });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: isMobile ? "top 85%" : "top 75%",
      onEnter: () => {
        gsap.to(allElements, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: isMobile ? 0.08 : 0.15,
          ease: "power3.out",
        });
      },
    });
  }, { scope: containerRef });

  return (
    <div className="servicespectrum-container" ref={containerRef} style={{ background: "transparent", minHeight: "auto", paddingBottom: "10vh" }}>

      <HeroBanner videoSrc={unidebnotes} title="Unideb Notes" />

      <MergedCard badge="OVERVIEW" title="Collaborative Study Platform">
        <p className="merged-description">
          <b>Unideb Notes</b> is a collaborative platform designed to help university students easily share and access study materials.
          The project aims to create a centralized hub where students can upload, organize, and find reliable lecture notes and academic resources.
        </p>
        <p className="merged-description" style={{ marginTop: "1rem" }}>
          By streamlining the process of sharing educational content, <b>UnidebNotes addresses the fragmented nature of current file-sharing solutions</b> while ensuring proper organization and documentation of materials.
        </p>

        <div className="merged-phases" style={{ marginTop: "3rem" }}>
          <span>UX/UI Designer & Frontend Dev</span>
          <span className="phase-arrow">→</span>
          <span>Figma / React / Spring / Trello</span>
        </div>
      </MergedCard>

      <MergedCard badge="THE PROCESS" title="Project Lifecycle">
        <div className="merged-phases" style={{ marginTop: "1rem", fontSize: "1rem", color: "#fefae0", flexWrap: "wrap" }}>
          <span className="for-label">1. IDEATION</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">2. RESEARCH</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">3. ANALYZE</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">4. DESIGN</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">5. TESTING</span>
        </div>

        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", marginTop: "4rem" }}>
          <div>
            <p className="for-label">Duration</p>
            <p className="for-text">3 months</p>
          </div>
          <div>
            <p className="for-label">Frontend & Design</p>
            <p className="for-text">Mohamed Ayoub Chebbi</p>
          </div>
          <div>
            <p className="for-label">Backend Div</p>
            <p className="for-text">Rayhane Ben Aissa</p>
          </div>
          <div>
            <p className="for-label">Database</p>
            <p className="for-text">M. Yassine Dakhlia</p>
          </div>
        </div>
      </MergedCard>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>The Problem</h2>

      <div className="spectrum-columns">
        <IssueColumn
          number="01"
          title="Google Drive"
          issueText="Files become disorganized over time. Difficult to maintain folder structure with no specific features for academic content."
        />
        <IssueColumn
          number="02"
          title="Moodle"
          issueText="Limited strictly to professor-provided resources. Zero student-to-student sharing capabilities."
        />
        <IssueColumn
          number="03"
          title="Fragmentation"
          issueText="Students require multiple links across FB, Drive, and Messenger just to access different basic resources."
          last
        />
        <div className="spectrum-separator"></div>
      </div>

      <MergedCard badge="USER RESEARCH" title="Targeting University Students">
        <p className="merged-description">
          We conducted direct interviews and analyzed usage patterns strictly limited to the University of Debrecen student body.
        </p>
      </MergedCard>

      <div className="spectrum-columns" style={{ marginTop: "2rem" }}>
        <PersonaColumn
          name="SARAH"
          role="Active Sharer"
          avatarUrl="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_21.png"
          quote="I love helping others succeed and seeing them thrive. My detailed notes could really make a difference for my classmates, and I take pride in creating comprehensive study materials that everyone can benefit from."
        />
        <PersonaColumn
          name="MICHAEL"
          role="Resource Seeker"
          avatarUrl="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png"
          quote="I'm always looking for quality study materials to complement my learning. Organization is key for me, and I appreciate when resources are well-structured and easy to find."
        />
        <PersonaColumn
          name="EMMA"
          role="Collaborator"
          avatarUrl="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_26.png"
          quote="Studying is better when we work together and share our different perspectives. I believe in the power of shared knowledge because it helps us all understand complex topics better."
          last
        />
        <div className="spectrum-separator"></div>
      </div>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>Features</h2>

      <MergedCard badge="ORGANIZATION" title="Your Content, Perfectly Organized">
        <p className="merged-description">
          Our hierarchical structure naturally follows the university's curriculum layout, from major programs down to specific courses. The clear categorization ensures that every piece of content is exactly where you expect it to be.
        </p>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <img src={homepage} alt="Unideb Notes Homepage" style={{ width: "100%", height: "auto", display: "block" }} />
      </GraphicPlaceholder>

      <MergedCard badge="VIEWING" title="Focus on What Matters">
        <p className="merged-description">
          Unideb Notes offers a simple PDF viewing experience. Users can view documents with their basic details and navigate through pages using native next and previous commands.
        </p>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <img src={pdfv} alt="PDF Viewer Interface" style={{ width: "100%", height: "auto", display: "block" }} />
      </GraphicPlaceholder>

      <MergedCard badge="DISCOVERY" title="Search & Discovery System">
        <p className="merged-description">
          Our search bar allows students to quickly find materials by typing keywords. Results update directly in real-time.
        </p>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <video src={searchv} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
      </GraphicPlaceholder>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>Identity</h2>

      <MergedCard badge="DESIGN SYSTEM" title="Visual Identity">
        <p className="merged-description" style={{ maxWidth: "900px" }}>
          The color palette aligns with the university's brand identity. Building upon the existing green primary color, we introduced a complementary purple accent to create visual hierarchy. We chose Sora as our primary typeface for its modern geometric design.
        </p>

        <div style={{ marginTop: "3rem" }}>
          <img src={sorafont} alt="Sora Font" style={{ maxWidth: "300px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "1rem", marginTop: "3rem", width: "100%", maxWidth: "600px" }}>
          {[
            { hex: "#6256CA" }, { hex: "#3DA885" }, { hex: "#F4CE15" }, { hex: "#F5F7F8" }, { hex: "#0A2A35" }
          ].map(color => (
            <div key={color.hex} style={{ border: "1px solid rgba(254, 250, 224, 0.15)", padding: "10px", background: "rgba(0,0,0,0.2)" }}>
              <div style={{ width: "100%", height: "50px", backgroundColor: color.hex, marginBottom: "10px" }}></div>
              <p className="for-label" style={{ textAlign: "center", margin: 0 }}>{color.hex}</p>
            </div>
          ))}
        </div>
      </MergedCard>

      <MergedCard badge="TESTING" title="User Testing & Improvement">
        <p className="merged-description">
          Through comprehensive testing sessions with Unideb students, we identified key areas for improvement in the platform's user experience. We simplified the navigation structure and streamlined the file management system based on this feedback.
        </p>
      </MergedCard>



    </div>
  );
}

export default UnidebSections;
