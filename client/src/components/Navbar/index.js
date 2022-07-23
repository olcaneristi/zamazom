import React from 'react';
import { useSelector } from 'react-redux';
import { IconBurger, IconFavorites, IconTimes, IconUser } from 'assets/icons';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const Navbar = ({ isOpen, setIsOpen, handleToggle }) => {
  const auth = useSelector(state => state.auth);

  return (
    <>
      <div className="header__sidebar">
        <Button buttonType="unset" className="header__sidebar__toggle" onClick={handleToggle}>
          {isOpen ? <IconTimes color="#FFF" /> : <IconBurger width="24" height="24" color="#FFF" />}
        </Button>
      </div>
      <button
        className={`header__nav__container ${isOpen ? 'header__nav__container active' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <nav className={`header__nav ${isOpen ? 'header__nav active' : ''}`}>
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
        </nav>
      </button>
    </>
  );
};

export default Navbar;
