import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Twitter from '../svg/twitter';
import Instagram from '../svg/instagram';
import Facebook from '../svg/facebook';

const Footer = props => {
  useEffect(() => {
  }, [])

  return (
    <footer className="footer">
      <ul className="footer-list">
        <li><Link to='/'><Facebook /></Link></li>
        <li><Link to='/'><Twitter /></Link></li>
        <li><Link to='/'><Instagram /></Link></li>
      </ul>
    </footer>
  )
}

export default withRouter(Footer);
