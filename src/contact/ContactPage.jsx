import Navbar from "../navbar/navbar";
import Contact from "./contact";
import Preloader from "../preloader/preloader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function ContactPage() {
  return (
    <div className="contact-page-container">
      <Navbar />
      <Preloader text1={"CONTACT"} text2={"& LINKS"} />
      <div style={{ height: "10vh" }}></div>
      <Contact />
    </div>
  );
}
export default ContactPage;
