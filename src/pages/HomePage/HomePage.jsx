import React, { useEffect } from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBunner'
import FirstOrdering from '../../components/FirstOrdering/FirstOrdering'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../asyncActions/categories'
import CategoriesCatalog from '../../components/CategoriesCatalog/CategoriesCatalog'
import { fetchProducts } from '../../asyncActions/products'
import SaleProducts from '../../components/SaleProducts/SaleProducts'



export default function HomePage() {
   const dispatch = useDispatch()

   const categories = useSelector(store => store.categories)
   const products = useSelector(store => store.products)

   useEffect(() => {
      dispatch(fetchCategories()) 
      dispatch(fetchProducts())
      window.scrollTo(0, 0)
   }, [])

   const showCategories = categories.slice(0, 4)

   return (
      <div>
         <HomeBanner />
         <CategoriesCatalog
            categories={showCategories}
            btnShow={true}
            title='Catalog'
         />
         <FirstOrdering />
         <SaleProducts />
      </div>
   )
}


