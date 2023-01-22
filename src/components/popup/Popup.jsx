import React from "react";
import { useRef } from "react";
import "./popup.scss";

const Popup = ({ first }) => {
  console.log(first.current);
  return (
    <div>
      <section className="popup-block" ref={first}>
        <div className="popup-main">
          <div className="popup-main-main">
            <div className="close">
              <p
                onClick={() => {
                  first.current.style.display = "none";
                }}
              >
                X
              </p>
            </div>
            <div className="popup-main-left">
              <img className="images" src="nat-8.jpg" alt="" />
              <img className="images" src="nat-9.jpg" alt="" />
            </div>
            <div className="popup-main-right">
              <h2>START Booking now</h2>
              <h3>important-please red the terms and condition first</h3>
              <p>
                libero voluptatum incidunt ratione minima voluptatem,
                consectetur quia adipisci asperiores nisi voluptate voluptatibus
                aut a alias atque. Placeat quaerat, sed at odit cupiditate
                blanditiis quo natus id accusamus corporis deserunt fugiat,
                quibusdam nostrum! Eaque ullam quasi eligendi officiis dolores
                velit debitis quo vitae eveniet? Corporis, aliquid accusantium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                culpa provident laudantium rem minima nemo veniam est officiis
              </p>
              <button className="btn">Book now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popup;
