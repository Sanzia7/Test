import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem/CategoryItem'


export default function CategoriesPage() {
   const { categories } = useSelector((state) => state.categories)




   return (
      <div className={s.categories_wrapper}>
         <h2>Categories</h2>
         <div className={s.categories_container}>
            {categories.map((elem) => {
               <CategoryItem
                  key={elem.id}
                  {...elem}
               />
            })}
         </div>
      </div>
   )
}
