import React from 'react'
import s from './style.module.css'
import Filter from '../Filter/Filter'

export default function AllProducts({ products, title, filterShow, saleShow, location }) {

   products = products.filter((item) => item.saleShow && item.rangeShow)

   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>{title}</h1>
         {filterShow &&
            <Filter
            saleShow={saleShow}
            location={location}
            />
         }
         <div className={s.products}>
            {products.length === 0
               ? <p>Such products do not exist</p>
               : products.map(item => 
                  <ProductItem
                     key={item.id}
                     products={item}
                  />)
            }
         </div>
      </div>
   )
}
