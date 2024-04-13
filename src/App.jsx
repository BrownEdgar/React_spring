import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import  Home from './pages/Home/Home'
import  About from './pages/About/About'
import  Products from './pages/Products/Products'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routes'
import './App.css'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import News from './pages/News/News'
import Contact from './pages/Contact/Contact'
import MainLayout from './layout/MainLayout'
import SingleCard from './SingleCard/SingleCards'

export default function () {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home/>} />
          <Route path={ROUTES.ABOUT} element={<About/>} />
          <Route path= {ROUTES.PRODUCTS} element={<Products/>} />
          <Route path= {ROUTES.NEWS} element={<News/>} />
          <Route path= {ROUTES.CONTACT} element={<Contact/>} />
          <Route path={ROUTES.SINGLECARDS} element={<SingleCard />} />
          <Route path= '*' element={<ErrorPage/>} />
        </Route>
        
        
      </Routes>
    </div>
  )
}
