import { useState } from 'react'
import Navbar from './Navbar/Narbar'
import Home from './Page1/home'
import './Appp.css'
import ig from './imgs/ig.png'
import x from './imgs/x.png'
import fb from './imgs/fb.png'
import Footer from './Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="sidetab">
      <div className="tab">
        <img src={ig}/>
        <img src={x}/>
        <img src={fb}/>
      </div>
    </div>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
