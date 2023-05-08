import Avo from "@/components/comunicacao/direta/Avo";

export default function Direta() {
   return (
      <div className="flex flex-col justify-center items-center h-screen">
         <h1 className="text-3xl font-black mb-10">Comunicação direta</h1>
         <Avo nome={"João"} sobrenome={"Barboza"}/>
         <Avo nome={"Antonio"} sobrenome={"Silva"}/>
      </div>
   )
};
