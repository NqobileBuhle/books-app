import React,{useState,useEffect} from 'react'
import Booklist from './Components/Booklist'
 import Search from './Components/Search'
 import cover from '../src/Assets/cover.jpg'
 import Home from './Components/Home'


const App = () => {
  return (
    <div
    className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${cover})` }}>
        <Home/>
     
     
    </div>
  )
}

export default App

