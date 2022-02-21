import React from 'react';
import inComing1 from '../../../assets/coming-soon.png';
import inComing2 from '../../../assets/welcome1.png';
import './style.scss';

const NewFeature = () => {
  return (
    <section className="section-4">
    <div className="section-wrapper new-features">
        <div className="new-features__img1">
          <img
            src={inComing1}
            alt="welcome to site"
            className="slide-in from-left"
          />
        </div>
        <div className="new-features__content slide-in from-right">
          <div className="new-features__msg">
            <h2 className="new-features__title">MADVerse</h2>
            <p className="new-features__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              facere. Assumenda ipsam facilis voluptatem aut quibusdam
              recusandae pariatur sed rem repellat enim ut placeat officiis
              voluptas in eligendi
            </p>
            <h3>Coming Soon</h3>
          </div>
        </div>
        <div className="new-features__img2">
          <img
            src={inComing2}
            alt="welcome to site again"
            className="slide-in from-right"
          />
        </div>
      </div>
    </section>
  )
}

export default NewFeature