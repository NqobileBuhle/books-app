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
  const [searchResults, setSearchResults] = useState([]); // Initialized as an empty array
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
        setBooks(data.docs || []); // Ensure it's an array
        setSearchResults(data.docs || []); // Ensure it's an array
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
      const matchesAuthor = filters.author === '' || (book.author_name && book.author_name.some(author => author.toLowerCase().includes(filters.author.toLowerCase())));
      const matchesGenre = filters.genre === '' || (book.subject && book.subject.some(subject => subject.toLowerCase().includes(filters.genre.toLowerCase())));
      const matchesBookType = filters.bookType === '' || (book.type && book.type.includes(filters.bookType.toLowerCase()));
      return matchesAuthor && matchesGenre && matchesBookType;
    });
  };

  const searchHandler = (search) => {
    setSearch(search);
    if (search !== '') {
      const newBookList = books.filter((i) =>
        Object.values(i)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase())
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

  // Ensure searchResults is an array before slicing
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = Array.isArray(searchResults)
    ? searchResults.slice(indexOfFirstBook, indexOfLastBook)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const viewAll = () => {
    setSearchResults(applyFilters(books));
    setCurrentPage(1);
  };

  if (loading) return <div className='text-center text-[35px]'>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='w-[90%] mx-auto justify-center text-center mx-auto'>
      
      
      <h1 className='text-[30px] bg-gray-800 text-white w-[25%] mx-auto mt-20'>BOOKLIST</h1>
      
      <div className='my-4'>
        <label className='mr-2 text-white'>Author:</label>
        <input
          type='text'
          name='author'
          value={filters.author}
          onChange={handleFilterChange}
          className='p-2 text-black'
        />
        <label className='mr-2 ml-4 text-white'>Genre:</label>
        <input
          type='text'
          name='genre'
          value={filters.genre}
          onChange={handleFilterChange}
          className='p-2 text-black'
        />
        <Filter filters={filters} handleFilterChange={handleFilterChange} />
      </div>
      
      <ul className='list-none text-[20px] flex flex-wrap text-white text-left'>
        {currentBooks.map((book, i) => (
          <BookItem key={i} book={book} />
        ))}
      </ul>
      <Search term={search} searchKeyword={searchHandler} />
      
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={searchResults.length}
        paginate={paginate}
        currentPage={currentPage}
        viewAll={viewAll}
      />
      
    </div>
  );
};

export default BookList;











