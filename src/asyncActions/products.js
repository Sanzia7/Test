import URL from "./url"
import { loadProductsAction, loadProductsSaleAction } from "../store/reducers/productsReducer"
import { loadProductInfoAction } from "../store/productReducer"

const categoryURL = URL + '/categories/'
const productsURL = URL + '/products/all'


export const fetchCategory = (id) => {
   return function (dispatch) {
      fetch(`${categoryURL}${id}`)
         .then((res) => res.json())
         .then((data) => dispatch(loadProductsAction(data)))
   }
}

export const fetchProducts = (type) => {
   return function (dispatch) {
      fetch(productsURL)
         .then((res) => res.json())
         .then((data) => {
            dispatch(loadProductsAction({ data, category: {} }))
            if (type === 'sale') {
               dispatch(loadProductsSaleAction())
            }
         })
   }
}

export const fetchProductInfo = (product) => {
   return function (dispatch) {
      fetch(URL + product)
         .then((res) => res.json())
         .then((data) => dispatch(loadProductInfoAction(data)));
   };
};



