const defaultState = {
   page: {},
   list: [],
}

const LOAD_PRODUCTS = '[PRODUCTS] LOAD_PRODUCTS'
const LOAD_PRODUCTS_SALE = '[PRODUCTS] LOAD_PRODUCTS_SALE '
const FILTER_SALE_PRODUCTS = '[PRODUCTS] FILTER_SALE_PRODUCTS'
const FILTER_PRICE_RANGE = '[PRODUCTS] FILTER_PRICE_RANGE'
const SORT_DEFAULT_PRODUCTS = '[PRODUCTS] SORT_DEFAULT_PRODUCTS'
const SORT_PRICE_DOWN = '[PRODUCTS] SORT_PRICE_DOWN'
const SORT_PRICE_UP = '[PRODUCTS] SORT_PRICE_UP'
const SORT_NAME_PRODUCTS = '[PRODUCTS] SORT_NAME_PRODUCTS'



export const productsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOAD_PRODUCTS:
         if (action.payload.category.title) {
            return {
               page: action.payload.category.title,
               list: action.payload.data.map((item) => ({
                  ...item,
                  saleShow: true,
                  rangeShow: true,
               }))
            }
         } else {
            return {
               page: { title: 'All Products' },
               list: action.paload.data.map((item) => ({
                  ...item,
                  saleShow: true,
                  rangeShow: true,
               }))
            }
         }
      
      case LOAD_PRODUCTS_SALE:
         return {
            page: { title: 'Sale of products' },
            list: state.list.filter(
               item => item.discont_price
            ).map(item => ({
               ...item,
               saleShow: true,
               rangeShow: true
            }))
         }
      
      case FILTER_SALE_PRODUCTS:
         return {
            ...state,
            list: state.list.map((item) => ({
               ...item,
               saleShow: action.payload
                  ? item.discont_price ?? false
                  : item.discont_price ?? true
            }))
         }

      case FILTER_PRICE_RANGE:
         const { from, to } = action.payload
         return {
            ...state,
            list: state.list.map((item) => ({
               ...item,
               rangeShow:
                  item.price >= +from &&
                  (item.discont_price || item.price) <= +to
            }))
         }

      case SORT_DEFAULT_PRODUCTS:
         return {
            ...state,
            list: [...state.list].sort((a, b) => a.id - b.id)
         }
      
      case SORT_PRICE_DOWN:
         return {
            ...state,
            list: [...state.list].sort((a, b) => {
               const current = a.discont_price || a.price;
               const next = b.discont_price || b.price;
               return current === next ? 0 : current > next ? -1 : 1;
            })
         }
      
      case SORT_PRICE_UP:
         return {
            ...state,
            list: [...state.list].sort((a, b) => {
               const prev = a.discont_price || a.price;
               const actual = b.discont_price || b.price;
               return prev === actual ? 0 : prev > actual ? 1 : -1;
         
            })
         }   
      
      case SORT_NAME_PRODUCTS:
         return {
            ...state,
            list: [...state.list].sort((a, b) => {
               const titleA = a.title.toUpperCase();
               const titleB = b.title.toUpperCase();
               return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
            }),
         };

         // return {
         //    ...state,
         //    list: [...state.list].sort((a, b) => a.title.localeCompare(b.title))
         // }
   
      

      default:
         return state
   }
}

export const loadProductsAction = (payload) => ({ type: LOAD_PRODUCTS, payload })
export const loadProductsSaleAction = () => ({ type: LOAD_PRODUCTS_SALE })
export const filterSaleProductsAction = (payload) => ({ type: FILTER_SALE_PRODUCTS, payload })
export const filterRangeProductsAction = (payload) => ({ type: FILTER_PRICE_RANGE, payload })

export const sortDefaultProductsAction = () => ({ type: SORT_DEFAULT_PRODUCTS })
export const sortPriceDownProductsAction = () => ({ type: SORT_PRICE_DOWN })
export const sortPriceUpProductsAction = () => ({ type: SORT_PRICE_UP })
export const sortNameProductsAction = () => ({ type: SORT_NAME_PRODUCTS })

