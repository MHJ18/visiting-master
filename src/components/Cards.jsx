import React from "react";

import "./cards.scss";
import "../ICONFONT/styles.css";
import { useState } from "react";
const Cards = () => {
  const [card, setcard] = useState([
    { title: "Explore the world", icon: "icon-basic-world" },
    { title: "Explore the world", icon: "icon-basic-compass" },
    { title: "Explore the world", icon: "icon-basic-map" },
    { title: "Explore the world", icon: "icon-basic-heart" },
  ]);
  return (
    <>
      <section className="section__container-1">
        {card.map((res, ind) => {
          return (
            <div className="section__card-1">
              <i className={`${res.icon} section__icon`}></i>
              <p className="section__heading">{res.title}</p>
              <p className="section__detail">
                Lorem ipsum, dolor sit ameteree consectetur adipisicing Ducimus
                fugit ratione dolor vitae tempore delectus enim sequi doloremque
                tempora q saepe, eum repellat suscipit good it happens.
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Cards;
