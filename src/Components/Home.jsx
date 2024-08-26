import React from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const Home = () => {
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen bg-cover bg-center'
      style={{ backgroundImage: `url('/cover.jpg')` }}
    >
      <h1 className='text-[40px] mb-4 text-white'>Find the book of your choice!</h1>
      <p className='text-[20px] mb-6 text-center text-white'>
        Discover a vast collection of books by your favorite authors.<br/> Use our search tool to find books, explore new releases, and ,<br/>much more!
      </p>
      <Link 
        to='/booklist' 
        className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-white-700 transition duration-300'>
        Explore Books
      </Link>
      {/* <Filter/> */}
    </div>
  );
};

export default Home;



