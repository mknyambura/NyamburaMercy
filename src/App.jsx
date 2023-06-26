import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
import { Route, Routes } from 'react-router-dom'
import DS from './components/DS'
import RD from './components/RD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/data-science-portfolio' element={<DS/>}/>
      <Route path='/react-developer-portfolio' element={<RD/>}/>
    </Routes>
    
    </>
  )
}

export default App
