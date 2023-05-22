import React from 'react'
import s from './style.module.css'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
   return (
      <div>
         <div className={s.wrapper}>
            <div>
               <p className={s.title}>Contact</p>
               <p className={s.phone}>+49 999 999 99 99</p>
               <div>
                  <span className={s.icon}>
                     <BsInstagram />
                  </span>

                  <span className={s.icon}>
                     <BsWhatsapp />
                  </span>
               </div>
            </div>

            <div>
               <p className={s.title}>Address</p>
               <p className={s.address}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
               <p className={s.hours}>Working Hours</p>
               <p className={s.days}>24 hours a day</p>
            </div>
         </div>

         <iframe className={s.map} title='googleMaps' width="100%" height="525" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Tel-Ran.de%20GmbH+(My%20Business%20tName)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
         </iframe>

      </div >
   )
}


