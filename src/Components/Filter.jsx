import React from 'react';

const Filter = ({ filters, handleFilterChange }) => {
  const bookTypes = [
    { label: 'Filter', value: '' },
    { label: 'Fiction', value: 'fiction' },
    { label: 'Non-Fiction', value: 'non-fiction' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Science Fiction', value: 'science fiction' },
    { label: 'Mystery', value: 'mystery' },
    { label: 'Romance', value: 'romance' },
    { label: 'Thriller', value: 'thriller' },
    { label: 'Horror', value: 'horror' },
    { label: 'Historical', value: 'historical' },
    { label: 'Biography', value: 'biography' },
    { label: 'Self-Help', value: 'self-help' },
    { label: 'Children', value: 'children' },
  ];

  return (
    <div className='my-4 flex flex-col items-center md:flex-row md:justify-center'>
      <label className='mr-2 text-black mb-2 md:mb-0'>Book Type:</label>
      <select
        name='bookType'
        value={filters.bookType}
        onChange={handleFilterChange}
        className='p-2 text-black rounded border border-gray-300 md:ml-2 w-[200px]'
      >
        {bookTypes.map((type, index) => (
          <option key={index} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;



