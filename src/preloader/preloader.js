import "./preloader.css"
import logosmall from "../../src/assets/logo_small.svg";
import preloaderpic from "../../src/assets/preloader.webp";
import preloaderpiccomp from "../../src/assets/preloadercomp.webp";
import { useState } from "react";

const ProgressiveImage = ({ src, placeholder, alt }) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
  
    const onImageLoad = () => {
      setImageSrc(src);
    };
  
    return (
      <img
        className="preloader-img"
        fetchpriority="high"
        src={imageSrc}
        onLoad={onImageLoad}
        alt={alt}
      />
    );
};


function Preloader() {
    return(
        <div className="preloader-container">
            <ProgressiveImage src={preloaderpic} placeholder={preloaderpiccomp}></ProgressiveImage>
            <div className="preloader-content">
                <div className="preloader-text">
                    
                    <img src={logosmall} className="preloader-logo" alt={"byMe"}/>
                    <p className="preloader-title">Welcome to<br/> Mohamed Ayoub Chebbi's<br/>Portfolio</p>
                </div>
            </div>
        </div>
    )
}
export default Preloader;