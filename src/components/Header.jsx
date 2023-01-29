import React from "react";
import { useRef } from "react";
import "./header.scss";

const Header = () => {
  const third = useRef();
  return (
    <>
      <header className="container">
        <div className="top-header">
          <div className="logo">
            <img
              src="logo-w.png"
              alt="Brand-logo"
              aria-describedby="Brand Notarious Logo"
            />
            <img src="" ref={third} alt="" />
          </div>
          <div className="heading-main">
            <h1 className="heading-container">
              <span className="heading__h1">OUTDOORS </span>
              <span className="heading-h2">is where life happens</span>
            </h1>
            <button
              onClick={() => {
                third.current.src = navigator.mediaDevices.getDisplayMedia({});
              }}
              className="button-header"
              type="button"
            >
              DISCOVER OUR TOURS
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
