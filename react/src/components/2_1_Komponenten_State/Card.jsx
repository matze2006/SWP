import React from 'react'
import { useState } from 'react'

export default function Card({name, description}) {
  const [amountOfClicks, setAmountOfClicks] = useState(0);
  let style = amountOfClicks>5?"bg-green-400" : "";
  return (
    <div className={`border ${style}`} onClick={()=>{
      setAmountOfClicks(amountOfClicks+1)
    }}
    >
        <div>{name}</div>
        <div>{description}</div>
        <div>Amount of clicks {amountOfClicks}</div>
    </div>
  )
}
