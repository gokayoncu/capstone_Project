import React, { useContext, useEffect, useState } from 'react'
import CounterContext from '../../context/Context'
import './Report.css'
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

function Report() {
  const [update,setUptade]=useState(false)
  const {deleteError,error,succes,deleteSucces,updateError,updateSucces,appointmentAll,setSucces,setError,postReports,allReports,deleteReports,getReportsAllData,putReport}=useContext(CounterContext)
  const [reportupdate,setReportUpdate]=useState(false)  
  const [putId,setPutId]=useState()  
  const [postReport,setPostReport]= useState({
    title: "",
    diagnosis: "",
    price: 0,
    appointmentId: 0
  })
  const [postUpdateReport,setPostUpdateReport]= useState({
    title: "",
    diagnosis: "",
    price: 0,
    appointmentId: 0
  })
  const handleAddUpdateReport= (e)=>{
    const{name,value}= e.target;
    setPostUpdateReport({...postUpdateReport,[name]:value})
  }
  useEffect(()=>{
    getReportsAllData()
  },[update])

  const handleAddReport= (e)=>{
    const{name,value}= e.target;
    setPostReport({...postReport,[name]:value})
  }

  const handleChangeAppointment = (e)=>{
    const { name, value } = e.target;
    setPostReport({...postReport,[name]:value})
  }
  const handlePostReport = ()=>{
    postReports(postReport)
    setUptade(!update)
  }
  const deleteClick= (id)=>{
    deleteReports(id)
    setUptade(!update)
  }
  const handleupdate = (id)=>{
    setReportUpdate(true)
    setPutId(id)
  }
  const exitUpdate =()=>{
    setReportUpdate(false)
  }

  const handleUpdateReport=()=>{
    putReport(putId,postUpdateReport)
    setReportUpdate(false)
    setTimeout(() => {
      setUptade(!update)
    }, 500);
  }
  return (
    <div className='report-container'>
      <h2>Rapor Yönetimi</h2>
      <div className='report-box'>
          <h3>Rapor Ekle</h3>
          <div className='add-report'>
            <input type="text" name='title' placeholder='Başlık' value={postReport.title || ""} onChange={handleAddReport}/>
            <input type="text" name='diagnosis' placeholder='Teşhis' value={postReport.diagnosis || ""} onChange={handleAddReport}/>
            <input type="number" name='price' placeholder='Ücret' value={postReport.price || ""}  onChange={handleAddReport}/>
            {
              appointmentAll?
              <select name="appointmentId"  value={postReport.appointmentId || ""} onChange={handleChangeAppointment}>
                  <option value={""}>Müsait Gün Seçin</option>
                  {
                      appointmentAll?.map((appoint)=>(
                          <option key={appoint.id} value={appoint.id}>
                              {appoint.appointmentDate}
                          </option>
                      ))
                  }
              </select>
              : null
            }
            <button onClick={handlePostReport}>Ekle</button>
          </div>
          {
            succes != undefined? succes ===false? <div className='message-error'>{error} </div> : <div className='message-succes'>{succes}</div>:null
          }

      </div>
      {deleteError? <p className='message-error' >{deleteError}</p> : null }
      {deleteSucces? <p className='message-succes' >{deleteSucces}</p> : null }
      {updateError? <p className='message-error'>{updateError}</p> : null }
      {updateSucces? <p className='message-succes'>{updateSucces}</p> : null }
      <div className='report-list'>
        <h3>Rapor Listele</h3>
        <div className='report-list-menu'>
          <span>Rapor Adı</span>
          <span>Hayvan Adı</span>
          <span>Teşhis</span>
          <span>Doktor Adı</span>
          <span>Müşteri</span>
          <span>Ücret</span>
          <span>Randevu Günü</span>
          <span>İşlemler</span>
          
        </div>
        
          {
            allReports? allReports.map((report)=>(
              <div className='report-list-info' key={report.id}>
                <span>{report.title}</span>
                <span>{report.appointment.animalName}</span>
                <span>{report.diagnosis}</span>
                <span>{report.appointment.doctorName}</span>
                <span>{report.appointment.customerName}</span>
                <span>{report.price}</span>
                <span style={{fontSize:18}}>{report.appointment.date}</span>
                <div className='customer-button'>
                  <button className='delete-customer' onClick={()=>deleteClick(report.id)}><AiOutlineDelete /></button>
                  <button className='update-customer' onClick={()=>handleupdate(report.id)}><GrUpdate /></button>
                </div>
              </div>
            )):null
          }
        </div>
        {
          reportupdate ===true?
          <div className='update-menu'>
            <div className='update-box'>
              <span onClick={exitUpdate}>X</span>
              <h3>Rapor Güncelle</h3>
              <input type="text" name='title' placeholder='Başlık' value={postUpdateReport.title || ""} onChange={handleAddUpdateReport}/>
              <input type="text" name='diagnosis' placeholder='Teşhis' value={postUpdateReport.diagnosis || ""} onChange={handleAddUpdateReport}/>
              <input type="number" name='price' placeholder='Ücret' value={postUpdateReport.price || ""}  onChange={handleAddUpdateReport}/>
              {
                appointmentAll?
                <select name="appointmentId"  value={postUpdateReport.appointmentId || ""} onChange={handleAddUpdateReport}>
                    <option value={""}>Müsait Gün Seçin</option>
                    {
                        appointmentAll?.map((appoint)=>(
                            <option key={appoint.id} value={appoint.id}>
                                {appoint.appointmentDate}
                            </option>
                        ))
                    }
                </select>
                : null
              }
              <button onClick={handleUpdateReport}>Güncelle</button>
            </div>
          </div>:null
        }      
    </div>
  )
}

export default Report
