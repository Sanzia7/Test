const defaultState = [{}]

const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export const categoriesReducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOAD_CATEGORIES:
         return [...action.payload]

      default:
         return state
   }
}

export const loadCategoriesAction = (payload) => ({type: LOAD_CATEGORIES, payload})