import React, { useState, useEffect } from 'react';
import Search from './Search';
import BookItem from './BookItem';
import Pagination from './Pagination';
import '../index.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/search.json?author=tolkien&sort=new');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.docs);
        setSearchResults(data.docs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const searchHandler = (search) => {
    setSearch(search);
    if (search !== '') {
      const newBookList = books.filter((i) =>
        Object.values(i)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      setSearchResults(newBookList);
    } else {
      setSearchResults(books);
    }
    setCurrentPage(1);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className='text-center text-[35px]'>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='w-[90%] mx-auto justify-center text-center'>
      <h1 className='text-[30px] bg-gray-500 text-white'>BOOKLIST</h1>
      <Search term={search} searchKeyword={searchHandler} />
      <ul className='list-none text-[20px] flex flex-wrap text-white text-left'>
        {currentBooks.map((book, i) => (
          <BookItem key={i} book={book} />
        ))}
      </ul>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={searchResults.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BookList;





