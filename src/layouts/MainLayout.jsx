import React from 'react'
import './MainLayout.scss'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />


      <footer>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit exercitationem ullam molestias? Laboriosam, possimus eligendi officiis illum aut voluptas a.</p>
      </footer>
    </>
  )
}
