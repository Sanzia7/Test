import React from 'react';
import s from './style.module.css';
import ProductItem from '../ProductItem/ProductItem';

export default function AllProducts({ products }) {
   console.log('AllProducts',  products)
   return (
      <div className={s.products_list}>
         {products.length === 0 && !products?.[0]?.id
            ? <p>Such products do not exist</p>
            :  products.map(item => {
                  if (item) {
                     return <ProductItem key={item?.id} product={item} />
                  }
                  return <p>Such product does not exist</p>
               })
            }
      </div>
   );
}
