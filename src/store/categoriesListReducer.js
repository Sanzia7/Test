const defaultState = []

const LOAD_CATEGORIES_LIST = 'LOAD_CATEGORIES_LIST'

export const categoriesListReducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOAD_CATEGORIES_LIST:
         return [...action.payload]

      default:
         return state
   }
}

export const loadCategoriesListAction = (payload) => ({
   type: LOAD_CATEGORIES_LIST,
   payload
})