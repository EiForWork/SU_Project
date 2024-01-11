import { useState } from 'react'

import Navbar from './Navbar/Narbar'
import Home from './Page1/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
