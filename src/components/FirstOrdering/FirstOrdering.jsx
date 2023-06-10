import React, { useState } from 'react'
import s from './style.module.css'
import gnome from './media/gnome.png' 
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ButtonLight from '../UI/ButtonLight/ButtonLight'

const sendPhone = (data) => {
   return axios.post(`http://localhost:3333/sale/send`, data)
}

const phoneLibInputStyle = {
   color: '#6C6C6C',
   height: '50px',
   borderRadius: '15px',
   borderColor: 'white',
   fontFamily: 'Montserrat',
   letterSpacing: '0.03em',
   fontSize: '16px',
   lineHeight: '120%',
   paddingLeft: '65px'
}

const phoneLibDropdownStyle = {
   color: '#6C6C6C',
   background: 'white',
   height: '50px',
   borderRadius: '15px 0 0 15px',
   border: 'none',
   fontFamily: 'Montserrat',
   letterSpacing: '0.03em',
   fontSize: '16px',
   lineHeight: '120%',
   paddingLeft: '15px'
}

export default function FirstOrdering() {
   const [phone, setPhone] = useState('')
   const [isSent, setIsSent] = useState(false)
   const [isCorrect, setIsCorrect] = useState(true)

   const phoneClass = isCorrect
      ? s.input_wrap
      : `${s.input_wrap} ${s.input_wrap_error}`

   const onSubmitHandler = (event) => {
      event.preventDefault()

      if (phone.length > 6) {
         setIsCorrect(true)
         sendPhone(phone)
         .then((resp) => {
            console.log(resp)
            setPhone('')
            setIsSent(true)
         })
            .catch((err) => console.log(err))
      } else {
         setIsCorrect(false)
      }
   }


   return (
      <section className={s.order}>
         <div className={s.img_order}>
            <img src={gnome} alt="gnome" />
         </div>
         {isSent ? (
            <div className={s.text_order}>
               <h3>
                  <p>Thank You!</p>
                  <p>You successfully issued Your first order.</p>
                  <p>Congratulations!</p>
               </h3>
            </div>
         ) : (
            <div className={s.text_order}>
               <h3>
                  <span className={s.discount}>10% off</span>
                  <p>on the first order</p>
               </h3>

               <form
                  onSubmit={onSubmitHandler}
                  method='post'
                  className={s.form}
               >
                  <div className={phoneClass}>
                        <PhoneInput
                           country={'de'}
                           value={phone}
                           pattern={'[+]{1}[0-9]{11}'}
                           onChange={phone => setPhone(phone)} 
                           inputStyle={phoneLibInputStyle}
                           buttonStyle={phoneLibDropdownStyle}
                        />
                  </div>
                  <ButtonLight text='Get a discount' />
               </form>
            </div>
         )}
      </section>
   )
}
