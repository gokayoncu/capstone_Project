import React, { useContext, useEffect, useState } from 'react'
import CounterContext from '../../context/Context'
import './vaccination.css'
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import axios from 'axios';

function Vaccination() {
    const [update,setUptade]=useState(false)
    const {vaccinations,getVaccinations,deleteVaccine,putVaccine,error,succes,deleteError,deleteSucces,updateError,updateSucces,animals,postVaccinations}=useContext(CounterContext)
    const [updateVaccinations,setUpdateVaccinations] = useState (false)
    const [updateId,setUpdateId] = useState()
    const [searchId,setSearchId] = useState()
    const [searchError,setSearchError] = useState()
    const [searchSucces,setSearchSucces] = useState()
    const [searchVaccine,setSearchVaccine]= useState()
    const [postVaccine,setPostVaccine] = useState({
        name: "",
        code: "",
        protectionStartDate: "2024-06-09",
        protectionFinishDate: "2024-06-09",
        animalWithoutCustomer: {
            id: 0,
            name: "",
            species: "",
            breed: "",
            gender: "",
            dateOfBirth: "2024-06-09",
            colour: ""
        }
    })
    const [updateVaccine,setUpdateVaccine] = useState({
        name: "",
        code: "",
        protectionStartDate: "2024-06-09",
        protectionFinishDate: "2024-06-09",
        animalWithoutCustomer: {
            id: 0,
            name: "",
            species: "",
            breed: "",
            gender: "",
            dateOfBirth: "2024-06-09",
            colour: ""
        }
    })
    const [searchDateVaccine,setSearhDateVaccine] =useState({
        startDate:"2024-06-09",
        endDate: "2024-06-09"
    })
    const handleSearchInput= (e)=>{
        const {name,value}= e.target;
        setSearhDateVaccine({...searchDateVaccine,[name]:value})
    }
    const handleSearchDateVaccine = async()=>{       
        const res= await axios.get(import.meta.env.VITE_APP_BASEURL+`vaccinations/searchByVaccinationRange?startDate=${searchDateVaccine.startDate}&endDate=${searchDateVaccine.endDate}`)    
        if(res.data.content.length>0){
            setSearchVaccine(res.data.content)
            setSearchSucces("Arama Başarılı")
            setTimeout(() => {
                setSearchSucces()
            }, 1000);
        }else{
            setSearchError("Bu Tarihler Arası Bir Aşı Bulunmamaktadır !")
            setTimeout(() => {
                setSearchError()
            }, 1000);
        }
        setSearhDateVaccine({
          startDate:"2024-06-09",
          endDate: "2024-06-09"
        })
        
    }
    const handleSearchByAnimal = async()=>{
        const res= await axios.get(import.meta.env.VITE_APP_BASEURL+`vaccinations/searchByAnimal?id=${searchId}`)    
        if(res.data.content.length>0){
            setSearchVaccine(res.data.content)
            setSearchSucces("Arama Başarılı")
            setTimeout(() => {
                setSearchSucces()
            }, 1000);
        }else{
            setSearchError("Bu Hayvan İçin Aşı Bulunmamaktadır !")
            setTimeout(() => {
                setSearchError()
            }, 1000);
        }
        setSearhDateVaccine({
          startDate:"2024-06-09",
          endDate: "2024-06-09"
        })
    }
    const showAll =()=>{
        setSearchVaccine()
    }
    
    useEffect(()=>{
        getVaccinations()
    },[update])

    const inputChange = (e)=>{
        const {name,value}= e.target;
        setPostVaccine({...postVaccine,[name]:value})
    }
    const handleUpdateSelectChange= (e)=>{
        const {value}= e.target;
        const obj = animals.find((animal)=>animal.id === +value)
        const {id,name,species,breed,gender,dateOfBirth,colour} = obj
        const animalDestruct ={
            id: id,
            name: name,
            species: species,
            breed: breed,
            gender: gender,
            dateOfBirth: dateOfBirth,
            colour: colour
        }
        setPostVaccine({...postVaccine,animalWithoutCustomer:animalDestruct})
    }
    const handleUpdateNewSelectChange= (e)=>{
        const {value}= e.target;
        const obj = animals.find((animal)=>animal.id === +value)
        const {id,name,species,breed,gender,dateOfBirth,colour} = obj
        const animalDestruct ={
            id: id,
            name: name,
            species: species,
            breed: breed,
            gender: gender,
            dateOfBirth: dateOfBirth,
            colour: colour
        }
        setUpdateVaccine({...updateVaccine,animalWithoutCustomer:animalDestruct})
    }
    const searchAnimalSelectChange=(e)=>{
        const {value}= e.target
        setSearchId(value)
    }
    const inputUpdateChange = (e)=>{
        const {name,value}= e.target;
        setUpdateVaccine({...updateVaccine,[name]:value})
    }
    const handlePostVaccine=()=>{
        postVaccinations(postVaccine)
        setTimeout(() => {
            setUptade(!update)
        }, 500);
    }
    const deleteClick= (id)=>{
        deleteVaccine(id)
        setTimeout(() => {
            setUptade(!update)
        }, 500);
    }
    const updateAppoint = (id)=>{
        setUpdateId(id)
        setUpdateVaccinations(true)
    }
    const exitUpdateInput =()=>{
        setUpdateVaccinations(false)
    }
    const handleVaccineUpdate = ()=>{
        putVaccine(updateId,updateVaccine)
        setUpdateVaccinations(false)
    }


  return (
    <div className='vaccine-container'>
        <h2>Aşı Yönetimi</h2>
        <div className='vaccine-management'>
            {deleteError? <p className='message-error' style={{marginBottom:20}}>{deleteError}</p> : null }
            {deleteSucces? <p className='message-succes' style={{marginBottom:20}}>{deleteSucces}</p> : null }
            {updateError? <p className='message-error'style={{marginBottom:20}}>{updateError}</p> : null }
            {updateSucces? <p className='message-succes'style={{marginBottom:20}}>{updateSucces}</p> : null }
            <h3>Aşı Ekle</h3>
            <div className='vaccine-add'>
                <input type="text" name='name' placeholder='Name' value={postVaccine.name} onChange={inputChange}/>
                <input type="text" name='code' placeholder='Code' value={postVaccine.code} onChange={inputChange}/>
                <input type="date" name='protectionStartDate' value={postVaccine.protectionStartDate} onChange={inputChange}/>
                <input type="date" name='protectionFinishDate' value={postVaccine.protectionFinishDate} onChange={inputChange}/>
                {
                    animals?
                    <select name="animalWithoutCustomer" value={postVaccine.animalWithoutCustomer.name?postVaccine.animalWithoutCustomer.name:''} onChange={handleUpdateSelectChange}>

                        <option >Hayvan Seçin</option>
                        {
                            animals?.map((animal)=>(
                                // In the onchange part, an ID is sent for a healthier search, which is why the name is not visible when selected in the Select section.
                                <option key={animal.id} value={animal.id}>
                                    {animal.name}
                                </option>
                            ))
                        }
                    </select>
                    : null
                }
                <button onClick={handlePostVaccine}>Ekle</button>
            </div>
            <div className='vaccine-search'>
                <div className='vaccine-searchBox'>
                    <h3>Gün Aralığını Göre Aşı Arama</h3>
                    <div className='searchName'>
                        <input type="date" name='startDate' value={searchDateVaccine.startDate} placeholder='Aşı İsmi Girin' onChange={handleSearchInput}/>
                        <input type="date" name='endDate' value={searchDateVaccine.endDate} placeholder='Aşı İsmi Girin' onChange={handleSearchInput}/>
                        <button onClick={handleSearchDateVaccine}>Ara</button>
                    </div>
                </div>
                <div className='vaccine-searchBox'>
                    <h3>Hayvana İsmine Göre Aşı Ara</h3>
                    <div className='searchName'>
                        {
                        animals?
                        <select value={''} onChange={searchAnimalSelectChange} style={{width:150,borderRadius:10}}>

                            <option value={""}>Hayvan Seçin</option>
                            {
                                animals?.map((animal)=>(
                                    // In the onchange part, an ID is sent for a healthier search, which is why the name is not visible when selected in the Select section.
                                    <option key={animal.id} value={animal.id}>
                                        {animal.name}
                                    </option>
                                ))
                            }
                        </select>
                        : null
                        } 
                        <button onClick={handleSearchByAnimal}>Ara</button>
                    </div>
                </div>
            </div>
            <button className='showAll' onClick={showAll} >Hepsini Göster</button>
        </div>
      <div className='vaccine-list'>
            <h3>Aşı Listesi</h3>
            {
                searchSucces?<div className='message-succes' style={{width:400}}>{searchSucces}</div>:searchError? <div className='message-error' style={{width:400}}>{searchError}</div> :null

            }
            
            <div className='vaccine-head'>
                <span>Aşı</span>
                <span>Aşı Kodu</span>
                <span>Koruma Baslangıç Tarihi</span>
                <span>Koruma Bitiş Tarihi</span>
                <span>Hayvan Adı</span>
                <span>Müşteri Başlığı</span>
                <span>İşlemler</span>
            </div>
            <div className='vaccine-result'>
                {
                    searchVaccine?searchVaccine?.map((search)=>(
                        <div className='vaccination-list' key={search.id}>
                          <span style={{minWidth:80}}>{search.name}</span>
                          <span style={{minWidth:80}}>{search.code}</span>
                          <span style={{minWidth:100}}>{search.protectionStartDate}</span>
                          <span style={{minWidth:100,marginLeft:100}}>{search.protectionFinishDate}</span>
                          <span style={{minWidth:100,marginLeft:35}}>{search.animal.name}</span>
                          <span style={{minWidth:100}}>{search.animal.customer.name}</span>
                          <div className='customer-button' style={{alignItems:'center',justifyContent:'center',width:200}}>
                             <button className='delete-customer' onClick={()=>deleteClick(search.id)}><AiOutlineDelete /></button>
                             <button className='update-customer' onClick={()=>updateAppoint(search.id)}><GrUpdate /></button>
                          </div>
                        </div>                        
                    ))
                    :vaccinations?.map((vaccine)=>(
                        <div className='vaccination-list' key={vaccine.id}>
                          <span style={{minWidth:80}}>{vaccine.name}</span>
                          <span style={{minWidth:80}}>{vaccine.code}</span>
                          <span style={{minWidth:100}}>{vaccine.protectionStartDate}</span>
                          <span style={{minWidth:100,marginLeft:100}}>{vaccine.protectionFinishDate}</span>
                          <span style={{minWidth:100,marginLeft:35}}>{vaccine.animal.name}</span>
                          <span style={{minWidth:100}}>{vaccine.animal.customer.name}</span>
                          <div className='customer-button' style={{alignItems:'center',justifyContent:'center',width:200}}>
                             <button className='delete-customer' onClick={()=>deleteClick(vaccine.id)}><AiOutlineDelete /></button>
                             <button className='update-customer' onClick={()=>updateAppoint(vaccine.id)}><GrUpdate /></button>
                          </div>
                        </div>                        
                    ))
                }                
            </div>
        </div>
        {
          updateVaccinations===true?<div className='update-menu'>
            <div className='update-box'>            
              <h3>Randevu Güncelle</h3>
              <span onClick={exitUpdateInput}>X</span>
              <input type="text" name='name' placeholder='Name' value={updateVaccine.name} onChange={inputUpdateChange}/>
              <input type="text" name='code' placeholder='Code' value={updateVaccine.code} onChange={inputUpdateChange}/>
              <div className='input-days'>
                <input type="date" name='protectionStartDate' value={updateVaccine.protectionStartDate} onChange={inputUpdateChange}/>
                <input type="date" name='protectionFinishDate' value={updateVaccine.protectionFinishDate} onChange={inputUpdateChange}/> 
              </div> 
                {
                    animals?
                    <select name="animalWithoutCustomer" value={updateVaccine.animalWithoutCustomer.name?updateVaccine.animalWithoutCustomer.name:''} onChange={handleUpdateNewSelectChange}>

                        <option value={""}>Hayvan Seçin</option>
                        {
                            animals?.map((animal)=>(
                                // In the onchange part, an ID is sent for a healthier search, which is why the name is not visible when selected in the Select section.
                                <option key={animal.id} value={animal.id}>
                                    {animal.name}
                                </option>
                            ))
                        }
                    </select>
                    : null
                }  
          <button onClick={handleVaccineUpdate}>Güncelle</button>
            </div>
        </div>:null
        }
    </div>
  )
}

export default Vaccination
