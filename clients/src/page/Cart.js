import { useState, useEffect } from "react";
import '../style/Cart.css'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { Cartcontext } from "./Context";



function Cart({isModalOpen}) {

 
    const [values , setValues] = useState([]);
    const [id,setId] = useState()
    
    const [data,setData] = useState();
    
    
    const location = useLocation().state
    
    
      useEffect(() =>  {
    
        axios.get(`http://localhost:8080/api/product/${location}`).then((response) => {
          setValues(response.data)
       })
    
    } , [] )

    useEffect(() =>  {
    
      const storedState = localStorage.getItem("localStorageKey");
      setData(JSON.parse(storedState)) ;
  
  } , [data] )



    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;

    const total = state.reduce((total, values) => {
      return total + values.Price * values.quantityProduct;
    }, 0);


  
      
      
  return (
    <div className=" wrapper-cart">
      <div className=" shopping-cart">
        {data?.map(values => (
            <div className="shopping-checkout" >
              <img src={values.Images} alt="" />
              <p>{values.Name}</p>
              <p>{values.quantityProduct * values.Price}</p>

              <div className="quantity">

              <button
                onClick={() => {
                  if (values.quantityProduct < values.Quantity) {
                    dispatch({ type: "INCREASE", payload: { id: values._id } });
                  }
                }}
              >
                +
              </button>
                  
                <p>{values.quantityProduct} </p>

                <button
                  onClick={() => {
                    if (values.quantityProduct > 1) {
                      dispatch({ type: "DECREASE", payload: values });
                    } else {
                      dispatch({ type: "REMOVE", payload: values });
                    }
                  }}> -
                </button>
                
              </div>
              <h2 onClick={() => dispatch({ type: "REMOVE", payload: values })} className=" removebutt cursor-pointer">
                x
              </h2>
            </div>
        ))}
        {state.length > 0 && (
          <div className="total">
            <h2>{total}</h2>
          </div>
        )}
        <div className="check-button">
          <Link to ="Checkout" className="button text-white" > Checkout</Link>
        </div>


      </div>
    </div>  
  );

}
         
export default Cart ;
                        
