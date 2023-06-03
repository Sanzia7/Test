import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function ProductItem({ product }) {
   const { id, image, price, title, discont_price } = product
   const dispatch = useDispatch()
   const saleValue = Math.round(100 - discont_price * 100 / price)

   const addToCartHandler = (e) => {
      e.preventDefault()
      dispatch((product))
   }
   
   return (
      <NavLink>
         <div>

         </div>
      </NavLink>
   )
}
