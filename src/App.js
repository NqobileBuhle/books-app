import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './index.css';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/booklist" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;







