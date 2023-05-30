const defaultState = []

const PRODUCTS_LOAD = 'PRODUCTS_LOAD'

export const productsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case PRODUCTS_LOAD: 
         return [...action.payload]
      
      default:
         return state
   }
}

export const productsLoadAction = (payload) => ({
   type: PRODUCTS_LOAD,
   payload
})