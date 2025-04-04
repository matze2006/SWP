import React from 'react'

export default function Card({name, jobtitle, description}) {
  return (
    <div className="bg-orange-200 border w-full font-main">
        <p className="font-bold">{name}x </p>
        <p>{jobtitle}</p>
        <p>{description}</p>
    </div>
  );
}
