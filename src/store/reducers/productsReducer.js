const LOAD_PRODUCTS = "[PRODUCTS] LOAD_PRODUCTS";
const LOAD_PRODUCTS_SALE = "[PRODUCTS] LOAD_PRODUCTS_SALE ";
const FILTER_SALE_PRODUCTS = "[PRODUCTS] FILTER_SALE_PRODUCTS";
const FILTER_PRICE_RANGE = "[PRODUCTS] FILTER_PRICE_RANGE";
const SORT_DEFAULT_PRODUCTS = "[PRODUCTS] SORT_DEFAULT_PRODUCTS";
const SORT_PRICE_DOWN = "[PRODUCTS] SORT_PRICE_DOWN";
const SORT_PRICE_UP = "[PRODUCTS] SORT_PRICE_UP";
const SORT_NAME_PRODUCTS = "[PRODUCTS] SORT_NAME_PRODUCTS";

const defaultState = {
   titlePage: {},
   productList: [],
};

export const productsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOAD_PRODUCTS:
         if (action.payload.category.title) {
            return {
               titlePage: action.payload.category,
               productList: action.payload.data.map((item) => ({
                  ...item,
                  saleShow: true,
                  rangeShow: true,
               })),
            };
         } else {
            return {
               titlePage: { title: "All Products" },
               productList: action.payload.data.map((item) => ({
                  ...item,
                  saleShow: true,
                  rangeShow: true,
               })),
            };
         }

      case LOAD_PRODUCTS_SALE:
         return {
            titlePage: { title: "Sale of products" },
            productList: state.productList
               .filter((item) => item.discont_price)
               .map((item) => ({
                  ...item,
                  saleShow: true,
                  rangeShow: true,
               })),
         };

      case FILTER_SALE_PRODUCTS:
         return {
            ...state,
            productList: state.productList.map((item) => {
               if (item.discont_price === null) {
                  item.saleShow = !action.payload;
               }
               return item;
            }),
         };

      case FILTER_PRICE_RANGE:
         let { from, to } = action.payload;
         if (isNaN(from)) {
            from = -Infinity;
         }
         if (isNaN(to)) {
            to = Infinity;
         }
         return {
            ...state,
            productList: [...state.productList].map((item) => ({
               ...item,
               rangeShow:
                  (item.discont_price ? item.discont_price : item.price) >= from &&
                  (item.discont_price ? item.discont_price : item.price) <= to,
            })),
         };

      case SORT_DEFAULT_PRODUCTS:
         return {
            ...state,
            productList: [...state.productList].sort((a, b) => a.id - b.id),
         };

      case SORT_PRICE_DOWN:
         return {
            ...state,
            productList: [...state.productList].sort(
               (a, b) =>
                  (b.discont_price ? b.discont_price : b.price) -
                  (a.discont_price ? a.discont_price : a.price)
            ),
         };

      case SORT_PRICE_UP:
         return {
            ...state,
            productList: [...state.productList].sort(
               (a, b) =>
                  (a.discont_price ? a.discont_price : a.price) -
                  (b.discont_price ? b.discont_price : b.price)
            ),
         };

      case SORT_NAME_PRODUCTS:
         return {
            ...state,
            productList: [...state.productList].sort((a, b) =>
               a.title.localeCompare(b.title)
            ),
         };

      default:
         return state;
   }
};

export const loadProductsAction = (payload) => ({
   type: LOAD_PRODUCTS,
   payload,
});
export const loadProductsSaleAction = () => ({ type: LOAD_PRODUCTS_SALE });
export const filterSaleProductsAction = (payload) => ({
   type: FILTER_SALE_PRODUCTS,
   payload,
});
export const filterRangeProductsAction = (payload) => ({
   type: FILTER_PRICE_RANGE,
   payload,
});

export const sortDefaultProductsAction = () => ({
   type: SORT_DEFAULT_PRODUCTS,
});
export const sortPriceDownProductsAction = () => ({ type: SORT_PRICE_DOWN });
export const sortPriceUpProductsAction = () => ({ type: SORT_PRICE_UP });
export const sortNameProductsAction = () => ({ type: SORT_NAME_PRODUCTS });

// ...item,
// saleShow: action.payload
// ? item.discont_price ?? false
// : item.discont_price ?? true
// }))

//          case FILTER_PRICE_RANGE:
// const { from, to } = action.payload
// return {
//    ...state,
//    listProducts: state.list.map((item) => ({
//       ...item,
//       rangeShow:
//          item.price >= +from &&
//          (item.discont_price || item.price) <= +to
//    }))
// }

//    case SORT_PRICE_DOWN:
// return {
//    ...state,
//    productList: [...state.productList].sort((a, b) => {
//       const current = a.discont_price || a.price;
//       const next = b.discont_price || b.price;
//       return current === next ? 0 : current > next ? -1 : 1;
//    })
// }

//  case SORT_NAME_PRODUCTS:
// return {
//    ...state,
//    productList: [...state.productList].sort((a, b) => {
//       const titleA = a.title.toUpperCase();
//       const titleB = b.title.toUpperCase();
//       return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
//    }),
// };
