import React from "react";
import s from "./style.module.css";
import Container from "../Container/Container";
import ButtonLight from "../UI/ButtonLight/ButtonLight";
import { Link } from "react-router-dom";

export default function HomeBanner() {
   return (
      <div className={s.banner_container}>
         <Container>
            <h1>Welcome to our Green World</h1>
            <p className={s.info}>
               We offer You our <br />
               <span>a New Season</span>
            </p>
            <Link to="/products/sale">
               <ButtonLight text="Sale" />
            </Link>
         </Container>
      </div>
   );
}
