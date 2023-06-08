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

// import { SlArrowDown } from 'react-icons/sl'


export default function Filter({ type }) {
   const dispatch = useDispatch()

   const discountHandler = (e) => {
      dispatch(filterSaleProductsAction(e.target.checked))
   }

   const sortOptionHandler = (e) => {
      e.preventDefault();
      switch (e.target.value) {

         case "default":
            dispatch(sortDefaultProductsAction())
            break

         case 'priceDown':
            dispatch(sortPriceDownProductsAction())
            break

         case 'priceUp':
            dispatch(sortPriceUpProductsAction())
            break

         case 'name':
            dispatch(sortNameProductsAction())
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
      dispatch(filterRangeProductsAction())
   }

   return (
      <div className={s.filter_container}>
         <div className={s.filter_price}>
            <label className={s.filter_price_title}>Price</label>            
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
         {type !== 'sale' && (
            <div className={s.filter_discount}>
               <label className={s.filter_discount_title}>
                  Discounted products
                  <input
                     type={"checkbox"}
                     name={"check_discount"}
                     onClick={discountHandler}
                  />
                  <span className={s.checkmark}></span>
               </label>
            </div>
         )}
         <div className={s.filter_sort}>
            <label className={s.filter_sort_title}>Sorted</label>
            <select name="sort_by" onInput={sortOptionHandler}>
               <option value="default">default</option>
               <option value="priceDown">price-down</option>
               <option value="priceUp">price-up</option>
               <option value="name">by title</option>
            </select>
            {/* <SlArrowDown  className={s.select_icon}/> */}
         </div>
      </div>
   )
}