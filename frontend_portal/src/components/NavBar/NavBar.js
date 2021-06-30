import React, { useState } from 'react';
import './NavBar.scss'
import SignInForm from './SignInForm';
export default function NavBar(props) {

  const {setContent} = props;
  const [showSignInForm, setShowSignInForm] = useState(false);

  return (<nav className="navbar">
    <div className="navbar__left">
      <p className="navbar__menu-item" onClick={() => setContent('homepage')}>Home</p>
      <p className="navbar__menu-item" onClick={() => setContent('games')}>Games</p>
      <p className="navbar__menu-item" onClick={() => setContent('highscores')}>Highscores</p>
    </div>
    <div className="navbar__center">
      <span>GAME</span>
      <i className="fa fa-shield navbar__center__icon"></i>
      <span>PORTAL</span>
    </div>
      <div className="navbar__right">
        {!showSignInForm && (<div className="singup-signin">
          <p className="navbar__menu-item" onClick={() => setContent('signup')}>Sign Up</p>
          <p className="navbar__menu-item" onClick={() => setShowSignInForm(true)}>Sign In</p>
        </div>)}
        {showSignInForm && <SignInForm setShowSignInForm={setShowSignInForm}/>}
      </div>

    </nav>)
}