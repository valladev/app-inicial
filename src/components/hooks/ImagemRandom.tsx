import Image from "next/image"
import { useState } from "react"

export default function ImagemRandom() {
   const [pesquisa, setPesquisa] = useState<string>('computer')
   const [tamanho, setTamanho] = useState<number>(300)

   const url = 'https://source.unsplash.com/featured/'

   function renderizarBotao(valor: string) {
      return (
         <button className={`
         bg-blue-500 px-4 py-2 rounded-md`} 
            onClick={() => {
               setPesquisa(valor)
               console.log(`${url}${pesquisa}`)
         }}>
            {valor}
         </button>
      )
   }

   return (
      <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
         <div className="flex justify-center gap-3 mb-5">
            <span>{pesquisa}</span>
            <span>{tamanho}x{tamanho}</span>
         </div>
         <Image 
            src={`${url}${tamanho}x${tamanho}?${pesquisa}`} 
            height={300} 
            width={300} 
            alt="imagem"
            className="rounded-md"
         />
            <div className="flex justify-between gap-5">
               {renderizarBotao("computer")}
               {renderizarBotao("person")}
            </div>

            <div>
               <input 
                  type="number" 
                  value={tamanho}
                  className='bg-zinc-800 p-2 rounded-md outline-none' 
                  onChange={event => {
                     setTamanho(+event.target.value)
                  }}
               />
            </div>
      </div>
   )
};
