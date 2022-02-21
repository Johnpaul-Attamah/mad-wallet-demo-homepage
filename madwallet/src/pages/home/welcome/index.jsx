import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { BsPlayCircle } from 'react-icons/bs';
import wallet1 from '../../../assets/wallet1.png';
import wallet2 from '../../../assets/wallet2.png';
import wallet3 from '../../../assets/wallet3.png';

const Welcome = () => {
  return (
    <section className="section-1">
      <div className="section-wrapper homepage">

        <div className="wallet2">
          <img src={wallet2} alt="wallet 2" className="img2 from-left" />
        </div>

        <div className="wallet3">
          <img src={wallet3} alt="wallet 3" className="wallet3" />
        </div>

        <div className="homepage__message">
          <h1 className="homepage__title">Welcome to MADWallet</h1>
          <span className="homepage__sub-title"
            >Explore, create and trade NFTs with ease.</span
          >
          <div className="homepage__interactive">
            <Link to="/downloads" className="btn btn__cta">Download Extension</Link>
            <div className="homepage__video">
              <span><BsPlayCircle/></span>
              <span>video</span>
            </div>
          </div>
        </div>

        <div className="wallet1">
          <img src={wallet1} alt="wallet one" className="img1 from-right" />
        </div>

      </div>
      </section>
  )
}

export default Welcome;