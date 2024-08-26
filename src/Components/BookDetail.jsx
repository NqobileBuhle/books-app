import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <p className="text-lg">Author: {book.authors?.map((author) => author.name).join(', ') || 'Unknown'}</p>
      <p className="text-lg">First Published: {book.first_publish_year || 'N/A'}</p>
      <p className="mt-4">{book.description || 'No description available.'}</p>
    </div>
  );
};

export default BookDetail;




