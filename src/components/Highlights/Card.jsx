import React from 'react';
import Tile1 from '../images/T1.png';
import Tile2 from '../images/T2.png';
import Tile3 from '../images/T3.png';
import './Card.css';

function Card() {
  return (
    <div className='app__cards'>
      <div className='app__card'>
        <div className='image'>
          {' '}
          <img src={Tile1} alt='Tile1' />
        </div>
        <h3>Surfing</h3>
        <p>Best Hawaiian islands for surfing.</p>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='app__arrow-btn'
          viewBox='0 0 512 512'
        >
          <path
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='48'
            d='M268 112l144 144-144 144M392 256H100'
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
