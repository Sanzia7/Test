import React, { useRef } from 'react';
import s from './style.module.css';
import logo from '../../media/logo.png';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
   const checkActive = ({ isActive }) => (isActive ? s.active : '');

   const links = [
      { id: 1, label: 'Home Page', to: '/' },
      { id: 2, label: 'All Products', to: '/products/all' },
      { id: 3, label: 'All Sales', to: '/products/sale' },
   ];

   const navigation = useRef();

   const navBtnHendler = () => {
      navigation.current.classlist.toggle(s.nav_open);
   };

   const relocateHendler = () => {
      navigation.current.classlist.toggle('');
   };

   return (
      <header className={s.header}>

         <div className={s.catalog_container}>
            <NavLink className={s.logo_container}>
               <img src={logo} alt="logo" />
               <p>Green Peace</p>
            </NavLink>

            <HashLink
               smooth
               to="#categories"
               onClick={relocateHendler}
               className={s.catalog_btn}
            >
               <button>Catalog</button>
            </HashLink>
         </div>

         <nav ref={navigation} className={s.nav}>
            <button onClick={navBtnHendler}>
               <FontAwesomeIcon icon={faXmark} />
            </button>
            {links.map(({ id, label, to }) => (
               <NavLink
                  onClick={relocateHendler}
                  key={id}
                  to={to}
                  className={checkActive}
               >
                  {label}
               </NavLink>
            ))}
         </nav>

         <button onClick={navBtnHendler} className={s.navBtn}>
            <GiHamburgerMenu />
         </button>
         <NavLink to="/cart" className={s.cart}>
            <HiOutlineShoppingBag />
         </NavLink>
         
      </header>
   );
}
