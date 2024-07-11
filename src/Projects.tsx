import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Projects: React.FC = () => {
  return (
    <div
      id="projectsSection"
      className="container marketing text-center"
      style={{ fontFamily: "Montserrat" }}
    >
      <br />
      <br />
      <br />
      <div className="row featurette justify-content-center">
        <div className="col-md-12">
          <h2
            className="featurette-heading lh-1"
            style={{ fontFamily: "Gotham", fontWeight: 800 }}
          >
            See my <span className="Project">Projects.</span>{" "}
          </h2>
          <p className="lead">
            Things I've done throughout the years of being a so-called
            "Developer".
          </p>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <div className="mx-2">
            <figure>
              <img
                src={"Car.jpg"}
                alt="Car Project"
                style={{ width: "500px", height: "500px", objectFit: "cover" }}
                className="img-fluid"
              />
              <figcaption className="text-center mt-3">Car Rental</figcaption>
            </figure>
          </div>
          <div className="mx-2">
            <figure>
              <img
                src={"winform.jpg"}
                alt="WinForm Project"
                style={{ width: "500px", height: "500px", objectFit: "cover" }}
                className="img-fluid"
              />
              <figcaption className="text-center mt-3">
                Student Enrollment System (Desktop)
              </figcaption>
            </figure>
          </div>
          <div className="mx-2">
            <figure>
              <img
                src={"Enrollment.jpg"}
                alt="Enrollment Project"
                style={{ width: "500px", height: "500px", objectFit: "cover" }}
                className="img-fluid"
              />
              <figcaption className="text-center mt-3">
                Student Enrollment System (Web-App)
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <br />
      <hr className="featurette-divider" />
    </div>
  );
};

export default Projects;
