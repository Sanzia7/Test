import React, { useEffect } from 'react'
import s from './style.module.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../asyncActions/products'
import AllProducts from '../../components/AllProducts/AllProducts'


export default function CategoryItemPage() {

   const { id } = useParams()
   const dispatch = useDispatch()

   const category = useSelector(store => store.category)
   useEffect(() => {
      dispatch(fetchCategory(id))
      window.scrollTo(0, 0)
   }, [])

   const title = category.data ? category.category.title : '';
   const data = category.data ? category.data : []


   return (
      <div className={s.category_container}>
         {
            <AllProducts
               products={data}
               title={title}
               filterShow={true}
               saleShow={true}
               location='category'
            />
         }
      </div>
   )
}
