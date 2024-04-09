import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import About from './components/About/About'
import News from './components/News/News'
import Contact from './components/Contact/Contact'
import './App.css'
export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
        </div>
  )
}
