import React from 'react'
import s from './style.module.css'

export default function Button({ text, properties, ...props }) {
   return (
      <button
         className={`${s.btn} ${s[properties]}`}
         {...props}
      >
         {text}
      </button>
   )
}

