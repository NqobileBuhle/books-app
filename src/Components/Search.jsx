import React from 'react';

const Search = ({ term, searchKeyword }) => {
  const handleSearch = (e) => {
    searchKeyword(e.target.value);
  };
  

  return (
    <div className='my-4'>
      <input
        type='text'
        placeholder='Search for a  book...'
        className='p-2 w-[25] border border-gray-500 rounded'
        value={term}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

