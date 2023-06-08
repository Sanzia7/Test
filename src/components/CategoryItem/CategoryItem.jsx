import React from 'react'
import s from './style.module.css'
import URL from '../../asyncActions/url'

export default function CategoryItem({id, title, image }) {
   return (
      <div className={s.category_item}>
         <div className={s.category_img}>
            <img src={`${URL}/${image}`} alt={title} />
            <h3>{title}</h3>
         </div>
      </div>
   )
}
