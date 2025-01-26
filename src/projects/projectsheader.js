import "./projectsheader.css";
import projectsheaderimg from "../assets/projectsheader.webp";
import tuniscoveryheader from "../assets/tuniscovery-header.png";
import headercomp from "../assets/projectsheader_c.webp";
import MediaQuery from "react-responsive";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ProgressiveImage = ({ src, placeholder, alt, mobile }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);

  const onImageLoad = () => {
    setImageSrc(src);
  };
  if (mobile)
    return (
      <img
        className="projectsheader-image-mobile"
        src={imageSrc}
        onLoad={onImageLoad}
        alt={alt}
      />
    );
  else
    return (
      <img
        className="projectsheader-image"
        src={imageSrc}
        onLoad={onImageLoad}
        alt={alt}
      />
    );
};

function ProjectsHeader({ id }) {
  const projectsScope = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".tuniscovery-text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          delay: 2.5,
        }
      );

      ScrollTrigger.refresh();

      gsap.fromTo(
        ".projectsheader-text",
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".projectsheader-content",
            start: "top 80% bottom 10%",
            end: "bottom 30%",
            scrub: true,
          },
          opacity: 1,
          y: 700,
          zIndex: 5,
        }
      );

      gsap.to(".tuniscovery-text", {
        scrollTrigger: {
          trigger: ".projectsheader-content",
          start: "top 40% bottom 10%",
          end: "bottom 30%",
          scrub: true,
        },
        y: 600,
        zIndex: 5,
      });

      window.addEventListener("resize", function (event) {
        if (document.querySelector(".projectsheader-image")) {
          gsap.killTweensOf(".projectsheader-image");
          gsap.fromTo(
            ".projectsheader-image",
            {
              clipPath: "polygon(30% 10%, 70% 10%, 70% 90%, 30% 90%)",
            },
            {
              scrollTrigger: {
                trigger: ".projectsheader-image",
                start: "top 80% ",
                end: "bottom 15% ",
                scrub: true,
              },
              clipPath: "polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)",
            }
          );
        }
        if (document.querySelector(".projectsheader-image-mobile")) {
          gsap.killTweensOf(".projectsheader-image-mobile");
          gsap.fromTo(
            ".projectsheader-image-mobile",
            {
              clipPath: "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
            },
            {
              scrollTrigger: {
                trigger: ".projectsheader-image-mobile",
                start: "top 60% ",
                end: "bottom 15% ",
                scrub: true,
              },
              clipPath: "polygon(37% 0%, 63% 0%, 63% 100%, 37% 100%)",
            }
          );
        }
      });
      if (document.querySelector(".projectsheader-image")) {
        gsap.fromTo(
          ".projectsheader-image",
          {
            clipPath: "polygon(30% 10%, 70% 10%, 70% 90%, 30% 90%)",
          },
          {
            scrollTrigger: {
              trigger: ".projectsheader-image",
              start: "top 80% ",
              end: "bottom 15% ",
              scrub: true,
            },
            clipPath: "polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)",
          }
        );
      }
      if (document.querySelector(".projectsheader-image-mobile")) {
        gsap.fromTo(
          ".projectsheader-image-mobile",
          {
            clipPath: "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
          },
          {
            scrollTrigger: {
              trigger: ".projectsheader-image-mobile",
              start: "top 60% ",
              end: "bottom 15% ",
              scrub: true,
            },
            clipPath: "polygon(37% 0%, 63% 0%, 63% 100%, 37% 100%)",
          }
        );
      }
    },

    { scope: projectsScope }
  );

  return (
    <div className="projectsheader-container" ref={projectsScope}>
      <div className="projectsheader-content">
        {id !== 1 ? <p className="projheader-myloc">UX Case Study</p> : <></>}
        <div className={id === 1 ? "projectsheader-text" : "tuniscovery-text"}>
          <MediaQuery query="(min-device-width: 1000px)">
            {id === 1 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <p className="projectsheader-title">
                  BROWSE
                  <br />
                  MY PROJECTS
                </p>
                <Link to="/projects">
                  <a className="project-button">LET'S CHECK IT OUT</a>
                </Link>
              </div>
            ) : (
              <p className="projectsheader-title">TUNISCOVERY</p>
            )}
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1000px)">
            {id === 1 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <p className="projectsheader-title-mobile">
                  BROWSE
                  <br />
                  MY PROJECTS
                </p>
                <Link to="/projects">
                  <a className="project-button">LET'S CHECK IT OUT</a>
                </Link>
              </div>
            ) : (
              <p className="projectsheader-title-mobile">Tuniscovery</p>
            )}
          </MediaQuery>
        </div>
        <div className="projectsheader-imagecontainer">
          <MediaQuery query="(min-device-width: 1000px)">
            <ProgressiveImage
              src={id === 1 ? projectsheaderimg : tuniscoveryheader}
              placeholder={headercomp}
              mobile={false}
              alt="prjhdrimg"
            ></ProgressiveImage>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1000px)">
            <ProgressiveImage
              src={id === 1 ? projectsheaderimg : tuniscoveryheader}
              placeholder={headercomp}
              mobile={true}
              alt="prjhdrimg"
              ref={projectsScope}
            ></ProgressiveImage>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
}

ProjectsHeader.propTypes = {
  id: PropTypes.number,
};
ProjectsHeader.defaultProps = {
  id: 1,
};

export default ProjectsHeader;
