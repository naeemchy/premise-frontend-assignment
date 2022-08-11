import React from 'react'
import Card from './Card'
import { sampleData } from '../data/sampleData'

export default function Cards() {
  return (
    <div className='container'>
      <div className='row clearfix'>
        {
          sampleData.map((data) => {
            return <Card key={data.id} data={data} />
          })
        }
      </div>
    </div>
  )
}