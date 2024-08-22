import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

const Home = () => {
  return (
    
    <div>
        <header>
      <Navbar/>
      <div className='flex  flex-col flex-center text-center text-white'>
        <h2 className='text-capitalize text-left'>find your book of choice.</h2>
        <br />
        
        <div></div>
        <p className='fs-18 fw-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est libero ab ipsum alias doloribus laboriosam temporibus asperiores omnis sapiente sit. 
            Suscipit, nostrum veniam necessitatibus 
            quisquam aspernatur nam labore corporis illo. </p>
            <Search/>
      </div>
      </header>
    </div>
  )
}

export default Home
