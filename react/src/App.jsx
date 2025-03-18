import { useState } from 'react'
import './App.css'
import Sample from './components/0_sites/Sample.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sample/>
    </>
  )
}

export default App
