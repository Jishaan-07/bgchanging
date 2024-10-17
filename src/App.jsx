import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgcolor, setBgcolor] = useState("white")

  const setRed = () => {
    const bg = "red"
    setBgcolor(bg)
  }
  const setGreen = () => {
    setBgcolor("green")
  }
  const setBlue = () => {
    setBgcolor("blue")
  }
  const setYellow = () => {
    setBgcolor("yellow")
  }

  return (
    <>
      <div id="main" style={{ height: '100vh', backgroundColor: bgcolor }} className='d-flex justify-content-center align-items-center '>



        <button className='border rounded mx-3 bg-danger text-light' onClick={setRed}>RED</button>



        <button className='border rounded mx-3 bg-success text-light' onClick={setGreen}>GREEN</button>


        <button className='border rounded mx-3 bg-primary text-light' onClick={setBlue}>BLUE</button>


        <button className='border rounded mx-3 bg-warning text-light' onClick={setYellow}>YELLOW</button>
      </div>
    </>
  )
}

export default App
