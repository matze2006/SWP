import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/1 Setup React & Tailwind & erste Komponente/Card.jsx'
import Liste from './components/2 Aufgabe Komponenten/Liste.jsx'
import Button from './components/2 Aufgabe Komponenten/Button.jsx'
import Cards from './components/2 Aufgabe Komponenten/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*1*/}
      <div className="flex">
        <Card name={"Lenz"} jobtitle={"AV"} description={"lässig"}/>
        <Card name={"Sams"} jobtitle={"AV"} description={"auch lässig"}/>
      </div>
      {/*2*/}
      <div className="mt-10">
        <Liste Name={"Coffee"}/>
        <Liste Name={"Tea"}/>
        <Liste Name={"Beer"}/>
      </div>
      <div className="mt-10 mb-10">
        <Button Text={"Sendar"}/>
      </div>
      <div className="mb-10">
        <Cards Name={"John Doe"} Text={"Architect and Engineer"}/>
      </div>
      
    </>
  )
}

export default App
