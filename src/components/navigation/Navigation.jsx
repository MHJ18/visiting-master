import React, { useRef, useState } from "react";
import "./navigation.scss";
const Navigation = () => {
  const first = useRef();
  const [classs, setclasss] = useState(true);
  return (
    <>
      <div className="navigation">
        <input className="radio-none" type="radio" name="" id="radio" />
        <label htmlFor="radio">MENU</label>
        <div className="backgrund-menu"></div>
        <nav className="menu-options">
          <ul className="menu-options-list">
            <li className="options">
              <a href="/">About Natous</a>
            </li>
            <li className="options">
              <a href="/">Your benefits</a>
            </li>
            <li className="options">
              <a href="/">Popular tours</a>
            </li>
            <li className="options">
              <a href="/">Stories</a>
            </li>
            <li className="options">
              <a href="/">Book now</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
