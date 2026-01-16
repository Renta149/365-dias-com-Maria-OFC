import React from 'react';

const GuaranteeSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center bg-[#f8fafc] rounded-[3rem] shadow-xl mt-12 mb-12 border border-slate-200">
      <div className="flex flex-col items-center">
        {/* Imagem da Garantia Requisitada */}
        <div className="mb-8 relative">
          <img 
            src="https://i.imgur.com/Q1OCzck.png" 
            alt="Selo de Garantia 7 Dias" 
            className="w-48 md:w-64 h-auto drop-shadow-lg transition-transform hover:scale-105 duration-300"
            loading="lazy"
            decoding="async"
            width="256"
            height="256"
          />
        </div>

        {/* Título Identico à Imagem */}
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Garantia de 7 dias
        </h2>

        {/* Texto Identico à Imagem */}
        <p className="text-slate-700 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
          Você tem 7 dias para testar a metodologia. Se por algum motivo você perceber que não é para você, nós devolvemos integralmente o seu investimento, sem questionamentos.
        </p>
        
        <div className="mt-10 flex items-center gap-3 py-3 px-6 bg-white rounded-full shadow-sm border border-slate-100 text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
           <i className="fa-solid fa-shield-halved text-green-500"></i>
           <span>Compra 100% Protegida</span>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;