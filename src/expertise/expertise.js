import "./expertise.css";
function Expertise() {
  return (
    <div className="expertise-container">
      <div className="expertise-textcontainer">
        <div className="expertise-sec1">
          <p className="expertise-title">Key Skills</p>
        </div>
        <div className="expertise-list">
          <div className="expertiseelement">
            <p className="expertise-type">UX/UI Design</p>
            <p className="expertise-example">
              Figma - Adobe Xd - Adobe Photoshop
            </p>
          </div>
          <div className="expertiseelement">
            <p className="expertise-type">Logo Design</p>
            <p className="expertise-example">Adobe Illustrator - Figma</p>
          </div>
          <div className="expertiseelement">
            <p className="expertise-type">Front End Development</p>
            <p className="expertise-example">HTML - CSS - Javascript - React</p>
          </div>
          <div className="expertiseelement">
            <p className="expertise-type">Mobile Development</p>
            <p className="expertise-example">Java - Flutter</p>
          </div>
          <div className="expertiseelement">
            <p className="expertise-type">Animation & Video Editing</p>
            <p className="expertise-example">
              Adobe After Effects - Adobe Premiere Pro
            </p>
          </div>
          <div className="expertiseelement">
            <p className="expertise-type">Programming</p>
            <p className="expertise-example">C - C++ - Java - Arduino - C#</p>
          </div>
          <div className="expertiseelement ff">
            <p className="expertise-example">Also a</p>
            <p className="expertise-type fancy">Photography lover</p>
          </div>
        </div>
      </div>
      <div>
        <p className="expertise-myloc">EXPERTISE</p>
      </div>
    </div>
  );
}
export default Expertise;
