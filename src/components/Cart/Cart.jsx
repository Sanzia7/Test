import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import URL from '../../asyncActions/url'
import { HiXMark } from 'react-icons/hi'
import {
   decrementCountAction,
   incrementCountAction,
   removeFromCartAction,
} from '../../store/reducers/cartReducer'

export default function Cart({ id, title, image, count, discont_price, price }) {
   const dispatch = useDispatch()

   return (
      <div className={s.cart}>
         <img src={`${URL}${image}`} alt={title} />
         <div className={s.counter}>
            <p className={s.title}>{title}</p>
            <div className={s.box_counter}>
               <button onClick={() => dispatch(decrementCountAction(id))}>
                  -
               </button>
               <p className={s.count}>{count}</p>
               <button onClick={() => dispatch(incrementCountAction(id))}>
                  +
               </button>
            </div>
         </div>
         <h2 className={s.sale_price}>{discont_price ? discont_price : price}$</h2>
         {discont_price && <h3 className={s.price}>{price}</h3>}
         <HiXMark
            className={s.close_btn}
            onClick={() => dispatch(removeFromCartAction(id))}
         />
      </div>
   )
}
