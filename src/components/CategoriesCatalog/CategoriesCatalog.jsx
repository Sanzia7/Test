import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem'
import ButtonLight from '../UI/ButtonLight/ButtonLight'


export default function CategoriesCatalog({categories, btnShow, title}) {

  return (
    <div className={s.wrapper} id='categories'>
      <div className={s.header}>
        <h2 className={s.title}>{title}</h2>
        {btnShow && (
          <NavLink to='/catalog'>
            <ButtonLight text='All Categories'/>
          </NavLink>
        )}
      </div>
      <div className={s.container}>
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
