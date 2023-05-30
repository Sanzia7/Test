import axios from 'axios'
import URL from './url'


const getCategories = () => {
   return axios.get(`${URL}/categories/all`)
}

const getCategoryItem = (id) => {
   return axios.get(`${URL}/categories/${id}`)
}

export default { getCategories, getCategoryItem }



// import { categoriesLoadAction } from "../reducer/categoriesReducer"

// const categoriesURL = 'http://localhost:3333/categories/all'

// export const fetchCategoriesList = () => {
//    return function (dispatch) {
//       fetch(categoriesURL)
//          .then(res => res.json())
//          .then(data = dispatch(categoriesLoadAction(data)))
//    }
// }