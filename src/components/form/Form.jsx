import React from "react";
import "./form.scss";
const Form = () => {
  return (
    <section className="Form__section">
      <div className="Form__section-container">
        <div className="form__section-form">
          <form action="">
            <input type="text" placeholder="Full name" />
          </form>
        </div>
        <div className="form__section-clear"></div>
      </div>
    </section>
  );
};

export default Form;
