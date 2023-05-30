import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { SlHandbag } from 'react-icons/sl'

export default function CartCounter({ ...item }) {

   const cart = useSelector((state) => state.cart)

   const cartCount = cart.reduce((acc, { count }) => acc + count, 2)


   return (
      <button className={s.cart_block}>
         <NavLink to='/cart'>
            <SlHandbag style={{ fontSize: '26px', color: 'green'}} />
            <span className={(cartCount)
               ? (s.count_cart)
               : (s.empty_cart)}
            >{cartCount}</span>
         </NavLink>
      </button>
   )  
}

// <button className={s.shopping_block}>
//    <NavLink to='/cart'>
//       <SlHandbag style={{ fontSize: '22px', color: 'green' }} />
//       <span className={(cartCounter)
//          ? (s.count_cart)
//          : (s.empty_cart)}
//       >{cartCounter}</span>
//    </NavLink>
// </button>


{/* <div>
   <NavLink
      className={s.link}
      data-count={cartCount ?? undefined}
      to='/cart'
      {...item}
   >
      <SlHandbag style={{ fontSize: '26px' }} />
   </NavLink>

</div> */}