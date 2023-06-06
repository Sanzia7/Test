import React from 'react';
import s from './style.module.css';
import URL from '../../asyncActions/url';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { addToCartAction } from '../../store/reducers/cartReducer';
import { ProductPrice } from '../ProductPrice/ProductPrice';


export default function ProductItem({ product }) {
   const { id, image, price, title, discont_price } = product;
   const dispatch = useDispatch();
   const addToCart = (e) => {
      e.preventDefault();
      dispatch(addToCartAction(product));
   };

   return (
      <div className={s.product_item}>
         <NavLink to={`/products/${id}`}>
            <div className={s.img_wrapper}>
               <img src={`${URL}${image}`} alt={title} />
               <Button
                  text='Add to Cart'
                  content='btn_product'
                  onClick={addToCart}
               />
            </div>
            <div className={s.poduct_content}>
               <ProductPrice
                  price={price}
                  onClick={addToCart}
               />
               <h3>{title}</h3>
            </div>
         </NavLink>
      </div>
   );
}

// {/* <button onClick={addToCartHandler}>
//                Add to Cart
//             </button> */}
