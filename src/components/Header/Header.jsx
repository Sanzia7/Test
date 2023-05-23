import React from 'react'
import s from './style.module.css'
import logo from '../../media/logo.png'
import { Link, NavLink } from 'react-router-dom'
import cartImg from '../../media/shopbag.png'


export default function Header() {

   const checkActivity = ({ isActive }) => isActive ? s.active : ''
   

   return (
      <div className={s.wrapper}>
         <div className={s.logo}>
            <img src={logo} alt="logo" />
            <Link className={s.category} to='/categories'>Catalog</Link>
         </div>

         <div className={s.block}>
            <nav className={s.nav}>
               <NavLink className={checkActivity} to='/'>Main Page</NavLink>
               <NavLink className={checkActivity} to='/products/all'>All products</NavLink>
               <NavLink className={checkActivity} to='/products/sale'>All sales</NavLink>
            </nav>
            <Link to='/cart'><img src={cartImg} alt="shopbag" /></Link>
         </div>
      </div>
   )
}
