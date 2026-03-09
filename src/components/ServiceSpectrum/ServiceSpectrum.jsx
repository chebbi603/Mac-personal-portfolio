import "./servicespectrum.css";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IconMail, IconCalendar } from "@tabler/icons-react";
import { SOCIALS } from "../../config";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* 
  Internal Dropdown Component that mimics ContactAudit behavior 
  but triggers immediately on mount (Active State).
*/
function SpectrumAuditDropdown({ onClose }) {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const springConfig = { duration: 0.8, ease: "elastic.out(1, 0.75)" };

    // Animate IN on mount
    
    // 1. Container Expansion
    gsap.fromTo(wrapperRef.current, 
      {
        width: 140,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#fefae0",
      },
      {
        width: 200,
        height: 170,
        borderRadius: 20,
        backgroundColor: "#242424",
        ...springConfig
      }
    );

    // 2. Text transition (simulated sequence: Text -> Options)
    // Actually, since we want to show options immediately when "Active", 
    // we can skip the "Get an audit" text state if desired?
    // User said "behave exactly like...". The bottom button starts as "Get an audit" then expands.
    // If we want exact behavior, we should start small "Schedule a call" then expand?
    // But since this is a click-triggered overlay, maybe instant expansion is better.
    // Let's go with the Expansion Animation showing the list immediately, 
    // animating text out if it helps, or just animating list in.
    
    // Animate List In
     gsap.fromTo(".spectrum-audit-option", 
        { y: 20, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1, 
          stagger: 0.05, 
          duration: 0.5,
          ease: "back.out(1.5)",
          delay: 0.1
        }
      );

  }, { scope: wrapperRef });

  return (
    <div className="spectrum-audit-overlay" onClick={onClose}>
       {/* Stop propagation on wrapper click to prevent closing immediately */}
       <div className="spectrum-audit-wrapper" ref={wrapperRef} onClick={(e) => e.stopPropagation()}>
          <div className="spectrum-audit-list">
              <a 
                href={`mailto:${SOCIALS.email}`}
                className="spectrum-audit-option"
              >
                  <IconMail size={20} />
                  <span>E-MAIL</span>
              </a>
              <a 
                href={SOCIALS.calendly} 
                target="_blank" 
                rel="noreferrer"
                className="spectrum-audit-option"
              >
                  <IconCalendar size={20} />
                  <span>CALENDLY</span>
              </a>
              <a 
                href={SOCIALS.upworkConsultation} 
                target="_blank" 
                rel="noreferrer"
                className="spectrum-audit-option spectrum-audit-highlighted"
              >
                  <IconCalendar size={20} />
                  <span>UPWORK</span>
              </a>
          </div>
       </div>
    </div>
  );
}

function ServiceSpectrum() {
  /* State */
  const [activeColumn, setActiveColumn] = useState(null);
  
  /* Refs */
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const columnsRef = useRef([]);
  const mergedCardRef = useRef(null);

  const servicesData = [
    {
      number: "01",
      label: "DEFINITION",
      forClients: "Have a vision but no blueprint.",
      services: [
        "Discovery Workshops",
        "User Flow Mapping",
        "Technical Feasibility Study",
      ],
      uxAngle: "We stop you from building the wrong thing.",
    },
    {
      number: "02",
      label: "INTERFACE",
      forClients: "Have requirements but need the 'Wow'.",
      services: [
        "High-Fidelity Prototyping",
        "Motion Design & Micro-interactions",
        "Design Systems & Scalable UI",
      ],
      uxAngle: "We make your product feel like magic.",
    },
    {
      number: "03",
      label: "PRODUCTION",
      forClients: "Need to ship now.",
      services: [
        "Front-End Architecture (React/Next.js)",
        "Component Library Build",
        "Quality Assurance (QA) & Polish",
      ],
      uxAngle: "We translate the design perfectly into code.",
    },
  ];
  
  // Reuse the ContactAudit drop logic or similar animation?
  // We can just animate the overlay in GSAP.
  
  const handleCardClick = (index, e) => {
    // If clicking a link inside, don't toggle
    if (e.target.closest('a')) return;
    
    if (activeColumn === index) {
      setActiveColumn(null);
    } else {
      setActiveColumn(index);
    }
  };

  const handleClose = (e) => {
    e && e.stopPropagation();
    setActiveColumn(null);
  }

  // Scroll-triggered entrance animation for columns
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(columnsRef.current, {
        opacity: 0,
        y: 60,
        filter: "blur(20px)",
      });

      // Animate columns on scroll
      // Animate columns on scroll
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 900px)",
          isMobile: "(max-width: 899px)",
        },
        (context) => {
          let { isMobile } = context.conditions;
          
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: isMobile ? "top 85%" : "top 80%",
            onEnter: () => {
              gsap.to(columnsRef.current, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: isMobile ? 0.08 : 0.15, // Faster stagger on mobile
                ease: "power3.out",
              });
            },
          });
        }
      );
      
      // Animate merged card
       if (mergedCardRef.current) {
        gsap.set(mergedCardRef.current, { opacity: 0, y: 40 });
        ScrollTrigger.create({
          trigger: mergedCardRef.current,
          start: "top 85%",
          onEnter: () => {
             gsap.to(mergedCardRef.current, {
               opacity: 1,
               y: 0,
               duration: 0.8,
               ease: "power3.out"
             });
          }
        });
      }

      // Parallax title animation - scrolls slower and blurs when overlapped
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "top -20%",
            scrub: true,
          },
          y: 150,
          filter: "blur(20px)",
          opacity: 0,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="servicespectrum-container" ref={containerRef}>
      <h2 className="servicespectrum-title" ref={titleRef}>Services</h2>

      {/* Grid Container */}
      <div className="spectrum-columns">
        
        {/* Row 1: Individual Columns */}
        {servicesData.map((service, index) => (
          <div
            key={service.label}
            ref={(el) => (columnsRef.current[index] = el)}
            className={`spectrum-column ${activeColumn === index ? 'active' : ''}`}
            onClick={(e) => handleCardClick(index, e)}
            data-cursor={activeColumn === index ? undefined : "custom"}
            data-cursor-text={activeColumn === index ? undefined : "SCHEDULE A CALL"}
            data-cursor-icon={activeColumn === index ? undefined : "arrow-up-right"}
          >
            {activeColumn === index && <SpectrumAuditDropdown onClose={handleClose} />}
            
            <div className={`spectrum-content-wrapper ${activeColumn === index ? 'blurred' : ''}`}>
              <div className="column-header">
                <span className="column-number">{service.number}</span>
                <h3 className="column-label">{service.label}</h3>
              </div>

              <p className="column-for-clients">
                <span className="for-label">For clients who:</span>
                <span className="for-text">"{service.forClients}"</span>
              </p>

              <ul className="column-services">
                {service.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="column-ux-angle">"{service.uxAngle}"</p>
            </div>
          </div>
        ))}
        
        {/* Infinite Separator Line */}
        <div className="spectrum-separator"></div>

        {/* Row 2: Merged Super Card */}
        <div 
          className={`merged-card-wrapper ${activeColumn === 99 ? 'active' : ''}`}
          onClick={(e) => handleCardClick(99, e)}
          data-cursor={activeColumn === 99 ? undefined : "custom"}
          data-cursor-text={activeColumn === 99 ? undefined : "SCHEDULE A CALL"}
          data-cursor-icon={activeColumn === 99 ? undefined : "arrow-up-right"}
        >
           {activeColumn === 99 && <SpectrumAuditDropdown onClose={handleClose} />}

           <div className={`spectrum-merged-card ${activeColumn === 99 ? 'blurred' : ''}`} ref={mergedCardRef}>
            <div className="merged-card-content">
              <div className="merged-badge">END-TO-END</div>
              <h2 className="merged-title">The Forward Deployed Protocol</h2>
              <p className="merged-description">
                I own the entire lifecycle. From whiteboarding the concept to
                pushing the commit. Total accountability.
              </p>
              <div className="merged-phases">
                <span>Definition</span>
                <span className="phase-arrow">→</span>
                <span>Interface</span>
                <span className="phase-arrow">→</span>
                <span>Production</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServiceSpectrum;
