import React from "react";
import s from "./style.module.css";
import ButtonLight from "../UI/ButtonLight/ButtonLight";
import { Link } from "react-router-dom";

export default function HomeBanner() {
   return (
      <div className={s.banner_container}>
            <h1>Welcome to our Green Peace</h1>
            <p className={s.info}>
               We offer you <br />
               <span>New Season</span>
            </p>
            <Link to="/sales/all">
               <ButtonLight text="Sale" />
            </Link>
         
      </div>
   );
}
