import React, { useEffect } from 'react';
import s from './SaleProducts'
import { useDispatch, useSelector } from 'react-redux';
import AllProducts from '../AllProducts/AllProducts'
import { fetchProduct } from '../../asyncActions/products';

export default function SaleProducts() {
   let dispatch = useDispatch()

   useEffect(()=> dispatch(fetchProduct('sale')), [dispatch])

   const products = useSelector((store) => store.products.list)
      .filter((item) => item.discont_price)
      .slice(0, 4)


   return (      
      <div id='sales' className={s.sale} >
         <div className={s.container}>
            <h2>Sale</h2>
            <AllProducts products={products}/>
         </div>
      </div>
   );
}

  // if (products.length !== 0) {
   //    const saleProducts = products.filter(item => item.discont_price !== null)
   //    for (let i = 0; i < 3; i++) {
   //       let indexRandom = Math.round(Math.random() * saleProducts.length)
   //       productsShow.push(saleProducts[indexRandom])
   //       saleProducts.splice(indexRandom, 1)
   //    }
   // }
