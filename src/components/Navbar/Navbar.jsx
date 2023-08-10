import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.css';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className='main-div'>
        <nav className='app__navbar'>
          <p className='brand-name'>Aloha</p>
          <ul className='app__navbar-links'>
            {['Home', 'Surfing', 'Hula', 'Vulcano'].map((item) => (
              <li className='app__flex p-text' key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>

          <div className='app__navbar-menu'>
            <button className='btn'>Book a trip</button>
          </div>
        </nav>
      </div>
      <p className='app__tag-line1'>Welcome</p>
      <p className='app__tag-line2'>to Hawaii </p>
    </>
  );
}

export default Navbar;
