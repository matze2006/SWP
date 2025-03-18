import React from 'react'
import Card from './../2_1_Komponenten_State/Card';

export default function useState() {
  return (
    <>
     <div className='grid grid-cols-3 gap-2 mt-5'>
          <Card name="Matthias" description="Spielt Eishockey"/>
          <Card name="Matteo" description="Spielt Badminton"/>
          <Card name="Peter" description="Spielt League of Legends"/>
         </div>
     </>
  )
}
