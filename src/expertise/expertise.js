import {
  IconBrandAdobeAfterEffect,
  IconBrandAdobeIllustrator,
  IconBrandAdobePhotoshop,
  IconBrandAdobePremier,
  IconBrandAdobeXd,
  IconBrandAndroid,
  IconBrandApple,
  IconBrandCpp,
  IconBrandCSharp,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandFlutter,
  IconBrandFramer,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandSketch,
  IconHtml,
} from "@tabler/icons-react";
import "./expertise.css";
function Expertise() {
  return (
    <div className="expertise-container">
      <div className="expertise-textcontainer">
        <div className="expertise-sec1">
          <p className="expertise-title">MY STACK</p>
        </div>
        <div className="expertise-list">
          <div className="expertiseelement expertise-type-anim-1">
            <p className="expertise-type">UX/UI DESIGN</p>
            {/* <div className="expertise-icons">
              <IconBrandFigma />
              <IconBrandAdobePhotoshop />
              <IconBrandAdobeXd />
              <IconBrandSketch />
            </div> */}
          </div>
          <div className="expertiseelement expertise-type-anim-2">
            <p className="expertise-type">BRANDING</p>
            {/* <div className="expertise-icons">
              <IconBrandFigma />
              <IconBrandAdobeIllustrator />
              <IconBrandAdobePhotoshop />
            </div> */}
          </div>
          <div className="expertiseelement expertise-type-anim-1">
            <p className="expertise-type">FRONT-END DEVELOPMENT</p>
            {/* <div className="expertise-icons">
              <IconHtml />
              <IconBrandReact />
              <IconBrandFramer />
              <IconBrandJavascript />
              <IconBrandCss3 />
            </div> */}
          </div>
          <div className="expertiseelement expertise-type-anim-2">
            <p className="expertise-type">MOBILE DEVELOPMENT</p>
            {/* <div className="expertise-icons">
              <IconBrandFlutter />
              <IconBrandAndroid />
              <IconBrandApple />
            </div> */}
          </div>
          <div className="expertiseelement expertise-type-anim-1">
            <p className="expertise-type">ANIMATION & EDITING</p>
            {/* <div className="expertise-icons">
              <IconBrandAdobePremier />
              <IconBrandAdobeAfterEffect />
            </div> */}
          </div>
          <div className="expertiseelement expertise-type-anim-2">
            <p className="expertise-type">PROGRAMMING</p>
            {/* <div className="expertise-icons">
              <IconBrandCSharp />
              <IconBrandPython />
              <IconBrandCpp />
              <IconBrandJavascript />
            </div> */}
          </div>

          <div className="expertiseelement">
            <a
              href="https://vsco.co/chebbimedayoub/gallery"
              target="_blank"
              className="expertise-type fancy"
            >
              PHOTOGRAPHY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Expertise;
