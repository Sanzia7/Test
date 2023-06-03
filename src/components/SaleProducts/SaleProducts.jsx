import React from 'react';
import s from './SaleProducts'
import { useSelector } from 'react-redux';
import AllProducts from '../AllProducts/AllProducts'

export default function SaleProducts() {
   const products = useSelector(store => store.products)
   const productsShow = []

   if (products.length !== 0) {
      const saleProducts = products.filter(product => product.discont_price !== null)
      for (let i = 0; i < 3; i++) {
         let indexRandom = Math.round(Math.random() * saleProducts.length)
         productsShow.push(saleProducts[indexRandom])
         saleProducts.splice(indexRandom, 1)
      }
   }

   return (      
      <div className={s.container} id='sales'>
         <AllProducts
            products={productsShow}
            title='Sale'
            location='sale'
            filterShow={false}
         />
      </div>
   );
}

