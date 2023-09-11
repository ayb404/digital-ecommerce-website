import React, { useContext, useState, useEffect } from 'react';


import '../style/Checkout.css';
import axios from 'axios';
import { Cartcontext } from "./Context";
import { createorder, createorderFaillure, createorderSuccess } from '../contextApiorder/action';
import { orderContext } from '../contextApiorder/OrderC';

const CheckoutPage = () => {
 
  const [data,setData] = useState();

  useEffect(() =>  {
    
    const storedState = localStorage.getItem("localStorageKey");
    setData(JSON.parse(storedState)) ;

} , [data] )

console.log(data) ;


  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, values) => {
    return total + values.Price * values.quantityProduct;
  }, 0);



  const Names = []



  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/; // Regular expression to allow only numeric input

    if (input === '' || regex.test(input)) {
      setValue(input);
    }
  };




  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {

    setFormData({...formData , [e.target.name]:e.target.value , Totalprice : total , Product : Names });

    
  };
  console.log(formData)

  const createorder = async (quote , dispatch) =>  {
    // Send form data to the backend server
    
   
      try {
         await axios.post('http://localhost:8080/api/order', quote)
         dispatch(createorderSuccess());
  
      }catch(err) {
          dispatch(createorderFaillure());
      }
  
  }

  const dispatch1 = useContext(orderContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createorder(formData,dispatch)
  }


  
  data?.map((val) => {
    Names.push(val.Name)
  })


  return (
    <div className='wrapper-checkout'>
      <div className="checkout-container">
      <form >
        <div className="checkout-form">
          <h2 className="form-title">User Details</h2>
          <div className='line-space'></div>
          
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name='FirstName' value={formData.FirstName} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name='LastName' value={formData.LastName} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input name="Email" type="email" id="email"  value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Phone number:</label>
            <input name="phone" type="number" id="phone"  value={formData.phone} onChange={ handleInputChange}/>
          </div>
          
        </div>
        <div className="ordered-products">
          <h2 className="products-title">Ordered Products</h2>
          <ul className="products-list">
            {data?.map(values => (
              <li >
                <span className="product-name" name="Product" value={formData.Product} onChange={ handleInputChange}>{values.Name}</span>
                <span>{values.quantityProduct} </span>
                <span className="product-price">${values.quantityProduct * values.Price}</span>
                
              </li>
            ))}
          </ul>
          {state.length > 0 && ( 
          <div className="total-amount">
            <span className="total-label">Total:</span>
            <span className="total-price" name='Totalprice'>${total}</span>

          </div>
          )}
        </div>
        <button className="button" onClick={handleSubmit}>Place Order</button>
      </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
