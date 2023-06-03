import React from 'react';
import { useSelector } from 'react-redux';

function SaleProducts() {
   const products = useSelector(store => store.products)
   const productsShow = []

   if (products.length !== 0) {
      const saleProducts = products.filter(product => product.discont_price !== null)
      for (let i = 0; i < 3; i++) {
         let indexRandom = Math.round(Math.random() * saleProducts.length)
         productsShow.push(saleProducts[indexRandom])
         saleProducts.splice(indexRandom)
      }
   }

   return (      
      <div>
         <AllProducts/>
      </div>
   );
}

export default SaleProducts;