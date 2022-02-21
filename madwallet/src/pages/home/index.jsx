import React from 'react';
import Welcome from './welcome';
import './style.scss';
import Introduction from './intro';
import Features from './features';
import NewFeature from './coming-new';
import Supports from './supports';
import Community from './community';
import Footer from '../../components/footer'

const Home = () => {
  return (
    <div className="container">
      <div className="progress--container">
        <div className="progress">
          <h2>1/6</h2>
        </div>
      <div className="circle-wrapper">
        {
          [1,2,3,4,5,6].map((c, idx) => (
            <div className={`circle circle${c}`} key={idx}></div>
            ))
          }
      </div>
      </div>
    <main className="wrapper">
    <Welcome/>
    <Introduction/>
    <Features/>
    <NewFeature/>
    <Supports/>
    <Community/>
    <Footer/>
	  </main>
    </div>
  )
}

export default Home