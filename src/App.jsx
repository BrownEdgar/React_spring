import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routes'
import { Home, Blog, Contact, ErrorPage, Team, SingleBlog, Products, } from './pages'
import MainLayout from './layouts/MainLayout'
import SingleProducts from './pages/SingleProducts/SingleProducts'

export default function App() {

  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path={ROUTES.CONTACT} element={<Contact/>}/>
          <Route path={ROUTES.BLOG} element={<Blog/>}/>
          <Route path={ROUTES.SINGLEBLOG} element={<SingleBlog/>}/>
          <Route path={ROUTES.TEAM} element={<Team/>}/>
          <Route path={ROUTES.PRODUCTS} element={<Products/>}/>
          <Route path={ROUTES.SINGLEPRODUCTS} element={<SingleProducts/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}
