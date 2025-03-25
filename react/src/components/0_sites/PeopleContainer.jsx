import React, { useEffect, useState } from 'react'
import Card from './../3_Demo_Projekt_Cards_und_Daten/Card'

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(()=>{
    fetch("https://67e1965b58cc6bf785266c57.mockapi.io/03/PeopleContainer/person").then(
      (res) => res.json().then(data =>{
        setPeople(data);
        setFilteredPeople(data);
      })
    );
  }, []);

  const filterPeople = (filter) =>{
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered)
  }

  return (
    <div className='pl-4 pr-4'>
      <div className='w-full fixed bg-white'>
        <h2 className='font-bold text-3xl justify-self-center'>People</h2>
        <input className="border m-5" type="text" placeholder="Search" onChange={(el) =>{
          filterPeople(el.target.value);
        }}/>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-30'>
        {filteredPeople.map(person => {
          return <Card name={person.name} image={person.avatar} title={person.jobtitle}/>
        })}
      </div>
    </div>
  )
}
