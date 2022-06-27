import Logo from 'assets/icons/Logo';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <Logo width="150" />
          </Link>
        </div>
        <div className="header__cart">
          <Link to="/cart" className="header__cart__items">
            <span className="header__cart__count">5</span>
            <span className="header__cart__title">Your Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
