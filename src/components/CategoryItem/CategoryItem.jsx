import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import URL from '../../asyncActions/url'

export default function CategoryItem({id, title, image}) {
   return (
      <div className={s.category}>
         <Link to={`/categories/:${id}`}>
            <div className={s.img_wrap}>
               <img src={`${URL}/${image}`} alt={title} />
            </div>
            <div className={s.title}>
               <p>{title}</p>
            </div>
         </Link>        
      </div>
   )
}
