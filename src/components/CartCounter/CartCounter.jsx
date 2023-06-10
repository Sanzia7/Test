import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'


export default function CartCounter() {

   const cart = useSelector(store => store.cart)
   console.log(cart)
   const cartCount = cart.reduce((acc, { count }) => acc + count, 0)


   return (
      <div className={s.counter}>
         <p>{cartCount}</p>
      </div>
   )  
}


//import { NavLink } from 'react-router-dom'
// import { SlHandbag } from 'react-icons/sl'
//import { store } from '../../store'
// {/* <NavLink to='/cart'>
//             <SlHandbag style={{ fontSize: '26px', color: 'green'}} />
//             <span className={(cartCount)
//                ? (s.count_cart)
//                : (s.empty_cart)}
//             >{cartCount}</span>

//          </NavLink>  */}

