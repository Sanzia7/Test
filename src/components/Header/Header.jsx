import React from "react";
import s from "./style.module.css";
import Logo from "../../media/logo.png";
import { Link, NavLink } from "react-router-dom";
import CartCounter from "../CartCounter/CartCounter";
// import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
   const links = [
      { id: 1, label: "Home Page", link: "/" },
      { id: 2, label: "All Products", link: "/products/all" },
      { id: 3, label: "All Sales", link: "/products/sale" },
   ];
   // const isActive = ({ isActive }) => (isActive ? s.active : "");


   return (
      <header className={s.nav_wrapper}>
         <nav className={s.nav}>
            <Link className={s.logo} href="/">
               <img src={Logo} alt="logo" />
               <p>Green Peace</p>
            </Link>

            <button className={s.btn}>
               <Link to="/categories/">Catalog</Link>
            </button>

            <div  className={s.links}>
               {links.map(({ id, label, ...item }) => (
                  <NavLink  key={id} {...item}>
                     {label}
                  </NavLink>
               ))}

               <div className={s.cart_icon}>
                  <CartCounter />
               </div>
               <button className={s.navBtn}>
                  <FontAwesomeIcon icon={faBars}  />
               </button>
            </div>
         </nav>
      </header>
   );
}


// ref = { link }

// onClick = { btnBarsHandler } 

  // const link = useRef();
   // const btnBarsHandler = () => {
   //    link.current.classList.toggle(s.nav_open);
   // };