interface CirculosProps {
   texto: string
   quasePerfeito?: boolean
}

export default function Circulo(props: CirculosProps) {
   return (
      <div className={`
         flex justify-center items-center
         bg-purple-500 h-64 w-64 rounded-full
         text-black text-3xl
         ${props.quasePerfeito ? 'rounded-3xl ' : 'round-full'}
      `}>
         {props.texto}
      </div>
   )
};
