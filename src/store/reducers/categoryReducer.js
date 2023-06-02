const defaultState = {}

const LOAD_CATEGORY = "LOAD_CATEGORY"
const SALE_FILTER = "SALE_FILTER"
const DEFAULT_SORT = "DEFAULT_SORT"
const PRICE_DOWN_SORT = "PRICE_DOWN_SORT"
const PRICE_UP_SORT = "PRICE_UP_SORT"
const NAME_SORT = "NAME_SORT"
const RANGE_FILTER = "RANGE_FILTER"

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

      case SALE_FILTER:
         return {
            ...state,
            data: state.data.map((item) => {
               if (item.discont_price === null) {
                  item.saleShow = !action.payload;
               }
               return item;
            })
         }

      case DEFAULT_SORT:
         return { ...state, data: state.data.sort((a, b) => a.id - b.id) }

      case PRICE_DOWN_SORT:
         return {
            ...state,
            data: state.data.sort(
               (a, b) =>
                  (b.discont_price ? b.discont_price : b.price) -
                  (a.discont_price ? a.discont_price : a.price)
            )
         }

      case PRICE_UP_SORT:
         return {
            ...state,
            data: state.data.sort(
               (a, b) => a.price - b.price
            )
         }

      case NAME_SORT:
         return {
            ...state,
            data: state.data.sort(
               (a, b) => a.title.localeCompare(b.title)
            )
         }

      case RANGE_FILTER:
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
export const saleFilterAction = (payload) => ({ type: SALE_FILTER, payload })
export const defaultSortAction = () => ({ type: DEFAULT_SORT })
export const priceDownSortAction = () => ({ type: PRICE_DOWN_SORT })
export const priceUpSortAction = () => ({ type: PRICE_UP_SORT })
export const nameSortAction = () => ({ type: NAME_SORT })
export const rangeFilterAction = (payload) => ({ type: RANGE_FILTER, payload })
