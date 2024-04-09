import React from 'react'

import { Home, About, Contact, ErrorPage, Blog, SingleBlog } from './pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import ROUTES from './routes'

import './App.css'
import MainLayout from './layouts/MainLayout'

export default function App() {

  return (
    <div className='App'>

      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.SINGLEBLOG} element={<SingleBlog />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path='*' element={<Navigate to={ROUTES.HOME} />} />
        </Route>

      </Routes>

    </div>
  )
}
