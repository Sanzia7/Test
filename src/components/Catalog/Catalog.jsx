import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ButtonGreen from '../UI/ButtonGreen/ButtonGreen'
import CategoryItem from '../CategoryItem/CategoryItem'


export default function Catalog() {
  const catalog = useSelector((state) => state.categories.categories)
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
  

  return (
    <div className={s.wrapper_catalog}>
      <div className={s.title_catalog}>
        <h3>OUR CATALOG:</h3>
        <Link to='/categories/all'>
          <ButtonGreen text='All Categories' />
        </Link>
      </div>
      <div className={s.categories_catalog}>
        {catalog.map((elem) => {
          <CategoryItem key={elem.id} {...elem} />
        })}
      </div>
    </div>
  )
}
