import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../asyncActions/products'
import AllProducts from '../../components/AllProducts/AllProducts'
//import s from './style.module.css'

export default function ProductsPage() {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchProducts())
      window.scrollTo(0, 0)
   }, [])

   const products = useSelector(store => store.products)


   return (
      <div>
         <AllProducts
            products={products}
            title={'All Products'}
            filterShow={true}
            saleShow={true}
            location={'all_products'}
         />
      </div>
   )
}
