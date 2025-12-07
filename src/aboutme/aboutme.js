import "./aboutme.css";
import quote from "../assets/quote.svg";
import { calculateAge } from "../utils/time";

function AboutMe() {
  const age = calculateAge("2002-12-03");
  return (
    <div className="aboutme-container">
      <div className="aboutme-textcontainer">
        <div className="aboutme-sec1">
          <img className="quote" src={quote} alt="Quote"></img>
          <p className="aboutme-title">My Journey began</p>
          <p className="aboutme-sub">
            when a four year old kid was trying to explore computers and their
            capabilities and believed in the power of technology...
          </p>
        </div>
        <div className="aboutme-sec2">
          <p className="aboutme-detail">
            This is <b>Mohamed Ayoub.</b>
            <br></br> <br></br>A {age} year old freelancer and tech enthusiast from
            Tunisia and currently residing in Hungary.
            <br></br> <br></br>
            My passion for creating software solutions started back in 2018. I
            have created different projects for different organizations and
            companies where I worked on developing mobile applications, websites
            and robotics projects.
            <br></br>
            <br></br>
            The urge of creating better designs for my apps led me to develop
            Design skills. My first UX/UI design was published on Dribbble in
            2019. I have now over 10000 followers and over 55000 shot views.
            <br></br>
            <br></br>I am currently opting for a Bachelor’s degree in Computer
            Science Engineering and studying in the University of Debrecen,
            Hungary. I am also working as a freelancer on Upwork. I have earned
            a Top Rated Badge with a 100% Job success rate after working with
            different clients from different countries.
          </p>
        </div>
      </div>
      <div>
        <p className="about-myloc">ABOUT ME</p>
      </div>
    </div>
  );
}
export default AboutMe;
