import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import URL from "../../asyncActions/url";
import { addToCartAction } from "../../store/reducers/cartReducer";
import Button from "../../components/UI/Button/Button";
import { fetchProductInfo } from "../../asyncActions/products";
import { ProductPrice } from "../../components/ProductPrice/ProductPrice";

export default function ProductItemPage() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const product = useSelector((store) => store.product);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      if (product.status === '*') {
         navigate('/*');
      }
   }, [navigate, product]);


   useEffect(() => {
      id && dispatch(fetchProductInfo(`/products/${id}`));
   }, [dispatch, id]);


   const { title, image, discont_price, price, description } = productItem || {};

   const addToCart = (e) => {
      e.preventDefault()
      dispatch(addToCartAction(product))
   }

   // const sale = discont_price && Math.round(((price - discont_price) * 100) / price)

   return (
      <div className={s.product_item}>
         <div className={s.product_container}>
            <h2>{title}</h2>
            <div className={s.info_wrapper}>
               <div className={s.img_wrapper}>
                  <img src={`${URL}${image}`} alt={title} />
               </div>
               <div className={s.info_contetnt}>
                  <div className={s.description}>
                     <h3>Description:</h3>
                     <p>{description}</p>
                  </div>
                  <ProductPrice
                     price={price}
                     discont_price={discont_price}
                  />
                  <Button
                     text="add to cart"
                     content="btn_info"
                     onClick={addToCart}
                  />
               </div>
            </div>
         </div>

      </div>
   );
}


//  <div className={s.price_box}>
//                      <p className={s.sale_price}>
//                         {sale ? discont_price : price} $
//                      </p>
//                      <>
//                         <p className={s.old_price}>{price} $</p>
//                         <p className={s.sale}>-{discont} %</p>
//                      </>
//                   </div> 

   // useEffect(() => {
   //    window.scrollTo(0, 0);
   //    const productURL = URL + "/products/";
   //    fetch(`${productURL}${id}`)
   //       .then((resp) => resp.json())
   //       .then((data) => setProduct(data));
   // }, [id]);

   // const [product, setProduct] = useState([]);
   // const productItem = product ? Object.assign({}, ...product) : {};
   // const productItem = product ? product : {};