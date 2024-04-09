import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import { Navigate, Route, Routes } from 'react-router-dom'
import ROUTES from './routes'
import './App.css'
import ErrorPage from './pages/ErrorPage/ErrorPage'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path='*' element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
      <footer>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit exercitationem ullam molestias? Laboriosam, possimus eligendi officiis illum aut voluptas a.</p>
      </footer>
    </div>
  )
}
