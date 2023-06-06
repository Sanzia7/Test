const LOAD_PRODUCT_INFO = '[PRODUCT] LOAD_PRODUCT_INFO'

export const productReducer = (state = {}, action) => {
   switch (action.type) {
      case LOAD_PRODUCT_INFO:
         if (!action.payload || action.payload.status === 'ERR') {
            return { status: '*'}
         } else {
            return { ...action.payload[0]}
         }
      default: 
         return state
   }
}

export const loadProductInfoAction = (payload) => ({type: LOAD_PRODUCT_INFO, payload})