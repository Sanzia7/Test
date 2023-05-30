import React from 'react'
import s from './style.module.css'
import Logo from '../../media/logo.png'
import { NavLink } from 'react-router-dom'
import CartCounter from '../CartCounter/CartCounter';

export default function Header() {

   const links = [
      { id: 1, label: 'Home Page', link: '/' },
      { id: 2, label: 'All Products', link: '/products/all' },
      { id: 3, label: 'All Sales', link: '/products/sale' },
   ];

   // const isActive = ({ isActive }) => (isActive ? s.active : '');

   return (
   
         <header className={s.header_container}>
            <div className={s.catalog_container}>
               <a className={s.logo_container} href="/">
                  <img src={Logo} alt="logo" />
                  <p>Green Peace</p>
               </a>
               <NavLink
                  className={s.catalog_btn}
                  to='/categories/all'
               >
                  <button>Catalog</button>
               </NavLink>
            </div>

            <nav className={s.nav}>
               {links.map(({ id, label, ...item }) => (
                  <NavLink
                     // className={isActive}
                     key={id}
                     {...item}
                  >
                     {label}
                  </NavLink>
               ))}
         </nav>
         <button>
            
         </button>
            <div className={s.icon}>
               <CartCounter />
            </div>
         </header>
   )
}
