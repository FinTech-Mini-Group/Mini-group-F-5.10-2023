
import Header from "./components/header/Header";
import { Routes, Route } from 'react-router-dom'
import AboutUs from "./pages/aboutus/AboutUs";
import Catalog from "./components/Catalog";
import { useEffect, useState } from "react"
import Electronic from "./components/Electronic"

import Landing from "./components/Landing"
import { Contexts } from "./context/Contexts"
import Zakaz from "./Footermenu/Zakaz"
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Footer from "./landingpages/Footer";
import Basket from "./components/Basket";
import { icons } from "./utilits/icons";


function App() {
  const [activeTabs, setActiveTabs] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen]=useState(false) 
  const [backTop, setBackTop] = useState('fixed bottom-[-50px] sm:bottom-[-100px] right-[100px] w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-full ')
  const scrollTop = () => {
    document.querySelector('body').scrollIntoView({behavior: 'smooth'})
  }

  useEffect(() => {
    window.addEventListener('scroll', function() {

      if (this.scrollY > 100) {
        setBackTop('fixed bottom-[50px] delay-1000 duration-1000 right-[100px] w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-full ')
      }
      else {  
        setBackTop('fixed bottom-[-100px] right-[100px] bottom-[-100px] delay-1000 duration-1000 w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-full ')
      }

    })

  })
  return (
    <>
      <div className="font-rl">
        <Contexts.Provider value={{ showModal, setShowModal, isOpen, setIsOpen,}}>
          <Header />
          <Routes>
            <Route path='/zakaz' element={<Zakaz />} />
            <Route path='/' element={<Landing />} />
            <Route path="Aboutus" element={<AboutUs />} />
            <Route path="Catalog" element={<Catalog />} />
            <Route path='/electronic' element={<Electronic />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/basket' element={<Basket/>} />
          </Routes>
          <Footer/>
          <button onClick={scrollTop} className={backTop}>
         {icons.up}
        </button>
        </Contexts.Provider>
      </div>
    </>
  )
}

export default App
