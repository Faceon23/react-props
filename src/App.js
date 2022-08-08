import React, { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Coffee from "./components/Coffee"
import Menubar from "./components/Menubar"
import "./App.css"

function App() {
  const [name, setName] = useState("Zahra")
  return (
    <>
      <Menubar name={name} setName={setName} />
      <Main name={name} />
      <Coffee />
      <Footer />
    </>
  )
}

export default App
