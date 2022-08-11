import React from 'react'

export default function CardButton({text, styleText}) {
  return (
    <button type='button' className={styleText}>{text}</button>
  )
}
