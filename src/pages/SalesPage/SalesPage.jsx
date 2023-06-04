import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../asyncActions/products'
import AllProducts from '../../components/AllProducts/AllProducts'





export default function SalesPage() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchProducts())
      window.scrollTo(0, 0)
   }, [])

   const products = useSelector(store => store.products)

   const productsShow = products.filter(item => item.discont_price !== null)
   
   return (
      <div>
         <AllProducts
            products={productsShow}
            title={'Products with sale'}
            filterShow={true}
            saleShow={false}
            location={'all_sales'}
         />
      </div>
   )
}
