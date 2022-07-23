import { IconGithub } from 'assets/icons';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__copyright">
          <p className="footer__copyright__text">&copy; {new Date().getFullYear()} Zamazom</p>
        </div>
        <div className="footer__social">
          <a
            className="footer__social__item"
            href="https://github.com/olcaneristi/zamazom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub color="#2f6daa" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
