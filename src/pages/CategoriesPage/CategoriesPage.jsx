import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../asyncActions/categories'
import CategoriesCatalog from '../../components/CategoriesCatalog/CategoriesCatalog'



export default function CategoriesPage() {

   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(fetchCategories())
      window.scrollTo(0, 0)
   }, [])

   const categories = useSelector((store) => store.categories)



   return (
      <div>
         <CategoriesCatalog
            categories={categories}
            btnShow={false}
            title='Categories'
         />
      </div>
   )
}
