import React, { useContext, useState } from 'react';
import axios from 'axios';
import '../style/contact.css';
import { ContextContact } from '../contextApi/Contextcontact';
import { createcontact, createcontactFaillure, createcontactSuccess } from '../contextApi/Action';

const Contact = () => {

    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {

      setFormData({...formData , [e.target.name]:e.target.value});
    };
    console.log(formData)

    
    const createcontact1 = async (quote , dispatch) =>  {
      // Send form data to the backend server
      
     
        try {
           await axios.post('http://localhost:8080/api/contact', quote)
           dispatch(createcontactSuccess());
    
        }catch(err) {
            dispatch(createcontactFaillure());
        }
    
    }

    const dispatch = useContext(ContextContact)
    console.log(dispatch)

    const handleSubmit = (e) => {
      e.preventDefault()
      createcontact1(formData,dispatch)
    }







  return (
    <>
      <section className="contact">
        <div className="contact-form">
          <h1>Contact<span className='spa'>Us</span></h1>
          <p>You can ask us any question.<br/> Connect with us via phone: +212706301170 or email: admin@gmail.com</p>

          <form >
            <input name='Name' type="text" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
            <input name="Email" type="email" id="email"  value={formData.email} onChange={handleInputChange} placeholder="e-mail" required/>
            <input name="Subject" type="" placeholder="Write a subject" value={formData.subject} onChange={handleInputChange} required/>
            <textarea id="message" name="Message" value={formData.message} onChange={handleInputChange} cols="39" rows="10" placeholder="Your Message" required></textarea>
            <input onClick={handleSubmit} type="submit" name="" value="submit" className="btn"/>
          </form>

        </div>
        <div className="contact-img">
          <img src="./image/contact.png" alt=''/>
          
        </div>
	    </section>
    </>
  )
}

export default Contact