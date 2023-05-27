import { categoriesLoadAction } from "../reducer/categoriesReducer"



const categoriesURL = 'http://localhost:3333/categories/all'

export const fetchCategoriesList = () => {
   return function (dispatch) {
      fetch(categoriesURL)
         .then(res => res.json())
         .then(data = dispatch(categoriesLoadAction(data)))
   }
}