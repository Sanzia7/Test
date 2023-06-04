import URL from "./url"
import { loadCategoryAction } from "../store/reducers/categoryReducer"
import { loadProductsAction } from "../store/reducers/productsReducer"


const productsURL = URL + '/products/all'
const categoryURL = URL + '/categories/'

export const fetchProducts =() => {
   return function (dispatch) {
      fetch(productsURL)
         .then(res => res.json())
         .then(data => dispatch(loadProductsAction(data)))
   }
}

export const fetchCategory = (id) => {
   return function (dispatch) {
      fetch(`${categoryURL}${id}`)
         .then(res => res.json())
         .then(data => dispatch(loadCategoryAction(data)))
   }
}


