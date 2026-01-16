import React from 'react';

const ITEMS = [
  "Fortalecer sua fé desde o início, criando uma conexão verdadeira com Deus.",
  "Viver uma espiritualidade mais profunda todos os dias, sem confusão.",
  "Crescer espiritualmente com um método simples e organizado.",
  "Rezar com confiança, sabendo exatamente o que meditar e praticar.",
  "Sair da frieza espiritual e viver uma caminhada real com Cristo e Maria."
];

const IdealForSection: React.FC = () => {
  return (
    <section className="px-4 md:px-8 py-24 bg-white relative overflow-hidden font-['Poppins']">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] leading-tight tracking-tighter">
            Ideal para você <br />
            <span className="text-red-600">que deseja:</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-4 w-full">
          {ITEMS.map((text, idx) => (
            <div 
              key={idx} 
              className="bg-[#f1faf3] py-6 px-8 md:py-8 md:px-12 rounded-[2rem] border border-[#d8e9dc] shadow-sm flex flex-col md:flex-row items-center text-center md:text-left transition-all hover:shadow-md hover:scale-[1.01] w-full gap-4 md:gap-8"
            >
              {/* Ícone de check - Mantido em destaque mas integrado ao fluxo horizontal no desktop */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#22c55e] rounded-full flex items-center justify-center shadow-sm shrink-0">
                <i className="fa-solid fa-check text-white text-lg md:text-xl"></i>
              </div>
              
              {/* Texto - Ajustado para ser mais compacto */}
              <p className="text-[#1a1a1a] font-normal text-lg md:text-xl leading-snug tracking-tight">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Elemento decorativo sutil no fundo */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-red-50 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default IdealForSection;