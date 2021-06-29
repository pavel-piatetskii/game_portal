import React from 'react';

export default function NavBar(props) {

  const {setContent} = props;

  return (<section className="navbar">
      <p className="navbar__menu-item" onClick={() => setContent('homepage')}>Home</p>
      <p className="navbar__menu-item" onClick={() => setContent('games')}>Games</p>
      <p className="navbar__menu-item" onClick={() => setContent('highscores')}>Highscores</p>
      <p className="navbar__menu-item" onClick={() => setContent('signup')}>Sign Up</p>

    </section>)
}