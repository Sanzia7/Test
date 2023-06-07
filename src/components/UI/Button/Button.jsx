import React from 'react'
import s from './style.module.css'

export default function Button({ text, properties, ...other }) {
   return (
      <button className={`${s[properties]}`}
         {...other}>
         {text}
      </button>
   )
}

