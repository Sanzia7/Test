import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer'


const rootReducer = combineReducers({
   categories: categoriesReducer,
   products: productsReducer,
   category: categoryReducer,
   cart: cartReducer

})
export const store = createStore(rootReducer, applyMiddleware(thunk))