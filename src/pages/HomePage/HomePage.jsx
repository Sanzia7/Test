import React, { useEffect } from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBunner'
import FirstOrdering from '../../components/FirstOrdering/FirstOrdering'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../asyncActions/categories'
import CategoriesCatalog from '../../components/CategoriesCatalog/CategoriesCatalog'



export default function HomePage() {
   const dispatch = useDispatch()

   const categories = useSelector(store => store.categories)

   useEffect(() => {
      dispatch(fetchCategories()) 
      window.scrollTo(0, 0)
   }, [])

   const showCategories = categories.slice(0, 4)

   return (
      <div>
         <HomeBanner />
         <CategoriesCatalog
            categories={showCategories}
            btn_show={true}
            title='Catalog'
         />
         <FirstOrdering />

      </div>
   )
}


