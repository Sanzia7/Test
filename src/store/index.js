import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'
import { categoriesReducer } from "./reducer/categoriesReducer"
import { productsReducer } from "./reducer/productsReducer"
import { cartReducer } from "./reducer/cartReducer"

const rootReducer = combineReducers({
   categories: categoriesReducer,
   products: productsReducer,
   cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))