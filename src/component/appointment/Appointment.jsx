import React, { useContext, useEffect, useState } from 'react'
import CounterContext from '../../context/Context'
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import './appointment.css'
import axios from 'axios';


function Appointment() {
  const [update,setUptade]=useState(false)
  const {doctors,animals,deleteError,error,succes,deleteSucces,updateError,updateSucces,postAppointment,getAppointmentAllData,appointmentAll,deleteAppointment,putAppointmentData,getAllAvailableDate,setSucces,setError}=useContext(CounterContext)
  const [appointupdate,setappointUpdate]=useState(false)
  
  const [appointmentData,setAppointmentData] = useState({
    appointmentDate: "",
    doctor: {},
    animal: {}})
  const [appointmentUpdateData,setAppointmentUpdateData] = useState({
    appointmentDate: "",
    doctor: {},
    animal: {}}
  )
  const [appointmentSearchData,setAppointmentSearchData] = useState({
    startDay: "",
    endDay:"",
    doctor:""
  })
  const [appointmentSearchAnimal,setAppointmentSearchAnimal] = useState({
    startDay: "",
    endDay:"",
    animal:""
  })
  const handleAppointmentSearchAnimal = (e)=>{
    const { name, value } = e.target;
    console.log(name,value)
    const obj = animals.find((animal)=>animal.name === value)
    setAppointmentSearchAnimal({...appointmentSearchAnimal, animal:obj})
  }
  const handleAppointmenAnimalDay= (e)=>{
    const{name,value}= e.target;
    setAppointmentSearchAnimal({...appointmentSearchAnimal,[name]:value})
  }
  const handleAppointmenAnimalEndDay= (e)=>{
    const{name,value}= e.target;
    setAppointmentSearchAnimal({...appointmentSearchAnimal,[name]:value})
  } 
  
  const [searchAppointment,setSearchAppointment]= useState()
  const handleAppointmenDay= (e)=>{
    const{name,value}= e.target;
    setAppointmentSearchData({...appointmentSearchData,[name]:value})
  }
  const handleAppointmenEndDay= (e)=>{
    const{name,value}= e.target;
    setAppointmentSearchData({...appointmentSearchData,[name]:value})
  }
  const handleAppointmentSearchDoctor = (e)=>{
    const { name, value } = e.target;
    const obj = doctors.find((doctor)=>doctor.name === value)
    setAppointmentSearchData({...appointmentSearchData, doctor:obj})
  } 
  const searchDoctorAppointment= async()=>{
    const res= await axios.get(import.meta.env.VITE_APP_BASEURL+`appointments/searchByDoctorAndDateRange?id=${appointmentSearchData.doctor.id}&startDate=${appointmentSearchData.startDay}&endDate=${appointmentSearchData.endDay}`,)    
    console.log(res.data.content)
    setSearchAppointment(res.data.content)
    setAppointmentSearchAnimal({
      startDay: "",
      endDay:"",
      animal:""
    })
  }
  const searchAnimalAppointment= async()=>{
    const res= await axios.get(import.meta.env.VITE_APP_BASEURL+`appointments/searchByAnimalAndDateRange?id=${appointmentSearchAnimal.animal.id}&startDate=${appointmentSearchAnimal.startDay}&endDate=${appointmentSearchAnimal.endDay}`,)    
    console.log(res.data.content)
    setSearchAppointment(res.data.content)
    setAppointmentSearchData({
      startDay: "",
      endDay:"",
      doctor:""
    })
  }
  useEffect(()=>{
    getAppointmentAllData()
  },[update])

  const handleAppointmenDate= (e)=>{
    const{name,value}= e.target;
    setAppointmentData({...appointmentData,[name]:value})
  }
  const handleAppointmenUpdateDate= (e)=>{
    const{name,value}= e.target;
    setAppointmentUpdateData({...appointmentUpdateData,[name]:value})
  }
  const handleAppointmentDoctor = (e)=>{
    const { name, value } = e.target;
    const obj = doctors.find((doctor)=>doctor.name === value)
    setAppointmentData({...appointmentData, [name]:obj}) // doctor alanı bir diziye atanmalı
  } 
  const handleAppointmentUpdateDoctor = (e)=>{
    const { name, value } = e.target;
    console.log(value)
    console.log(appointmentUpdateData)
    const obj = doctors.find((doctor)=>doctor.name === value)
    setAppointmentUpdateData({...appointmentUpdateData, [name]:obj}) // doctor alanı bir diziye atanmalı
}

const handleAppointmentAnimals = (e)=>{
    const { name, value } = e.target;
    const obj = animals.find((animal)=>animal.name === value)
    setAppointmentData({...appointmentData, [name]: obj}) // animal alanı bir diziye atanmalı
}
const handleAppointmentUpdateAnimals = (e)=>{
    const { name, value } = e.target;
    const obj = animals.find((animal)=>animal.name === value)
    setAppointmentUpdateData({...appointmentUpdateData, [name]: obj}) // animal alanı bir diziye atanmalı
}

  const refresh= ()=>{
    postAppointment(appointmentData)
    setAppointmentData({
      appointmentDate: "",
      doctor:"",
      animal: ""})
    setTimeout(() => {
      setUptade(!update)
    }, 1000);
  }  
  const ShowAll =()=>{
    setSearchAppointment()
    setUptade(!update)
  }
  const deleteClick= (id)=>{
    deleteAppointment(id)
    setTimeout(() => {
        setUptade(!update)        
    }, 500);
  }
  const handleAppointmentUpdate= async()=>{
    putAppointmentData(putId,appointmentUpdateData)
  }
  const updateAppoint=(id)=>{
    setPutId(id)
    setappointUpdate(true)
  }
  const [putId,setPutId]=useState()
  const exitUpdateInput = () => {
    setappointUpdate(false)
  }
  
  const exitError =()=>{
    setSucces()
    setError()
  }
  

  return (
    <div className='appointment-container'>
      <div className='appointment-management'>
      <h2>Randevu Yönetimi</h2>
        <div className='appointment-box'>
        {
          succes != undefined? succes ===false? <div className='message-error' style={{height:200}}>{error} {getAllAvailableDate?.map((date)=>(
            <ul key={date.id} className='error-list'>
                <li style={{marginTop:10}}>Doktor Adı: {date.doctor.name}  Müsait Günler: {date.workDay}</li>
            </ul>
          ))} <span className='exit' onClick={exitError}>X</span> </div> : <div className='message-succes'>{succes}</div>:null
        }
          <h3>Randevu Ekle</h3>
          <div className='appointment-add'>
            <input type="datetime-local" name='appointmentDate' onChange={handleAppointmenDate} value={appointmentData.appointmentDate || ""}/>
            {
              doctors?
              <select name="doctor" value={appointmentData.doctor.name || ""} onChange={handleAppointmentDoctor}>
                  <option value={""}>Doktor Seçin</option>
                  {
                      doctors?.map((doctors)=>(
                          <option key={doctors.id} value={doctors.name}>
                              {doctors.name}
                          </option>
                      ))
                  }
              </select>
              : null
            }
            {
              animals?
              <select name="animal" value={appointmentData.animal.name || ""} onChange={handleAppointmentAnimals}>
                  <option value={""}>Hayvan Seçin</option>
                  {
                      animals?.map((animala)=>(
                          <option key={animala.id} value={animala.name}>
                              {animala.name}
                          </option>
                      ))
                  }
              </select>
              : null
            }            
            <button style={{padding:0,width:120,paddingLeft:25,height:30}} onClick={refresh}>Ekle</button>
          </div>
          
          <h3>Doktora ve Tarihe Göre Randevu Ara</h3>
          <div className='search'>
            {
              doctors?
              <select name="doctor" value={appointmentSearchData.doctor.name || ""} onChange={handleAppointmentSearchDoctor}>
                  <option value={""}>Doktor Seçin</option>
                  {
                      doctors?.map((doctors)=>(
                          <option key={doctors.id} value={doctors.name}>
                              {doctors.name}
                          </option>
                      ))
                  }
              </select>
              : null
            }
            <input type="date" name='startDay' onChange={handleAppointmenDay} value={appointmentSearchData.startDay || ""} />
            <input type="date" name='endDay' onChange={handleAppointmenEndDay} value={appointmentSearchData.endDay || ""} />
            <button onClick={searchDoctorAppointment}>Arama Yap</button>
          </div>
          <h3>Hayvan Adına ve Tarihine Göre Randevu Arama</h3>
          <div className='search'>
          {
              animals?
              <select name='animal' value={appointmentSearchAnimal.animal.name || ""} onChange={handleAppointmentSearchAnimal}>
                  <option value={""}>Hayvan Seçin</option>
                  {
                      animals?.map((animal)=>(
                          <option key={animal.id} value={animal.name}>
                              {animal.name}
                          </option>
                      ))
                  }
              </select>
              : null
            }
            <input type="date" name='startDay' onChange={handleAppointmenAnimalDay} value={appointmentSearchAnimal.startDay || ""} />
            <input type="date" name='endDay' onChange={handleAppointmenAnimalEndDay} value={appointmentSearchAnimal.endDay || ""} />
            <button onClick={searchAnimalAppointment}>Arama Yap</button>
          </div>
          <button style={{width:180,marginLeft:550,paddingLeft:30,height:40}} onClick={ShowAll}>Hepsini Göster</button>
        </div>
        <div className='appointment-list' style={{paddingBottom:20}}>
          <h3 style={{fontSize:25,paddingTop:30,marginBottom:20}}>Randevu Listesi</h3>
          {deleteError? <p className='message-error' >{deleteError}</p> : null }
          {deleteSucces? <p className='message-succes' >{deleteSucces}</p> : null }
          {updateError? <p className='message-error'>{updateError}</p> : null }
          {updateSucces? <p className='message-succes'>{updateSucces}</p> : null }
          <div className='list-menu'>
            <span>Doktor</span>
            <span>Randevu Tarihi</span>
            <span>Müşteri</span>
            <span>Müşteri Telefonu</span>
            <span>Doktor Telefonu	</span>
            <span>İşlemler</span>
          </div>
          <div className='appointment-info'>
          {
            searchAppointment? searchAppointment.map((appointment)=>(
              <div key={appointment.id} className='customer-info'><span >{appointment.doctor.name}</span>
              <span >{appointment.appointmentDate}</span>
              <span >{appointment.animal.customer.name}</span>
              <span >{appointment.animal.customer.phone}</span>
              <span >{appointment.doctor.phone}</span>
              <div className='customer-button' style={{alignItems:'center',justifyContent:'center',width:200}}>
                 <button className='delete-customer' onClick={()=>deleteClick(appointment.id)}><AiOutlineDelete /></button>
                 <button className='update-customer' onClick={()=>updateAppoint(appointment.id)}><GrUpdate /></button>
              </div>
            </div>
            )):appointmentAll?.map((appoint)=>(
              <div className='customer-info' key={appoint.id}>
                <span >{appoint.doctor.name}</span>
                <span >{appoint.appointmentDate}</span>
                <span >{appoint.animal.customer.name}</span>
                <span >{appoint.animal.customer.phone}</span>
                <span >{appoint.doctor.phone}</span>
                <div className='customer-button' style={{alignItems:'center',justifyContent:'center',width:200}}>
                   <button className='delete-customer' onClick={()=>deleteClick(appoint.id)}><AiOutlineDelete /></button>
                   <button className='update-customer' onClick={()=>updateAppoint(appoint.id)}><GrUpdate /></button>
                </div>
              </div>
              
            ))
          }
          </div>
        </div>
      </div>
        {
          appointupdate===true?<div className='update-menu'>
            <div className='update-box'>
              <h3>Randevu Güncelle</h3>
              <span onClick={exitUpdateInput}>X</span>
              <input type="datetime-local" name='appointmentDate' value={appointmentUpdateData.appointmentDate || ""} onChange={handleAppointmenUpdateDate}/>           
          {
            doctors?
            <select name="doctor" value={appointmentUpdateData.doctor.name || ""} onChange={handleAppointmentUpdateDoctor}>
                <option value={""}>Doktor Seçin</option>
                {
                    doctors?.map((doctors)=>(
                        <option key={doctors.id} value={doctors.name}>
                            {doctors.name}
                        </option>
                    ))
                }
            </select>
            : null
          }
          {
            animals?
            <select name="animal" value={appointmentUpdateData.animal.name || ""} onChange={handleAppointmentUpdateAnimals}>
                <option value={""}>Hayvan Seçin</option>
                {
                    animals?.map((animala)=>(
                        <option key={animala.id} value={animala.name}>
                            {animala.name}
                        </option>
                    ))
                }
            </select>
            : null
            }  
          <button onClick={handleAppointmentUpdate}>Güncelle</button>
            </div>
        </div>:null
        }
    </div>
  )
}

export default Appointment
