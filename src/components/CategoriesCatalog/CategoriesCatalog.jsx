import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem'
import ButtonLight from '../UI/ButtonLight/ButtonLight'


export default function CategoriesCatalog({categories, btnShow, title}) {

  return (
    <div id='categories' className={s.wrapper_catalog} >
      <div className={s.header}>
        <h2>{title}</h2>
        {btnShow && (
          <NavLink to='/catalog'>
            {/* <button className={s.btn_categories}>
              All Categories
            </button> */}
            {/* <ButtonLight text='All Categories' /> */}
          </NavLink>
        )}
      </div>
      <div className={s.wrapper_categories}>
        {categories.map(item =>
          <NavLink to={`/categories/${item.id}`}
            key={item.id}>
            <CategoryItem {...item} />
          </NavLink>
        )}
      </div>
    </div>
  )
}


// {/* <ButtonLight text='All Categories'/> */ }