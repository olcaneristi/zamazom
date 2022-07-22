import React from 'react';
import { useSelector } from 'react-redux';
import { IconCart, IconFavorites, IconUser } from 'assets/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartTotalAmount, cartItems } = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);

  return (
    <nav className="header__nav">
      <Link to="/favorites" className="header__favorites">
        <IconFavorites color="#FFF" width="20" height="20" />
        <div className="header__favorites__text">
          <p className="header__heading header__favorites__text--heading">Your</p>
          <p className="header__bold header__favorites__text--bold">Lists</p>
        </div>
      </Link>

      {(auth?.token && (
        <Link to="/profile" className="header__favorites">
          <IconUser color="#FFF" width="20" height="20" />
          <div className="header__signIn__text">
            <p className="header__heading header__signIn__text--heading">Your</p>
            <p className="header__bold header__signIn__text--bold">Account</p>
          </div>
        </Link>
      )) || (
        <>
          <Link to="/login" className="header__signIn">
            <IconUser width="20" height="20" color="#FFF" />
            <div className="header__signIn__text">
              <p className="header__heading header__signIn__text--heading">Sign In</p>
              <p className="header__bold header__signIn__text--bold">Account</p>
            </div>
          </Link>
        </>
      )}

      <Link to="/cart" className="header__cart">
        <IconCart width="24" height="24" />
        <span className="header__cart__count">{cartItems.length}</span>
        <span className="header__cart__total">
          {cartTotalAmount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
