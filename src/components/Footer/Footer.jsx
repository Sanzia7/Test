import React from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPhone,
   faLocation,
   faClock,
} from "@fortawesome/free-solid-svg-icons";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";




export default function Footer() {
   return (

      <footer className={s.container_footer}>
         <div className={s.contacts}>
            <div className={s.block}>
               <h3>Contacts:</h3>
               <a className={s.tel} href="tel:+499999999999">
                  {" "}
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+49 999 999 99 91</p>
               </a>
            </div>
            <div className={s.block}>
               <h3>Adress:</h3>
               <a href="https://www.google.com/search?q=telranDE">
                  <FontAwesomeIcon icon={faLocation} />
                  <p>Linkstraße 2/8 Etage, 10785 Berlin, Deutschland</p>
               </a>
            </div>
            <div className={s.block}>
               <h3>Shop hours:</h3>
               <p>
                  <FontAwesomeIcon icon={faClock} />
                  <p> 24 fours a day</p>
               </p>
            </div>
         </div>

         <div className={s.maps}>
            <iframe
               className={s.current_map}
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092271598806!2d13.370173793367387!3d52.50793280001194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1683197194602!5m2!1sru!2sde"
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>

         <div className={s.social_icon}>
            <a target="_blank" href="https://www.linkedin.com/school/tel-ran-de/about/">
               <BsWhatsapp />
            </a>
            <a target="_blank" href="https://www.facebook.com/telranDE/">
               <BsInstagram />
            </a>
            <a target="_blank" href="https://www.linkedin.com/school/tel-ran-de/about/">
               <FiTwitter />
            </a>
         </div>
      </footer>



   );
}

/*

   <div className={s.footer_container}>
               <div>
                  <p className={s.title}>Contact</p>
                  <p className={s.phone}>+49 999 999 99 99</p>
                  <div>
                     <span className={s.icon}>
                        <BsInstagram />
                     </span>

                     <span className={s.icon}>
                        <BsWhatsapp />
                        <FaFacebookSquare />
                        <FiTwitter />
                     </span>
                  </div>
               </div>

               <div>
                  <p className={s.title}>Address</p>
                  <p className={s.address}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                  <p className={s.hours}>Working Hours</p>
                  <p className={s.days}>24 hours a day</p>
               </div>
            </div>
 <iframe className={s.map} title='googleMaps' width="100%" height="525" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Tel-Ran.de%20GmbH+(My%20Business%20tName)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
*/

/*
 <footer className={s.container_footer}>
            <div className={s.contacts}>
               <div className={s.block}>
                  <h3>Contacts:</h3>
                  <a target="_blank" className={s.tel} href="tel:+499999999999">
                     {" "}
                     <FontAwesomeIcon icon={faPhone} />
                     +49 999 999 99 99
                  </a>
               </div>
               <div className={s.block}>
                  <h3>Adress:</h3>
                  <a target="_blank" href="https://www.google.com/search?q=telranDE">
                     <FontAwesomeIcon icon={faLocation} />
                     Linkstraße 2/8 Etage, 10785 Berlin, Deutschland
                  </a>
               </div>
               <div className={s.block}>
                  <h3>Shop hours:</h3>
                  <p>
                     (" ")
                     <FontAwesomeIcon icon={faClock} />
                     24 fours a day
                  </p>
               </div>
            </div>

            <div className={s.maps}>
               <iframe
                  className={s.current_map}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092271598806!2d13.370173793367387!3d52.50793280001194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1683197194602!5m2!1sru!2sde"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>

            <div className={s.social_icon}>
               <a target="_blank" href="https://www.linkedin.com/school/tel-ran-de/about/">
                  <BsWhatsapp />
               </a>
               <a target="_blank" href="https://www.facebook.com/telranDE/">
                  <BsInstagram />
               </a>
               <a target="_blank" href="https://www.linkedin.com/school/tel-ran-de/about/">
                  <FiTwitter />
               </a>
            </div>
         </footer>

         
 */