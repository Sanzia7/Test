//const defaultState = JSON.parse(localStorage.getItem('basket')) || [];
//const writeToLocalStorage = (cart) => localStorage.setItem('cart', JSON.stringify(cart))

const defaultState = []

const ADD_TO_CART = 'ADD_TO_CART'

export const cartReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         const product = state.find(({ id }) => id === action.payload)
         if (product === undefined) {
            const newState = [...state, { id: action.payload, count: 1 }]
            return newState
         } else {
            product.count++
            return [...state]
         }

      default:
         return state
   }
}

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })