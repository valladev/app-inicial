import { useState } from "react"

export default function Evento() {

   
   const [valor, setValor] = useState(0)
   
   function inc() {
      setValor(valor + 1)
      console.log(valor)
   }


   return (
      <button className={`
         flex justify-center items-center
         h-72 w-72 bg-green-600 text-4xl
      `} onClick={inc}>
         Evento
      </button>
   )
};
