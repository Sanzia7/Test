import { loadCategoriesAction } from '../store/reducers/categoriesReducer'
import URL from './url'
const categoriesURL = URL + 'categories/all'

export const fetchCategories = () => {
   return function (dispatch) {
      fetch(categoriesURL)
         .then(res => res.json())
         .then(data = dispatch(loadCategoriesAction(data)))
   }
}




//-----------------------------------------
// import axios from 'axios'
// import URL from './url'

// const getCategories = () => {
//    return axios.get(`${URL}/categories/all`)
// }

// const getCategoryItem = (id) => {
//    return axios.get(`${URL}/categories/${id}`)
// }

// export default { getCategories, getCategoryItem }



// import { categoriesLoadAction } from "../reducer/categoriesReducer"

