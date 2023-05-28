import React from 'react'
import s from './style.module.css'
import gnome from '../../media/gnome.png'

export default function OrderBanner() {


   return (
      <div className={s.wrapper}>
         <img src={gnome} alt="gnome" />
         <div>
            <h2>
               <div>5% off</div>
               on the first order
            </h2>
            <form className={s.form}>
               <input type="number" name='phone' placeholder='49' />
               <button>Get a discount</button>
            </form>
         </div>
      </div>
   )
}
