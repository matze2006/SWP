import React from 'react'
import Card from '../2_1_Komponenten_State/Card';
import { Link } from 'react-router';

export default function UseState() {
  const person = { firstname: "hans", lastname: "müller" };
  return (
    <>
     <div className='grid grid-cols-3 gap-2 mt-5'>
          <Card name="Matthias" description="Spielt Eishockey"/>
          <Card name="Matteo" description="Spielt Badminton"/>
          <Card name="Peter" description="Spielt League of Legends"/>
        </div>
        <div className='border m-5 w-fit'>
          <Link to="/peopleContainer">PeopleContainer</Link>
        </div>
        <div className='border m-5 w-fit'>
          <Link to="/" state={{person: person, title: "test"}}>Start</Link>
        </div>
     </>
  )
}
