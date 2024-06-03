import React from 'react'
import './Customer.css'
import axios from 'axios'
function Customer() {
    console.log("Customer render")
    let datass={
        "name": "Gabrielle Fawdry",
        "email": "gfawdry0@admin.ch",
        "address": "Apt 153",
        "city": "Iralaya",
        "phone": "+504 473 228 7043"
      }
    const push = ()=>{
        axios.post("http://convenient-kristal-gokay-059f5b16.koyeb.app/api/v1/doctors",datass)
        .then(res=>(console.log(res)))
    }
  return (
    <div className='customer-container'>
        <h2>Müşteri Yönetimi</h2>
        <button onClick={push}>dsadsasda</button>
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
