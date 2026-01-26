import "./process.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../Pictures/assets/1.webp";
import img2 from "../Pictures/assets/2.webp";
import img3 from "../Pictures/assets/3.webp";
import img4 from "../Pictures/assets/4.webp";
import img5 from "../Pictures/assets/5.webp";
import img6 from "../Pictures/assets/6.webp";
import img7 from "../Pictures/assets/7.webp";
import img8 from "../Pictures/assets/8.webp";
import img9 from "../Pictures/assets/9.webp";
import img10 from "../Pictures/assets/10.webp";
import img11 from "../Pictures/assets/11.webp";
import img12 from "../Pictures/assets/12.webp";
import buildImg from "../Pictures/assets/build.jpg";

gsap.registerPlugin(ScrollTrigger);

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 600); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="process-slideshow">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`slideshow-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

const FlowChart = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".flow-element", {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
        
        // Float animation
        gsap.to(".flow-element", {
            y: "random(-10, 10)",
            rotation: "random(-5, 5)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.3,
                from: "random"
            }
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="process-flowchart" ref={containerRef}>
        {/* Big Circle */}
        <div className="flow-element flow-circle-big" style={{
            top: '50%', 
            left: '30%', 
            width: '180px', 
            height: '180px', 
            backgroundColor: '#c3f0c8',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            border: '8px solid #fefae0'
        }}></div>
        
        {/* Big Rounded Triangle */}
        <div className="flow-element flow-triangle-big" style={{
            top: '40%', 
            left: '60%', 
            width: '200px', 
            height: '200px', 
            transform: 'translate(-50%, -50%) rotate(15deg)',
            zIndex: 2,
            background: 'none',
            boxShadow: 'none',
            padding: 0
        }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{overflow: 'visible'}}>
                {/* Outline Layer */}
                <path d="M50 15 L85 80 H15 L50 15Z" fill="#fefae0" stroke="#fefae0" strokeWidth="21" strokeLinejoin="round"/>
                {/* Main Color Layer */}
                <path d="M50 15 L85 80 H15 L50 15Z" fill="#aeb8fe" stroke="#aeb8fe" strokeWidth="15" strokeLinejoin="round"/>
            </svg>
        </div>



        {/* Cursor/Tag */}
        <div className="flow-cursor" style={{top: '60%', left: '70%', zIndex: 15}}>
            <div className="cursor-pointer"></div>
            <div className="cursor-tag">Chebbi</div>
        </div>
    </div>
  );
};

function Process() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);
  const [expandedItem, setExpandedItem] = useState(null);

  const processData = [
    {
      number: "01",
      label: "IDEATE",
      description: "Deep-dive discovery. Using cognitive science principles to ensure we solve the right user problem.",
      customContent: <FlowChart />
    },
    {
      number: "02",
      label: "DESIGN",
      description: "Crafting intuitive flows. Focusing on reducing cognitive load and friction.",
      slideshow: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
    },
    {
      number: "03",
      label: "BUILD",
      description: "Production-grade Engineering. Clean, maintainable Next.js/React code that scales.",
      image: buildImg
    },
    {
      number: "04",
      label: "SCALE",
      description: "Data-driven iteration. Refining the product based on how real humans use it.",
      image: "https://media.licdn.com/dms/image/v2/C4D22AQGPCl3rGuFYOg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1645728943715?e=1770854400&v=beta&t=0B3UScxRKRT4IUo55dk1c8dXNpPsua2B2Kk4VkHoHX4"
    },
  ];

  // Scroll-triggered entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for items
      gsap.set(itemsRef.current, {
        opacity: 0,
        y: 60,
        filter: "blur(20px)",
      });

      // Animate items on scroll
      // Animate items on scroll
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
                  gsap.to(itemsRef.current, {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    stagger: isMobile ? 0.08 : 0.12,
                    ease: "power3.out",
                  });
                },
              });

             // Mobile-specific: Expand items one by one on scroll
             // Removed as per user request to have them expanded by default
        }
      );

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
    <div className="process-container" ref={containerRef}>
      <h2 className="process-title" ref={titleRef}>Process</h2>

      {/* Expandable List */}
      <div className="process-list">
        {processData.map((item, index) => (
          <div
            key={item.label}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`process-item ${expandedItem === index ? 'expanded' : ''}`}
            onMouseEnter={() => window.innerWidth > 900 && setExpandedItem(index)}
            onMouseLeave={() => window.innerWidth > 900 && setExpandedItem(null)}
          >
            <div className="process-item-content">
              {/* Left side - Text content */}
              <div className="process-item-text">
                <div className="process-item-header">
                  <span className="process-item-number">{item.number}</span>
                  <h3 className="process-item-label">{item.label}</h3>
                </div>
                
                {/* Expanded content - description */}
                <div className="process-item-details">
                  <p className="process-item-description">{item.description}</p>
                </div>
              </div>
              
              {/* Right side - Media placeholder */}
              <div className="process-item-media">
                {item.customContent ? (
                  item.customContent
                ) : item.slideshow ? (
                  <Slideshow images={item.slideshow} />
                ) : item.image ? (
                   <img src={item.image} alt={item.label} className="process-media-image" />
                ) : (
                  <div className="media-placeholder">
                    <span>MEDIA</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
