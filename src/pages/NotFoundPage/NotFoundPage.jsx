import React from 'react'
import s from './style.module.css'
import image from './sorry.jpg'


export default function NotFoundPage() {

   return (
      <div className={s.container_err}>
         <h1>SORRY!</h1>
         <h2>SOMETHING IS WRONG...</h2>
         <img src={image} alt="image" />
      </div>
   )
}
