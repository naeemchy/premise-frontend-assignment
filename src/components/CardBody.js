import React from 'react'

export default function CardBody({name, intents}) {
  return (
    <div className='body'>
      <div className='title'>
          <h1>{name}</h1>
      </div>
      <div className='sub-title'>
          <p>{intents} intents</p>
      </div>
    </div>
  )
}