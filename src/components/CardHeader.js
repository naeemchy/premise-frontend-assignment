import React from 'react'
import boltIcon from '../assets/images/boltIcon.svg'

export default function CardHeader({originType}) {
  return (
    <div className='header'>
      <img src={boltIcon} alt="boltIcon" />
      {
        originType === 'automated' ? 
        <p className='automated-origin-text'>{originType} origin</p> : <p className='manual-origin-text'>{originType} origin</p>
      }
    </div>
  )
}