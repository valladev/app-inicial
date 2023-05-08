interface BotoesProps{
   incrementar: (valor: number) => void
   decrementar: (valor: number) => void
}

export default function Botoes(props: BotoesProps) {
   return (
      <div className={`
         flex justify-between pt-2 gap-2
         
      `}>
         <button className="botao flex-1"
            onClick={() => props.decrementar(10)}>
            -10
         </button>

         <button className="botao flex-1"
            onClick={() => props.incrementar(7)}>
            +13
         </button>
      </div>
   )
};
