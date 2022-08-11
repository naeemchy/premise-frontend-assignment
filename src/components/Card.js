import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardButton from './CardButton'
import moment from 'moment'

export default function Card({data}) {
  return (
    <div className='card'>
      <div className="card-body">
        <CardHeader originType={data.originType} />
        <CardBody name={data.name} intents={data.intents}/>
        <div className='button'>
          <CardButton text='View' styleText='view-btn' />
          <CardButton text='Remove' styleText='remove-btn' />
        </div>
      </div>
      <div className='card-footer'>
        <p>Last Updated: {moment(data.dateUpdated).format("LL")} @ {moment(data.dateUpdated).format("LT")}</p>
      </div>
    </div>
  )
}