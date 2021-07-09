import React, { useState } from 'react';
import './SignUp.scss'

export default function SignUp(props) {


  const signUpForm = [
    {
      name: 'login',
      label: 'ENTER LOGIN',
      type: 'login',
      emptyMessage: 'Please enter login',
      wrongMessage: 'Login should be 3-32 characters long',
      checkCorrect: function(str) {
        return str.length > 2 && str.length <= 32
      },
    },
    {
      name: 'password',
      label: 'ENTER PASSWORD',
      type: 'password',
      emptyMessage: 'Please enter password',
      wrongMessage: 'Password should be at least 8 characteres long',
      checkCorrect: function(str) {
        return str.length >= 8 && str.length <= 256
      },
    }, 
    {
      name: 'password-repeat',
      label: 'REPEAT PASSWORD',
      type: 'password',
      emptyMessage: 'Please repeat password',
      wrongMessage: 'Passwords do not match',
      checkCorrect: function(str) {
        return str === document.getElementById('signup-password').value
      },
    }, 
  ];

  // const validateInput = function () {

  //   // Login
  //   const loginForm = document.getElementById('signup-login');
  //   const exclaimLogin = document.getElementById('exclaim-login');
  //   const popupLogin = document.getElementById('popup-login');

  //   const passwordForm = document.getElementById('signup-password');
  //   const exclaimPassword = document.getElementById('exclaim-password');
  //   const popupPassword = document.getElementById('popup-password');

  //   const passwordRepeatForm = document.getElementById('signup-password-repeat');
  //   const exclaimRepeatPassword = document.getElementById('exclaim-password-repeat');
  //   const popupRepeatPassword = document.getElementById('popup-password-repeat');

  //   if (!login) {
  //     loginForm.classList.add('input-error');
  //     exclaimLogin.classList.add('show');
  //     popupLogin.innerText = 'Please enter login';
  //     //popupLogin.classList.add('show');
  //   }

  //   if (!password) {
  //     passwordForm.classList.add('input-error');
  //     exclaimPassword.classList.add('show');
  //     popupPassword.innerText = 'Please, enter password';
  //     //popupPassword.classList.add('show');
  //   }

  //   if (!passwordRepeat) {
  //     passwordRepeatForm.classList.add('input-error');
  //     exclaimRepeatPassword.classList.add('show');
  //     popupRepeatPassword.innerText = 'Please, repeat password';
  //     //popupRepeatPassword.classList.add('show');
  //   }
  // };

  const validateInput = function () {
    for (const field of signUpForm) {

      const { name, emptyMessage, wrongMessage } = field;

      const input = document.getElementById(`signup-${name}`);
      const exclaim = document.getElementById(`exclaim-${name}`);
      const popup = document.getElementById(`popup-${name}`);
      
      if (!input.value || !field.checkCorrect(input.value)) {
        input.classList.add('input-error');
        exclaim.classList.add('show');
        popup.innerText = (!input.value) ? emptyMessage : wrongMessage;
      }
    }
  }

  const clearError = function(id) {
    document.getElementById(id).classList.remove('input-error');
    document.getElementById(`exclaim-${id.replace(/signup-/, '')}`).classList.remove('show');
  }

  const clickSubmit = function (e) {
    e.preventDefault();
    validateInput();
  };


  return (
    <section className="signup">
      <form className="signup__form" onSubmit={(e) => clickSubmit(e)} >
        <h2 className="signup__form__header">SIGN UP</h2>

        {signUpForm.map(field => 
          <div className="signup__form__wrapper" key={field.name}>
            <label className="signup__form__label" htmlFor={`signup-${field.name}`}>{field.label}</label>
            <i id={`exclaim-${field.name}`} className="fa fa-exclamation-circle signup__form__exclaim">
              <span id={`popup-${field.name}`} className="signup__form__popup"></span>

            </i>
            <input
              className="signup__form__input"
              id={`signup-${field.name}`}
              name={`${field.name}`}
              autoComplete='off'
              type={field.type}
              //onChange={(e) => setLogin(e.target.value)}
              onFocus={(e) => clearError(e.target.id)}></input>
          </div>
        )}
        <button className="signup__form__button">SUBMIT</button>
      </form>
    </section>



    // <section className="signup">
    //   <form className="signup__form" onSubmit={(e) => clickSubmit(e)} >

    //     <h2 className="signup__form__header">SIGN UP</h2>

    //     <div className="signup__form__wrapper">
    //       <label className="signup__form__label" htmlFor="signup-login">ENTER LOGIN</label>
    //       <i id="exclaim-login" className="fa fa-exclamation-circle signup__form__exclaim">
    //         <span id="popup-login" className="signup__form__popup"></span>

    //       </i>
    //       <input 
    //       className="signup__form__input" 
    //       id="signup-login" 
    //       name="login"
    //       onChange={(e) => setLogin(e.target.value)}
    //       onFocus={(e) => e.target.classList.remove('input-error')}></input>
    //     </div>

    //     <div className="signup__form__wrapper">
    //       <label className="signup__form__label" htmlFor="signup-password">ENTER PASSWORD</label>
    //       <i id="exclaim-password" className="fa fa-exclamation-circle signup__form__exclaim">
    //         <span id="popup-password" className="signup__form__popup"></span>
    //       </i>

    //       <input 
    //       className="signup__form__input" 
    //       id="signup-password" 
    //       name="password"
    //       type="password"
    //       onChange={(e) => setPassword(e.target.value)}></input>
    //     </div>

    //     <div className="signup__form__wrapper">
    //       <label className="signup__form__label" htmlFor="signup-password-repeat">REPEAT PASSWORD</label>
    //       <i id="exclaim-password-repeat" className="fa fa-exclamation-circle signup__form__exclaim">
    //         <span id="popup-password-repeat" className="signup__form__popup"></span>
    //       </i>
    //       <input 
    //       className="signup__form__input" 
    //       id="signup-password-repeat" 
    //       name="password-repeat"
    //       type="password"
    //       onChange={(e) => setPasswordRepeat(e.target.value)}></input>
    //     </div>

    //     <button className="signup__form__button">SUBMIT</button>

    //   </form>
    // </section>
  );
};