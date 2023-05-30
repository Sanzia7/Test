import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      cart: JSON.parse(localStorage.getItem('ShoppingCart')) || [],
   },
   reducers: {
      addToCart: (state, action) => {
         const cartProduct = state.cart.find((product) => product.id === action.payload.id)
         if (cartProduct) {
            cartProduct.count += action.payload.count
         } else {
            state.cart = [...state.cart, action.payload]
         }
      },
      removeFromCart: (state, action) => {
         state.cart = state.cart.filter((product) => product.id !== action.payload)
      },
      incrementCart: (state, action) => {
         state.cart.find((product) => product.id === action.payload)
      },
      decrementCart: (state, action) => {
         const cartProduct = state.cart.find((product) => product.id === action.payload)
         if (cartProduct.count > 1)
            cartProduct.count--
      },
      emptyCart: (state, action) => {
         state.cart = []
      }
   },
});

export const {
   addToCart,
   removeFromCart,
   incrementCart,
   decrementCart,
   emptyCart

} = cartSlice.actions;

export default cartSlice.reducer;

//const defaultState = JSON.parse(localStorage.getItem('basket')) || [];
//const writeToLocalStorage = (cart) => localStorage.setItem('cart', JSON.stringify(cart))

// const defaultState = []

// const ADD_TO_CART = 'ADD_TO_CART'

// export const cartReducer = (state = defaultState, action) => {
//    switch (action.type) {
//       case ADD_TO_CART:
//          const product = state.find(({ id }) => id === action.payload)
//          if (product === undefined) {
//             const newState = [...state, { id: action.payload, count: 1 }]
//             return newState
//          } else {
//             product.count++
//             return [...state]
//          }

//       default:
//          return state
//    }
// }

// export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })