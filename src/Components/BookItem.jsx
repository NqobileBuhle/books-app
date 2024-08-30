import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'cover_image.jpg';

  return (
    <li className='grid grid-cols-3 md:grid-cols-2 gap-3 md:px-3'>
      <Link to={`/book/${book.key}`} className='col-span-2 md:col-span-5 relative'>
        <img src={coverImage} alt={book.title} className='flex justify-center  w-full h-3/4 ' />
        <h3 className='text-[0px] text-center'>{book.title}</h3>
      </Link>
    </li>
  );
};

export default BookItem;




