import logosmall from "../../assets/logo_small.svg";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="header">
        <div className="logo-radial-overlay"></div>
        <img src={logosmall} className="header-logo" alt={"byMe"} />
      </div>
    </div>
  );
}

export default Navbar;
