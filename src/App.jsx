import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Team from './pages/Team/Team'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ROUTES from './routes'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.CONTACT} element={<Contact/>}/>
        <Route path={ROUTES.BLOG} element={<Blog/>}/>
        <Route path={ROUTES.TEAM} element={<Team/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}
