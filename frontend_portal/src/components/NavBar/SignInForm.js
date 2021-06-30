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
    <div className="signin-form">
      <form>
        <label className="signin-form__label" htmlFor="login">Login</label>
        <input className="signin-form__input" type="text" id="login" name="login"></input>
        <label className="signin-form__label" htmlFor="password">Password</label>
        <input className="signin-form__input" type="password" id="password" name="password"></input>
        <button type="submit" onClick={(e) => clickLogIn(e)}>Log in</button>
      </form>
    </div>
  );
};