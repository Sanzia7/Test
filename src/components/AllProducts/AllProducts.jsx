import React from 'react';
import s from './style.module.css';
import Filter from '../Filter/Filter';
import ProductItem from '../ProductItem/ProductItem';


export default function AllProducts({
   products,
   title,
   filterShow,
   saleShow,
   location,
}) {
   products = products?.filter(item => item?.saleShow  && item.rangeShow);

   return (
      <div className={s.wrapper}>
         <h2 className={s.title}>{title}</h2>
         {filterShow &&
            <Filter saleShow={saleShow}
               location={location} />}
         <div className={s.products}>
            {products.length === 0
               ? <p>Such products do not exist</p>
               : products.map(item => (
                  <ProductItem
                     key={item.id}
                     product={item}
                  />
               ))}
         </div>
      </div>
   );
}
