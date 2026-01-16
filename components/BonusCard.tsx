import React from 'react';

interface BonusCardProps {
  id: number;
  title: string;
  description: string;
  value: string;
  imageUrl: string;
}

const BonusCard: React.FC<BonusCardProps> = ({ id, title, description, value, imageUrl }) => {
  return (
    <div className="group bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border-4 border-black shadow-2xl flex flex-col h-full transition-all hover:border-black/80">
      
      {/* Área da Imagem com Selo Amarelo */}
      <div className="relative w-full aspect-[4/3] overflow-hidden border-b-4 border-black">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Selo Amarelo - Agora arredondado e com borda mais grossa */}
        <div className="absolute top-5 right-5 bg-[#facc15] text-black font-black px-5 py-2 rounded-full text-xs shadow-xl border-2 border-black uppercase tracking-tighter">
          BÔNUS #{id}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="text-white font-black text-2xl mb-4 uppercase leading-tight tracking-tight">
          {title}
        </h3>

        <p className="text-white/60 text-base md:text-lg leading-relaxed font-normal mb-8 flex-grow">
          {description}
        </p>

        {/* Barra de Valor - Agora arredondada e com borda mais grossa */}
        <div className="bg-[#1e1e1e] border-4 border-black rounded-2xl py-4 px-6 flex items-center justify-center gap-2 shadow-[inset_0_0_15px_rgba(0,0,0,0.3)]">
          <span className="text-white/60 text-sm font-bold">Valor:</span>
          <span className="text-red-500 font-bold text-lg line-through decoration-[2px]">
            {value}
          </span>
          <span className="text-[#2ed462] font-black text-lg ml-1 uppercase">
            GRÁTIS
          </span>
        </div>
      </div>
    </div>
  );
};

export default BonusCard;