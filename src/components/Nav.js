import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Nav = ({isMenuOpen}) => {
  return (
    <nav className={`nav ${isMenuOpen ? 'expanded': ''}`}>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/biography">Biography</NavLink></li>
        <li><NavLink exact to="/calendar">Calendar</NavLink></li>
        <li><NavLink exact to="/videos">Videos</NavLink></li>
        <li><NavLink exact to="/photos">Photos</NavLink></li>
        <li><NavLink exact to="/press">Press</NavLink></li>
        <li><NavLink exact to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default withRouter(Nav);
