import React from "react"
import Home from "./Components/Home"
import { BrowserRouter } from "react-router-dom"
import AllRoutes from "./Routes"

function App() {

  return (
    <>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
