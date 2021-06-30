import React from 'react';
import './SignInForm.scss'
export default function SignInForm(props) {

  const { setShowSignInForm } = props;

  const clickLogIn = function (e) {
    e.preventDefault();
    //console.log(e);
    setShowSignInForm(false);
  }

  return (
      <form className="signin-form">
        
        <div className="signin-form__wrapper">
          <label className="signin-form__label" htmlFor="login">Login</label>
          <input className="signin-form__input" type="text" id="login" name="login"></input>
        </div>

        <div className="signin-form__wrapper">
          <label className="signin-form__label" htmlFor="password">Password</label>
          <input className="signin-form__input" type="password" id="password" name="password"></input>
        </div>
        
        <button type="submit" onClick={(e) => clickLogIn(e)}>Log in</button>
      </form>
  );
};