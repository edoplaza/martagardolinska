import React, { useContext } from 'react';
import Logo from '../svg/logo';
import Pull from '../svg/pull';
import Nav from './Nav';
import { withRouter, Link } from 'react-router-dom';
import { MainContext } from '../contexts/MainContext';

const Header = props => {
  const { isMenuOpen, toggleMenu } = useContext(MainContext);

  return (
    <header className="header">
      <Link to='/'><Logo/></Link>
      <Nav isMenuOpen = {isMenuOpen}/>
      <span className="pull-wrapper"  onClick={() => toggleMenu()}>
        <Pull isMenuOpen = {isMenuOpen}/>
      </span>
    </header>
  )
}

export default withRouter(Header);
