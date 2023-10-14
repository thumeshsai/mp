import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import reactScroll from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('home'); // Track the active item

  const handleClick = () => setNav(!nav);

  // Function to set the active item and close the mobile menu
  const handleItemClick = (item) => {
    setActiveNavItem(item);
    setNav(false);
  };

  // Define a style object for the active (clicked) item
  const activeItemStyle = {
    color: 'lightgreen',
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li
          className={`py-6 text-4xl ${activeNavItem === 'home' ? 'active' : ''}`}
        >
          <reactScroll.Link
            onClick={() => handleItemClick('home')}
            to='home'
            smooth={true}
            duration={500}
          >
            Home
          </reactScroll.Link>
        </li>
        {/* Add other menu items for the mobile menu here */}
      </ul>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <reactScroll.Link
            to='home'
            smooth={true}
            duration={500}
            style={
              activeNavItem === 'home'
                ? activeItemStyle
                : {}
            }
            onClick={() => handleItemClick('home')}
          >
            Home
          </reactScroll.Link>
        </li>
        <li>
          <reactScroll.Link
            to='about'
            smooth={true}
            duration={500}
            style={
              activeNavItem === 'about'
                ? activeItemStyle
                : {}
            }
            onClick={() => handleItemClick('about')}
          >
            About
          </reactScroll.Link>
        </li>
        <li>
          <reactScroll.Link
            to='skills'
            smooth={true}
            duration={500}
            style={
              activeNavItem === 'skills'
                ? activeItemStyle
                : {}
            }
            onClick={() => handleItemClick('skills')}
          >
            Skills
          </reactScroll.Link>
        </li>
        <li>
          <reactScroll.Link
            to='contact'
            smooth={true}
            duration={500}
            style={
              activeNavItem === 'contact'
                ? activeItemStyle
                : {}
            }
            onClick={() => handleItemClick('contact')}
          >
            Contact
          </reactScroll.Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        {/* Add social icons here */}
      </div>
    </div>
  );
};

export default Navbar;
