import Circulo from "@/components/basicos/Circulo";

export default function Circulos() {
   return (
      <div className={`
         flex justify-around items-center h-screen
      `}>
         <Circulo texto="circulo #01" quasePerfeito></Circulo>
         <Circulo texto="circulo #02"></Circulo>
      </div>
   )
};
