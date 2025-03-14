import React from 'react'

export default function Cards({Name, Text}) {
  return (
    <div className="border">
        <div>
            <img src="https://www.w3schools.com/howto/img_avatar.png"/>
        </div>
        <div>{Name}</div>
        <div>{Text}</div>
    </div>
  )
}
