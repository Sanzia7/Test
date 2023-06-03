import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'


export default function CartShoping() {

   const cart = useSelector(store = store.cart)

   return (
      <div className={s.shopping_cart}>
         {
            cart.map(item => 
               <Cart
                  key={item.id}
                  {...item}
               />)
         }
      </div>
   )
}
