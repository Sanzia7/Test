import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import URL from "../../asyncActions/url";
import { addToCart } from "../../redux/cartSlice";

export default function ProductCard({
   id,
   image,
   title,
   price,
   discont_price,
}) {
   const dispatch = useDispatch();

   const link = `/products/${id}`;

   const addToCartAction = (id) => {
      dispatch(addToCart(+id));
      toast.success("Successfully added to cart", {
         position: "top-right",
         autoClose: 500,
         hideProgressBar: false,
         closeOnClick: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
   };

   return (
      <div className={s.wrapper}>
         <button className={s.btn_cart} onClick={() => addToCartAction(id)}>
            Add to Cart
         </button>
         <Link to={link}>
            <div className={s.product}>
               <div className={s.img_wrap}>
                  {discont_price === null ? (
                     ""
                  ) : (
                     <div className={s.discount}>SALE!</div>
                  )}
                  <img src={`${URL}${image}`} alt={title} />
               </div>
               <p className={s.title}>{title}</p>
               <div className={s.price_wrap}>                 
                     {discont_price === null ? (
                        <p className={s.price}>${price.toFixed(2)}</p>
                     ) : (
                        <>
                           <p className={s.price}>${discont_price.toFixed(2)}</p>
                           <p className={s.prev_price}>${price.toFixed(2)}</p>
                        </>
                     )}
               </div>
            </div>
         </Link>
      </div>
   );
}
