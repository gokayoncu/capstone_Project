import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { MdPets } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { TbVaccine } from "react-icons/tb";

import './navbar.css'

function Navbar() {
  
  return (
    <nav className='navbar'>
        <div className='navigator'>
          <a href='/' style={{fontSize:20,display:'flex',alignItems:'center',gap:10}} ><MdPets style={{fontSize:28}}/> VETAPP</a>
          <NavLink to='/' className={'link home '}><IoHomeSharp style={{fontSize:22}}/><span className='home-span'>Home</span></NavLink>
          <NavLink to='/appointment' className={'link date'}><MdOutlineDateRange style={{fontSize:22}}/><span className='home-date'>Randevu</span></NavLink>
          <NavLink to='/report'className={'link report'}><TbReport style={{fontSize:22}}/><span className='home-report'>Rapor</span></NavLink>
          <NavLink to='/vaccination'className={'link vaccin'}><TbVaccine style={{fontSize:22}}/><span className='home-vaccin'>Aşı</span></NavLink>
          <div className='ball'></div>
        </div>
        <div className='navigation-plus'>
            <div className="tooltip-container">
              <div className="tooltip">
                <div className="profile">
                  <div className="user">
                    <div className="img">Ui</div>
                    <div className="details">
                      <div className="name">VetApp Klinik</div>
                      <div className="username">@vetapp</div>
                    </div>
                  </div>
                  <div className="about">800000+ Followers</div>
                </div>
              </div>
              <div className="text">
                <a className="icon" href="#">
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="instagramSVG">
                      <svg
                        fill="white"
                        className="svgIcon"
                        viewBox="0 0 448 512"
                        height="1.3rem"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="text">Instagram</div>
                </a>
              </div>
          </div>
          <div className="tooltip-containers">
            <div className="tooltips">
              <div className="profiles">
                <div className="users">
                  <div className="imgs">Fb</div>
                  <div className="detailss">
                    <div className="names">VetApp Klinik</div>
                    <div className="usernames">@vetapp</div>
                  </div>
                </div>
                <div className="about">50000+ Friends</div>
              </div>
            </div>
            <div className="texts">
              <a className="icons" href="#">
                <div className="layers">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="facebookSVG">
                    <svg
                      viewBox="0 0 40 40"
                      xmlSpace="preserve"
                      height="1.4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                        y2="407.5726"
                        y1="406.6018"
                        x2="-277.375"
                        x1="-277.375"
                        id="a"
                      >
                        <stop stopColor="#0062e0" offset="0"></stop>
                        <stop stopColor="#19afff" offset="1"></stop>
                      </linearGradient>
                      <path
                        d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                        fill="url(#a)"
                      ></path>
                      <path
                        d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="texts">Facebook</div>
              </a>
            </div>
          </div>
          <input type="checkbox" id='plus' name='open'  style={{display:'none'}}/>
          <div className='hidden-menu'>
            <div className='hidden-link '>
              <NavLink to='/customer' className={'customer'}> Müşteriler</NavLink>
              <NavLink to='/animals'className={'animals'} htmlFor='plus'>Hayvan</NavLink>
              <NavLink to='/doctor'className={'doctor'}>Doktor</NavLink>
            </div>
          </div>
      <div className='plus-menu'><label htmlFor="plus" ><FaPlus /></label></div>
        
    </div>      
    </nav>
  )
}

export default Navbar
