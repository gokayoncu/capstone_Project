import React, { useState } from 'react'
import { createContext} from "react";
import axios from 'axios'
const CounterContext = createContext();


export function CounterProvider({children}) {
  const [datas,setDatas]= useState()
  console.log(datas)
  
  const getDoctors= async ()=>{
    axios
      .get(import.meta.env.VITE_APP_BASEURL+"doctors")
      .then(res=>setDatas(res))
      .then(res=>console.log(res))
  }
  const data ={
    getDoctors,
    datas
  }
  return (
    <CounterContext.Provider 
        value={data}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContext;
