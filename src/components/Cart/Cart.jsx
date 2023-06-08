import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import URL from '../../asyncActions/url';
import { RxCross1 } from 'react-icons/rx';
import {
   decrementCountAction,
   incrementCountAction,
   removeFromCartAction,
} from '../../store/reducers/cartReducer';

export default function Cart({ id, title, image, discont_price, price, count }) {
   const dispatch = useDispatch();

   return (
      <div>
         <div className={s.cart}>
            <img src={`${URL}${image}`} alt={title} />
            <div className={s.info}>
               <p className={s.title}>{title}</p>
               <div className={s.btns}>
                  <button onClick={() => dispatch(decrementCountAction(id))}>
                     -
                  </button>

                  <button onClick={() => dispatch(incrementCountAction(id))}>
                     +
                  </button>
               </div>
            </div>
            {/* <h2 className={s.sale_price}>{discont_price ? discont_price : price}$</h2>
         {discont_price && <h3 className={s.price}>{price}</h3>} */}
            {discont_price !== null
               ? <div className={s.price}>
                  <p
                     style={{
                        textDecoration: 'line-through',
                        color: '#8B8B8B',
                        fontSize: '20px',
                     }}
                  >
                     {price} $
                  </p>
                  <p style={{ fontWeight: 'bold', fontSize: '26px' }}>
                     {discont_price} $
                  </p>
               </div>
               : <p
                  className={s.price}
                  style={{ fontWeight: 'bold', fontSize: '26px' }}
               >
                  {price} $
               </p>}

            <button
               className={s.clearBtn}
               onClick={() => dispatch(removeFromCartAction(id))}
            >
               <RxCross1 />
            </button>
         </div>
      </div>
   );
}
