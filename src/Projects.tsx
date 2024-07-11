import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Projects: React.FC = () => {
  return (
    <div className="container marketing text-center">
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
            <img
              src={"Car.jpg"}
              alt="Profile"
              style={{ width: "500px", height: "500px", objectFit: "cover" }}
              className="img-fluid"
            />
          </div>
          <div className="mx-2">
            <img
              src={"winform.jpg"}
              alt="Profile"
              style={{ width: "500px", height: "500px", objectFit: "cover" }}
              className="img-fluid"
            />
          </div>
          <div className="mx-2">
            <img
              src={"Enrollment.jpg"}
              alt="Profile"
              style={{ width: "500px", height: "500px", objectFit: "cover" }}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <br />
      <hr className="featurette-divider" />
    </div>
  );
};

export default Projects;
