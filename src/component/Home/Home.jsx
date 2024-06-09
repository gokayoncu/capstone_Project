import React from 'react'
import { NavLink } from 'react-router-dom';
import './home.css'

function Home() {
  
  return (    
  <div className='wrapper'>
    <div className='w-container'>
        <input className='home-input' type="radio" name='slide' id='c1' defaultChecked/>
        <label htmlFor="c1" className='card'>
            <div className='row'>
              <div className="icon">
                1
              </div>
              <div className="description">
                <NavLink to='/customer' ><span >Müşteri Yönetimi</span></NavLink>
                <span style={{paddingBottom:0}}>Yeni müşterilerin bilgilerini eklenmesi. Mevcut müşterilerin listelenmesi ve bilgilerini güncellenebileceğiniz sisteme ulaşmak için</span>
                <span style={{color:'red',paddingTop:0}}>Lütfen Başlığa Tıklayınız</span>
              </div>      
            </div>
        </label>
        <input className='home-input' type="radio" name='slide' id='c2' defaultChecked/>
        <label htmlFor="c2" className='card'>
            <div className='row'>
              <div className="icon">
                2
              </div>
              <div className="description">
                <NavLink to='/doctor' ><span >Doktor Yönetimi</span></NavLink>
                <span style={{paddingBottom:0}}>Yeni Doktor bilgilerini eklenmesi. Mevcut Doktor listelenmesi ve bilgilerini güncellenebileceğiniz sisteme ulaşmak için</span>
                <span style={{color:'red',paddingTop:0}}>Lütfen Başlığa Tıklayınız</span>
              </div>      
            </div>
        </label>
        <input className='home-input' type="radio" name='slide' id='c3' defaultChecked/>
        <label htmlFor="c3" className='card'>
            <div className='row'>
              <div className="icon">
                3
              </div>
              <div className="description">
                <NavLink to='/animals' ><span >Hayvan Yönetimi</span></NavLink>
                <span style={{paddingBottom:0}}>Yeni Hayvan bilgilerini eklenmesi. Mevcut Hayvan listelenmesi ve bilgilerini güncellenebileceğiniz sisteme ulaşmak için</span>
                <span style={{color:'red',paddingTop:0}}>Lütfen Başlığa Tıklayınız</span>
              </div>      
            </div>
        </label>
        <input className='home-input' type="radio" name='slide' id='c4' defaultChecked/>
        <label htmlFor="c4" className='card'>
            <div className='row'>
              <div className="icon">
                4
              </div>
              <div className="description">
                <NavLink to='/appointment' ><span >Randevu Yönetimi</span></NavLink>
                <span style={{paddingBottom:0}}>Yeni Randevu bilgilerini eklenmesi. Mevcut Randevu listelenmesi ve bilgilerini güncellenebileceğiniz sisteme ulaşmak için</span>
                <span style={{color:'red',paddingTop:0}}>Lütfen Başlığa Tıklayınız</span>
              </div>      
            </div>
        </label>
        <input className='home-input' type="radio" name='slide' id='c5' defaultChecked/>
        <label htmlFor="c5" className='card'>
            <div className='row'>
              <div className="icon">
                5
              </div>
              <div className="description">
                <NavLink to='/report' ><span >Rapor Yönetimi</span></NavLink>
                <span style={{paddingBottom:0}}>Yeni Rapor bilgilerini eklenmesi. Mevcut Rapor listelenmesi ve bilgilerini güncellenebileceğiniz sisteme ulaşmak için</span>
                <span style={{color:'red',paddingTop:0}}>Lütfen Başlığa Tıklayınız</span>
              </div>      
            </div>
        </label>
        <input className='home-input' type="radio" name='slide' id='c6' defaultChecked/>
        <label htmlFor="c6" className='card'>
            <div className='row'>
              <div className="icon">
                6
              </div>
              <div className="description">
                <NavLink to='/vaccination' ><span >Aşı Yönetimi</span></NavLink>
                <span style={{paddingBottom:0}}>Yeni Aşı bilgilerini eklenmesi. Mevcut Aşı listelenmesi ve bilgilerini güncellenebileceğiniz sisteme ulaşmak için</span>
                <span style={{color:'red',paddingTop:0}}>Lütfen Başlığa Tıklayınız</span>
              </div>      
            </div>
        </label>
    </div>    
  </div>
    
  )
}

export default Home
