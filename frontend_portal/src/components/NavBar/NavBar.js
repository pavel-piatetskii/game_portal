import React from 'react';
import './NavBar.scss'
export default function NavBar(props) {

  const {setContent} = props;

  return (<section className="navbar">
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
      <p className="navbar__menu-item" onClick={() => setContent('signup')}>Sign Up</p>

    </section>)
}