import React, { useState } from "react";
import "./feature.scss";

const Featured = ({ first }) => {
  return (
    <div>
      <figure className="section__featured-main">
        <div className="section__featured">
          <h2 className="section__featured-heading">most popular tours</h2>
          <div className="section__featured-cards">
            <div className="section__featured-card">
              <div className="section__featured-card-top">
                <div className="section__featured-img-1"></div>
                <h3 className="section__featured-imgheading-1">
                  <span className="section__featured-imgheading-first">
                    The sea Explorer
                  </span>
                </h3>
                <p className="section__featured-parr">3 day tour</p>
                <p className="section__featured-parr">Up to 30 people</p>
                <p className="section__featured-parr">2 tour guides</p>
                <p className="section__featured-parr">Sleep in cozy hostels</p>
                <p className="section__featured-parr">Difficulty: very easy</p>
              </div>
              <div className="section__featured-card-back">
                <p className="section__featured-card-back-tag">ONLY</p>
                <p className="section__featured-card-back-price">$329</p>
                <button
                  onClick={() => {
                    first.current.style.display = "block";
                  }}
                  className="section__featured-card-back-button"
                >
                  Book now!
                </button>
              </div>
            </div>
            <div className="section__featured-card">
              <div className="section__featured-card-top">
                <div className="section__featured-img-2"></div>
                <h3 className="section__featured-imgheading-2">
                  <span className="section__featured-imgheading-first">
                    The forest hiker
                  </span>
                </h3>
                <p className="section__featured-parr">7 day tour</p>
                <p className="section__featured-parr">Up to 40 people</p>
                <p className="section__featured-parr">6 tour guides</p>
                <p className="section__featured-parr">
                  Sleep in provided tents
                </p>
                <p className="section__featured-parr">Difficulty: medium</p>
              </div>
              <div className="section__featured-card-back">
                <p className="section__featured-card-back-tag">ONLY</p>
                <p className="section__featured-card-back-price">$539</p>
                <button
                  onClick={() => (first.current.style.display = "block")}
                  className="section__featured-card-back-button"
                >
                  Book now!
                </button>
              </div>
            </div>
            <div className="section__featured-card">
              <div className="section__featured-card-top">
                <div className="section__featured-img-3"></div>
                <h3 className="section__featured-imgheading-3">
                  <span className="section__featured-imgheading-first">
                    The snow adventurer
                  </span>
                </h3>
                <p className="section__featured-parr">5 day tour</p>
                <p className="section__featured-parr">Up to 15 people</p>
                <p className="section__featured-parr">3 tour guides</p>
                <p className="section__featured-parr">
                  Sleep in provided tents
                </p>
                <p className="section__featured-parr">Difficulty: hard</p>
              </div>
              <div className="section__featured-card-back">
                <p className="section__featured-card-back-tag">ONLY</p>
                <p className="section__featured-card-back-price">$630</p>
                <button
                  onClick={() => (first.current.style.display = "block")}
                  className="section__featured-card-back-button"
                >
                  Book now!
                </button>
              </div>
            </div>
          </div>
          <button className="section__featured-button">
            discover all tours &rarr;
          </button>
        </div>
      </figure>
    </div>
  );
};

export default Featured;
