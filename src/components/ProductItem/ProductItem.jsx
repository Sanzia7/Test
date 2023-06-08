import React from 'react';
import s from './style.module.css';
import URL from '../../asyncActions/url';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import Button from '../UI/Button/Button';
import { addToCartAction } from '../../store/reducers/cartReducer';
//import { ProductPrice } from '../ProductPrice/ProductPrice';


export default function ProductItem({ product }) {
   const { id, image, title, price, discont_price } = product;
   const dispatch = useDispatch();

   // const addToCart = (e) => {
   //    e.preventDefault();
   //    dispatch(addToCartAction(product));
   // };

   return (
      <div className={s.item}>
         <NavLink to={`/products/${id}`} className={s.link}>           
               <img src={`${URL}${image}`} alt={title} />
               <h5>{title}</h5>                           
         </NavLink>
         {discont_price !== null ? (
            <div className={s.price}>
               <div className={s.sale}>Sale</div>
               <p
                  style={{
                     textDecoration: 'line-through',
                     color: '#8B8B8B',
                     fontSize: '20px',
                  }}
               >
                  {price} €
               </p>
               <p style={{ fontWeight: 'bold', fontSize: '26px' }}>
                  {discont_price} €
               </p>
               <p style={{ color: 'red', fontSize: '20px' }}>
                  {((price / discont_price) * 100 - 100).toFixed(1)} %
               </p>
            </div>
         ) : (
            <p style={{ fontWeight: 'bold', fontSize: '26px' }}>{price} €</p>
         )}

         <button className={s.btn} onClick={() => dispatch(addToCartAction(id))}>
            Add to card
         </button>
            {/* <div className={s.poduct_content}>
               <ProductPrice
                  price={price}
                  onClick={addToCart}
               />
               
               <Button
                  text='Add to Cart'
                  content='btn_product'
                  onClick={addToCart}
               />
            </div> */}
         
      </div>
   );
}

// {/* <button onClick={addToCartHandler}>
//                Add to Cart
//             </button> */}
