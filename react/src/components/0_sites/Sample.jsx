import React from 'react'
import Card from './../1_Setup_React_Tailwind_erste_Komponente/Card.jsx'
import Liste from './../2_Aufgabe_Komponenten/Liste.jsx'
import Button from './../2_Aufgabe_Komponenten/Button.jsx'
import Cards from './../2_Aufgabe_Komponenten/Card.jsx'
import { Link } from 'react-router'

export default function Sample() {
  return (
    <>
    <div className='border m-5 w-fit'>
          <Link to="/PeopleContainer">PeopleContainer</Link>
        </div>
        <div className='border m-5 w-fit'>
          <Link to="/useState">UseState</Link>
        </div>
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
    <div className="mb-10 grid grid-cols-2 gap-2 ">
      <Cards Name={"John Doe"} Text={"Architect and Engineer"} image={"https://www.w3schools.com/howto/img_avatar.png"}/>
      <Cards Name={"John Doe"} Text={"Architect and Engineer"} image={"https://picsum.photos/200/300"}/>
      <Cards Name={"John Doe"} Text={"Architect and Engineer"} image={"https://picsum.photos/200/300"}/>
   
    </div>
    
  </>
  )
}
