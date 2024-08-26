import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen'>
      {/* Video Background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/bgVideo.mp4'
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className='relative z-10 flex flex-col items-center justify-center   p-10 rounded'>
        <h1 className='text-[40px] mb-4 text-white'>Find the book of your choice!</h1>
        <p className='text-[20px] mb-6 text-center text-white'>
          Discover a vast collection of books by your favorite authors.<br/> Use our search tool to find books, explore new releases, and<br/> much more!
        </p>
        <Link 
          to='/booklist' 
          className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-white-700 transition duration-300'>
          Explore Books
        </Link>
        {/* <Filter/> */}
      </div>
    </div>
  );
};

export default Home;




