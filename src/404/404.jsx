import Navbar from "../navbar/navbar";
import Preloader from "../preloader/preloader";
import { Link } from "react-router-dom";
import "./404.css";

function P404() {
  return (
    <div>
      <Navbar />
      <Preloader text1={"OOPS..."} text2={""} />
      <div className="p404-container">
        <p className="p404-text">It looks like this page is unavailable</p>
        <Link to="/" className="project-button">
          HOME PAGE
        </Link>
      </div>
    </div>
  );
}

export default P404;
