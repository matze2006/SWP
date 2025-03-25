import React, { useEffect, useState } from 'react'
import Card from './../3_Demo_Projekt_Cards_und_Daten/Card'

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [color, setColor] = useState("green")

  useEffect(()=>{
    fetch("https://67e1965b58cc6bf785266c57.mockapi.io/03/PeopleContainer/person").then(
      (res) => res.json().then(data =>{
        setPeople(data);
      })
    );
  }, []);

  useEffect(() =>{
    alert("change");
  },[color]);

  return (
    <div>
      <button onClick={()=>{
        let num = Math.random();        
        setColor("orange" + num );
      }}>Change Color</button>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {people.map(person => {
          return <Card name={person.name} image={person.avatar} title={person.jobtitle}/>
        })}
      </div>
    </div>
  )
}
