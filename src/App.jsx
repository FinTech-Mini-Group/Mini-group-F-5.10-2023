import { Route, Routes } from "react-router-dom"
import Category from "./components/Category"
import News from "./components/News"


function App() {

  return (
    <>
    <div className="font-rl">
      <News/>
      <Category/>
    </div>
    </>
  )
}

export default App
