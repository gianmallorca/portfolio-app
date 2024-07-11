import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Info: React.FC = () => {
  return (
    <div className="container marketing">
      {/* Three columns of text below the carousel */}
      <div className="row"></div>

      {/* START THE FEATURETTES */}
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2
            className="featurette-heading  lh-1"
            style={{ fontFamily: "Gotham", fontWeight: 800 }}
          >
            {" "}
            <br />
            <br />
            Personal Profile{" "}
          </h2>
          <br />
          <p className="lead">
            Full Name: Gian Philip Mallorca
            <br />
            Age: 21
            <br />
            Address: Gulayon, Dipolog City
            <br />
            Birthday: September 25, 2002
            <br />
            Hotel:Trivago
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={"gian.jpg"}
            alt="Profile"
            style={{ width: "500px", height: "500px", objectFit: "cover" }}
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      {/* END THE FEATURETTES */}
    </div>
  );
};

export default Info;
