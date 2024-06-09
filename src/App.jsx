import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Appointment from './component/appointment/Appointment'
import Report from './component/report/Report'
import Customer from './component/Customer/Customer'
import Doctors from './component/doctors/Doctors'
import Animal from './component/animal/Animal'
import Vaccination from './component/vaccination/Vaccination'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>        
        <Route path='/' element={<Home/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/report' element={<Report/>} />
        <Route path='/vaccination' element={<Vaccination/>} />
        <Route path='/customer' element={<Customer/>} />
        <Route path='/animals' element={<Animal/>} />
        <Route path='/doctor' element={<Doctors/>} />
      </Routes>
      
    </div>
  )
}

export default App
