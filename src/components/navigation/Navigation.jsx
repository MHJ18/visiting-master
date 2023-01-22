import React, { useRef, useState } from "react";
import "./navigation.scss";
const Navigation = ({ first }) => {
  return (
    <>
      <div className="navigation">
        <input className="radio-none" type="checkbox" name="" id="radio" />
        <label
          className="radio-label"
          onClick={() => {
            first.current.style.display = "none";
          }}
          htmlFor="radio"
        >
          <span className="icon"></span>
          {/* <svg
            className="svg-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.4"
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                fill="#292D32"
              ></path>{" "}
              <path
                d="M17 8.25H7C6.59 8.25 6.25 7.91 6.25 7.5C6.25 7.09 6.59 6.75 7 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5C17.75 7.91 17.41 8.25 17 8.25Z"
                fill="#292D32"
              ></path>{" "}
              <path
                d="M17 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75Z"
                fill="#292D32"
              ></path>{" "}
              <path
                d="M17 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z"
                fill="#292D32"
              ></path>{" "}
            </g>
          </svg> */}
        </label>
        <div className="backgrund-menu"></div>

        <nav className="menu-options">
          <ul className="menu-options-list">
            <li className="options">
              <a href="#about">About Natous</a>
            </li>
            <li className="options">
              <a href="#benefits">Your benefits</a>
            </li>
            <li className="options">
              <a href="#tours">Popular tours</a>
            </li>
            <li className="options">
              <a href="#stories">Stories</a>
            </li>
            <li className="options">
              <a href="#book">Book now</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
