import React from 'react';

const Filter = ({ filters, handleFilterChange }) => {
  return (
    <div className='my-4'>
      <label className='mr-2 text-white'>Book Type:</label>
      <select
        name='bookType'
        value={filters.bookType}
        onChange={handleFilterChange}
        className='p-2 text-black'
      >
        <option value=''>All</option>
        <option value='fiction'>Fiction</option>
        <option value='non-fiction'>Non-Fiction</option>
      </select>
    </div>
  );
};

export default Filter;


