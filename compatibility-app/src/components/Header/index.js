import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import './styles.scss';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo-link" to="/">
        <img className="header__logo-image" src={logo} alt="site logo" />
      </Link>
    </header>
  );
}
  
export default Header;