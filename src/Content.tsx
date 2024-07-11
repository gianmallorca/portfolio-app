import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Content: React.FC = () => {
  return (
    <div
      id="contentSection"
      className="position-relative overflow-hidden p-5 p-md-5 m-md-3 bg-body-tertiary"
      style={{
        display: "flex",
        alignItems: "center", // Align items vertically center
        justifyContent: "center", // Center content horizontally
        minHeight: "100vh", // Full viewport height
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("bike.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="col-md-6 p-lg-5 my-5 text-center">
        <img
          src={"profile.jpg"}
          alt="Profile"
          className="rounded-circle mb-6"
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
        <h1 className="display-3 fw-bold">
          <span className="Welcome">Gian</span>
          <span className="LName">Mallorca</span>
        </h1>
        <h3 className="fw-normal text-muted mb-3">
          <span className="Sub">I code sometimes...</span>
        </h3>
        <div
          className="icons"
          style={{ display: "flex", justifyContent: "center", gap: "15px" }}
        >
          <a className="hi" href="https://www.facebook.com/mallorcathegreat">
            <i className="bi bi-facebook" style={{ color: "white" }}></i>
          </a>
          <a className="hi" href="https://www.instagram.com/mallorcathegreat/">
            <i className="bi bi-instagram" style={{ color: "white" }}></i>
          </a>
          <a className="hi" href="https://www.youtube.com/@gianmallorca5620">
            <i className="bi bi-youtube" style={{ color: "white" }}></i>
          </a>
        </div>

        <div className="btn">
          <ScrollLink
            className="btn btn-outline-info"
            to="infoSection"
            spy={true}
            smooth={true}
            duration={500}
          >
            Who am I?
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Content;
