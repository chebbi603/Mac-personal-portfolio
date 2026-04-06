import "./contact.css";
import "../../home.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import resumePDF from "../../assets/Mohamed Ayoub Chebbi Resume Forward-Deployed.pdf";
import { IconX } from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Contact() {
  const signatureRef = useRef(null);
  const [showResume, setShowResume] = useState(false);

  const toggleResume = (e) => {
    // On mobile, prefer the native browser viewer (new tab)
    if (window.innerWidth < 900) return;
    
    e.preventDefault();
    setShowResume(!showResume);
  };

  useGSAP(() => {
    if (!signatureRef.current) return;

    const line1 = signatureRef.current.querySelector('.signature-line-1');
    const line2 = signatureRef.current.querySelector('.signature-line-2');

    // Use matchMedia to ensure safe triggers on mobile resize
    const mm = gsap.matchMedia();

    mm.add("(min-width: 10px)", () => {
      // Line 1 moves left on scroll
      gsap.fromTo(line1,
        { x: 100 },
        {
          x: -100,
          scrollTrigger: {
            trigger: signatureRef.current,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true
          }
        }
      );

      // Line 2 moves right on scroll
      gsap.fromTo(line2,
        { x: -100 },
        {
          x: 100,
          scrollTrigger: {
            trigger: signatureRef.current,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true
          }
        }
      );
    });
  }, { scope: signatureRef });

  return (
    <div className="contact-container">

      {/* Main Footer Content */}
      <div className="contact-content">
        {/* Left - Headlines */}
        <div className="footer-headlines">
          <h2 className="contact-title">Let's Build Something Intelligent.</h2>
          <p className="footer-tagline">Currently accepting partners for Q2 2026.</p>
        </div>

        {/* Right - Links */}
        <div className="contact-link-container">
          <div className="footer-link-column">
            <p className="footer-link-title">Connect</p>
            <div className="menu-link-element">
              <a
                className="menu-link-text"
                href="mailto:chebbimohamedayoub@gmail.com"
              >
                Email
              </a>
            </div>
            <div className="menu-link-element">
              <a
                className="menu-link-text"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mohamed-ayoub-chebbi/"
              >
                LinkedIn
              </a>
            </div>
            <div className="menu-link-element">
              <a
                className="menu-link-text"
                target="_blank"
                rel="noreferrer"
                href="https://www.upwork.com/freelancers/ayoubc4"
              >
                Upwork
              </a>
            </div>
          </div>

          <div className="footer-link-column">
            <p className="footer-link-title">Portfolio</p>
            <div className="menu-link-element">
              <a
                className="menu-link-text"
                target="_blank"
                rel="noreferrer"
                href="https://www.dribbble.com/chebbimedayoub"
              >
                Dribbble
              </a>
            </div>
            <div className="menu-link-element">
              <a
                className="menu-link-text"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/chebbi603"
              >
                GitHub
              </a>
            </div>
            <div className="menu-link-element">
              <a
                className="menu-link-text"
                href={resumePDF}
                onClick={toggleResume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {showResume && (
        <div className="resume-modal-overlay" onClick={() => setShowResume(false)}>
          <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="resume-modal-close" onClick={() => setShowResume(false)}>
              <IconX size={24} />
            </button>
            <iframe 
              src={`${resumePDF}#toolbar=0`} 
              className="resume-iframe" 
              title="Resume Viewer"
            />
          </div>
        </div>
      )}

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="contact-myloc">
          Designed & Developed with {"<3"} by Chebbi Mohamed Ayoub <br />
          <span style={{ opacity: 0.6, fontSize: "0.85em", marginTop: "4px", display: "inline-block" }}>R&D Focus: Generative Interfaces Thesis.</span>
        </p>
        <p className="contact-myloc">Built with React & GSAP</p>
      </div>

      {/* Signature */}
      <div className="footer-signature-container" ref={signatureRef}>
        {/* Line 1: CHEBBI highlighted */}
        <div className="footer-signature signature-line-1">
          {[...Array(5)].map((_, repeatIndex) => (
            <span key={`l1-r${repeatIndex}`} className="signature-word">
              <span className="signature-faded">AYOUB</span>
              <span className="signature-highlight">CHEBBI</span>
              <span className="signature-faded">MEDAYOUB</span>
            </span>
          ))}
        </div>
        {/* Line 2: MEDAYOUB highlighted */}
        <div className="footer-signature signature-line-2">
          {[...Array(5)].map((_, repeatIndex) => (
            <span key={`l2-r${repeatIndex}`} className="signature-word">
              <span className="signature-faded">CHEBBI</span>
              <span className="signature-highlight">MEDAYOUB</span>
              <span className="signature-faded">CHEBBI</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
