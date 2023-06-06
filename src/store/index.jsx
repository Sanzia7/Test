import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer'
import { productsReducer } from './reducers/productsReducer'
import { cartReducer } from './reducers/cartReducer'
import { productReducer } from './productReducer'


const rootReducer = combineReducers({
   categories: categoriesReducer,
   products: productsReducer,
   product: productReducer,
   cart: cartReducer

})
export const store = createStore(rootReducer, applyMiddleware(thunk))