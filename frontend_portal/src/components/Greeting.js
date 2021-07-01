import React, { useEffect } from "react";

export default function Greeting(props) {

  const { setShowGreeting } = props;

  useEffect(() => {
    setTimeout(() => setShowGreeting(false), 1000)
  }, [])

  return (
    <div className="navbar__center">
      <span>GAME</span>
      <i className="fa fa-shield navbar__center__icon"></i>
      <span>PORTAL</span>
    </div>
  )
}