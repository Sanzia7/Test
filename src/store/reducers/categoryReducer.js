const defaultState = {}

const LOAD_CATEGORY = "LOAD_CATEGORY"
const FILTER_SALE = "FILTER_SALE"
const SORT_DEFAULT = "SORT_DEFAULT"
const SORT_PRICE_DOWN = "SORT_PRICE_DOWN"
const SORT_PRICE_UP = "SORT_PRICE_UP"
const SORT_NAME = "SORT_NAME"
const FILTER_RANGE = "FILTER_RANGE"

export const categoryReducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOAD_CATEGORY:
         action.payload.data = [
            ...action.payload.data.map((item) => ({
               ...item,
               saleShow: true,
               rangeShow: true,
            }))
         ]
         return { ...action, payload }

      case FILTER_SALE:
         return {
            ...state,
            data: state.data.map((item) => {
               if (item.discont_price === null) {
                  item.saleShow = !action.payload;
               }
               return item;
            })
         }

      case SORT_DEFAULT:
         return { ...state, data: state.data.sort((a, b) => a.id - b.id) }

      case SORT_PRICE_DOWN:
         return {
            ...state,
            data: state.data.sort(
               (a, b) =>
                  (b.discont_price ? b.discont_price : b.price) -
                  (a.discont_price ? a.discont_price : a.price)
            )
         }

      case SORT_PRICE_UP:
         return {
            ...state,
            data: state.data.sort(
               (a, b) => a.price - b.price
            )
         }

      case SORT_NAME:
         return {
            ...state,
            data: state.data.sort(
               (a, b) => a.title.localeCompare(b.title)
            )
         }

      case FILTER_RANGE:
         let { from, to } = action.payload;
         if (isNaN(from)) {
            to = -Infinity
         }
         if (isNaN(to)) {
            to = Infinity
         }
         return {
            ...state,
            data: state.data.map((item) => ({
               ...item,
               rangeShow:
                  (item.discont_price ? item.discont_price : item.price) >= from &&
                  (item.discont_price ? item.discont_price : item.price) <= to
            }))
         }

      default:
         return state
   }
};

export const loadCategoryAction = (payload) => ({ type: LOAD_CATEGORY, payload })
export const filterSaleAction = (payload) => ({ type: FILTER_SALE, payload })
export const sortDefaultAction = () => ({ type: SORT_DEFAULT })
export const sortPriceDownAction = () => ({ type: SORT_PRICE_DOWN })
export const sortPriceUpAction = () => ({ type: SORT_PRICE_UP })
export const sortNameAction = () => ({ type: SORT_NAME })
export const filterRangeAction = (payload) => ({ type:FILTER_RANGE, payload })
