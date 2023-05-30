import axios from 'axios'
import URL from './url'

const getProducts = () => {
   return axios.get(`${URL}/products/all`)
}

const getProductItem = (id) => {
   return axios.get(`${URL}/products/${id}`)
}
export default { getProducts, getProductItem }




// import { productsLoadAction } from "../reducer/productsReducer"

// const productsURL = 'http://localhost:3333/products/all'
// // const categoryProductsURL = 'http://localhost:3333/categories/'

// export const fetchProductsList =() => {
//    return function (dispatch) {
//       fetch(productsURL)
//          .then(res => res.json())
//          .then(data = dispatch(productsLoadAction(data)))
//    }
// }

// export const fetchCategoryProducts = (id) => {
//    return function (dispatch) {
//       fetch(`${categoryProductsURL}${id}`)
//          .then(res => res.json())
//          .then(data => dispatch(loadCategoryProductsAction(data)))
//    }
// }