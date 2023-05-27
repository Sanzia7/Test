const defaultState = [];

const CATEGORIES_LOAD = "CATEGORIES_LOAD";

export const categoriesReducer = (state = defaultState, action) => {
   switch (action.type) {
      case CATEGORIES_LOAD:
         return action.payload;

      default:
         return state;
   }
};

export const categoriesLoadAction = (payload) => ({
   type: CATEGORIES_LOAD,
   payload,
});
