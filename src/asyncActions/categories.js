import { loadCategoriesAction } from '../store/reducers/categoriesReducer'
import URL from './url'
const categoriesURL = URL + '/categories/all'

export const fetchCategories = () => {
   return function (dispatch) {
      fetch(categoriesURL)
      // fetch(`${URL}/categories/all`)
         // fetch('http://localhost:3333/categories/all')
         .then(res => res.json())
         .then(data => dispatch(loadCategoriesAction(data)))
   }
}




