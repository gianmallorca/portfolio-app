import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#131516", fontFamily: "Montserrat" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="Title">Portfolio</span>
        </Link>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="contentSection"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="infoSection"
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
                to="projectsSection"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="footerSection"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
