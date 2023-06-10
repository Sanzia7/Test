import React from 'react'
import s from './style.module.css'


export const ProductPrice = ({ price, discont_price}) => {

   const discount = discont_price &&
      Math.round(((price - discont_price) * 100) / price)
   
   return (
      <div className={s.price_box}>
         <p className={s.sale_price}>
            {discount ? discont_price : price} $
         </p>
         {discount && (
            <>
               <p className={s.old_price}>{price} $</p>
               <p className={s.sale}>- {discount} %</p>
            </>
         )}
      </div>
   )
}