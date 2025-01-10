import "./projectsheader.css";
import projectsheaderimg from "../assets/projectsheader.webp";
import tuniscoveryheader from "../assets/tuniscovery-header.png";
import headercomp from "../assets/projectsheader_c.webp";
import MediaQuery from "react-responsive";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  return (
    <div className="projectsheader-container">
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
                <Link to="/tuniscovery">
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
