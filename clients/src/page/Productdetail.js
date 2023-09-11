import { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import '../style/productdetail.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Cartcontext } from './Context';


function ProductDetail({isModalOpen , setIsModalOpen}) {

const [values , setValues] = useState([]);
const [id,setId] = useState()





const location = useLocation().state

  useEffect(() =>  {

    axios.get(`http://localhost:8080/api/product/${location}`).then((response) => {
      setValues(response.data)
   })

} , [] )


const Globalstate= useContext(Cartcontext);
const dispatch = Globalstate.dispatch;

console.log(values)




  const [selectedImage, setSelectedImage] = useState('image/p4.png');
  const [selectedNumber, setSelectedNumber] = useState(0);

  // function handleImageClick(imagePath) {
  //   setSelectedImage(imagePath);
  // }

  function handleIncrease() {
    setSelectedNumber(prevNumber => prevNumber + 1);
  }

  function handleDecrease() {
    setSelectedNumber(prevNumber => prevNumber > 0 ? prevNumber - 1 : prevNumber);
  }

  return (
    <section>

  

        <div className="container flex">
        <div className="left">
          <div className="main_image">
            <img src={values.Images} />
          </div>
        </div>
        <div className='line-between'></div>
        <div className="right">
          <h3>{values.Name}</h3>
          <h4> <small>$</small>{values.Price} </h4>
          <p>{values.Description}. </p>
          
          {/* <h5>Number of items : <span id="number" >{selectedNumber}</span></h5>
          <div className="add flex1">
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
          </div> */}
          <button onClick={()=>{  if(isModalOpen == true) {

                  }
 ; dispatch({type:'ADD', payload:values})} }className="butto">Add to cart</button>
        </div>
      </div>
     { isModalOpen &&
      <div className='popup' >
          <span onClick={() => setIsModalOpen(false) } > this product in not available</span>
           
      </div>}
    </section>
     
  );
}
export default ProductDetail;
