import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconCart, Logo } from 'assets/icons';
import { Navbar } from 'components/';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartTotalAmount, cartItems } = useSelector(state => state.cart);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <Logo width="150" />
          </Link>
        </div>

        <div className="header__elements">
          <Navbar isOpen={isOpen} handleToggle={handleToggle} setIsOpen={setIsOpen} />

          <Link to="/cart" className="header__cart" onClick={() => setIsOpen(false)}>
            <IconCart width="24" height="24" />
            <span className="header__cart__count">{cartItems.length}</span>
            <span className="header__cart__total">
              {cartTotalAmount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
