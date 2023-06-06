import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { addToCartAction } from '../../store/reducers/cartReducer';
import URL from '../../asyncActions/url';

export default function ProductItem({ product }) {
   const { id, image, price, title, discont_price } = product;
   const dispatch = useDispatch();
   const saleValue = Math.round(100 - discont_price * 100 / price);

   const addToCartHandler = e => {
      e.preventDefault();
      dispatch(addToCartAction(product));
   };

   return (
      <div className={s.product_wrapper}>
         <NavLink to={`/products/${id}`}>
            <div className={s.img_wrapper}>
               <img src={`${URL}${image}`} alt={title} />
               <Button
                  text={'add to Cart'}
                  content={'btn_product'}
                  onClick={addToCartHandler}
               />
            </div>
            <div className={s.price_wrapper}>
               <p className={s.sale_price}>
                  {discont_price !== null ? discont_price : price} $
               </p>
               {discont_price &&
                  <p className={s.price}>
                     {price} $
                  </p>}
               {discont_price &&
                  <p className={s.sale_value}>
                     {-saleValue} %
                  </p>}
               <h3>{title}</h3>
            </div>
         </NavLink>
      </div>
   );
}

// {/* <button onClick={addToCartHandler}>
//                Add to Cart
//             </button> */}
