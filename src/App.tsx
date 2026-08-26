
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import Header from './components/header/header'
import InfoStrip from './components/info-strip/ingoStrip'
import DoctorDetails from './pages/docter-details'
import Contact from './pages/contact'

function App() {


  return (
    <>
      <InfoStrip/>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about-us' element={<HomePage />} />
        <Route path='/doctor-details' element={<DoctorDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </>
  )
}

export default App
