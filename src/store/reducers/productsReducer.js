const defaultState = []

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const FILTER_SALE_PRODUCTS = 'FILTER_SALE_PRODUCTS'
const SORT_DEFAULT_PRODUCTS = 'SORT_DEFAULT_PRODUCTS'
const SORT_PRICE_DOWN_PRODUCTS = 'SORT_PRICE_DOWN_PRODUCTS'
const SORT_PRICE_UP_PRODUCTS = 'SORT_PRICE_UP_PRODUCTS'
const SORT_NAME_PRODUCTS = 'SORT_NAME_PRODUCTS'
const FILTER_RANGE_PRODUCTS = 'FILTER_RANGE_PRODUCTS'





export const productsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOAD_PRODUCTS:
         return action.payload.map(item => ({
            ...item,
            saleShow: true,
            rangeShow: true
         }))
      
      case FILTER_SALE_PRODUCTS:
         if (action.payload) {
            return state.map(item => {
               if (item.discont_price === nul) {
                  item.saleShow = false
               }
               return item
            })
         } else {
            return state.map(item => ({ ...item, saleShow: true}))
         }

      case SORT_DEFAULT_PRODUCTS:
         return [...state].sort((a, b) => a.id - b.id)
      
      case SORT_PRICE_DOWN_PRODUCTS:
         return [...state].sort((a, b) =>
            (b.discont_price ? b.discont_price : b.price) -
            (a.discont_price ? a.discont_price : a.price))
      
      case SORT_PRICE_UP_PRODUCTS:
         return [...state].sort((a, b) => {
            const priceA = a.discont_price ? a.discont_price : a.price;
            const priceB = b.discont_price ? b.discont_price : b.price;
            return priceA - priceB
         })
      
      case SORT_NAME_PRODUCTS:
         return [...state].sort((a, b) => a.title.localeCompare(b.title))
      
      case FILTER_RANGE_PRODUCTS:
         let { from, to } = action.payload
         if (isNaN(from)) {
            from = -Infinity
         }
         if (isNaN(to)) {
            to = Infinity
         }
         return [...state].map(item => ({
            ...item,
            rangeShow:
               (product.discont_price ? product.discont_price : product.price) >= from
               && (product.discont_price ? product.discont_price : product.price) <= to
         }))

      default:
         return state
   }
}

export const loadProductsAction = (payload) => ({ type: LOAD_PRODUCTS, payload })
export const filterSaleProductsAction = (payload) => ({ type: FILTER_SALE_PRODUCTS, payload })
export const sortDefaultProductsAction = () => ({ type: SORT_DEFAULT_PRODUCTS })
export const sortPriceDownProductsAction = () => ({ type: SORT_PRICE_DOWN_PRODUCTS })
export const sortPriceUpProductsAction = () => ({ type: SORT_PRICE_UP_PRODUCTS })
export const sortNameProductsAction = () => ({ type: SORT_NAME_PRODUCTS })
export const filterRangeProductsAction = (payload) => ({ type: FILTER_RANGE_PRODUCTS, payload })