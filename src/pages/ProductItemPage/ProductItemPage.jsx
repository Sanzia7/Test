import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import URL from "../../asyncActions/url";
import ButtonGreen from '../../components/UI/ButtonGreen/ButtonGreen'
import { addToCartAction } from "../../store/reducers/cartReducer";

export default function ProductItemPage() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const [product, setProduct] = useState([]);

   useEffect(() => {
      window.scrollTo(0, 0);
      const productsURL = URL + "/products/";
      fetch(`${productsURL}${id}`)
         .then((resp) => resp.json())
         .then((data) => setProduct(data));
   }, [id]);


   const productItem = product ? Object.assign({}, ...product) : {};
   
   const { title, image, discont_price, price, description } = productItem;

   const saleValue = Math.round(100 - (discont_price * 100) / price);


   return (
      <div className={s.container}>
         <h2>{title}</h2>
         <div className={s.info}>
            <div className={s.img_wrapper}>
               <img src={`${URL}${image}`} alt={title} />
            </div>
            <div className={s.description}>
               <div className={s.price_box}>
                  <p className={s.sale_price}>
                     {discont_price !== null
                        ? discont_price
                        : price} $
                  </p>
                  {discont_price &&
                     <p className={s.price}>
                        {price} $
                     </p>}
                  {discont_price &&
                     <p className={s.sale_value}>
                        {-saleValue} %
                     </p>}
               </div>
               {/* <button onClick={() => dispatch(addToCartAction(product[0]))}>
                  to Cart
               </button> */}
               <ButtonGreen text={'Add to Cart'}
                  onClick={() => dispatch(addToCartAction(product[0]))}
               />
               <h4>Description:</h4>
               <p>{description}</p>
            </div>
         </div>
      </div>
   );
}
