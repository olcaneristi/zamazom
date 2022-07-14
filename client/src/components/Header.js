import Logo from 'assets/icons/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconCart from 'assets/icons/IconCart';
import IconFavorites from 'assets/icons/IconFavorites';

const Header = () => {
  const { cartTotalAmount, cartItems } = useSelector(state => state.cart);
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <Logo width="150" />
          </Link>
        </div>
        <nav className="header__nav">
          <Link to="/favorites" className="header__favorites">
            <IconFavorites color="#FFF" width="32" height="32" />
            <span className="header__favorites__title">Favorites</span>
          </Link>
          <Link to="/cart" className="header__cart">
            <IconCart width="30" height="30" />
            <span className="header__cart__count">{cartItems.length}</span>
            <span className="header__cart__total">
              {cartTotalAmount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
