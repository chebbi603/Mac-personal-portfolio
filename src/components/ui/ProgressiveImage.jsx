import { useState } from "react";
import PropTypes from "prop-types";

const ProgressiveImage = ({ src, placeholder, alt, mobile, className, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);

  const onImageLoad = () => {
    setImageSrc(src);
  };

  const defaultClassName = mobile ? "projectsheader-image-mobile" : "projectsheader-image";
  const finalClassName = className || defaultClassName;

  return (
    <img
      className={finalClassName}
      src={imageSrc}
      onLoad={onImageLoad}
      alt={alt}
      {...props}
    />
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  alt: PropTypes.string,
  mobile: PropTypes.bool,
  className: PropTypes.string,
};

export default ProgressiveImage;
