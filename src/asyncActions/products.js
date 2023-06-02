import axios from 'axios'
import URL from './url'

const getProducts = () => {
   return axios.get(`${URL}/products/all`)
}

const getProductItem = (id) => {
   return axios.get(`${URL}/products/${id}`)
}
export default { getProducts, getProductItem }

const productsURL = URL + '/products/all'
 const categoryURL = URL + '/categories/'

// export const fetchProductsList =() => {
//    return function (dispatch) {
//       fetch(productsURL)
//          .then(res => res.json())
//          .then(data = dispatch(productsLoadAction(data)))
//    }
// }

// export const fetchCategoryProducts = (id) => {
//    return function (dispatch) {
//       fetch(`${categoryURL}${id}`)
//          .then(res => res.json())
//          .then(data => dispatch(loadCategoryProductsAction(data)))
//    }
// }


// import axios from 'axios'
// import URL from './url'

// const getProducts = () => {
//    return axios.get(`${URL}/products/all`)
// }

// const getProductItem = (id) => {
//    return axios.get(`${URL}/products/${id}`)
// }
// export default { getProducts, getProductItem }