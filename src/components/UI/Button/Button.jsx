import React from 'react'
import s from './style.module.css'

export default function Button({content, text, ...other }) {
   return (
      <button className={``}
         {...other}>
         {text}
      </button>
   )
}

