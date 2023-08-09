import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.css';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='main-div'>
      <nav className='app__navbar'>
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

        {/* <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className='app__navbar-links'>
                {['Home', 'Surfing', 'Hula', 'Vulcano'].map((item) => (
                  <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
