import { loadCategoriesAction } from '../store/reducers/categoriesReducer'
import URL from './url'


const categoriesURL = URL + '/categories/all'

export const fetchCategories = () => {
   return function (dispatch) {
      fetch(categoriesURL)
         .then(res => res.json())
         .then(data => dispatch(loadCategoriesAction(data)))
   }
}




