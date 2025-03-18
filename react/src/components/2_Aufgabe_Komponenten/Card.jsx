import React from 'react'

export default function Card({Name, Text, image}) {
  return (
    <div className="border">
        <div className=" h-80">
            <img className="object-cover w-full h-full" src={image}/>
        </div>
        <div>{Name}</div>
        <div>{Text}</div>
    </div>
  )
}
