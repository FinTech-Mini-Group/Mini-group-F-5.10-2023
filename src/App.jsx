import { Route, Routes } from "react-router-dom"
import Category from "./components/Category"
import News from "./components/News"
import Instruction from "./components/Instruction"
import Change from "./components/Change"


function App() {

  return (
    <>
    <div className="font-rl">
      <News/>
      <Category/>
      <Instruction/>
      <Change/>
    </div>
    </>
  )
}

export default App
