import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import flowers from '../../media/flowers.png'
import ProductsListPage from '../../pages/ProductsListPage/ProductsListPage'

export default function Home() {
   return (
      <div className={s.wrapper}>
         <div className={s.sale}>
            <h1>Sale</h1>
            <h2>New Season</h2>
            <Link to='/products/sale' element={<ProductsListPage />}>Sale</Link>
         </div>
         <img src={flowers} alt="flowers" />
      </div>
   )
}
