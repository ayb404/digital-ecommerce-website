import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import Layouts from './components/Layouts';
import Contact from './page/Contact';
import Checkout from './page/Checkout';
import Refundpolicy from './page/Refundpolicy';
import About from './page/About';
import FAQ from './page/FAQ';
import Productdetail from './page/Productdetail';
import Category from './page/Category';
import Cart from './page/Cart';
import { Context } from './page/Context';
import TermsAndConditions from './page/TermsAndConditions';






function App() {
const [scroll , setScroll ] = useState(0)

  window.onscroll = () => {
    setScroll(window.pageYOffset)
  }


const [isModalOpen , setIsModalOpen]  = useState(false)    

  return (
    <>
      <Context setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <BrowserRouter>
          <Routes>
              <Route path ="/" element = {<Layouts/>} >
                <Route index element = {<Home scroll={scroll}/>} />
                <Route path ="About" element = {<About scroll={scroll}/>} />
                <Route path="Contact" element = { <Contact scroll={scroll}/> }/>
                <Route path="Cart/Checkout" element = { <Checkout scroll={scroll}/> }/>
                <Route path="Refundpolicy" element = { <Refundpolicy scroll={scroll}/> }/>
                <Route path="FAQ" element = { <FAQ scroll={scroll}/> }/>
                <Route path="Category/productdetail/:id" element = { <Productdetail setIsModalOpen={setIsModalOpen}  isModalOpen={isModalOpen} scroll={scroll}/> }/>
                <Route path="Category" element = { <Category scroll={scroll}/> }/>
                <Route path="Cart" element = { <Cart isModalOpen={isModalOpen}  scroll={scroll}/> }/>
                <Route path="TermsAndConditions" element = { <TermsAndConditions scroll={scroll}/> }/>



              </Route>
          </Routes>
      </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
