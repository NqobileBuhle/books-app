import React, { useState, useEffect } from 'react';
import Search from './Search';
import '../index.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[search,setSearch]=useState();
  const[searchResults,setSearchResults]=useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/search.json?author=tolkien&sort=new');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data.result);

        
        setBooks(data.docs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  const searchHandler=(search)=>{
    setSearch(search);
    if(search !==""){
        const newBookList=books.filter((i)=>{
            return Object.values(i)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
        }
    )
     setSearchResults(newBookList);  
    }else{
        setSearchResults(books)
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='w-[90%] mx-auto justify-center text-center'>
      <h1 className='text-[30px] bg-gray-500'>BOOKLIST</h1>
      <Search term={search} searchKeyword={searchHandler}/>
      {/* {search.length < 1 } */}
      <ul className='list-none text-[20px] flex flex-wrap text-white text-left'>
        {books.map((book) => (
          <li className='bg-gray-700 p-2 m-2 w-[45%]' key={book.key}>
          <i className='fa fa-book'></i>
          &nbsp;
          {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
