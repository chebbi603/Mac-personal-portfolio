import "./contact.css";
import "../../home.css";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Contact() {
  const signatureRef = useRef(null);

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
          <h2 className="contact-title">Let's Talk</h2>
          <p className="footer-tagline">Available for freelance projects</p>
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
                href="https://docs.google.com/document/d/1yMcimjWwgk-uz37sfpEnC_1TAqAn8VN6pbHjrjwuwjI/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="contact-myloc">
          Designed & Developed with {"<3"} by Chebbi Mohamed Ayoub
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
