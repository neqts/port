import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

import CV from "../static/CV.pdf"
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    Aos.init({duration:2000});
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar' data-aos="fade-up">
        <div className='navbar-container'>
         
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
            <li className='nav-item' >
              <Link
    activeClass="active"
    to="Cards"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
> <a>01. &nbsp;</a>About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
    activeClass="active"
    to="Experience"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
              
                <a>02. </a> Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link
    activeClass="active"
    to="Work"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
                   <a>03. </a>
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
                  
              <a>04. </a>   Contact
              </Link>
            </li>


          
          </ul>
          <a href={CV}>Resume</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;