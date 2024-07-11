import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#131516" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <span className="Title">Portfolio</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav" style={{ marginLeft: "475px" }}>
            {/* ms-auto class moves the links to the right */}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="aboutSection"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="contactSection"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="Projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
