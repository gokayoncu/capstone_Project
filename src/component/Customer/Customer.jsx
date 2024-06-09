import React, { useContext, useEffect, useState } from 'react'
import CounterContext from '../../context/Context'
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import axios from 'axios';
import Animal from '../animal/Animal';



function Customer() {
    const [update,setUptade]=useState(false)
    const [putData,setPutData]=useState(false)
    const {postCustomer,customers,getCustomer,deleteCustomer,getIdCustomer,error,succes,deleteError,deleteSucces,updateError,updateSucces}=useContext(CounterContext)
    const[updateId,setUpdateId] = useState()
    const [searchCustomer,setSearchCustomer] = useState(null)
    const [searchError,setSearchError] = useState()
    const [searchSucces,setSearchSucces] = useState(false)
    
    const [newcustomer,newSetCustomer]=useState({
        name : "",
        phone : "",
        email : "",
        address : "",
        city : ""
    })
    const [updateCustomer,neSetUpdateCustomer]=useState({
        name : "",
        phone : "",
        email : "",
        address : "",
        city : ""
    })

    const [searchCustomers,neSetSearchCustomer]=useState({
        name : "",
    })
    const inputSearchChange= (e)=>{
        const {name,value}= e.target;
        neSetSearchCustomer({...searchCustomers,[name]:value})
    }

    const searchCustomerByName= async(names)=>{
        if(names.length>0){
            try {
                const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"customers/searchByName?name="+names);
                setSearchCustomer(response.data.content)
                console.log(response.data.content)
                if(response.data.content.length == 0){
                    setSearchError("Customer not found")
                    setTimeout(() => {
                        setSearchError()
                    }, 1000);
                    setSearchCustomer(null)
                }else{
                    setSearchSucces(true)
                    setTimeout(() => {
                        setSearchSucces(false)
                    }, 1000);
                }            
            } catch (error) {
                setSearchError(error.message)
                setTimeout(() => {
                    setSearchError()
                }, 1000);
            }
        }else{
            setSearchError("Lütfen Boş Aramayın")
            setTimeout(() => {
                setSearchError()
            }, 1000);
        }

    }
    
    const handleSearchByName = () =>{
        searchCustomerByName(searchCustomers.name.toLocaleLowerCase())
        neSetSearchCustomer({name:""})
        console.log(searchCustomer)
    }
    

    const handleShowAll = () =>{
        setSearchCustomer(null)
    }
    const inputChange = (e)=>{
        const {name,value}= e.target;
        const newValue= value.toLowerCase()
        newSetCustomer({...newcustomer,[name]:newValue})
    }
    
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
        setTimeout(() => {
            setUptade(!update)        
        }, 500);
    }
    const deleteClick= async(id)=>{
        await deleteCustomer(id)
        setTimeout(() => {
            setUptade(!update)        
        }, 500);
    }

    const inputUpdatCehange= (e) =>{
        const {name,value} = e.target;
        neSetUpdateCustomer((prev)=>({...prev,[name]: value}))
    }
    const handlePutClick= (customer)=>{
        setPutData(true)
        neSetUpdateCustomer({
            name : customer.name,
            phone : customer.phone,
            email : customer.email,
            address : customer.address,
            city : customer.city
        })
        setUpdateId(customer.id)
    }
    const exitUpdateInput = () => {
        setPutData(false)
    }
    const handleUpdateNewCustomer = () =>{
        getIdCustomer(updateId,updateCustomer)
        setTimeout(() => {
            setUptade(!update)
            setPutData(false)        
        }, 500);
        
    }
    
  return (
    <div className='customer-container'>
        <h2>Müşteri Yönetimi</h2>
      <div className='customer-box'>
            <h3>Müşteri Listesi</h3>
            {deleteError? <p className='message-error'>{deleteError}</p> : null }
            {deleteSucces? <p className='message-succes'>{deleteSucces}</p> : null }
            {updateError? <p className='message-error'>{updateError}</p> : null }
            {updateSucces? <p className='message-succes'>{updateSucces}</p> : null }
            <div className='customer-filter' style={{marginTop:15}}>
                <input type="text" placeholder='Müşteri Adı'/>
                <input type="email" placeholder='Müşteri Email'/>
                <input type="text" placeholder='Müşteri Adresi'/>
                <input type="text" placeholder='Müşterinin Yaşadığı Şehir'/>
                <input type='number' placeholder='Müşteri Telefonu'/>
                <span>İşlemler</span>
            </div>            
            <div  className='customer-list'>
                {
                    searchCustomer !=null ?searchCustomer.map((customer)=>(
                        <div key={customer.id} className='customer-list-box'>
                        <div className='customer-info'>
                            <span >{customer.name}</span>
                            <span >{customer.email}</span>
                            <span >{customer.address}</span>
                            <span >{customer.city}</span>
                            <span >{customer.phone}</span>
                        </div>
                        <div className='customer-button'>
                                <button className='delete-customer' onClick={()=>deleteClick(customer.id)}><AiOutlineDelete /></button>
                                <button className='update-customer' onClick={()=>handlePutClick(customer)}><GrUpdate /></button>
                        </div>                        
                    </div>
                    ))
                    :succes !=false?customers?.map((customer)=>(
                        <div key={customer.id} className='customer-list-box'>
                            <div className='customer-info'>
                                <span >{customer.name}</span>
                                <span >{customer.email}</span>
                                <span >{customer.address}</span>
                                <span >{customer.city}</span>
                                <span >{customer.phone}</span>
                            </div>
                            <div className='customer-button'>
                                <button className='delete-customer' onClick={()=>deleteClick(customer.id)}><AiOutlineDelete /></button>
                                <button className='update-customer' onClick={()=>handlePutClick(customer)}><GrUpdate /></button>
                            </div>
                        </div>
                    )): null
                }
            </div>           
        </div>
        <div className='customer-search-box' style={{marginLeft:480}}>
            <h3 style={{fontSize:26,marginBottom:25}}>Müşteri Arayın</h3>
            {searchSucces? searchSucces===true? <p className='message-succes' style={{marginBottom:20,paddingLeft:10,paddingTop:4}}>Arama Başarılı</p> : null:null }
            {searchError?<p className='message-error' style={{width:350,fontSize:20,paddingLeft:10,paddingTop:4,marginBottom:20}}>{searchError}</p> : null }
            <div className='customer-search'>
                <input type="text" placeholder='Müşteri Adı Giriniz' name='name' value={searchCustomers.name} onChange={inputSearchChange} required={true}/>
                <button onClick={handleSearchByName} style={{fontSize:16}}>Ara</button>
                <button onClick={handleShowAll} style={{fontSize:16}}>Müşterileri Göster</button>
            </div>
        </div>
        <div className='customer-add'>
            <h3>Müşteri Ekle</h3>
            {
                succes? succes ===false? <div className='message-error'>{error} </div> : <div className='message-succes'>{succes}</div>:null
            }
            <div className='customer-inputs'>
                <input type="text" placeholder='Müşteri Adı' name='name' value={newcustomer.name} onChange={inputChange}/>
                <input type="email" placeholder='Müşteri Email' name='email' value={newcustomer.email} onChange={inputChange}/>
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
        {
            putData === true? 
                <div className='update-menu'>
                    <span onClick={exitUpdateInput}>X</span>
                    <form >
                        <div className='newInput-box'>
                            <div>Müşteri Adı :</div>
                            <input type="text" name='name' value={updateCustomer.name}  onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Müşteri Maili :</div>
                            <input type="email" name='email' value={updateCustomer.email} onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Müşteri Adresi :</div>
                            <input type="text" name='address' value={updateCustomer.address} onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Müşteri Şehri :</div>
                            <input type="text" name='city' value={updateCustomer.city} onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Müşteri Telefonu :</div>
                            <input type='number' name='phone' value={updateCustomer.phone} onChange={inputUpdatCehange}/>
                        </div>
                        <a className='span-btn' onClick={handleUpdateNewCustomer}>Bilgileri Güncelle</a>
                    </form>
                </div> 
            : null
        }
    </div>
  )
}

export default Customer
