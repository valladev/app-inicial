interface DisplayProps {
   valor: number
}

export default function Display(props: DisplayProps) {
   return (
      <div className= {`
         text-5xl rounded-md p-5 
         font-black bg-zinc-800
         flex flex-1 justify-center items-center
      `}>
         {props.valor}
      </div>
   )
};
