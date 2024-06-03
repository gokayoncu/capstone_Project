import React from 'react'
import Slider from "react-slick";
import './home.css'
import { NavLink } from 'react-router-dom';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight:true,
    arrows:true,
    autoplay:true,
    autoplaySpeed: 1500
  };
  return (    
  <div>
    <Slider {...settings} className='carousel'>
    <div className='carousel-box'>
      <img src="https://worldanimalfoundation.org/wp-content/uploads/2023/09/Cute-dogs.jpg" alt="" className='carousel-img'/>
      <div className='image-text'>
        <h2>Vet App Veteriner Kliğini</h2>
        <span>Sevimli dostlarımız için profesyonel hizmet</span>
      </div>
      <div className='opacity'></div>
    </div>
    <div className='carousel-box'>
      <img src="https://www.vetorium.com/upload/haberler/34/GaleriImg/operasyon-oncesi-bilgiler.jpg" alt="" className='carousel-img'/>
      <div className='image-text'>
        <h2>Güler Yüzlü Ekiplerimiz</h2>
      </div>
      <div className='opacity'></div>
    </div>
    <div className='carousel-box'>
      <img src="https://www.kurtkoymonavet.com/wp-content/uploads/2024/01/kurtkoy-veteriner-dogum-jinekoloji.webp" alt="" className='carousel-img'/>
      <div className='image-text'>
        <h2>Alanında Uzman Veterinerler</h2>
      </div>
      <div className='opacity'></div>
    </div>
    
  </Slider>
  </div>
    
  )
}

export default Home
