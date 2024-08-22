import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams(); // Book ID from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        // Fetch book details using the book key from the URL
        const response = await fetch(`https://openlibrary.org${id}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div className='text-center text-[35px]'>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!book) return <div className='text-center text-[35px]'>No Book Details Available</div>;

  // Default cover image if none is provided
  const coverImage = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
    : '/default-cover.jpg';

  return (
    <div className='w-[90%] mx-auto justify-center text-center'>
      <h1 className='text-[30px] bg-gray-500 text-white'>{book.title}</h1>
      <img src={coverImage} alt={book.title} className='w-[200px] h-[300px] object-cover mx-auto mb-4' />
      <div className='text-left'>
        <h2 className='text-[24px] mt-4'>Author(s): {book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}</h2>
        <p className='text-[20px] mt-2'>{book.description ? book.description : 'No description available.'}</p>
        <p className='text-[18px] mt-2'><strong>Published:</strong> {book.publish_date}</p>
      </div>
    </div>
  );
};

export default BookDetail;

