import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  useEffect(() => {
    let counter1 = 0, counter2 = 1, incrSpeed = 0, decrSpeed = -100;

    const sections = document.querySelectorAll('section');
    const featuresNav = document.querySelector('.list-item');
    const header = document.querySelector('.mdw-header');

    window.addEventListener("wheel", (e) => {
      const deltaY = e.deltaY > 0;
      if (deltaY) {
        if(counter1 === 2) {
          counter1 = 2;
          if(incrSpeed < 1400) {
            featuresNav.parentElement.style.left = `-${incrSpeed}px`;
            incrSpeed += 100; 
            decrSpeed += 100;
          } else {
            counter1++;
            counter2++
          }
        } else {
          counter1++;
          counter2++
        }
      } else if(!deltaY) {
        if(counter2 === 3) {
          counter2 = 3;
          if(decrSpeed > -100) {
            featuresNav.parentElement.style.left = `-${decrSpeed}px`;
            decrSpeed -= 100;
            incrSpeed -= 100;
          } else {
            counter1--;
            counter2--;
          }
        } else{
          counter1--;
          counter2--;
        }
      }

      const navShow = counter2 === 7 || counter1 === -1;

      header.classList.toggle('remove-header', navShow);

      if(counter1 === 7) {
        [...sections].forEach(section => {
          section.style.left = '0';
        })
        counter1 = 0;
        counter2 = 1;
        return;
      }

      if(counter1 === -1) {
        [...sections].forEach(section => {
          if(section.classList[0] === 'section-7') {
            return;
          }

          section.style.left = '-100vw';
        })
        counter1 = 6;
        counter2 = 7;
      }

      document.querySelector(`.section-${deltaY ? counter1 : counter2}`).style.left =
        `${deltaY ? '-100vw' : '0'}`;
    });
  },[]);

  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
