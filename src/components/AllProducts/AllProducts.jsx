import React from 'react';
import s from './style.module.css';
import ProductItem from '../ProductItem/ProductItem';

export default function AllProducts({ products }) {
   return (
      <div className={s.products_list}>
         {products.length === 0
            ? <p>Such products do not exist</p>
            : products.map(item => <ProductItem key={item.id} product={item} />)}
      </div>
   );
}
