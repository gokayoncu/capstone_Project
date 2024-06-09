import React, { useContext, useEffect, useState } from 'react'
import CounterContext from '../../context/Context'
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import axios from 'axios';



function Animal() {
    const [update,setUptade]=useState(false)
    const [putData,setPutData]=useState(false)
    const {postAnimal,animals,getAnimals,getIdAnimal,error,succes,deleteError,deleteSucces,updateError,updateSucces,customers,deleteAnimals}=useContext(CounterContext)
    const[updateId,setUpdateId] = useState()
    const [searchAnimals,setSearchAnimalsearchAnimals] = useState(null)
    const [searchError,setSearchError] = useState()
    const [searchSucces,setSearchSucces] = useState(false)
    
    const [newAnimal,newSetAnimal]=useState({
        name : "",
        gender : "",
        species : "",
        breed : "",
        dateOfBirth : "",
        colour:"",
        customer:{
            id: 0,
            name: "",
            phone: "",
            email: "",
            address: "",
            city: ""
        }
    })
    const [updateAnimal,neSetUpdateAnimal]=useState({
        name: "",
        gender: "",
        species: "",
        breed: "",
        dateOfBirth: "",
        colour:"",
        customer:{
            id: 0,
            name: "",
            phone: "",
            email: "",
            address: "",
            city: ""
        }
    })

    const [searchAnimal,newSetSearchAnimal]=useState({
        name : "",
    })
    const [searchCustomer,newSetSearchCustomer]=useState({
        name : "",
    })
    const inputSearchChange= (e)=>{
        const {name,value}= e.target;
        newSetSearchAnimal({...searchAnimal,[name]:value})
    }
    const inputSearchCustomerChange= (e)=>{
        const {name,value}= e.target;
        console.log(value)
        newSetSearchCustomer({...searchCustomer,[name]:value})
    }
    const handleSearchCustomerByName = () =>{
        searchCustomerByName(searchCustomer.name.toLowerCase())
        newSetSearchCustomer({name:""})
    }
    const searchCustomerByName= async(name)=>{
        console.log(name)    
        if(name.length){
            try {
                const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"animals/searchByCustomer?customerName="+name);
                setSearchAnimalsearchAnimals(response.data.content)
                console.log(response.data)
                if(response.data.content == 0){
                    setSearchError("Böyle Bir Müşteri Bulunmamakta")
                    setTimeout(() => {
                        setSearchError()
                    }, 1000);
                    setSearchAnimalsearchAnimals(null)
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
                setSearchAnimalsearchAnimals(null)
           }
     }

    const searchAnimalsByName= async(name)=>{    
       if(name.length){
        try {
            const response = await axios.get(import.meta.env.VITE_APP_BASEURL+"animals/searchByName?name="+name);
            setSearchAnimalsearchAnimals(response.data.content)
            console.log(response.data)
            if(response.data.content == 0){
                setSearchError("Böyle Bir hayvan Bulunmamakta")
                setTimeout(() => {
                    setSearchError()
                }, 1000);
                setSearchAnimalsearchAnimals(null)
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
            setSearchAnimalsearchAnimals(null)
       }
    }
    
    const handleSearchByName = () =>{
        searchAnimalsByName(searchAnimal.name.toLocaleLowerCase())
        newSetSearchAnimal({name:""})
        console.log(searchAnimals)
    }
    

    const handleShowAll = () =>{
        setSearchAnimalsearchAnimals(null)
        
    }
    const inputChange = (e)=>{
        const {name,value}= e.target;
        const newValue= value.toLowerCase()
        newSetAnimal({...newAnimal,[name]:newValue})
    }
    
    
    useEffect(()=>{
        getAnimals()
    },[update])

    const sendNewAnimal= ()=>{
        postAnimal(newAnimal)
        newSetAnimal({
            name : "",
            gender : "",
            species : "",
            breed : "",
            dateOfBirth : "",
            colour:"",
            customer:{
                name: "",
                phone: "",
                email: "",
                address: "",
                city: ""
            }
        })
        setTimeout(() => {
            console.log("update")
            setUptade(!update)        
        }, 1000);
    }
    const deleteClick= (id)=>{
        deleteAnimals(id)
        setTimeout(() => {
            setUptade(!update)        
        }, 500);
    }

    const inputUpdatCehange= (e) =>{
        const {name,value} = e.target;
        neSetUpdateAnimal({...updateAnimal,[name]: value})
    }
    const handlePutClick= (animal)=>{
        setPutData(true)
        neSetUpdateAnimal({
            name : animal.name,
            gender : animal.gender,
            species : animal.species,
            breed : animal.breed,
            dateOfBirth : animal.dateOfBirth,
            colour:animal.colour,
            customer: animal.customer
        })
        setUpdateId(animal.id)
    }
    const exitUpdateInput = () => {
        setPutData(false)
    }
    const handleUpdateNewAnimal = () =>{
        console.log(updateAnimal)
        getIdAnimal(updateId,updateAnimal)
        setTimeout(() => {
            setUptade(!update)
            setPutData(false)        
        }, 500);
        
    }
    
    const handleSelectChange= (e)=>{
        const{name,value}= e.target;
        const obj = customers.find((customer)=>customer.id === +value)
        newSetAnimal({
            ...newAnimal,
            [name]:obj,
        })        
    }
    const handleUpdateSelectChange= (e)=>{
        const{name,value}= e.target;
        const obj = customers.find((customer)=>customer.id === +value)
        neSetUpdateAnimal({
            ...updateAnimal,
            [name]:obj,
        })
        
    }
  return (
    <div className='customer-container'>
        <h2>Hayvan Yönetimi</h2>
      <div className='customer-box'>
            <h3>Hayvan Listesi</h3>
            {deleteError? <p className='message-error'>{deleteError}</p> : null }
            {deleteSucces? <p className='message-succes'>{deleteSucces}</p> : null }
            {updateError? <p className='message-error'>{updateError}</p> : null }
            {updateSucces? <p className='message-succes'>{updateSucces}</p> : null }
            <div className='customer-filter' style={{marginTop:15}}>
                <input type="text" placeholder='Hayvan Adı'/>
                <input type="text" placeholder='Hayvan species'/>
                <input type="text" placeholder='Hayvannin Gender'/>
                <input type="text" placeholder='Hayvan Breed'/>
                <input type='date' placeholder='Hayvan Date Of Birth'/>
                <input type='text' placeholder='Hayvan Colour'/>
                <input type='text' placeholder='Hayvanın Sahibi'/>
                <span>İşlemler</span>
            </div>            
            <div  className='customer-list'>
                {
                    searchAnimals!=null ?searchAnimals.map((animal)=>(
                        <div key={animal.id} className='customer-list-box'>
                        <div className='customer-info'>
                            <span >{animal.name}</span>
                            <span >{animal.species}</span>
                            <span >{animal.gender}</span>
                            <span >{animal.breed}</span>
                            <span >{animal.dateOfBirth}</span>
                            <span >{animal.colour}</span>
                            <span >{animal.customer.name}</span>
                        </div>
                        <div className='customer-button'>
                                <button className='delete-customer' onClick={()=>deleteClick(animal.id)}><AiOutlineDelete /></button>
                                <button className='update-customer' onClick={()=>handlePutClick(animal)}><GrUpdate /></button>
                        </div>                        
                    </div>
                    ))
                    :succes !=false?animals?.map((animal)=>(
                        <div key={animal.id} className='customer-list-box'>
                                <div className='customer-info'>
                                <span >{animal.name}</span>
                                <span >{animal.species}</span>
                                <span >{animal.gender}</span>
                                <span >{animal.breed}</span>
                                <span >{animal.dateOfBirth}</span>
                                <span >{animal.colour}</span>                                
                                {animal.customer?<span >{animal.customer.name}</span>:<span >Hayvanın Sahibi yok</span>}
                            </div>
                            <div className='customer-button'>
                                <button className='delete-customer' onClick={()=>deleteClick(animal.id)}><AiOutlineDelete /></button>
                                <button className='update-customer' onClick={()=>handlePutClick(animal)}><GrUpdate /></button>
                            </div>
                        </div>
                    )): null
                }
            </div>           
        </div>
        {searchSucces?<p className='message-succes' >Arama Başarılı</p>:null }
        {searchError?<p className='message-error' >{searchError}</p> : null }
        <div style={{display:'flex',justifyContent:'center'}}>
            <div className='customer-search-box'>
                <h3 style={{fontSize:26,marginBottom:25}}>Hayvan Arayın</h3>
                <div className='customer-search'>
                    <input type="text" placeholder='Hayvan Adı Giriniz' name='name' value={searchAnimal.name} onChange={inputSearchChange}/>
                    <button onClick={handleSearchByName} style={{fontSize:16}}>Ara</button>
                    <button onClick={handleShowAll} style={{fontSize:16}}>Hayvanları Göster</button>
                </div>
            </div>
            <div className='customer-search-box'>
                <h3 style={{fontSize:26,marginBottom:25}}>Müşteri Arayın</h3>
                <div className='customer-search'>
                    <input type="text" placeholder='Müşteri Adı Giriniz' name='name' value={searchCustomer.name} onChange={inputSearchCustomerChange}/>
                    <button onClick={handleSearchCustomerByName} style={{fontSize:16}}>Ara</button>
                    <button onClick={handleShowAll} style={{fontSize:16}}>Hayvanları Göster</button>
                </div>
            </div>
        </div>
        
        <div className='customer-add'>
            <h3>Hayvan Ekle</h3>
            {
                succes != undefined? succes ===false? <div className='message-error'>{error} !</div> : <div className='message-succes'>{succes}</div>:null
            }
            <div className='customer-inputs'>
                <input type="text" placeholder='Hayvan Adı' name='name' value={newAnimal.name} onChange={inputChange}/>
                <input type="text" placeholder='Hayvan species' name='species' value={newAnimal.species} onChange={inputChange}/>
                <input type="text" placeholder='Hayvan Breed' name='breed' value={newAnimal.breed} onChange={inputChange}/>
                <input type="date" placeholder='Hayvannin Date Of Birth' name='dateOfBirth' value={newAnimal.dateOfBirth} onChange={inputChange}/>
                <input type='text' placeholder='Hayvan Gender' name='gender' value={newAnimal.gender} onChange={inputChange}/>
                <input type='text' placeholder='Hayvan Colour' name='colour' value={newAnimal.colour} onChange={inputChange}/>
                {
                    customers?
                    <select name="customer" value={newAnimal.customer.id || ""} onChange={handleSelectChange}>
                        <option value={""}>Müşteri Seçin</option>
                        {
                            customers?.map((customer)=>(
                                <option key={customer.id} value={customer.id}>
                                    {customer.name}
                                </option>
                            ))
                        }
                    </select>
                    : <span>Lütfen Önce Bir Müşteri Ekleyin</span>
                }
                <div className='send-button'>
                    <button onClick={sendNewAnimal}>
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
                            <div>Hayvan Adı :</div>
                            <input type="text" name='name' value={updateAnimal.name || ""}  onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Hayvan Türü :</div>
                            <input type="text" name='species' value={updateAnimal.species || ""} onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Hayvan Cinsi :</div>
                            <input type="text" name='breed' value={updateAnimal.breed || ""} onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Hayvan Doğumu :</div>
                            <input type="date" name='dateOfBirth' value={updateAnimal.dateOfBirth || ""} onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Hayvan Cİnsiyeti :</div>
                            <input type='text' name='gender' value={updateAnimal.gender || ""} onChange={inputUpdatCehange}/>
                        </div>
                        <div className='newInput-box'>
                            <div>Hayvan Rengi :</div>
                            <input type='text' name='colour' value={updateAnimal.colour || ""} onChange={inputUpdatCehange}/>
                        </div>
                        <div>
                            <div>Hayvanın Sahibi:</div>
                            {
                                customers?
                                <select name="customer" value={updateAnimal.customer} onChange={handleUpdateSelectChange}>
                                    <option value={""}>Müşteri Seçin</option>
                                    {
                                        customers?.map((customer)=>(
                                            
                                            <option key={customer.id} value={customer.id}>
                                                {customer.name}
                                            </option>
                                        )
                                        )
                                    }
                                </select>
                                : <span className='update-warning'>Lütfen Önce Bir Müşteri Ekleyin !!</span>
                            }
                        </div>
                        <a className='span-btn' onClick={handleUpdateNewAnimal}>Bilgileri Güncelle</a>
                    </form>
                </div> 
            : null
        }
    </div>
  )
}

export default Animal
