import Avo from "@/components/comunicacao/direta/Avo";

export default function Direta() {
   return (
      <div className="flex flex-col justify-center items-center h-screen">
         <h1 className="text-3xl mb-10">Comunicação direta</h1>
         <Avo nome={"João"} sobrenome={"Barboza"}/>
      </div>
   )
};
