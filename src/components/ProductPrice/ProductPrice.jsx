import React from 'react'
import s from './style.module.css'


export const ProductPrice = ({ price, discont_price}) => {

   const sale = discont_price &&
      Math.round(((price - discont_price) * 100) / price)
   
   return (
      <div className={s.price_box}>
         <p className={s.sale_price}>
            {sale ? discont_price : price} $
         </p>
         {sale && (
            <>
               <p className={s.old_price}>{price} $</p>
               <p className={s.sale}>- {sale} %</p>
            </>
         )}
      </div>
   )
}