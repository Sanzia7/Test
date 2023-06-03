import React from 'react'
import s from './style.module.css'
import {useDispatch} from 'react-redux'




export default function Filter({ saleShowSort, location }) {

   const dispatch = useDispatch()
   
   const saleHandler = (e) => {
      dispatch(location === 'category'
      ? )
   }



   return (
      <div>Filter</div>
   )
}
