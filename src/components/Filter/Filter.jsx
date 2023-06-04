import React, { useState } from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import {
   filterRangeProductsAction,
   filterSaleProductsAction,
   sortDefaultProductsAction,
   sortNameProductsAction,
   sortPriceDownProductsAction,
   sortPriceUpProductsAction,
} from "../../store/reducers/productsReducer";
import { filterRangeAction, filterSaleAction, sortDefaultAction, sortNameAction, sortPriceDownAction, sortPriceUpAction } from "../../store/reducers/categoryReducer";

export default function Filter({ sortSaleShow, location }) {
   const dispatch = useDispatch();

   const saleHandler = (e) => {
      dispatch(
         location === "category"
            ? filterSaleAction(e.target.checked)
            : filterSaleProductsAction(e.target.checked)
      );
   };

   const sortOptionHandler = (e) => {
      e.preventDefault();
      switch (e.target.value) {
         case "default":
            dispatch(location === "category"
                  ? sortDefaultAction()
                  : sortDefaultProductsAction())
            break
         
         case 'priceDown':
            dispatch(location === 'category'
               ? sortPriceDownAction()
               : sortPriceDownProductsAction())
            break
         
         case 'priceUp':
            dispatch(location === 'category'
               ? sortPriceUpAction()
               : sortPriceUpProductsAction())
            break
         
         case 'name':
            dispatch(location === 'category'
               ? sortNameAction()
               : sortNameProductsAction())
            break
         
         default:
            break
      }
   };

   const [fromValue, setFromValue] = useState('from')
   const [toValue, setToValue] = useState('to')

   const changeHandler = (e) => {
      const range = {
         from: fromValue,
         to: toValue
      }
      const { value } = e.target
      if (e.target.name === 'from') {
         range.from = value
         setFromValue(Number(value))
      } else {
         range.to = value
         setToValue(Number(value))
      }
      dispatch(location === 'category'
         ? filterRangeAction(range)
         : filterRangeProductsAction())
   }

   return (
      <div className={s.container}>
         <div className={s.price}>
            <label className={s.price_title}>Price</label>
            <input
               type={"number"}
               name={"from"}
               step={'.1'}
               placeholder={"from"}
               min={'0'}
               onChange={changeHandler}
               value={fromValue}
            />
            <input
               type={"number"}
               name={"to"}
               placeholder={"to"}
               step={'.1'}
               min={'0'}
               onChange={changeHandler}
               value={toValue}
            />
         </div>
         {sortSaleShow && (
            <div className={s.sale}>
               <label className={s.sale_title}>
                  Sales
                  <input
                     type={"checkbox"}
                     name={"check_sale"}
                     onClick={saleHandler}
                  />
                  <span className={s.checkmark}></span>
               </label>
            </div>
         )}
         <div className={s.sort}>
            <label className={s.sort_title}>Sorted</label>
            <select name="sort_by" onInput={sortOptionHandler}>
               <option value="default">default</option>
               <option value="priceDown">price-down</option>
               <option value="priceUp">price-up</option>
               <option value="name">name</option>
            </select>
         </div>
      </div>
   )
}