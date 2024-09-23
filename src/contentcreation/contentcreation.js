import {PropTypes} from "prop-types"
import "./cc.css"
import { useState } from "react"
import { InstagramEmbed } from "react-social-media-embed";
import teaser from "./teaser.mp4"
import typo from "./ThumbnailUX2.png"
import ux from "./ux2.jpg"

const ProgressiveImage = ({ src, placeholder, alt }) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
  
    const onImageLoad = () => {
      setImageSrc(src);
    };
  
    return (
      <img
        className="pig"
        fetchpriority="low"
        src={imageSrc}
        onLoad={onImageLoad}
        alt={alt}
      />
    );
};

function ContentCreation() {

    return (

        <div className="project-container">
            <div className="project-main">
            <p className="project-title">2AM Production</p>
            <p className="project-info">Content Creation - UX/UI Design</p>
        </div>
        
        <p className="project-description">Ahmed, Ayoub, and Malek working on cool videos <br/>Engineering, Content Creation, Technology, and more.</p>
            <div className="project-images" style={{gridTemplateColumns: `3 fr`, gridAutoRows:"max-content"}}>
                    
                    
                    <a href="https://www.instagram.com/reel/C7UypurORDc/" target="_blank">
                    <div className="project-image-container" >
                        <div className="project-image-img">
                          <img src={typo} className="pig">
                          </img>
                        </div>
                    </div>
                    </a>
                    <a href="https://www.instagram.com/two_am_prod/" target="_blank">
                    <div className="project-image-container" >
                        <div className="project-image-img">
                          <video autoPlay className="pig" type="video/mp4" muted loop>
                            <source src={teaser}></source>
                          </video>
                        </div>
                    </div>
                    </a>
                    <a href="https://www.instagram.com/p/C6UXJvnKCsn/" target="_blank">
                    <div className="project-image-container" >
                        <div className="project-image-img">
                          <img src={ux} className="pig">
                          </img>
                        </div>
                    </div>
                    </a>
            </div>
        </div>
    )
}
export default ContentCreation;