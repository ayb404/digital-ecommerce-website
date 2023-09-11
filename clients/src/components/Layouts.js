import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layouts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>  
  </>
  )
}

export default Layouts