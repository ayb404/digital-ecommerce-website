import React, { useRef, useState , useEffect} from 'react'
import '../style/Home.css'
import { Link } from 'react-router-dom'
// Import Swiper React components
import axios from 'axios';
import {AiFillStar} from "react-icons/ai"
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';



const Home = () => {


  const progressCircle = useRef(null);
const progressContent = useRef(null);

const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.current.style.setProperty('--progress', 1 - progress);
  progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
};




  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>

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



  <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      ></Swiper>


const location = useLocation().state

const [values , setValues] = useState([]);
const [cat , setCat] = useState('All')

    useEffect(() =>  {

        axios.get(`http://localhost:8080/api/product?category=${cat}`).then((response) => {
          setValues(response.data)
       })

  } , [cat] )


  const slides = [
    { id: 1, imageUrl: '../image/main-banner.png' , title:"EXPLORE THE BEST DIGITAL PRODUCTS YOU NEED"},
    { id: 2, imageUrl: '../image/main-banner-2.png' , title:"Best Shooting Game SHADOWGUN WAR GAMES"},
  ];

 

  return (
    <>

      <section className='Home-wrapper'>
        <div className='main'>
          <div style={{width:'30%'}} >
              <div className='categorie'>
                <i class="fas fa-bars"></i>
                <span className=''>Catégories</span>
              </div>

              <div className='list'>
                <span className='categorie-list text-white'> <a href='Category' className='text-white'> Games</a></span>
                <span className='categorie-list text-white'> <a href='Category' className='text-white'>Logiciels</a></span>
                <span className='categorie-list text-white'> <a href='Category' className='text-white'>Gift card</a></span>
                <span className='categorie-list text-white'> <a href='Category' className='text-white'>Abonnements</a></span>
                
              </div>
          </div>

              
           
            <div className='banner slider'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
      {
        slides.map(slide => (
          <SwiperSlide>
          <div style={{position:"relative" , width:"100%"}}>
            <img src={slide.imageUrl}/>
            <h3 >{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))
      }
       
       
        <div style={{display:"none"}} className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

            </div>

          



          
          
        </div>
        <div>
        <img className='guaranty' src='./image/guaranty.png' alt=''/>
        </div>
      </section>
      <section className='wrapper-2'>
        <div className='banners'>
          <div className='sub-banner-1'>
            <div className='sub-banner-1-img'>
              <img src='../image/sub-banner.png' alt=''/>
            </div>
            <div className='sub-discr'>
              <h4 className='title'>Best Action Game</h4><br/> 
              <h2> DEAD RISING <br/> ZOMBIES</h2>
              <div className='button'>
                <a href='Category' alt="" className='text-decoration-none text-white'>SHOP NOW</a>
              </div>
            </div>  
          </div>

          <div className='sub-banner-1'>
            <div className='sub-banner-1-img'>
              <img src='../image/sub-banner-2.png' alt=''/>
            </div>
            <div className='sub-discr'>
              <h4 className='title'>3D Pixel Racing</h4><br/>
              <h2> FAST DRIVE <br/> RACING</h2>
              <div className='button'>
                <a href='Category' alt="" className='text-decoration-none text-white'>SHOP NOW</a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <div className='wrapper-line'>
        <div className='special'>
          <h3 className='special text-white'>Special Category</h3>
        </div>
        <div className='line'></div>
      </div>
      <section className='wrapper-category'>
        <div className='category'>
          <div className='category-1'>
            <div className='category-img-1'>
              <img src='../image/category-img-1.png' alt=""/>
            </div>
            <div className='category-disc'>
              <p className='text-white'>Assassin creed</p>
              <a href='Category' className='href category-link text-decoration-none' >SHOP NOW</a>
            </div>
          </div>

          <div className='category-1'>
            <div className='category-img-1'>
              <img src='../image/category-img-2.jpg' alt=""/>
            </div>
            <div className='category-disc'>
              <p className='text-white'>Need for speed</p>
              <a href='Category' className='category-link'>SHOP NOW</a>
            </div>
          </div>

          <div className='category-1'>
            <div className='category-img-1'>
              <img src='../image/category-img-3.png' alt=""/>
            </div>
            <div className='category-disc'>
              <p className='text-white'>The witcher</p>
              <a href='Category' className='category-link' >SHOP NOW</a>
            </div>
          </div>

        </div>
        <div className='underline'></div>
      </section>
      <div className='wrapper-line'>
        <div className='special'>
          <h3 className='special text-white'>Our Products</h3>
        </div>
        <div className='line'></div>
      </div>
      <section className='wrapper-products'>
        <div className='collection-header'>
          <ul className='tabs'>
            <li><a href='' className='href href1 text-white text-decoration-none'>Featured</a></li>
            <li><a href='' className='href text-white text-decoration-none'>Bestseller</a></li>
            <li><a href='' className='href text-white text-decoration-none'>Special</a></li>
          </ul>
        </div>

        <div className='product-list'>

          { values.map(value => (
            
            <div className='product-1'>

              <div className='img-prod'> 
                <Link to={`/Category/productdetail/${value._id}`} state={value._id}><img src={value.Images}/> </Link>
              </div>

              <div className='discription'> 
                <div className='stars'>
                  <h1 className='text-warning'> <RatingStars rating={value.rates}/></h1>
                </div>

                <div className='text-white discription'>
                  <p>{value.Discription}</p>
                  <h4 className='price'>{value.Price}$</h4>
                </div>
            </div>
          </div>
          ))
          
          }

        </div>

          <div className='viewmore'>
            <a href='Category' className='btnn'>View More</a>
          </div>

      </section>
      <section className='comment-wrapper'>
      
              
          <div className='comments-move'>

          <Swiper className='swiper-list'
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 10,
          slideShadows: false,}}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        
          >
          <SwiperSlide >
            <div className='comments Swiper-Slide'>
              <div className='comment-image'>
                <div className='quote'><i className="fas fa-quote-right text-white"></i></div>
                <img className='imgcomment' src='../image/user1.jpg' alt='img1'/>
                
              </div>
              <div className='comment-name'>
               <span className='text-danger'> Mack Jeckno</span>
              </div>
              <div className='comment-text text-white'>
              It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='comments'>
              <div className='comment-image'>
                <div className='quote'><i className="fas fa-quote-right text-white"></i></div>
                <img className='imgcomment' src='../image/user-3.jpg' alt='img1'/>
              </div>
              <div className='comment-name'>
               <span className='text-danger'> Jecob Goeckno</span>
              </div>
              <div className='comment-text text-white'>
              It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className='comments'>
              <div className='comment-image'>
              <div className='quote'><i className="fas fa-quote-right text-white"></i></div>
                <img className='imgcomment' src='../image/user2.avif' alt='img2'/>
              </div>
              <div className='comment-name'>
               <span className='text-danger'> Luies Charls</span>
              </div>
              <div className='comment-text text-white'>
              It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at
              </div>
            </div>
            </SwiperSlide>
            </Swiper>
          </div>
      </section>

    </>
  )
}

export default Home