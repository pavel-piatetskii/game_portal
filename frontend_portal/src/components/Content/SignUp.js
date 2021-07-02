import React from 'react';
import './SignUp.scss'

export default function SignUp(props) {
  return (
    <section className="signup">
      <form className="signup__form">
        
        <h2 className="signup__form__header">SIGN UP</h2>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-login">ENTER LOGIN</label>
          <input className="signup__form__input" id="signup-login" name="login"></input>
        </div>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-password">ENTER PASSWORD</label>
          <input className="signup__form__input" id="signup-password" name="password"></input>
        </div>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-password-repeat">REPEAT PASSWORD</label>
          <input className="signup__form__input" id="signup-login-repeat" name="password-repeat"></input>
        </div>

        <button className="signup__form__button">SUBMIT</button>

      </form>
    </section>
  );
};