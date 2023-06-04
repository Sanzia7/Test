import React, { useEffect } from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../asyncActions/products'
import AllProducts from '../../components/AllProducts/AllProducts'

export default function ProductsPage() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchProducts())
      window.scrollTo(0, 0)
   }, [])

   const products = useSelector(store => store.products)


   return (
      <div className={s.products_list}>
         <AllProducts
            products={products}
            title={'All Products'}
            filterShow={true}
            saleShow={true}
            location='all_products'
         />
      </div>
   )
}
