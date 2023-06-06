const LOAD_PRODUCT = 'LOAD_PRODUCT'

export const productReducer = (state = {}, action) => {
   switch (action.type) {
      case LOAD_PRODUCT:
         if (!action.payload || action.payload.status === 'ERR') {
            return { status: '*'}
         } else {
            return { ...action.payload[0]}
         }
      default: 
         return state
   }
}

export const loadProductAction = (payload) => ({type: LOAD_PRODUCT, payload})