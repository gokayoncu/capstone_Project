import React from 'react'
import './Customer.css'
import axios from 'axios'
import { useContext } from 'react'
import CounterContext from '../../context/Context'


function Customer() {
    console.log("Customer render")
    const{getDoctors}=useContext(CounterContext)
    
  
    let datass={
        name: "zeki",
        email: "gokay@admin.ch",
        address: "Apt 157",
        city: "Cehennem",
        phone: "+504 473 228 7743"
      }
    const push = ()=>{
        axios.post(import.meta.env.VITE_APP_BASEURL+"doctors",datass)
        .then(res=>(console.log(res)))
    }
    const down = ()=>{
        getDoctors()
    }
  return (
    <div className='customer-container'>
        <h2>Müşteri Yönetimi</h2>
        <button onClick={push}>dsadsasda</button>
        <button onClick={down}>check</button>
      <div className='customer-box'>
            <h3>Müşteri Listesi</h3>
            <div className='customer-filter'>
                <input type="text" placeholder='Müşteri Adı'/>
                <input type="email" placeholder='Müşteri Email'/>
                <input type="text" placeholder='Müşteri Adresi'/>
                <input type="text" placeholder='Müşterinin Yaşadığı Şehir'/>
                <input type='tel' placeholder='Müşteri Telefonu'/>
                <span>İşlemler</span>
            </div>
            <div className='customer-list'>
            
            </div>
      </div>
        <div className='customer-add'>
            <h3>Müşteri Ekle</h3>
            <input type="text" placeholder='Müşteri Adı'/>
            <input type="email" placeholder='Müşteri Email'/>
            <input type="text" placeholder='Müşteri Adresi'/>
            <input type="text" placeholder='Müşterinin Yaşadığı Şehir'/>
            <input type='tel' placeholder='Müşteri Telefonu'/>
        </div>
    </div>
  )
}

export default Customer
