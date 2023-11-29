import { Route, Routes } from "react-router-dom"

import Landing from "./components/Landing"
import Zakaz from "./Footermenu/Zakaz"


function App() {

  return (
    <>
      <div className="font-rl">

        <Routes>
          <Route path='/zakaz' element={<Zakaz />} />
          <Route path='/' element={<Landing />} />
        </Routes>
       
      </div>
    </>
  )
}

export default App
