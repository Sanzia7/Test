import React from 'react'
import SaleBanner from '../../components/SaleBanner/SaleBanner'
import s from './style.module.css'
import HomeBoard from '../../components/Home/HomeBoard'

export default function MainPage() {
   return (
      <div>
         <HomeBoard />
         <SaleBanner />
      </div>
   )
}
