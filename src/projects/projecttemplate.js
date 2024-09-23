import {PropTypes} from "prop-types"
import "./projectexample.css"
import { useState } from "react"

ProjectTemplate.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    hint: PropTypes.string,
    desc: PropTypes.string,
    images: PropTypes.string,
    placeholders: PropTypes.string
}

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

function ProjectTemplate({id,name,hint,desc,images,placeholders}) {
    //console.log(images);
    const imagesArray = images.split(' ');
    const placeholdersArray = placeholders.split(' ');

    return (

        <div className="project-container">
            <div className="project-main">
            <p className="project-title">{name}</p>
            <p className="project-info">{hint}</p>
            </div>
            <p className="project-description">{desc}</p>
            <div className="project-images" style={{gridTemplateColumns: `${imagesArray.length} fr`, gridAutoRows:"max-content"} }>
                    {imagesArray.map((i,index) =>{
                        return(
                        <div className="project-image-container" key={index}>
                        <div className="project-image-img">
                            <ProgressiveImage alt="img" src={require(""+i)} placeholder={require(""+placeholdersArray[index])}>
                            </ProgressiveImage>
                        </div>
                    </div>)
                    })}
            </div>
        </div>
    )
}
export default ProjectTemplate;