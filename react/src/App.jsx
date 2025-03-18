import { useState } from 'react'
import './App.css'
import State from './components/0_sites/useState.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <State/>
    </>
  )
}

export default App
