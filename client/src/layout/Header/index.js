import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'assets/icons';
import { Navbar } from 'components/';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <Logo width="150" />
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
