import React, { useState } from 'react';
import './SignUp.scss'

export default function SignUp(props) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const validateInput = function() {

    // Login
    const loginForm = document.getElementById('signup-login');
    if (!login) {
      console.log('Etnter the login');//fa-exclamation-circle
      loginForm.classList.add('input-error');
    }

  };
  
  const clickSubmit = function(e) {
    console.log(e);
    e.preventDefault();
    validateInput();
    //console.log(login);
    //console.log(password);
    //console.log(passwordRepeat);
  };


  return (
    <section className="signup">
      <form className="signup__form" onSubmit={(e) => clickSubmit(e)} >
        
        <h2 className="signup__form__header">SIGN UP</h2>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-login">ENTER LOGIN</label>
          <i className="fa fa-exclamation-circle signup__form__exclaim"></i>
          <input 
          className="signup__form__input" 
          id="signup-login" 
          name="login"
          onChange={(e) => setLogin(e.target.value)}
          onFocus={(e) => e.target.classList.remove('input-error')}></input>
        </div>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-password">ENTER PASSWORD</label>
          <i className="fa fa-exclamation-circle signup__form__exclaim"></i>
          <input 
          className="signup__form__input" 
          id="signup-password" 
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <div className="signup__form__wrapper">
          <label className="signup__form__label" htmlFor="signup-password-repeat">REPEAT PASSWORD</label>
          <i className="fa fa-exclamation-circle signup__form__exclaim"></i>
          <input 
          className="signup__form__input" 
          id="signup-login-repeat" 
          name="password-repeat"
          type="password"
          onChange={(e) => setPasswordRepeat(e.target.value)}></input>
        </div>

        <button className="signup__form__button">SUBMIT</button>

      </form>
    </section>
  );
};