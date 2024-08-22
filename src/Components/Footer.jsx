import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto text-center'>
        <p className='text-[14px]'>
          &copy; {new Date().getFullYear()} Book Finder. All rights reserved.
        </p>
        <p className='text-[14px]'>
          Built with <span className='text-red-500'>&hearts;</span> by Nqobile Biyela
        </p>
      </div>
    </footer>
  );
};

export default Footer;

