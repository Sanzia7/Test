import React, { useEffect } from 'react'
import s from './style module.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import CartShopping from '../../components/CartShopping/CartShopping'
import CartOrder from '../../components/CartOrder/CartOrder'



export default function CartPage() {

   useEffect(() => window.scrollTo(0, 0), [])
   const cart = useSelector(store => store.cart);

   console.log('cart', cart)

   return (
      <div className={s.cart_container}>
         <div className={s.cart_wrapper}>
            <h2>Shopping Cart</h2>
            <NavLink to='/products/all'>
               <div className={s.link_back}>
                  <p>Back to the store</p>
                  <SlArrowRight className={s.arrow} />
               </div>
            </NavLink>
            <div className={s.shopping}>
               {cart.length !== 0
                  ? <CartShopping />
                  : <p>Your Cart is empty</p>
               }
               <CartOrder />
            </div>
         </div>
      </div>
   )
}
