import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem'
import ButtonLight from '../UI/ButtonLight/ButtonLight'


export default function CategoriesCatalog({categories, btn_show, title}) {

  return (
    <div className={s.catalog_wrapper} id='categories'>
      <div className={s.catalog_header}>
        <h2 className={s.catalog_title}>{title}</h2>
        {btn_show && (
          <NavLink to='/catalog'>
            <ButtonLight text='All Categories'/>
          </NavLink>
        )}
      </div>
      <div className={s.catalog_container}>
        {categories.map((item) => (
          <NavLink
            key={item.id}
            to={`/categories/${item.id}`}
          >
            <CategoryItem {...item} />
          </NavLink>
        ))}
      </div>

    </div>
  )
}