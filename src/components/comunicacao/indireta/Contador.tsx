import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {
   const [num,setNum] = useState<number>(0)

   function incrementarFunc(valor: number) {
      setNum(num + valor)
   } 
   function decrementarFunc(valor: number) {
      setNum(num - valor)
   }

   return (
      <div className={`
         flex flex-col p-2
         border border-zinc-400 rounded-lg
      `}>
         <Display valor={num}/>
         <Botoes incrementar={incrementarFunc} decrementar={decrementarFunc}/>
      </div>
   )
};
