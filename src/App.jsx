
import Header from "./components/header/Header";
import { Routes, Route } from 'react-router-dom'
import AboutUs from "./pages/aboutus/AboutUs";
import Catalog from "./components/Catalog";
import { useState } from "react"
import Electronic from "./components/Electronic"

import Landing from "./components/Landing"
import { Contexts } from "./context/Contexts"
import Zakaz from "./Footermenu/Zakaz"


function App() {
  const [activeTabs, setActiveTabs] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen]=useState(false) 
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
          </Routes>
        </Contexts.Provider>
      </div>
    </>
  )
}

export default App
