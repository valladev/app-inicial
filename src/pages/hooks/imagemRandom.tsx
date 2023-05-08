import ImagemRandom from "@/components/hooks/ImagemRandom";

export default function PagImagens() {
   return (
      <div className={`
         flex justify-center items-center h-screen
         gap-5
      `}>
         <ImagemRandom />
         <ImagemRandom />
      </div>
   )
};
