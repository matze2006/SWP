import { useState } from 'react'
import './App.css'
import PeopleContainer from './components/0_sites/PeopleContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PeopleContainer/>
    </>
  )
}

export default App
