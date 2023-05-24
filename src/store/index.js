import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'
import { categoriesListReducer } from './categoriesListReducer'
import { productsListReducer } from './productsListReducer'
import { categoryPproductsReducer} from './categoryPproductsReducer'
import { cartReducer } from './cartReducer'

const rootReducer = combineReducers({
   categories: categoriesListReducer,
   products: productsListReducer,
   categoryProducts: categoryPproductsReducer,
   cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))