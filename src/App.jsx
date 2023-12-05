import Header from "./components/header/Header";
import {Routes, Route } from 'react-router-dom'
import AboutUs from "./pages/aboutus/AboutUs";
import Catalog from "./components/Catalog";



function App() {

  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="Aboutus" element={<AboutUs/>}/>
        <Route path="Catalog" element={<Catalog/>}/>


      </Routes>
    
      
    </div>
  )
}

export default App
