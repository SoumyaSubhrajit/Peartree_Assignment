import React from 'react';
import arrow from '../images/arrow-forward-outline';
import './Categories.css';
function Catergories() {
  return (
    <>
      <div className='app__categories'>
        <div className='app__first-div'>
          <div className='app__content-name'>Categories</div>
          <ul className='app__lists'>
            <li className='app__list'>
              Adventure
              <div className='app__arrows'>{arrow}</div>
            </li>
            <li className='app__list'>
              Culinary <div className='app__arrows'>{arrow}</div>
            </li>
            <li className='app__list'>
              Eco-tourism <div className='app__arrows'>{arrow}</div>
            </li>
            <li className='app__list'>
              Family <div className='app__arrows'>{arrow}</div>
            </li>
            <li className='app__list'>
              Sport <div className='app__arrows'>{arrow}</div>
            </li>
          </ul>
        </div>

        <div className='app__travel-guide'>
          <div className='app__travel-name'>Travel Guide</div>

          <div className='app__travel-card'>
            <div className='app__travel-desc'>
              <p className='app__travel-guide-name'>Hadwain Malone</p>
              <p>Guide since 2012</p>
              <div className='app__travel-btn'>Contact</div>
            </div>
            <div className='app__travel-pic'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catergories;
