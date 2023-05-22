import React from 'react'
import s from './style.module.css'
import logo from '../../media/logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

   const checkActivity = ({ isActive }) => isActive ? s.active : ''
   

   return (
      <div className={s.wrapper}>
         <div className={s.block}>
            <img src={logo} alt="logo" />
            <Link>Catalog</Link>
         </div>

         <div className={s.block}>
            <nav className={s.nav}>
               <NavLink>Main Page</NavLink>
            </nav>

         </div>

      </div>
   )
}
