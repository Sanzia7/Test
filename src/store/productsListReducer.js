const defaultState = []

const LOAD_PRODUCTS_LIST = 'LOAD_PRODUCTS_LIST'

export const productsListReducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOAD_PRODUCTS_LIST: 
         return [...action.payload]
      
      default:
         return state
   }
}

export const loadProductsListAction = (payload) => ({
   type: LOAD_PRODUCTS_LIST,
   payload
})