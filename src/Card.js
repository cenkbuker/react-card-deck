import React, { useState } from 'react'
import './Card.css'

function Card({name, image}) {
    const [{angle, positionX,positionY}] = useState({
        angle: Math.random() * 90 - 45,
        positionX : Math.random()*40-20,
        positionY : Math.random()*40-20,
    })
    const transform = `translate(${positionX}px, ${positionY}px) rotate(${angle}deg)`
  return (
    <img className="Card"
            alt={name}
            src={image}
            style={{transform}} />
  )
}

export default Card