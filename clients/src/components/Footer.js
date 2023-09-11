import React from 'react'
import { Link } from 'react-router-dom';
import {BsWhatsapp,BsTelegram} from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="All">
      <footer className="py-4">
        <div className = "cantainer-xxl">
          <div className = "row test d-flex justify-content-center">
            <div className = "col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <h2 className="mb-0 text-white"> sign Up for News letter</h2>  
              </div> 
            </div>
            <div className = "col-5">
              <div className="input-group ">
                <input type="text" 
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"/>
                <span className = "input-group-text p-2" id="basic-addon2">
                  Subscribe 
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className = "cantainer-xxl ">
              <div className = "row test">
                  <div className = "col-4">
                    <h4 className="text-white mb-5">Contact Us</h4>
                    <p className="text-white">contactus@gmail.com</p>
                    <div className='social_icons'>
                      <a className="text-white" href="">
                        <BsWhatsapp className="fs-4"/>
                      </a>
                      <a className="text-white" href="">
                        <BsTelegram className="fs-4"/>
                      </a>

                    </div>
                  </div>

                  <div className = "col-4">
                    <h4 className="text-white mb-4 text-decoration-none">information</h4>
                    <div className = "footer-link d-flex flex-column m-0">
                      <Link to="/Refundpolicy" className="text-white py-2 mb-1 text-decoration-none">Refund Policy</Link>
                      <Link to="/TermsAndConditions" className="text-white py-2 mb-1 text-decoration-none">Terms And Conditions</Link>
                    </div>
                  </div>

                  <div className = "col-4">
                    <h4 className="text-white mb-4 text-decoration-none">Account</h4>
                    <div className = "footer-link d-flex flex-column">
                      <Link to="/About" className="text-white py-2 mb-1 text-decoration-none">About Us</Link>
                      {/* <Link to="/FAQ" className="text-white py-2 mb-1 text-decoration-none">FAQ</Link> */}
                      <Link to="/Contact" className="text-white py-2 mb-1 text-decoration-none">Contact</Link>
                    </div>
                  </div>
                  
                </div>
          </div>
      </footer>
      <footer className="py-4">
      <div className = "cantainer-xxl">
            <div className = "row">
                <div className = "col-12">
                  <p className="text-center mb-0 text-white">
                      &copy;2023 powerd by Ayoub.
                  </p> 
                </div>
            </div>
        </div>
      </footer>
    </footer>
    </>
  )
}

export default Footer