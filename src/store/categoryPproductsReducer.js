const defaultState = {}

const LOAD_CATEGORY_PRODUCTS = 'LOAD_CATEGORY_PRODUCTS'

export const categoryPproductsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOAD_CATEGORY_PRODUCTS:
         return { ...action.payload }

      default:
         return state
   }
}

export const loadCategoryProductsAction = (payload) => ({
   type: LOAD_CATEGORY_PRODUCTS,
   payload
})