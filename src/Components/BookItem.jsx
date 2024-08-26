import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  // Default cover image if none is provided
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'cover_image.jpg';

  return (
    <li className='bg-gray-700 p-2 m-2 w-[25%] text-white'>
      <Link to={`/book/${book.key}`} className='flex flex-col items-center'>
        <img src={coverImage} alt={book.title} className='w-45 h-[300px] object-cover mb-2' />
        <h3 className='text-[20px] text-center'>{book.title}</h3>
      </Link>
    </li>
  );
};

export default BookItem;

