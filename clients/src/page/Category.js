import React, { useState,useEffect } from "react";
import axios from 'axios';
import {AiFillStar} from "react-icons/ai"
import { Link } from 'react-router-dom'
import "../style/Category.css";



const CategoryPage = () => {

const [values , setValues] = useState([]);
const [cat , setCat] = useState('All')
const [quantity, setQuantity] = useState()
const [clicked , setClicked] = useState(2)


    useEffect(() =>  {

        axios.get(`http://localhost:8080/api/product?category=${cat}&quantity=${quantity}`).then((response) => {
          setValues(response.data)
       })

  } , [cat,quantity,clicked] )

console.log(values)

        // filter by time and price
  
    function handleOptionClick() {

      if (clicked === 'option1') {
        values.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));

      } else if (clicked === 'option2') {
        // Call function for option 2
        values.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));

      } 
    }

    handleOptionClick()


    // stars
  function RatingStars(props) {
    const { rating } = props;
  
    // Round the rating to the nearest 0.5
    const roundedRating = Math.round(rating * 2) / 2;
  
    // Create a string of stars based on the rounded rating
    const fullStars = '★'.repeat(Math.floor(roundedRating));
    const halfStar = (roundedRating % 1 !== 0) ? '½' : '';
    const emptyStars = '☆'.repeat(Math.floor(5 - roundedRating));
  
    // Concatenate the strings and return the result
    const ratingString = fullStars + halfStar + emptyStars;
  
    return <span>{ratingString}</span>;
  }

  return (
    
    <div>

        <div className="banner1">
         <img src="./image/banner.png"/>
        </div>
        <section className="wrappe-category">
            <div className="category2">
                <div className="shopbycategory">
                    <div className="category-title">
                        <h3>Shop By Categories</h3>
                    </div>
                    <div className="category-type">
                        <ul className="type">
                            <li onClick={() => setCat('Games')  } >Games</li>
                            <li onClick={() => setCat('Logiciel') } >Logiciel</li>
                            <li onClick={() =>  setCat('Abonnements') } >Abonnements</li>
                            <li onClick={() =>  setCat('Gift card') } >Gift card</li>
                        </ul>
                    </div>
                </div>
                <div className="shopbycategory">
                    <div className="category-title">
                        <h3 onClick={() => setClicked(3)}>Filter By</h3>
                    </div>
                    <div className="filter-type">
                        <h4>Availability</h4>
                    </div>
                    <div className="stock">
                        <label> <input type="radio" name="stock" onClick={() => setQuantity(1)}/>in stock</label>  
                        <label><input type="radio" name="stock" onClick={() => setQuantity(0)}/>out of stock</label>
                    </div>
                    <div className="filter-type">
                        <h4>Price</h4>
                    </div>
                    <div className="filter-price">
                    <label>$<input type="numbre" name="price" placeholder="From"/></label><label>$<input type="numbre" name="price" placeholder="to"/></label>
                    </div>
                </div>
            </div>
            <div className="filter-by-topselling">
                <select className="filterage" value={clicked} onChange={(e) =>  setClicked(e.target.value)}>
                    <option value="option1" >Price, low to hight</option>
                    <option value="option2">Price, hight to low </option>
                    <option>Date, old to new</option>
                    <option>Date, new to old</option>
                </select>
                <div className="filter-image">
                
                    { values.map(value => (

                    <div className="filter-product">
                        <div className='img-prod'> 
                        <Link to={`/Category/productdetail/:id`} state={value._id} ><img src={value.Images}/></Link>
                        </div>
               
                            <div className='discription'> 
                            <p>{value.Name}</p>
                                <div className='stars'>
                              
                                <h1> <RatingStars rating={value.rates}/></h1>
                                
                                </div>
                                <div className='text-white discription'>
                                    <p>{value.Description}</p>
                                    <h4 className='price'>{value.Price}</h4>
                                </div>
                            </div>
                    </div>
                    ))
                    }



                </div>
            </div>
            

        </section>
    </div>
  );
};

export default CategoryPage;
