import React, { useEffect } from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../asyncActions/products'
import AllProducts from '../../components/AllProducts/AllProducts'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../../asyncActions/products'
import { loadProductsSaleAction } from '../../store/reducers/productsReducer'
import Filter from '../../components/Filter/Filter'

export const ProductsPage = ({ type }) => {
   const { id } = useParams()
   const dispatch = useDispatch()

   const titlePage = useSelector((store) => store.productList.titlePage)
   const productList = useSelector(store => store.productList.productList).filter((item) => item.saleShow && item.rangeShow)


   useEffect(() => {
      window.scrollTo(0, 0);
      if (type === 'category') {
         dispatch(fetchCategory(id))
      } else {
         dispatch(fetchProducts(type))
         if (type === 'sale') {
            dispatch(loadProductsSaleAction())
         }
      }
   }, [id, type])


   return (
      <div className={s.products_page}>
         <h2>{titlePage.title}</h2>
         <Filter type={type} />
         <AllProducts products={productList}/>
      </div>
   )
}
