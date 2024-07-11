import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer: React.FC = () => {
  return (
    <div id="footerSection" className="container py-3">
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-body-secondary">
              © 2024–2025
            </small>
          </div>
          <div className="col-12 col-md">
            <div className="text-center mb-3">
              <p>Contact Me Here</p>
              <div
                className="icons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <a
                  className="hi"
                  href="https://www.facebook.com/mallorcathegreat"
                >
                  <i className="bi bi-facebook" style={{ color: "black" }}></i>
                </a>
                <a
                  className="hi"
                  href="https://www.instagram.com/mallorcathegreat/"
                >
                  <i className="bi bi-instagram" style={{ color: "black" }}></i>
                </a>
                <a
                  className="hi"
                  href="https://www.youtube.com/@gianmallorca5620"
                >
                  <i className="bi bi-youtube" style={{ color: "black" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
