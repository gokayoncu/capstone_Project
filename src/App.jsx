import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Appointment from './component/appointment/Appointment'
import Report from './component/report/Report'
import Customer from './component/Customer/Customer'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>        
        <Route path='/' element={<Home/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/report' element={<Report/>} />
        <Route path='/vaccination' element={"vaccination"} />
        <Route path='/customer' element={<Customer/>} />
        <Route path='/animals' element={"animals"} />
        <Route path='/doctor' element={"doctor"} />
      </Routes>
      
    </div>
  )
}

export default App
