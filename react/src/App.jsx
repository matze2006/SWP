import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/1 Setup React & Tailwind & erste Komponente/Card.jsx'
//import Liste from './components/2 Aufgabe Komponenten/Liste.jsx'
import Button from './components/2 Aufgabe Komponenten/Button.jsx'
//import Cards from './components/2 Aufgabe Komponenten/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <Card name={"Lenz"} jobtitle={"AV"} description={"lässig"}/>
        <Card name={"Sams"} jobtitle={"AV"} description={"auch lässig"}/>
      </div>
      <Button Text={"Sendar"}/>
    </>
  )
}

export default App
