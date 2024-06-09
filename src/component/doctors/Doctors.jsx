import React, { useContext, useEffect, useState } from 'react'
import CounterContext from '../../context/Context'
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import axios from 'axios';



function Doctors() {
    const [update,setUptade]=useState(false)
    const [putData,setPutData]=useState(false)
    const {doctors,getDoctors,postDoctor,deleteDoctor,getIdDoctor,error,succes,deleteError,deleteSucces,updateError,updateSucces,postAvailableDate,getAvailableDate,getAllAvailableDate,deleteAvailableDate}=useContext(CounterContext)
    const[updateId,setUpdateId] = useState()
    const [searchDoctors,setSearchDoctors] = useState(null)
    const [searchError,setSearchError] = useState()
    const [searchSucces,setSearchSucces] = useState()
    const [searchDay,setSearchDay] = useState(null)
    const [newDoctor,newSetDoctor]=useState({
        name : "",
        phone : "",
        email : "",
        address : "",
        city : ""
    })
    const [updateDoctor,neSetUpdateDoctor]=useState({
        name : "",
        phone : "",
        email : "",
        address : "",
        city : ""
    })
    const [availableDate,setAvailableDate] = useState({
        workDay:"",
        doctorId:0
    })
    const [searcInput,setSeacrhInput] = useState({
        workDay : "",
    })

        
    const inputChange = (e)=>{
        const {name,value}= e.target;
        newSetDoctor({...newDoctor,[name]:value})
    }
    
    
    useEffect(()=>{
        getDoctors()
        getAvailableDate()
    },[update])

    const sendNewDoctor= ()=>{
        postDoctor(newDoctor)
        newSetDoctor({
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
        await deleteDoctor(id)
        setTimeout(() => {
            setUptade(!update)        
        }, 500);
    }
    const deleteDateClick = (id)=>{
        deleteAvailableDate(id)
        setTimeout(() => {
            setUptade(!update)        
        }, 500);
    }

    const inputUpdatChange= (e) =>{
        const {name,value} = e.target;
        neSetUpdateDoctor((prev)=>({...prev,[name]: value}))
    }
    const handlePutClick= (doctor)=>{
        setPutData(true)
        neSetUpdateDoctor({
            name : doctor.name,
            phone : doctor.phone,
            email : doctor.email,
            address : doctor.address,
            city : doctor.city
        })
        setUpdateId(doctor.id)
    }
    const exitUpdateInput = () => {
        setPutData(false)
    }
    const handleUpdateNewDoctor = () =>{
        getIdDoctor(updateId,updateDoctor)
        setTimeout(() => {
            setUptade(!update)
            setPutData(false)        
        }, 500);
        
    }
    const handleUpdateSelectChange= (e)=>{
        const{name,value}= e.target;
        setAvailableDate({...availableDate,doctorId:value})
    }
    const addDate = (e) =>{
        const{value}= e.target;
        setAvailableDate({...availableDate,workDay:value})
    }
    const handleAddAvailableByName = ()=>{
        postAvailableDate(availableDate)
        setAvailableDate({
            workDay:"",
            doctorId:""
        })
        setTimeout(() => {
            setUptade(!update) 
        }, 500);
    }
    const handleShowAll=()=>{
        setSearchDay()
        setSeacrhInput({
            workDay:""
        })
        setUptade(!update)
    }

    const handleSelectChange= (e)=>{
        const{name,value}= e.target;
        setSeacrhInput({...availableDate,workDay:value})
        const obj = getAllAvailableDate.filter((date)=>date.workDay === value)
        if(obj.length>0){
            setSearchDay(obj)  
            setSearchSucces("Arama Başarılı")      
            setTimeout(() => {
                setSearchSucces()
            }, 1000);
        }else{
            setSearchError("Müsait Gün Yok")
            setTimeout(() => {
                setSearchError()
            }, 1000);
            setSeacrhInput({
                workDay:""
            })
        }      
    }
    

  return (
    <div className='customer-container'>
        <h2>Doktor Yönetimi</h2>
      <div className='customer-box'>
            <h3>Doktor Listesi</h3>
            {deleteError? <p className='message-error' style={{marginBottom:20}}>{deleteError}</p> : null }
            {deleteSucces? <p className='message-succes' style={{marginBottom:20}}>{deleteSucces}</p> : null }
            {updateError? <p className='message-error'>{updateError}</p> : null }
            {updateSucces? <p className='message-succes'>{updateSucces}</p> : null }
            <div className='customer-filter' style={{marginTop:15,}}>
                <input type="text" placeholder='Doktor Adı' style={{width:290}}/>
                <input type="email" placeholder='Doktor Email'style={{width:290}}/>
                <input type="text" placeholder='Doktor Adresi'style={{width:290}}/>
                <input type="text" placeholder='Doktorun Yaşadığı Şehir'style={{width:290}}/>
                <input type='number' placeholder='Doktor Telefonu'style={{width:290}}/>
                <span style={{width:150,paddingLeft:16}}>İşlemler</span>
            </div>            
            <div  className='customer-list'>
                {
                    searchDoctors !=null ?searchDoctors.map((doctor)=>(
                        <div key={doctor.id} className='customer-list-box'>
                        <div className='customer-info'>
                            <span >{doctor.name}</span>
                            <span >{doctor.email}</span>
                            <span >{doctor.address}</span>
                            <span >{doctor.city}</span>
                            <span >{doctor.phone}</span>
                        </div>
                        <div className='customer-button'>
                                <button className='delete-customer' onClick={()=>deleteClick(doctor.id)}><AiOutlineDelete /></button>
                                <button className='update-customer' onClick={()=>handlePutClick(doctor)}><GrUpdate /></button>
                        </div>                        
                    </div>
                    ))
                    :succes !=false?doctors?.map((doctor)=>(
                        <div key={doctor.id} className='customer-list-box'>
                            <div className='customer-info'>
                                <span >{doctor.name}</span>
                                <span >{doctor.email}</span>
                                <span >{doctor.address}</span>
                                <span >{doctor.city}</span>
                                <span >{doctor.phone}</span>
                            </div>
                            <div className='customer-button'>
                                <button className='delete-customer' onClick={()=>deleteClick(doctor.id)} ><AiOutlineDelete /></button>
                                <button className='update-customer' onClick={()=>handlePutClick(doctor)} ><GrUpdate /></button>
                            </div>
                        </div>
                    )): null
                }
            </div>           
      </div>
      <div className='customer-add'>
            <h3>Doktor Ekle</h3>
            {
                succes != undefined? succes ===false? <div className='message-error'>{error} </div> : <div className='message-succes'>{succes}</div>:null
            }
            <div className='customer-inputs'>
                <input type="text" placeholder='Doktor Adı' name='name' value={newDoctor.name} onChange={inputChange}/>
                <input type="email" placeholder='Doktor Email' name='email' value={newDoctor.email} onChange={inputChange}/>
                <input type="text" placeholder='Doktor Adresi' name='address' value={newDoctor.address} onChange={inputChange}/>
                <input type="text" placeholder='Doktor Yaşadığı Şehir' name='city' value={newDoctor.city} onChange={inputChange}/>
                <input type='number' placeholder='Doktor Telefonu' name='phone' value={newDoctor.phone} onChange={inputChange}/>
                <div className='send-button'>
                    <button onClick={sendNewDoctor} style={{height:30,width:110}}>
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
                        <span >Send</span>
                    </button>
                </div>
            </div>
      </div>
      <div className='available-date'>

        <div style={{display:'flex',justifyContent:'center'}}>
                <div className='customer-search-box'>
                    <h3 style={{fontSize:26,marginBottom:25}}>Kullanılabilir  Tarih Ara</h3>
                    <div className='customer-search'>
                        <input type="date" name='workDay' value={searcInput.workDay || ""} onChange={handleSelectChange}/>
                        <button onClick={handleShowAll} style={{fontSize:16}}>Hepsini Göster</button>
                    </div>
                </div>
                <div className='customer-search-box'>
                    <h3 style={{fontSize:26,marginBottom:25}}>Kullanılabilir  Tarih Ekle</h3>
                    <div className='customer-search'>
                        {
                            doctors?
                            <select name="doctor" value={availableDate.doctorId || ""} onChange={handleUpdateSelectChange}>
                                <option value={""}>Doktor Seçin</option>
                                {
                                    doctors?.map((doctor)=>(
                                        <option key={doctor.id} value={doctor.id}>
                                            {doctor.name}
                                        </option>
                                    ))
                                }
                            </select>
                            : null
                        }
                        <input type="date" onChange={addDate} value={availableDate.workDay || ""} />
                        <button onClick={handleAddAvailableByName} style={{fontSize:16}} >Ekle</button>
                    </div>
                </div>
            </div>
      </div>
      <div  className='available-list'>
            {deleteError? <p className='message-error'>{deleteError}</p> : null }
            {deleteSucces? <p className='message-succes'>{deleteSucces}</p> : null }
            {searchError? <p className='message-error'>{searchError}</p> : null }
            {searchSucces? <p className='message-succes'>{searchSucces}</p> : null }
            {succes? <p className='message-succes'>{succes}</p> : null }            
            {error? <p className='message-succes'>{error}</p> : null }            
                <h3>Kullanıla Bilir Tarih Listesi</h3>
                <div className='customer-filter'>
                        <span>Kullanılarbilir Gün</span>
                        <span>Doktor Adı</span>
                        <span>Doktor Numarası</span>
                        <span>Doktor Maili</span>
                        <span>Doktor Adresi</span>
                        <span >İşlemler</span>
                </div>
                {searchDay?searchDay?.map((day)=>(
                    <div key={day.id} className='customer-info' style={{marginBottom:20}}>
                    <span>{day.workDay}</span>
                    <span>{day.doctor.name}</span>
                    <span>{day.doctor.phone}</span>
                    <span>{day.doctor.email}</span>
                    <span>{day.doctor.address}</span>
                    <div className='customer-button' style={{display:'flex',marginLeft:30}}>
                        <button className='delete-customer' onClick={()=>deleteDateClick(availableDate.id)}><AiOutlineDelete /></button>
                        <button className='update-customer' ><GrUpdate /></button>
                    </div>
                </div>
                )):getAllAvailableDate?.map((availableDate)=>(
                    <div key={availableDate.id} className='customer-info' style={{marginBottom:20}}>
                        <span>{availableDate.workDay}</span>
                        <span>{availableDate.doctor.name}</span>
                        <span>{availableDate.doctor.phone}</span>
                        <span>{availableDate.doctor.email}</span>
                        <span>{availableDate.doctor.address}</span>
                        <div className='customer-button' style={{display:'flex',marginLeft:30}}>
                            <button className='delete-customer' onClick={()=>deleteDateClick(availableDate.id)}><AiOutlineDelete /></button>
                            <button className='update-customer' ><GrUpdate /></button>
                        </div>
                    </div> 
                ))}
            </div>
        {
            putData === true? 
                <div className='update-menu'>
                    <span onClick={exitUpdateInput}>X</span>
                    <form >
                        <div className='newInput-box'>
                            <div>Doktor Adı :</div>
                            <input type="text" name='name' value={updateDoctor.name}  onChange={inputUpdatChange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Doktor Maili :</div>
                            <input type="email" name='email' value={updateDoctor.email} onChange={inputUpdatChange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Doktor Adresi :</div>
                            <input type="text" name='address' value={updateDoctor.address} onChange={inputUpdatChange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Doktor Şehri :</div>
                            <input type="text" name='city' value={updateDoctor.city} onChange={inputUpdatChange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Doktor Telefonu :</div>
                            <input type='tel' name='phone' value={updateDoctor.phone} onChange={inputUpdatChange}/>
                        </div>
                        <a className='span-btn' onClick={handleUpdateNewDoctor}>Bilgileri Güncelle</a>
                    </form>
                </div> 
            : null
        }
    </div>
  )
}

export default Doctors
