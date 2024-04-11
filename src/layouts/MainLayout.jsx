import React from 'react'
import './MainLayout.scss'
import Navbar from '../Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
