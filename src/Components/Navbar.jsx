import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <img src="/backG.jpg" alt="Logo" className='h-10 mr-2' />
          <span className='text-[24px] font-bold'>
            <Link to='/'>BookLovers</Link>
          </span>
        </div>
        <ul className='flex space-x-8'>
          <li>
            <Link to='/' className='hover:text-gray-400'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/booklist' className='hover:text-gray-400'>
              BookList
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


