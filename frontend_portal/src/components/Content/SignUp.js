import React, { useState } from 'react';
import './SignUp.scss'

export default function SignUp(props) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  
  const clickSubmit = function(e) {
    e.preventDefault();
    console.log(login);
    console.log(password);
    console.log(passwordRepeat);
  }


  return (
    <section className="signup">
      <form className="signup__form">
        
        <h2 className="signup__form__header">SIGN UP</h2>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-login">ENTER LOGIN</label>
          <input 
          className="signup__form__input" 
          id="signup-login" 
          name="login"
          onChange={(e) => setLogin(e.target.value)}></input>
        </div>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-password">ENTER PASSWORD</label>
          <input 
          className="signup__form__input" 
          id="signup-password" 
          name="password"
          onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-password-repeat">REPEAT PASSWORD</label>
          <input 
          className="signup__form__input" 
          id="signup-login-repeat" 
          name="password-repeat"
          onChange={(e) => setPasswordRepeat(e.target.value)}></input>
        </div>

        <button onClick={(e) => clickSubmit(e)} className="signup__form__button">SUBMIT</button>

      </form>
    </section>
  );
};