import React from 'react';
import { useSelector } from 'react-redux';

function SaleProducts() {
   const products = useSelector(store => store.products)
   const showProducts = []

   if (products.length !== 0) {
      const saleProducts = products.filter(product => product.discont_price !== null)

      for 
   }
   return (
      <div>
         
      </div>
   );
}

export default SaleProducts;