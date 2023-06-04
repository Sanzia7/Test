import React from "react";
import { useEffect, useRef, useState } from "react";
import s from "./style.module.css";
import Logo from "../../media/logo.png";
import logoW from "../../media/logo_white.png";
import { NavLink } from "react-router-dom";
import ButtonGreen from "../UI/ButtonGreen/ButtonGreen";
import CartCounter from "../CartCounter/CartCounter";
import { SlHandbag } from "react-icons/sl";

export default function Header() {
   const refHd = useRef(null);
   const [isActive, setIsActive] = useState(false);

   const scrollHandler = (e) => {
      if (isActive) {
         e.preventDefault();
         e.stopPropagation();
      }
   };

   const links = [
      { id: 1, title: "Main Page", link: "/" },
      { id: 2, title: "All Products", link: "/products/all" },
      { id: 3, title: "All Sales", link: "/sales/all" },
   ];

   useEffect(() => {
      refHd.current.addEventListener("wheel", scrollHandler);
      return () => refHd.current.removeEventListener("wheel", scrollHandler);
   });

   return (
      <header className={s.header} ref={refHd}>
         <div className={s.logo_wrapper}>
            <NavLink to="/">
               <img src={isActive ? logoW : Logo} alt="logo" />
            </NavLink>
            <NavLink to="/catalog">
               <ButtonGreen text={"Catalog"} />
            </NavLink>
         </div>
         <div className={s.nav_menu}>
            {links.map((item) => (
               <NavLink to={item.link} key={item.id}>
                  {item.title}
               </NavLink>
            ))}
         </div>
         <div className={s.cart_wrapper}>
            <NavLink to="/cart">
               <SlHandbag className={s.cart} />
               <CartCounter className={s.cart_counter} />
            </NavLink>
         </div>
         <div
            className={isActive ? s.burger_active : s.burger}
            onClick={() => setIsActive(!isActive)}
         >
            <span className={s.burger_line}></span>
            <span className={s.burger_line}></span>
            <span className={s.burger_line}></span>
         </div>

         <div className={isActive ? s.mob_menu_active : s.mob_menu}>
            <ul className={s.mob_menu_links}>
               {links.map((item) => (
                  <NavLink to={item.link} key={item.id}>
                     <li onClick={() => setIsActive(!isActive)}>{item.title}</li>
                  </NavLink>
               ))}
            </ul>
         </div>
      </header>
   );
}

// ref = { link }

// onClick = { btnBarsHandler }

// const link = useRef();
// const btnBarsHandler = () => {
//    link.current.classList.toggle(s.nav_open);
// };
