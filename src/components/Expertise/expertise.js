import "./expertise.css";
import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import media assets
import photo1 from "../../assets/photo.webp";
import photo2 from "../../assets/photo-2.webp";
import wpp from "../../assets/wpp.webp";
import lic from "../../assets/lic.webp";
import projectsHeader from "../../assets/projectsheader.webp";
import tuniscovery from "../../assets/tuniscovery-header.png";
import heroVideo from "../../assets/herovideo.webm";

gsap.registerPlugin(ScrollTrigger);

function Expertise() {
  const containerRef = useRef(null);
  const tableRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const timelineData = [
    { word: "Ideate", description: "Research, brainstorm, and define the vision through discovery sessions and user insights." },
    { word: "Design", description: "Craft intuitive interfaces and experiences that resonate with users and align with goals." },
    { word: "Build", description: "Transform designs into performant, scalable code with attention to every detail." },
    { word: "Scale", description: "Optimize, iterate, and grow the product based on real-world feedback and metrics." },
  ];

  // Media for non-diagonal cells
  const mediaContent = [
    [null, { type: 'image', src: photo1 }, { type: 'image', src: photo2 }, { type: 'image', src: wpp }],
    [{ type: 'image', src: lic }, null, { type: 'video', src: heroVideo }, { type: 'image', src: tuniscovery }],
    [{ type: 'image', src: photo2 }, { type: 'image', src: wpp }, null, { type: 'image', src: photo1 }],
    [{ type: 'image', src: projectsHeader }, { type: 'image', src: lic }, { type: 'image', src: tuniscovery }, null],
  ];

  // Update spotlight position relative to table
  const updateSpotlight = useCallback(() => {
    const table = tableRef.current;
    if (!table) return;

    const rect = table.getBoundingClientRect();
    const x = mousePos.current.x - rect.left;
    const y = mousePos.current.y - rect.top;

    table.style.setProperty('--spotlight-x', `${x}px`);
    table.style.setProperty('--spotlight-y', `${y}px`);
  }, []);

  useEffect(() => {
    const table = tableRef.current;

    // Track mouse position globally
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      updateSpotlight();
    };

    // Update spotlight on scroll
    const handleScroll = () => {
      updateSpotlight();
    };

    // Listen to mouse move on document to track position
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const ctx = gsap.context(() => {
      const rows = containerRef.current.querySelectorAll(".timeline-row");

      rows.forEach((row) => {
        const text = row.querySelector(".timeline-text");
        const number = row.querySelector(".timeline-number");
        const description = row.querySelector(".timeline-description");
        const mediaItems = row.querySelectorAll(".cell-media");
        const videos = row.querySelectorAll("video.cell-media");

        // Set initial state for description - hidden
        if (description) {
          gsap.set(description, {
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
            height: 0,
            marginTop: 0,
          });
        }

        // Set initial state for media - hidden
        gsap.set(mediaItems, {
          opacity: 0,
          filter: "blur(20px)",
          scale: 1.1,
        });

        // Animate text on scroll - simple and reliable
        ScrollTrigger.create({
          trigger: row,
          start: "top 90%",
          onEnter: () => {
            gsap.to(number, {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            });
            gsap.to(text, {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 0.6,
              delay: 0.1,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to([number, text], {
              opacity: 0,
              filter: "blur(15px)",
              y: 30,
              duration: 0.4,
              ease: "power2.in",
            });
          },
        });

        // Set initial state for number and text
        gsap.set([number, text], {
          opacity: 0,
          filter: "blur(15px)",
          y: 30,
        });

        // Hover: show media, description, and play videos
        row.addEventListener("mouseenter", () => {
          gsap.killTweensOf(mediaItems);
          gsap.killTweensOf(description);

          gsap.to(mediaItems, {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
          });

          if (description) {
            gsap.to(description, {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              height: "auto",
              marginTop: "0.75rem",
              duration: 0.5,
              ease: "power3.out",
            });
          }

          videos.forEach(video => {
            video.play();
          });

          // Smooth hover effect for text
          if (text) {
            gsap.to(text, {
              x: -5,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        });

        row.addEventListener("mouseleave", () => {
          gsap.killTweensOf(mediaItems);
          gsap.killTweensOf(description);

          gsap.to(mediaItems, {
            opacity: 0,
            filter: "blur(20px)",
            scale: 1.1,
            duration: 0.3,
            ease: "power2.in",
            overwrite: true,
          });

          if (description) {
            gsap.to(description, {
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
              height: 0,
              marginTop: 0,
              duration: 0.3,
              ease: "power2.in",
              overwrite: true,
            });
          }

          videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
          });

          // Reset smooth hover effect
          if (text) {
            gsap.to(text, {
              scale: 1,
              x: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        });
      });
    }, containerRef);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, [updateSpotlight]);

  return (
    <div className="expertise-container" ref={containerRef}>
      <p className="timeline-label">MY PROCESS</p>
      <div className="timeline-table" ref={tableRef}>
        {/* Base border grid - always slightly visible */}
        <div className="border-grid-base">
          {[0, 1, 2, 3].map((rowIdx) => (
            <div key={rowIdx} className="border-grid-row">
              {[0, 1, 2, 3].map((cellIdx) => (
                <div key={cellIdx} className="border-grid-cell"></div>
              ))}
            </div>
          ))}
        </div>
        {/* Spotlight border grid - reveals more on hover */}
        <div className="border-grid-spotlight">
          {[0, 1, 2, 3].map((rowIdx) => (
            <div key={rowIdx} className="border-grid-row">
              {[0, 1, 2, 3].map((cellIdx) => (
                <div key={cellIdx} className="border-grid-cell"></div>
              ))}
            </div>
          ))}
        </div>
        {timelineData.map((item, rowIndex) => (
          <div key={item.word} className="timeline-row">
            {[0, 1, 2, 3].map((cellIndex) => (
              <div
                key={cellIndex}
                className={`timeline-cell ${cellIndex === rowIndex ? 'text-cell' : 'media-cell'}`}
              >
                {cellIndex === rowIndex ? (
                  <div className="text-content">
                    <div className="text-header">
                      <span className="timeline-number">0{rowIndex + 1}</span>
                      <p className="timeline-text">{item.word}</p>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                ) : (
                  mediaContent[rowIndex][cellIndex]?.type === 'video' ? (
                    <video
                      src={mediaContent[rowIndex][cellIndex].src}
                      className="cell-media"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={mediaContent[rowIndex][cellIndex]?.src}
                      alt=""
                      className="cell-media"
                    />
                  )
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
