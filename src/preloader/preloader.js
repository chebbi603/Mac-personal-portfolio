import "./preloader.css";
import logosmall from "../../src/assets/logo_small.svg";
import { useState } from "react";
import PropTypes from "prop-types";

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

function TextProvider({ text1, text2 }) {
  return (
    <>
      <p className="preloader-title">
        {text1}
        <br /> {text2}
      </p>
    </>
  );
}

function Preloader({ text1, text2 }) {
  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="preloader-text">
          <img src={logosmall} className="preloader-logo" alt={"byMe"} />
          <TextProvider text1={text1} text2={text2} />
        </div>
      </div>
    </div>
  );
}
Preloader.propTypes = {
  id: PropTypes.number,
};

export default Preloader;
