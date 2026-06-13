import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { SiHackerearth } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
export default function Contact() {
return (
<footer className="footer">
  <h3 className="footer-name">Prince Soni</h3>

  <p className="footer-text">
    Designed with love, all rights reserved for Prince Soni.
  </p>

  <div className="footer-icons">
    <a
      href="https://mail.google.com/mail/u/0/?fs=1&to=prince.princesoni.soni38@gmail.com"
      aria-label="Gmail"
      target="_blank"
      rel="noopener noreferrer"
    >
      ✉️
    </a>

    <a
      href="https://github.com/princesoni1599"
      aria-label="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
        <FaGithub />
    </a>

    <a
      href="www.linkedin.com/in/prince-soni-aa5412187"
      aria-label="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      in
    </a>

    <a
      href="https://www.hackerearth.com/@prince600/"
      aria-label="Hackerearth"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiHackerearth />
    </a>

 <a
      href="https://leetcode.com/u/prince45685415/"
      aria-label="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiLeetcode />
    </a>
</div>
  
</footer>

)
}