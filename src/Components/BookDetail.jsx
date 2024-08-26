import React from 'react';

const BookItem = ({ book }) => {
  // Construct the cover image URL
  const coverImage = book.cover_i
    ? `https://freetestapi.com/api/v1/books`
    : `url('/cover.jpg')`; // Replace with your default image path

  return (
    <li className="w-[45%] p-4 bg-gray-800 text-white rounded-lg shadow-md m-2">
      <img 
        src={coverImage} 
        alt={book.title} 
        className="w-[150px] h-[200px] object-cover mx-auto mb-4 rounded"
      />
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-sm">Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p className="text-sm">First Published: {book.first_publish_year || 'N/A'}</p>
    </li>
  );
};

export default BookItem;



