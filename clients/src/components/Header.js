import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Header.css'
import axios from 'axios'
import { useContext } from 'react'
import { Cartcontext } from '../page/Context'

const Header = () => {

  const [render , setRender] = useState()


  const Globalstate1 = useContext(Cartcontext);
  const dispatch1 = Globalstate1;
  
  useEffect(() => {
    const localStorageData = localStorage.getItem('localStorageKey');
      const parsedData = JSON.parse(localStorageData);
      setRender(parsedData.length);
  }, [dispatch1]);


  return (
    <>
    <header>
      <div className = "cantainer -xxl">
          <div className = "row">
              <div className = "col">
                <p className = "d-flex justify-content-center text-white mb-0"> Profitez de la meilleur Service Premium</p>
              </div>
          </div>
      </div>
      <div className = "cantainer-header">         
        <div className = "menu" style={{position:""}}>
          <div className="logo">
            <img src="./image/digipro.png" alt='' className='logoimg'/>
          </div>

          <div className = "nav">
            <NavLink className="na text-white text-decoration-none" to="/">Home</NavLink>
            {/* <Link className="na text-white text-decoration-none" to="pack" spy={true} duration={500}></Link> */}
            <NavLink className="na text-white text-decoration-none" to="/Contact">Contact</NavLink>
            <NavLink className="na text-white text-decoration-none" to="/About">About</NavLink>
            <div className='d-flex align-items-center gap-2 text-white'>
            <Link to="Cart"><i class="fas fa-shopping-bag text-white"></i>({render})</Link>
            {/* <li className="butt ">
                <a href="" className="nav-link text-white">Se connecter</a>
            </li> */}
            </div> 
          </div>
        </div>
      </div>
    </header>
    
    </>
  )
}

export default Header