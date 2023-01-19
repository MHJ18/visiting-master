import React from "react";
import "./mainbody.scss";
const MainBody = () => {
  return (
    <>
      <main className="main-section">
        <div className="container-heading">
          <h2 className="heading__secondary-1">
            Exciting tours for adventurous people
          </h2>
          <div className="section-1">
            <div className="section--about">
              <h3 className="section--heading">
                you are going to fall in love with nature
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis praesentium, porro saepe fugiat necessitatibus
                exercitationem? Officia veritatis dicta facilis non atque
                repudiandae a quasi vel. Voluptate, optio officia? Placeat,
                illo!
              </p>
              <h3 className="section--heading">
                live adventures like u never have before
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis praesentium, porro saepe fugiat necessitatibus
                exercitationem? Officia veritatis dicta facilis non atque
                repudiandae a quasi vel. Voluptate, optio officia? Placeat,
                illo!
              </p>
              <a className="section--button" href="/">
                Learn more &rarr;
              </a>
            </div>
            <div className="section--image">
              <div className="image-1">
                <img className="section-position" src="nat-1.jpg" alt="" />
              </div>
              <div className="image-2">
                <img className="section-position" src="nat-2.jpg" alt="" />
              </div>
              <div className="image-3">
                <img className="section-position" src="nat-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainBody;
