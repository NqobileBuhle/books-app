import React,{useState,useEffect} from 'react'


const Search = ({term,searchKeyword}) => {
    function  handleSearch(e) {
        searchKeyword(e.target.value);
    }
  return (
    <>

      <input className='p-2 outline-none  border-b-2 border-black text-[20px]'
      type="text"
      value={term}
      placeholder='Enter a book name'
      onChange={handleSearch}
      ></input>
      
    </>
  )
}

export default Search
