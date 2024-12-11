import "./home.css";
import landingimg from "../src/assets/photo.webp";
import landingimgmob from "../src/assets/photomobile.webp";
import logosmall from "../src/assets/logo_small.svg";
import descstar from "../src/assets/star.svg";
import fb from "../src/assets/fb.svg";
import lin from "../src/assets/linkedin.svg";
import dri from "../src/assets/dribbble.svg";
import upw from "../src/assets/upwork.svg";
import insta from "../src/assets/insta.svg";
import vsco from "../src/assets/vsco.svg";
import github from "../src/assets/github.svg";
import MagneticButton from "./gsap";
import MediaQuery from "react-responsive";
import lic from "../src/assets/lic.webp";
import licmob from "../src/assets/licmob.webp";
import { useState } from "react";

const ProgressiveImage = ({ src, placeholder, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);

  const onImageLoad = () => {
    setImageSrc(src);
  };

  return (
    <img
      className="landing-img"
      fetchpriority="high"
      src={imageSrc}
      onLoad={onImageLoad}
      alt={alt}
    />
  );
};

function Home() {
  return (
    <div className="home">
      <div className={"home-content"}></div>
      <MediaQuery query="(min-height: 850px)">
        <div className="landing-container">
          {/* <MediaQuery query="(min-width: 700px)">
            <ProgressiveImage
              src={landingimg}
              placeholder={lic}
              alt={"byMalek"}
            />
          </MediaQuery>
          <MediaQuery query="(max-width: 700px)">
            <ProgressiveImage
              src={landingimgmob}
              placeholder={licmob}
              alt={"byMalek"}
            />
          </MediaQuery> */}
          <div className="overlay"></div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-height: 850px)">
        <div className="landing-container-2">
          <MediaQuery query="(min-width: 700px)">
            <div className="landing-img" alt={"byMalek"}>
              {" "}
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 700px)">
            <div className="landing-img" alt={"byMalek"}>
              {" "}
            </div>
          </MediaQuery>
          <div className="overlay"></div>
        </div>
      </MediaQuery>
      <div className={"home-content-data"}>
        <div className={"header"}>
          <img src={logosmall} className="header-logo" alt={"byMe"} />
          {/* <div className="mentions">
            <p className="mentions_txt">Shot in Debrecen, Hungary</p>
            <p className="mentions_txt">
              By:{" "}
              <a
                className="mentions_link"
                target="_blank"
                href="https://www.instagram.com/malekbenyoussef/"
              >
                @MalekBenYoussef
              </a>
            </p>
          </div> */}
          <div className="mentions-l">
            <div className="available-icn"></div>
            <a
              className="mentions_txt"
              target="_blank"
              href="https://www.upwork.com/freelancers/ayoubc4"
            >
              Available for projects
            </a>
          </div>
        </div>
        <div className={"content  tuniscovery-text"}>
          <div className="esmi">
            <p className={"esmi-lakab"}>MOHAMED</p>
            <p className={"esmi-lakab"}>AYOUB CHEBBI</p>
          </div>
          <p className={"desc-text"}>Freelance UX/UI Designer & Developer</p>
          <MediaQuery query="(min-device-width: 700px)">
            <div className={"social-container"}>
              <MagneticButton>
                <div className={"socials"}>
                  <a
                    className={"social-link"}
                    target="_blank"
                    href="https://www.facebook.com/chebbimedayoub"
                  >
                    <img className={"social-icon"} src={fb} />
                  </a>
                  <a
                    className={"social-link"}
                    target="_blank"
                    href="https://www.linkedin.com/in/mohamed-ayoub-chebbi/"
                  >
                    <img className={"social-icon"} src={lin} />
                  </a>
                  <a
                    className={"social-link"}
                    target="_blank"
                    href="https://www.dribbble.com/chebbimedayoub"
                  >
                    <img className={"social-icon"} src={dri} />
                  </a>
                  <a
                    className={"social-link"}
                    target="_blank"
                    href="https://www.upwork.com/freelancers/ayoubc4"
                  >
                    <img className={"social-icon"} src={upw} />
                  </a>
                  <a
                    className={"social-link"}
                    target="_blank"
                    href="https://www.instagram.com/chebbimedayoub/"
                  >
                    <img className={"social-icon"} src={insta} />
                  </a>
                  <a
                    className={"social-link"}
                    target="_blank"
                    href="https://github.com/chebbi603"
                  >
                    <img className={"social-icon"} src={github} />
                  </a>
                  <a
                    className={"social-link"}
                    target="_blank"
                    href="https://vsco.co/chebbimedayoub/gallery"
                  >
                    <img className={"social-icon"} src={vsco} />
                  </a>
                </div>
              </MagneticButton>
            </div>
          </MediaQuery>

          <MediaQuery query="(max-device-width: 700px)">
            <div className={"social-container"}>
              <div className={"socials"}>
                <a
                  className={"social-link"}
                  target="_blank"
                  href="https://www.facebook.com/chebbimedayoub"
                >
                  <img className={"social-icon"} src={fb} />
                </a>
                <a
                  className={"social-link"}
                  target="_blank"
                  href="https://www.linkedin.com/in/mohamed-ayoub-chebbi/"
                >
                  <img className={"social-icon"} src={lin} />
                </a>
                <a
                  className={"social-link"}
                  target="_blank"
                  href="https://www.dribbble.com/chebbimedayoub"
                >
                  <img className={"social-icon"} src={dri} />
                </a>
                <a
                  className={"social-link"}
                  target="_blank"
                  href="https://www.upwork.com/freelancers/ayoubc4"
                >
                  <img className={"social-icon"} src={upw} />
                </a>
                <a
                  className={"social-link"}
                  target="_blank"
                  href="https://www.instagram.com/chebbimedayoub/"
                >
                  <img className={"social-icon"} src={insta} />
                </a>
                <a
                  className={"social-link"}
                  target="_blank"
                  href="https://github.com/chebbi603"
                >
                  <img className={"social-icon"} src={github} />
                </a>
                <a
                  className={"social-link"}
                  target="_blank"
                  href="https://vsco.co/chebbimedayoub/gallery"
                >
                  <img className={"social-icon"} src={vsco} />
                </a>
              </div>
            </div>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
}

export default Home;
