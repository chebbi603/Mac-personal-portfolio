import "./projectsheader.css"
import projectsheaderimg from "../assets/projectsheader.webp"
import headercomp from "../assets/projectsheader_c.webp"
import MediaQuery from "react-responsive";
import { useState } from "react";

const ProgressiveImage = ({ src, placeholder, alt, mobile }) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
  
    const onImageLoad = () => {
      setImageSrc(src);
    };
    if(mobile)
    return (
      <img
        className="projectsheader-image-mobile"
        src={imageSrc}
        onLoad={onImageLoad}
        alt={alt}
      />
    );
    else return(<img
    className="projectsheader-image"
    src={imageSrc}
    onLoad={onImageLoad}
    alt={alt}
  />);
};


function ProjectsHeader() {
    return(
        <div className="projectsheader-container">
            <div className="projectsheader-content">
                <div className="projectsheader-text">
                    <MediaQuery query="(min-device-width: 1000px)">
                        <p className="projectsheader-title">PROJECTS</p>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width: 1000px)">
                        <p className="projectsheader-title-mobile">PROJECTS</p>
                    </MediaQuery>
                    </div>
                <div className="projectsheader-imagecontainer">
                    <MediaQuery query="(min-device-width: 1000px)">
                        <ProgressiveImage src={projectsheaderimg} placeholder={headercomp} mobile={false} alt="prjhdrimg"></ProgressiveImage>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width: 1000px)">
                        <ProgressiveImage src={projectsheaderimg} placeholder={headercomp} mobile={true} alt="prjhdrimg"></ProgressiveImage>
                    </MediaQuery>
                </div>
            </div>
            <div><p className="projheader-myloc">PROJECTS</p></div>
        </div>
    )
}
export default ProjectsHeader;