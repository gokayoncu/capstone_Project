import React, { useState } from 'react'
import { createContext} from "react";
import axios from 'axios'
const CounterContext = createContext();


export function CounterProvider({children}) {
  console.log("context render")
  const [doctors,setDoctors]= useState([])
  const [customers,setCustomers]= useState()


  
  const getDoctors= async ()=>{
    axios
      .get(import.meta.env.VITE_APP_BASEURL+"doctors")
      .then(res=>setDatas(res.data.content))
  }

  const postDoctor=async()=>{
    axios
      .post(import.meta.env.VITE_APP_BASEURL+"doctors",{})
      .then(res=>(console.log(res)))
  }

  const getCustomer= async ()=>{
    axios
      .get(import.meta.env.VITE_APP_BASEURL+"customers")
      .then(res=>setCustomers(res.data.content))
  }

  const postCustomer = async (newcustomer)=>{
    axios
      .post(import.meta.env.VITE_APP_BASEURL+"customers",newcustomer)
      .then(res=>(console.log(res)))
  }

  const data ={
    getDoctors,
    doctors,
    postDoctor,
    postCustomer,
    getCustomer,
    customers
  }

  return (
    <CounterContext.Provider 
        value={data}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContext;
