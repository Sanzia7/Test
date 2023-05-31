import React from 'react';
import s from './ButtonGreen';

export default function ButtonGreen({ text, onClick }) {
   return (
      <button onClick={onClick} className={s.btn}>
         {text}
      </button>
   );
}
