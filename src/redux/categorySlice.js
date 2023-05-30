import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
   name: 'categories',
   initialState: {
      categories: [],
      loading: false
   },
   reducers: {
      loadCategories: (state, action) => {
         state.loading = true;
         state.categories = [...action.payload]
         state.loading = false
      },
   },
});

export default categorySlice.reducer;
export const { loadCategories } = categorySlice.actions






//--------------------------------
// const defaultState = [];

// const CATEGORIES_LOAD = "CATEGORIES_LOAD";

// export const categoriesReducer = (state = defaultState, action) => {
//    switch (action.type) {
//       case CATEGORIES_LOAD:
//          return action.payload;

//       default:
//          return state;
//    }
// };

// export const categoriesLoadAction = (payload) => ({
//    type: CATEGORIES_LOAD,
//    payload,
// });
