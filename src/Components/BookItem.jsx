import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'cover_image.jpg';

  return (
    <li className='bg-gray-200 p-2 m-2 w-[25% ]text-black'>
      <Link to={`/book/${book.key}`} className='flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-64 h-80 mx-auto'>
        <img src={coverImage} alt={book.title} className='flex justify-center items-center w-full h-3/4 overflow-hidden' />
        <h3 className='text-[0px] text-center'>{book.title}</h3>
      </Link>
    </li>
  );
};

export default BookItem;




