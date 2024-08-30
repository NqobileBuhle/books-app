import React, { useState, useEffect } from 'react';
import Search from '../Components/Search';
import BookItem from '../Components/BookItem';
import Pagination from '../Components/Pagination';
import Filter from '../Components/Filter';
import '../index.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [filters, setFilters] = useState({ author: '', genre: '', bookType: '' });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.docs || []);
        setSearchResults(data.docs || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const applyFilters = (bookList) => {
    return bookList.filter((book) => {
      const matchesAuthor =
        filters.author === '' ||
        (book.author_name &&
          book.author_name.some((author) =>
            author.toLowerCase().includes(filters.author.toLowerCase())
          ));
      const matchesGenre =
        filters.genre === '' ||
        (book.subject &&
          book.subject.some((subject) =>
            subject.toLowerCase().includes(filters.genre.toLowerCase())
          ));
      const matchesBookType =
        filters.bookType === '' || (book.type && book.type.includes(filters.bookType.toLowerCase()));
      return matchesAuthor && matchesGenre && matchesBookType;
    });
  };

  const searchHandler = (search) => {
    setSearch(search);
    if (search !== '') {
      const newBookList = books.filter((i) =>
        Object.values(i).join(' ').toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(applyFilters(newBookList));
    } else {
      setSearchResults(applyFilters(books));
    }
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    setSearchResults(applyFilters(searchResults));
    setCurrentPage(1);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = Array.isArray(searchResults)
    ? searchResults.slice(indexOfFirstBook, indexOfLastBook).slice(0, 6) // Display only 6 books
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const viewAll = () => {
    setSearchResults(applyFilters(books));
    setCurrentPage(1);
  };

  if (loading) return <div className='text-center text-4xl mt-20 text-gray-600'>Loading...</div>;
  if (error) return <div className='text-center text-red-500 mt-20'>Error: {error}</div>;

  return (
    <div
      className='container mx-auto px-4 py-10 bg-cover bg-center min-h-screen'
      style={{
        backgroundImage: "url('/imageTwo.jpg')",
      }}
    >
      {/* Overlay for better readability */}
      <div className='bg-gray-500 bg-opacity-70 p-8 rounded-lg'>
        <h1 className='text-4xl font-bold text-center bg-gray-800 text-white py-2 px-4 rounded-md mx-auto mb-10 w-fit'>
          BOOKLIST
        </h1>
        <div className='flex flex-col md:flex-row md:justify-between items-center mb-8'>
          <div className='flex flex-col md:flex-row items-center mb-4 md:mb-0'>
            <label className='mr-2 text-white'>Author:</label>
            <input
              type='text'
              name='author'
              value={filters.author}
              onChange={handleFilterChange}
              className='p-2 text-black rounded-md border border-gray-300 mr-4'
              placeholder='Search by author...'
            />
            <label className='mr-2 text-white'>Genre:</label>
            <input
              type='text'
              name='genre'
              value={filters.genre}
              onChange={handleFilterChange}
              className='p-2 text-black rounded-md border border-gray-300'
              placeholder='Search by genre...'
            />
          </div>
          <Filter filters={filters} handleFilterChange={handleFilterChange} />
        </div>
        <Search term={search} searchKeyword={searchHandler} />
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-1/2 mx-auto'>
          {currentBooks.map((book, i) => (
            <BookItem key={i} book={book} />
          ))}
        </ul>
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={searchResults.length}
          paginate={paginate}
          currentPage={currentPage}
          viewAll={viewAll}
        />
      </div>
    </div>
  );
};

export default BookList;














