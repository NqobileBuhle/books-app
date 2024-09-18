import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await response.json();
        setBook(data);
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error('Error fetching book details:', error);
        setLoading(false); // Stop loading in case of an error
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  if (!book) {
    return <div>Error loading book details.</div>; // Handle case where book data is not available
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <p className="text-lg">
        <strong>Author(s):</strong> {book.authors?.map((author) => author.name).join(', ') || 'Unknown'}
      </p>
      <p className="text-lg">
        <strong>First Published:</strong> {book.first_publish_year || 'N/A'}
      </p>
      <p className="mt-4">
        <strong>Description:</strong> {book.description?.value || book.description || 'No description available.'}
      </p>
    </div>
  );
};

export default BookDetail;





