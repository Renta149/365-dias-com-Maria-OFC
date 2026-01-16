import React from 'react';
import BonusCard from './BonusCard';

const BONUSES = [
  {
    title: "Exército de São Miguel",
    description: "Guia Devocional de orações diárias guiadas para fortalecer sua proteção espiritual e sua confiança em Deus.",
    value: "R$ 67",
    imageUrl: "https://i.imgur.com/DSeakpu.png"
  },
  {
    title: "Guia do Santo Rosário",
    description: "Passo a passo simples para rezar o Rosário com mais foco, devoção e profundidade espiritual.",
    value: "R$ 47",
    imageUrl: "https://i.imgur.com/pjKxyTr.png"
  },
  {
    title: "Novena da Fé e Confiança",
    description: "9 dias de orações e reflexões para fortalecer sua esperança e confiança na Providência Divina.",
    value: "R$ 37",
    imageUrl: "https://i.imgur.com/7s1ioAq.png"
  },
  {
    title: "Plano Bíblico 2026",
    description: "Planner Bíblico organizado para ler a Bíblia ao longo do ano com constância e clareza espiritual.",
    value: "R$ 27",
    imageUrl: "https://i.imgur.com/qNs7fph.png"
  },
  {
    title: "Oração das 18 Horas",
    description: "Áudio Guia com orações guiadas para ouvir e rezar diariamente, mesmo com a rotina corrida.",
    value: "R$ 37",
    imageUrl: "https://i.imgur.com/8KTtNDN.png"
  },
  {
    title: "Virtudes de Maria",
    description: "Cartões Digitais com reflexões rápidas e práticas para aplicar as virtudes de Maria no seu dia a dia.",
    value: "R$ 47",
    imageUrl: "https://i.imgur.com/eNJBqFg.png"
  }
];

const BonusSection: React.FC = () => {
  return (
    <div className="w-full bg-[#2e1515] border-t border-white/5 pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Introdução de Bônus - Espaçamentos reduzidos */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3 uppercase tracking-tight leading-[1.1]">
            E NÃO PARA POR AÍ... <br /> TEM MAIS!
          </h2>
          
          <p className="text-2xl md:text-4xl text-white font-normal italic mb-6 opacity-90">
            Você também vai receber...
          </p>

          {/* Selo de Bônus */}
          <div className="bg-[#ff3b3b] text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_10px_rgba(255,59,59,0.2)] border border-white/5">
            <span className="text-sm">🔥</span>
            <span className="text-[11px] md:text-[14px] font-black uppercase tracking-[0.1em] whitespace-nowrap">
              6 BÔNUS EXCLUSIVOS
            </span>
          </div>
        </div>

        {/* Grid de Bônus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {BONUSES.map((bonus, idx) => (
            <BonusCard key={idx} id={idx + 1} {...bonus} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusSection;