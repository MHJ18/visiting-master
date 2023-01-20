import React from "react";
import "./stories.scss";
const Stories = () => {
  return (
    <section>
      <div className="stories__featured-main">
        <h2 className="stories__featured-heading">
          we make people genuinenly happy
        </h2>
        <div className="stories__featured-section">
          <div className="stories__featured-container">
            <div className="stories__featured-card1">
              <img
                className="stories__featured-card1-img"
                src="nat-8.jpg"
                alt=""
              />
            </div>
            <div className="stories__featured-card1-heading">
              <h3>I had the best week ever with my family</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                nam et laborum sapiente, totam placeat mollitia! Numquam
                reprehenderit deleniti voluptatem vero suscipit alias, provident
                omnis nesciunt at fuga culpa tempora. Alias commodi cupiditate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
