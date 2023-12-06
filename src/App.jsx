import { Route, Routes } from "react-router-dom"
import Electronic from "./components/Electronic"

import Landing from "./components/Landing"
import Zakaz from "./Footermenu/Zakaz"


function App() {

  return (
    <>
      <div className="font-rl">

        <Routes>
          <Route path='/zakaz' element={<Zakaz />} />
          <Route path='/' element={<Landing />} />
          <Route path='/electronic' element={<Electronic/>} />
        </Routes>
       
      </div>
    </>
  )
}

export default App
