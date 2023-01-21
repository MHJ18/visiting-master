import React from "react";
import "./form.scss";
const Form = () => {
  return (
    <section className="Form__section">
      <div className="Form__section-container">
        <h2 className="Form__section-heading">START BOOKING NOW!</h2>
        <div className="form__section-form">
          <form action="">
            <input type="text" placeholder="Full name" required />
            <label className="form-label" htmlFor="text">
              Full name
            </label>
            <input type="email" placeholder="Email address" required />
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <div className="checkbox-container">
              <div className="checkboxes">
                <input type="radio" name="check" id="checkbox1" />
                <label className="checkbox" htmlFor="checkbox1">
                  <span className="checkbox-custom"></span>
                  Small tour group
                </label>
              </div>
              <div className="checkboxes">
                <input type="radio" name="check" id="checkbox2" />
                <label className="checkbox" htmlFor="checkbox2">
                  <span className="checkbox-custom"></span>
                  Small tour group
                </label>
              </div>
            </div>
          </form>
        </div>
        <button className="form-btn" type="submit">
          NEXT STEP &rarr;
        </button>
      </div>
    </section>
  );
};

export default Form;
