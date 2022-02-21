import React from 'react';
import comm1 from '../../../assets/extra1.png';
import comm2 from '../../../assets/extra2.png';
import './style.scss';

const Community = () => {
  return (
    <section className="section-6">
    <div className="section-wrapper community">
        <div className="community__img-sm">
          <img
            src={comm1}
            alt="community banner one"
           className="slide-in from-left"
          />
        </div>
        <div className="community__content-box slide-in from-top">
            <div className="community__msg">
            <h3 className="community__title">Community</h3>
            <p className="community__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            beatae sequi aliquid molestias nostrum, unde atque obcaecati
            recusandae.
            </p>
            <div className="community--box">
            <span></span><span></span><span></span><span></span><span></span>
            </div>
            </div>
        </div>
        <div className="community__img-lg">
          <img
            src={comm2}
            alt="community banner one"
            className="slide-in from-right"
          />
        </div>
      </div>
    </section>
  )
}

export default Community;