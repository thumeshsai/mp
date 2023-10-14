import React from 'react';
import Logo from '../assets/logo.png'; // Import your logo image

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] flex'>
      {/* Content Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex flex-grow flex-col justify-center'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            THUMESH SAI
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a CSE Student.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I am a passionate Computer Science & Engineering student with a strong interest in software development. Currently pursuing my degree at VIT-AP UNIVERSITY.
          </p>
        </div>

        {/* Logo on the right */}
        <div className='flex-shrink'>
          <img src={Logo} alt='Logo Image' style={{ width: '300px', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
