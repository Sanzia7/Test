import React from 'react';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartAction } from '../../store/reducers/cartReducer';
import { fetchOrderSend } from '../../asyncActions/order';
import ButtoGreen from '../UI/ButtonGreen/ButtonGreen'


export default function CartOrder() {
   const cart = useSelector(store => store.cart)
   const dispatch = useDispatch()

   const totalSum = cart.reduce( (prev, item) =>
         prev + item.count * (item.discont_price
            ? item.discont_price
         : item.price), 0)
   
   const onSubmit = (e) => {
      e.preventDefault()
      fetchOrderSend(e.target.phone.value)
      e.target.reset()
      dispatch(clearCartAction())
   }

   return (
      <div className={s.order}>
         <h2>Order details:</h2>
         <div className={s.sum}>
            <p className={s.text}>Total:</p>
            <p className={s.amount}>{totalSum} $</p>
         </div>
         <form onSubmit={onSubmit}>
            <input type="tel"
               name='phone'
               placeholder='Phone number'
               required
            />
            <ButtoGreen text="Order" />
         </form>

      </div>
   )
}
