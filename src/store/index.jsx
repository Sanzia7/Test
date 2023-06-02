import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer'
import { categoryReducer } from './reducers/categoryReducer'
import { productsReducer } from './reducers/productsReducer'


const rootReducer = combineReducers({
   categories: categoriesReducer,
   products: productsReducer,
   category: categoryReducer,
   cart: cartReducer

})
export const store = createStore(rootReducer, applyMiddleware(thunk))