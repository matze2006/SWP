import React from 'react'
import Übung from '../test/übung'

export default function ÜbungsContainer() {
  return (
    <div className='grid grid-cols-4 gap-2 p-5'>
      <Übung name="Peter" text="FalschParker"/>
      <Übung name="Raphael" text="GeHeim"/>
      <Übung name="Matteo" text="SuperKleber"/>
      <Übung name="Keine" text="Ahnung"/>
    </div>
  )
}
