import Botoes from "@/components/comunicacao/indireta/Botoes";
import Contador from "@/components/comunicacao/indireta/Contador";

export default function indireta() {
   return (
    <div className={`
      flex flex-col gap-5 
      justify-center items-center  h-screen 
   `}>
      <h1 className={`
         text-5xl font-black
         mb-10
      `}>Comunicacao indireta</h1>

      <div className='flex gap-5'>
         <Contador />
         <Contador />
         <Contador />
      </div>


    </div>  
   )
};
