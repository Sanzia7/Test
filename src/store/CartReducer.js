const defaultState = []

const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT'

export const cartReducer = (state = defaultState, action) => {
   switch (action.type) {
      case CART_ADD_PRODUCT:
         const cartProduct = state.find(el => el.id === action.payload.id)
         if (cartProduct) {
            cartProduct.count++
            return [...state]
         } else return [...state, { ...action.payload, count: 1 }]

      default:
         return state
   }
}
