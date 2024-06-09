import React, { useState,useEffect } from 'react'
import { createContext} from "react";
import axios from 'axios'
const CounterContext = createContext();


export function CounterProvider({children}) {
  const [doctors,setDoctors]= useState([])
  const [customers,setCustomers]= useState()
  const [allReports,setAllReports]= useState()
  const [vaccinations,setvaccinations] = useState()
  const [appointmentAll,setAppointment]= useState()
  const [getAllAvailableDate,setavailableDate]= useState()
  const [animals,setAnimals]= useState()
  const[error,setError] = useState()
  const[succes,setSucces] = useState()
  const[deleteSucces,setDeleteSucces] = useState()
  const[deleteError,setDeleteError] = useState()
  const[updateSucces,setUpdateSucces] = useState()
  const[updateError,setUpdateError] = useState()
  
  useEffect(()=>{
    getAnimals()
    getDoctors()
    getAvailableDate()
    getCustomer()
    getAppointmentAllData()
    getReportsAllData()
    getVaccinations()
  },[])


  const getAnimals= async ()=>{
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"animals");
      setAnimals(response.data.content)
    } catch (error) {
      setError(error.message)
      setSucces(false)
    }
  }
  const postAnimal = async (newAnimal)=>{
    try {
      await axios.post(import.meta.env.VITE_APP_BASEURL+"animals",newAnimal);
      setSucces("Hayvan Başarıyla Eklendi !")
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
  const deleteAnimals = async (id)=>{
    try {
      await axios.delete(import.meta.env.VITE_APP_BASEURL+"animals/"+id);
      setDeleteSucces("Animal Başarıyla Silindi !")
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

  const getIdAnimal= async (updateId,updateAnimal)=>{
    try {
      await axios.put(import.meta.env.VITE_APP_BASEURL+"animals/"+updateId, updateAnimal);
      setUpdateSucces("Hayvan Başarıyla Güncellendi !")
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

  const getDoctors= async ()=>{
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"doctors");
      setDoctors(response.data.content)
    } catch (error) {
      setError(error.message)
      setSucces(false)
    }
  }

  const postDoctor = async (newDoctor)=>{
    try {
      await axios.post(import.meta.env.VITE_APP_BASEURL+"doctors",newDoctor);
      setSucces("Doktor Başarıyla Eklendi !")
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

  const getIdDoctor= async (updateId,updateDoctor)=>{
    try {
      await axios.put(import.meta.env.VITE_APP_BASEURL+"doctors/"+updateId, updateDoctor);
      setUpdateSucces("Doktor Başarıyla Güncellendi !")
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
  const deleteDoctor = async (id)=>{
    try {
      await axios.delete(import.meta.env.VITE_APP_BASEURL+"doctors/"+id);
      setDeleteSucces("Doktor Başarıyla Silindi !")
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

  const postAvailableDate = async (newDate)=>{
    try {
      await axios.post(import.meta.env.VITE_APP_BASEURL+"available-dates",newDate);
      setSucces("Gün Başarıyla Eklendi !")
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
  const getAvailableDate= async ()=>{
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"available-dates");
      setavailableDate(response.data.content)
    } catch (error) {
      setError(error.message)
      setSucces(false)
    }
  }

  const deleteAvailableDate = async (id)=>{
    try {
      await axios.delete(import.meta.env.VITE_APP_BASEURL+"available-dates/"+id);
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

  const getAppointmentAllData= async ()=>{
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"appointments");
      setAppointment(response.data.content)
    } catch (error) {
      setError(error.message)
      setSucces(false)
    }
  }
  
  const postAppointment = async (appointmentData)=>{
    try {
      await axios.post(import.meta.env.VITE_APP_BASEURL+"appointments", appointmentData);
      console.log("başarılı")
      setSucces("Appointment Başarıyla Eklendi !")
      setTimeout(() => {
        setSucces()
      }, 1000);
    } catch (error) {
      console.log(error)
      setSucces(false)
      setError(error.message)
      setTimeout(() => {
        setSucces()
        setError()
      }, 4000);
    }
  }
  const deleteAppointment = async (id)=>{
    try {
      await axios.delete(import.meta.env.VITE_APP_BASEURL+"appointments/"+id);
      setDeleteSucces("Randevu Başarıyla Silindi !")
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
  const putAppointmentData= async(putId,appointmentUpdateData)=>{
    console.log(putId,appointmentUpdateData)
    try {
      await axios.put(import.meta.env.VITE_APP_BASEURL+"appointments/"+putId, appointmentUpdateData);
      console.log("başarılı")
      setUpdateSucces("Randevu Başarıyla Güncellendi !")
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

  const getReportsAllData= async ()=>{
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"reports");
      setAllReports(response.data.content)
    } catch (error) {
      setError(error.message)
      setSucces(false)
    }
  }
  const postReports = async (postReport)=>{
    try {
      await axios.post(import.meta.env.VITE_APP_BASEURL+"reports", postReport);
      console.log("başarılı")
      setSucces("Rapor Başarıyla Eklendi !")
      setTimeout(() => {
        setSucces()
      }, 1000);
    } catch (error) {
      console.log(error)
      setSucces(false)
      setError(error.message)
      setTimeout(() => {
        setSucces()
        setError()
      }, 4000);
    }
  }
  const deleteReports = async (id)=>{
    try {
      await axios.delete(import.meta.env.VITE_APP_BASEURL+"reports/"+id);
      setDeleteSucces("Rapor Başarıyla Silindi !")
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
  const putReport= async(updateId,postUpdateReport)=>{
    console.log(updateId,postUpdateReport)
    try {
      await axios.put(import.meta.env.VITE_APP_BASEURL+"reports/"+updateId, postUpdateReport);
      console.log("başarılı")
      setUpdateSucces("Hayvan Başarıyla Güncellendi !")
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
  const getVaccinations= async ()=>{
    try {
      const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"vaccinations");
      setvaccinations(response.data.content)
    } catch (error) {
      setError(error.message)
      setSucces(false)
    }
  }
  const postVaccinations = async (postVaccine)=>{
    try {
      await axios.post(import.meta.env.VITE_APP_BASEURL+"vaccinations", postVaccine);
      console.log("başarılı")
      setSucces("Aşı Başarıyla Eklendi !")
      setTimeout(() => {
        setSucces()
      }, 1000);
    } catch (error) {
      console.log(error)
      setSucces(false)
      setError(error.message)
      setTimeout(() => {
        setSucces()
        setError()
      }, 4000);
    }
  }
  const deleteVaccine = async (id)=>{
    try {
      await axios.delete(import.meta.env.VITE_APP_BASEURL+"vaccinations/"+id);
      setDeleteSucces("Aşı Başarıyla Silindi !")
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
  const putVaccine= async(updateId,updateVaccine)=>{
    console.log(updateId,updateVaccine)
    try {
      await axios.put(import.meta.env.VITE_APP_BASEURL+"vaccinations/"+updateId, updateVaccine);
      console.log("başarılı")
      setUpdateSucces("Aşı Başarıyla Güncellendi !")
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
    updateError,
    getDoctors,
    postDoctor,
    getIdDoctor,
    deleteDoctor,
    animals,
    getAnimals,
    postAnimal,
    deleteAnimals,
    getIdAnimal,
    postAvailableDate,
    getAvailableDate,
    getAllAvailableDate,
    deleteAvailableDate,
    postAppointment,
    getAppointmentAllData,
    appointmentAll,
    deleteAppointment,
    putAppointmentData,
    setSucces,
    setError,
    postReports,
    allReports,
    deleteReports,
    getReportsAllData,
    putReport,
    postVaccinations,
    getVaccinations,
    vaccinations,
    deleteVaccine,
    putVaccine
  }

  return (
    <CounterContext.Provider 
        value={data}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContext;
