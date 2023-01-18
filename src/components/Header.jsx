import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="top-header">
          <div className="logo">
            <img
              src="logo-w.png"
              alt="Brand-logo"
              aria-describedby="Brand Notarious Logo"
            />
          </div>
          <div className="heading-main">
            <h1 className="heading-container">
              <span className="heading__h1">OUTDOORS </span>
              <span className="heading-h2">is where life happens</span>
            </h1>
            <button className="button-header" type="button">
              DISCOVER OUR TOURS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
