import React from 'react';
import './style.scss';
import welcome1 from '../../../assets/welcome1.png';
import welcome2 from '../../../assets/welcome2.png';

const Introduction = () => {
  return (
    <section className="section-2">
    <div className="section-wrapper welcome">
        <div className="welcome__msg slide-in from-left">
          <h2 className="welcome__title">Why MADWallet?</h2>
          <p className="welcome__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere.
            Assumenda ipsam facilis voluptatem aut quibusdam recusandae pariatur
            sed rem repellat enim ut placeat officiis voluptas in eligendi
            numquam dicta qui, culpa tenetur cum, quas sint suscipit consectetur
            id. Alias illum dignissimos quos excepturi ducimus reiciendis,
            consequatur in repellat sint?
          </p>
        </div>
        <div className="welcome__img">
          <div className="img-one">
            <img
              src={welcome1}
              alt="welcome to site"
              className="slide-in from-right"
            />
          </div>
          <div className="img-two">
            <img
              src={welcome2}
              alt="welcome to site again"
              className="slide-in from-right"
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Introduction