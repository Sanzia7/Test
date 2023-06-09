const readStorage = JSON.parse(localStorage.getItem('cart'))
const defaultState = readStorage ? readStorage : []

const ADD_TO_CART = '[CART] ADD_TO_CART'
const INCREMENT_COUNT = '[CART] INCREMENT_COUNT'
const DECREMENT_COUNT = '[CART] DECREMENT_COUNT'
const REMOVE_FROM_CART = '[CART] REMOVE_FROM_CART'
const CLEAR_CART = '[CART] CLEAR_CART'

const findProduct = (state, payload) => {
   const existProduct = state.find(item => item.id === payload.id);
   if (existProduct) {
      existProduct.count++
      return [...state]
   } else {
      return [...state, { ...payload, count: 1 }]
   }
}

const writeToStorage = (newState) => localStorage.setItem('cart', JSON.stringify(newState))

export const cartReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         const newState = findProduct(state, action.payload)
         writeToStorage(newState)
         return newState
      
      case INCREMENT_COUNT:
         state.find(item => item.id === action.payload).count++;
         writeToStorage([...state])
         return [...state]
      
      case DECREMENT_COUNT:
         const target = state.find(elem => elem.id === action.payload)
         if (target.count > 1) {
            target.count--
         } else {
            state = state.filter(elem => elem.id !== action.payload)
         }
         writeToStorage([...state])
         return [...state]
      
      case REMOVE_FROM_CART:
         const updateState = state.filter(elem => elem.id !== action.payload)
         writeToStorage(updateState)
         return updateState
      
      case CLEAR_CART:
         writeToStorage([])
         return []
      
      default:
         return state
   }
}

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })
export const incrementCountAction = (payload) => ({ type: INCREMENT_COUNT, payload })
export const decrementCountAction = (payload) => ({ type: DECREMENT_COUNT, payload })
export const removeFromCartAction = (payload) => ({ type: REMOVE_FROM_CART, payload })
export const clearCartAction = () => ({ type: CLEAR_CART })
