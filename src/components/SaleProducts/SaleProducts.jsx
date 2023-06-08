import React, { useEffect } from 'react';
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import AllProducts from '../AllProducts/AllProducts'
import { fetchProducts } from '../../asyncActions/products';

export default function SaleProducts() {
   let dispatch = useDispatch()

   useEffect(()=> dispatch(fetchProducts('sale')), [dispatch])

   const products = useSelector((store) => store.productList.productList)
      // .filter((item) => item.discont_price)
      // .slice(0, 4)
   const productSale = []
   if (products.length !== 0) {
      for (let i = 0; i < 4; i++) {
         let randomIndx = Math.round(Math.random() * products.length)
         productSale.push(products[randomIndx])
         products.splice(randomIndx, 1)
      }
   }

   return (      
      <div id='sales' className={s.sale} >
         <div className={s.container}>
            <h2>Sale</h2>
            <AllProducts products={productSale}/>
         </div>
      </div>
   );
}


