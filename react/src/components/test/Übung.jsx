import React from 'react'
import { useState } from 'react'

export default function Übung({name, text}) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
    let style = amountOfClicks>5?"bg-green-400" : "";
  return (
    <div className={`border ${style}`} onClick={()=>{
        setAmountOfClicks(amountOfClicks+1)
    }}
    >
      <h2>{name}</h2>
      <div>{text}</div>
      <div>Clicks: {amountOfClicks}</div>
    </div>
  )
}
