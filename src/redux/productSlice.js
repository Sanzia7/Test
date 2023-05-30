import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
   name: 'product',
   initialState: {
      products: [],
   },
   reducers: {
      loadProducts: (state, action) => {
         state.products = action.payload.map((product) => ({
            ...product,
            selectShow: true,
            priceShow: true
         }));
      },
      searchProducts: (state, action) => {
         state.products = state.products.map((product) => ({
            ...product,
            selectShow: product.title
               .toLowerCase()
               .includes(action.payload.toLowerCase())
         }))
      },
      resetSearchProducts: (state, action) => {
         state.products = state.products.map((product) => ({
            ...product,
            selectShow: true,
            priceShow: true,
         }));
      },
      sortFilter: (state, action) => {
         
      }


   }
})

export default productSlice.reducer
export const {
   loadProducts,
   searchProducts,
   resetSearchProducts,
} = productSlice.actions



// const defaultState = []

// const PRODUCTS_LOAD = 'PRODUCTS_LOAD'

// export const productsReducer = (state = defaultState, action) => {
//    switch (action.type) {
//       case PRODUCTS_LOAD: 
//          return [...action.payload]
      
//       default:
//          return state
//    }
// }

// export const productsLoadAction = (payload) => ({
//    type: PRODUCTS_LOAD,
//    payload
// })