import React, { useContext, useEffect, useState } from 'react'
import './Customer.css'
import CounterContext from '../../context/Context'
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";



function Customer() {
    const {postCustomer,customers,getCustomer}=useContext(CounterContext)
    const [update,setUptade]=useState(false)
    const [newcustomer,newSetCustomer]=useState({
        name : "",
        phone : "",
        email : "",
        address : "",
        city : ""
    })
    const inputChange = (e)=>{
        const {name,value}= e.target;
        newSetCustomer({...newcustomer,[name]:value})
    }
    

    console.log("Customer render")
    console.log(customers)
    useEffect(()=>{
        getCustomer()
    },[update])
    const sendNewCustomer= ()=>{
        postCustomer(newcustomer)
        newSetCustomer({
            name : "",
            phone : "",
            email : "",
            address : "",
            city : ""
        })
        setUptade(!update)
    }

  return (
    <div className='customer-container'>
        <h2>Müşteri Yönetimi</h2>
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
            <div  className='customer-list'>
                {customers?.map((customer)=>(
                    <div key={customer.id} className='customer-list-box'>
                        <div className='customer-info'>
                            <span >{customer.name}</span>
                            <span >{customer.email}</span>
                            <span >{customer.address}</span>
                            <span >{customer.city}</span>
                            <span >{customer.phone}</span>
                        </div>
                        <div className='customer-button'>
                            <button className='delete-customer'><AiOutlineDelete /></button>
                            <button className='delete-customer'><GrUpdate /></button>
                        </div>
                    </div>
                ))}
            </div>           
      </div>
        <div className='customer-add'>
            <h3>Müşteri Ekle</h3>
            <div className='customer-inputs'>
                <input type="text" placeholder='Müşteri Adı' name='name' value={newcustomer.name} onChange={inputChange}/>
                <input type="text" placeholder='Müşteri Email' name='email' value={newcustomer.email} onChange={inputChange}/>
                <input type="text" placeholder='Müşteri Adresi' name='address' value={newcustomer.address} onChange={inputChange}/>
                <input type="text" placeholder='Müşterinin Yaşadığı Şehir' name='city' value={newcustomer.city} onChange={inputChange}/>
                <input type='number' placeholder='Müşteri Telefonu' name='phone' value={newcustomer.phone} onChange={inputChange}/>
                <div className='send-button'>
                    <button onClick={sendNewCustomer}>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer
