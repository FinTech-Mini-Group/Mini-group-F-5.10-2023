import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Electronic from "./components/Electronic"

import Landing from "./components/Landing"
import { Contexts } from "./context/Contexts"
import Zakaz from "./Footermenu/Zakaz"


function App() {
  const [activeTabs, setActiveTabs] = useState(false)
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="font-rl">
        <Contexts.Provider value={{showModal, setShowModal}}>
        <Routes>
          <Route path='/zakaz' element={<Zakaz />} />
          <Route path='/' element={<Landing />} />
          <Route path='/electronic' element={<Electronic/>} />
        </Routes>
        </Contexts.Provider>
       
      </div>
    </>
  )
}

export default App
