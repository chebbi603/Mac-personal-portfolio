import { useState, useRef } from "react";
import "./ContactAudit.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconMail, IconCalendar } from "@tabler/icons-react";

export default function ContactAudit() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    // Animation constants
    const springConfig = { duration: 0.8, ease: "elastic.out(1, 0.75)" };

    if (isOpen) {
      // EXPAND
      // 1. Animate container size and radius
      gsap.to(wrapperRef.current, {
        width: 200,
        height: 120,
        borderRadius: 20,
        backgroundColor: "#242424",
        ...springConfig
      });

      // 2. Hide Initial Text
      gsap.to(".audit-text-initial", {
        scale: 0,
        autoAlpha: 0,
        duration: 0.3,
        ease: "back.in(2)"
      });

      // 3. Show List items
      gsap.to(".audit-options-list", {
        autoAlpha: 1,
        duration: 0.2, // quick fade in container
        delay: 0.1
      });
      
      gsap.fromTo(".audit-option-item", 
        { y: 20, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1, 
          stagger: 0.05, 
          duration: 0.5,
          ease: "back.out(1.5)",
          delay: 0.2
        }
      );

    } else {
      // COLLAPSE
      // 1. Hide List items
      gsap.to(".audit-option-item", {
        y: 10,
        autoAlpha: 0,
        stagger: 0.03,
        duration: 0.2,
        ease: "power1.in"
      });

      // 2. Shrink container
      gsap.to(wrapperRef.current, {
        width: 140, // Back to initial width
        height: 60,
        borderRadius: 50, // Back to pill shape
        backgroundColor: "#fefae0",
        delay: 0.1,
        ...springConfig
      });

      // 3. Show Initial Text
      gsap.to(".audit-text-initial", {
        scale: 1,
        autoAlpha: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        delay: 0.2
      });
      
       gsap.to(".audit-options-list", {
        autoAlpha: 0,
        duration: 0.1
      });
    }
  }, { scope: containerRef, dependencies: [isOpen] });

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div 
      className="contact-audit-container" 
      ref={containerRef}
    >
      <div 
          className="contact-audit-wrapper" 
          ref={wrapperRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
          <div className="audit-text-initial">
              GET AN AUDIT
          </div>

          <div className="audit-options-list">
              <a 
                href="mailto:chebbimohamedayoub@gmail.com"
                className="audit-option-item"
              >
                  <IconMail size={20} />
                  <span>E-MAIL</span>
              </a>
              <a 
                href="https://calendly.com/" 
                target="_blank" 
                rel="noreferrer"
                className="audit-option-item"
              >
                  <IconCalendar size={20} />
                  <span>CALENDLY</span>
              </a>
          </div>
      </div>
    </div>
  );
}
