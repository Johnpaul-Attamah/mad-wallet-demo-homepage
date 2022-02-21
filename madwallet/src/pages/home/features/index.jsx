import React from 'react';
import { Link } from 'react-router-dom';
import features1 from '../../../assets/features1.png';
import features2 from '../../../assets/features2.png';
import './style.scss';

const Features = () => {
  return (
    <section className="section-3">
    <div className="section-wrapper features">
        <ul className="list">
          <li className="list-item"><Link to="/cross-chain" className="list-link">Cross-Chain Bridge</Link></li>
          <li className="list-item"><Link to="/reward-system" className="list-link">Reward System</Link></li>
          <li className="list-item"><Link to="/revenue" className="list-link">Revenue Generation</Link></li>
          <li className="list-item"><Link to="/fiat-to-crypto" className="list-link">Fiat-to-Crypto</Link></li>
          <li className="list-item"><Link to="/wallet-for-dev" className="list-link">X-Wallet for Development</Link></li>
          <li className="list-item"><Link to="/send-phase-sec" className="list-link">Seed Phase Security</Link></li>
        </ul>
        <div className="features__sticky-state">
          <div className="features__msg slide-in from-left">
            <h2 className="features__title">Headline</h2>
            <p className="features__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere.
              Assumenda ipsam facilis voluptatem aut quibusdam recusandae pariatur
              sed rem repellat enim ut placeat officiis voluptas in eligendi
              numquam dicta qui, culpa tenetur cum, quas sint suscipit consectetur
              id. Alias illum dignissimos quos excepturi ducimus reiciendis,
              consequatur in repellat sint?
            </p>
          </div>
          <div className="features__img">
            <div className="img-one">
              <img
                src={features1}
                alt="welcome to site"
                className="slide-in from-right"
              />
            </div>
            <div className="img-two">
              <img
                src={features2}
                alt="welcome to site again"
                className="slide-in from-right"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features