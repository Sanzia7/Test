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
      resetSearchProducts: (state) => {
         state.products = state.products.map((product) => ({
            ...product,
            selectShow: true,
            priceShow: true,
         }));
      },
      sortFilter: (state, action) => {
         if (action.payload === 'default') {
            state.products.sort((a, b) => a.id - b.id)
         } else if (action.payload === 'up-price') {
            state.products.sort((a, b) => (a.discont_price || a.price) - (b.discont_price || b.price))
         } else if (action.payload === 'down-price') {
            state.products.sort((a, b) => (b.discont_price || b.price)(a.discont_price || a.price))
         }
      },
      priceFilter: (state, action) => {
         const { fromPrice, toPrice } = action.payload
         const defaultToPrice = toPrice === '' ? Infinity : toPrice
         if (fromPrice || defaultToPrice) {
            state.products = state.products.map((product) => ({
               ...product,
               priceShow:
                  (product.discont_price || product.price) >= fromPrice
                  && (product.discont_price || product.price) <= defaultToPrice
            }))
         } else
            state.products = state.products.map((product) => ({
               ...product,
               selectShow: true,
               priceShow: true,
            }))
      },
   },
});

export default productSlice.reducer
export const {
   loadProducts,
   searchProducts,
   resetSearchProducts,
   sortFilter,
   priceFilter,
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