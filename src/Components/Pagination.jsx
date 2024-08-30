import React from 'react';

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage, viewAll }) => {
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  
  const handlePageChange = (pageNumber) => {
    paginate(pageNumber);
  };

  return (
    <div className='flex flex-col items-center mt-4'>
      <div className='text-white mb-4'>
        <span className='text-lg'>
          Page {currentPage} of {totalPages}
        </span>
      </div>
      <div className='flex items-center'>
        {/* <button
          onClick={() => handlePageChange(1)}
          className='px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-l'
        >
          &laquo; First
        </button> */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className='px-4 py-2 text-white bg-gray-800 hover:bg-gray-600 mr-20'
          disabled={currentPage === 1}
        >
          &lsaquo; Prev
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className='px-4 py-2 text-white bg-gray-800 hover:bg-gray-600 ml-20'
          disabled={currentPage === totalPages}
        >
          Next &rsaquo;
        </button>
        {/* <button
          onClick={() => handlePageChange(totalPages)}
          className='px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-r'
          disabled={currentPage === totalPages}
        >
          Last &raquo;
        </button> */}
      </div>
      <button
        onClick={viewAll}
        className='mt-4 px-4 py-2 text-white bg-gray-800 hover:bg-gray-600 rounded'
      >
        View All
      </button>
    </div>
  );
};

export default Pagination;



