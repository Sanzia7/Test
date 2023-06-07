import React from 'react'
import s from './style.module.css'

export default function Input({ type, placeholder, properties, name, pattern, ...rest }) {
   return (
      <input
         type={type}
         placeholder={placeholder}
         name={name}
         pattern={pattern}
         className={`${s.input}${s[properties]}`}
         {...rest} />
   )
}