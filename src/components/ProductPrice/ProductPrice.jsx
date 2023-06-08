import React from 'react'
import s from './style.module.css'


export const ProductPrice = ({ price, discont_price}) => {

   const discont = discont_price &&
      Math.round(((price - discont_price) * 100) / price)
   
   return (
      <div className={s.price_box}>
         <p className={s.sale_price}>
            {discont ? discont_price : price} $
         </p>
         {discont && (
            <>
               <p className={s.old_price}>{price} $</p>
               <p className={s.sale}>- {discont} %</p>
            </>
         )}
      </div>
   )
}