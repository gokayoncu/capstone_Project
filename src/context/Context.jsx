import React, { useState } from 'react'
import { createContext} from "react";
import axios from 'axios'
const CounterContext = createContext();


export function CounterProvider({children}) {
  const [doctors,setDoctors]= useState([])
  const [customers,setCustomers]= useState()
  const[error,setError] = useState()
  const[succes,setSucces] = useState()
  const[deleteSucces,setDeleteSucces] = useState()
  const[deleteError,setDeleteError] = useState()
  const[updateSucces,setUpdateSucces] = useState()
  const[updateError,setUpdateError] = useState()
  
  // const getDoctors= async ()=>{
  //   await axios
  //     .get(import.meta.env.VITE_APP_BASEURL+"doctors")
  //     .then(res=>setDatas(res.data.content))
  // }

  // const postDoctor=async()=>{
  //   await axios
  //     .post(import.meta.env.VITE_APP_BASEURL+"doctors",{})
  //     .then(res=>(console.log(res)))
  // }
  

  const getCustomer= async ()=>{
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"customers");
      setCustomers(response.data.content)
    } catch (error) {
      setError(error.message)
      setSucces(false)
    }
    
  }

  
  const postCustomer = async (newcustomer)=>{
    try {
      await axios.post(import.meta.env.VITE_APP_BASEURL+"customers",newcustomer);
      setSucces("Müşteri Başarıyla Eklendi !")
      setTimeout(() => {
        setSucces()
      }, 1000);
    } catch (error) {
      setSucces(false)
      setError(error.message)
      setTimeout(() => {
        setSucces()
        setError()
      }, 1000);
    }
  }

  const deleteCustomer = async (id)=>{
    try {
      await axios.delete(import.meta.env.VITE_APP_BASEURL+"customers/"+id);
      setDeleteSucces("Müşteri Başarıyla Silindi !")
      setTimeout(() => {
        setDeleteSucces()
      }, 1500);
    } catch (error) {
      setDeleteSucces(false)
      setDeleteError(error.message)
      setTimeout(() => {
        setDeleteSucces()
        setDeleteError()
      }, 1500);
    }
  }
  const getIdCustomer= async (updateId,updateCustomer)=>{
    try {
      await axios.put(import.meta.env.VITE_APP_BASEURL+"customers/"+updateId, updateCustomer);
      setUpdateSucces("Müşteri Başarıyla Güncellendi !")
      setTimeout(() => {
        setUpdateSucces()
      }, 1500);
    } catch (error) {
      setUpdateError(error.message)
      setTimeout(() => {
        setUpdateError()
      }, 1500);
    }
    
  }
  

  const data ={
    doctors,
    postCustomer,
    getCustomer,
    customers,
    deleteCustomer,
    getIdCustomer,
    error,
    succes,
    deleteError,
    deleteSucces,
    updateSucces,
    updateError
  }

  return (
    <CounterContext.Provider 
        value={data}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContext;
