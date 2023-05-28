import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { SlHandbag } from 'react-icons/sl'

export default function CartCounter({ ...item }) {

   const cart = useSelector((state) => state.cart)

   const cartCounter = cart.reduce((acc, { count }) => acc + count, 0)


   return (
      <button className={s.shopping_block}>
         <NavLink to='/cart'>
            <SlHandbag style={{fontSize: '26px', color: 'green'}}/>
            <span className={(cartCounter)
               ? (s.count_cart)
               : (s.empty_cart)}
            >{cartCounter}</span>
         </NavLink>
      </button>
   )
}
