import React, { useState } from 'react';
import { cardsData } from './CardData';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 6;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = cardsData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cardsData.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/label');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="posts-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            body={item.body}
            onReadMoreClick={handleReadMoreClick}
          />
        ))}
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
