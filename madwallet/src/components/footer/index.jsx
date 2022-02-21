import React from 'react';
import { Link } from 'react-router-dom';
import wallet2 from '../../assets/wallet2.png';
import welcome1 from '../../assets/welcome1.png';
import mainLogo from '../../assets/logos/main-logo.svg';
import './style.scss'

const Footer = () => {
  return (
    <section className="section-7">
    <footer className="footer section-wrapper">
        <div className="footer__img-sm">
          <img
            src={wallet2}
            alt="footer banner one"
            className="slide-in from-left"
          />
        </div>
        <div className="footer__content-box slide-in from-top">
          <div className="footer--logo">
            <Link to="/" className="footer--logo-link">
            <img src={mainLogo} alt="mad wallet logo" className='footer--logo__img'/>)
            </Link>
          </div>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link to="/welcome" className="footer__nav-link">Welcome</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/features" className="footer__nav-link">Features</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/marketplace" className="footer__nav-link">Marketplace</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/community" className="footer__nav-link">Community</Link>
              </li>
            </ul>
          </nav>
          <div className="footer--copyright">
            <p className="copyright">&copy; Copyright All rights reserved, 2021.</p>
          </div>
        </div>
        <div className="footer__img-lg">
          <img
            src={welcome1}
            alt="footer banner one"
            className="slide-in from-right"
          />
        </div>
      </footer>
    </section>
  )
}

export default Footer;