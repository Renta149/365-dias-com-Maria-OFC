import React, { useState } from 'react';
import { BASIC_BENEFITS, PREMIUM_BENEFITS } from '../constants';

const CHECKOUT_LINKS = {
  BASIC: 'https://pay.lowify.com.br/checkout?product_id=hu348o',
  UPSELL: 'https://pay.lowify.com.br/checkout.php?product_id=Tzz2Vj&offer_slug=yc1atph',
  PREMIUM: 'https://pay.lowify.com.br/checkout?product_id=Tzz2Vj'
};

const OfferBox: React.FC = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  const getUrlWithParams = (baseUrl: string) => {
    const params = window.location.search;
    if (!params) return baseUrl;
    const cleanParams = params.startsWith('?') ? params.substring(1) : params;
    return baseUrl.includes('?') ? `${baseUrl}&${cleanParams}` : `${baseUrl}?${cleanParams}`;
  };

  const handleBasicClick = () => {
    setShowUpsell(true);
  };

  const closeUpsell = () => {
    setShowUpsell(false);
  };

  const goToCheckout = (url: string) => {
    window.location.href = getUrlWithParams(url);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 max-w-6xl mx-auto px-4 relative py-10">
      
      {/* Plano Básico */}
      <div className="w-full max-w-md flex flex-col bg-white rounded-[2rem] border border-gray-200 shadow-lg text-slate-900 overflow-hidden">
        <div className="pt-10 pb-4">
          <h3 className="text-4xl font-black text-center text-slate-900 tracking-tight">Plano básico</h3>
        </div>

        {/* Mockup Plano Básico - Com arredondamento e borda conforme solicitado */}
        <div className="px-6 mb-6">
          <div className="flex items-center justify-center aspect-square overflow-hidden rounded-3xl border-2 border-slate-100">
            <img 
              src="https://i.imgur.com/dwKB9hu.png" 
              alt="Mockup Plano Básico" 
              className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Benefits List */}
        <div className="px-8 space-y-3 mb-8 flex-grow">
          {BASIC_BENEFITS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 border-b border-gray-100 last:border-0 pb-2">
              {item.strikethrough ? (
                <i className="fa-solid fa-circle-exclamation text-red-400 mt-1 text-[10px]"></i>
              ) : (
                <i className="fa-solid fa-check text-[#37c87c] mt-1 text-xs"></i>
              )}
              <p className={`text-[14px] font-bold text-left leading-tight ${item.strikethrough ? 'text-gray-400 opacity-60 line-through' : 'text-slate-800'}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <p className="text-red-600 text-xs font-bold line-through mb-1 uppercase tracking-widest">de R$ 49,90 por:</p>
          <div className="flex justify-center items-center">
             <span className="text-6xl font-black text-[#37c87c] tracking-tighter">R$9,90</span>
          </div>
        </div>

        <div className="px-6 pb-10">
          <button 
            onClick={handleBasicClick}
            className="w-full bg-[#37c87c] hover:bg-[#2fa869] text-white font-black py-5 px-4 rounded-2xl shadow-lg transition-all text-base leading-tight uppercase tracking-tight mb-6"
          >
            GARANTIR MINHA EDIÇÃO 2026
          </button>

          {/* Box de Nudge Social */}
          <div className="bg-[#fff9c4] border border-[#fdd835] rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
            <p className="text-slate-800 font-black text-sm md:text-base text-center leading-tight">
              92% das pessoas aproveitam a oferta abaixo:
            </p>
            <div className="w-10 h-10 bg-[#00c853] rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <i className="fa-solid fa-arrow-down text-white text-lg"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Plano Devocional Pro - ATUALIZADO */}
      <div className="w-full max-w-md flex flex-col bg-white rounded-[2rem] border-4 border-gray-100 shadow-2xl text-slate-900 overflow-visible relative">
        
        {/* Selo Verde Superior: MAIS VENDIDO */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#76ff7a] text-black px-6 py-2 rounded-full flex items-center gap-2 shadow-lg z-50 whitespace-nowrap border border-black/40">
          <span className="text-xs">⚡</span>
          <span className="text-[11px] font-bold uppercase tracking-tight">MAIS VENDIDO</span>
        </div>

        {/* Conteúdo do Topo Premium - Atualizado com a pílula em uma linha */}
        <div className="mt-12 px-6 flex flex-col items-center gap-6">
           {/* Pílula Vermelha ÚLTIMA CHANCE - Agora em uma linha conforme pedido */}
           <div className="bg-[#ff3b3b] text-white px-4 md:px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-md w-full max-w-[95%]">
              <span className="text-sm md:text-base">⏰</span>
              <span className="text-[10px] md:text-[13px] font-black uppercase tracking-tight whitespace-nowrap">
                 ÚLTIMA CHANCE — OFERTA TERMINA HOJE
              </span>
           </div>

           {/* Texto Verde */}
           <p className="text-[#00c853] text-xl md:text-2xl font-bold">Todos os bônus inclusos</p>
           
           <h3 className="text-4xl font-black text-slate-900 leading-tight tracking-tight">Plano Devocional Pro 📖</h3>
        </div>

        {/* Mockup Plano Devocional Pro */}
        <div className="px-6 mb-4 mt-2">
          <div className="flex items-center justify-center aspect-square overflow-hidden relative rounded-3xl border-2 border-slate-100">
            <img 
              src="https://i.imgur.com/SwfYG1i.png" 
              alt="Mockup Plano Premium" 
              className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Benefits List Premium */}
        <div className="px-8 space-y-3 mb-8 flex-grow">
          {PREMIUM_BENEFITS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 border-b border-gray-100 last:border-0 pb-2">
              <i className="fa-solid fa-check text-[#37c87c] mt-1 text-xs"></i>
              <p className="text-[14px] font-bold text-left leading-tight text-slate-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Premium */}
        <div className="text-center mb-6">
          <p className="text-red-600 text-xs font-bold line-through mb-1 uppercase tracking-widest">de R$ 149,90 por:</p>
          <div className="flex justify-center items-center">
             <span className="text-7xl font-black text-[#37c87c] tracking-tighter">R$17,90</span>
          </div>
        </div>

        {/* CTA Premium */}
        <div className="px-6 pb-10">
          <button 
            onClick={() => goToCheckout(CHECKOUT_LINKS.PREMIUM)}
            className="w-full bg-[#37c87c] hover:bg-[#2fa869] text-white font-black py-6 px-4 rounded-2xl shadow-xl transition-all text-lg leading-tight animate-pulse-button uppercase tracking-tight"
          >
            GARANTIR MINHA EDIÇÃO PRO
          </button>
        </div>

        {/* Trust Badges footer card */}
        <div className="border-t border-gray-100 pt-4 pb-8 flex justify-center items-center gap-5 opacity-30">
           <i className="fa-brands fa-cc-visa text-2xl"></i>
           <i className="fa-brands fa-cc-mastercard text-2xl"></i>
           <i className="fa-solid fa-barcode text-2xl"></i>
           <i className="fa-solid fa-pix text-2xl"></i>
        </div>
      </div>

      {/* Upsell Modal */}
      {showUpsell && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeUpsell}></div>
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-[1001] animate-[scaleIn_0.3s_ease-out] text-center border-4 border-[#f39c12]/20">
            <h2 className="text-[#f39c12] text-3xl font-black leading-tight mb-4 tracking-tighter uppercase">
              ESPERE! VOCÊ PODE TER TUDO!
            </h2>
            <p className="text-slate-800 font-bold text-lg leading-relaxed mb-6">
              Por apenas <span className="text-[#37c87c] font-black">R$5,00 a mais</span>, leve o <span className="font-black italic underline decoration-[#f39c12]/30">Pacote Devocional Pro</span> com todos os bônus e acesso vitalício.
            </p>
            <div className="bg-[#f4fcf6] rounded-3xl py-8 px-4 mb-8 border-2 border-[#37c87c]/10">
              <p className="text-[#27ae60] text-xs font-black mb-1 uppercase tracking-widest">Oferta Exclusiva Agora:</p>
              <div className="text-[#37c87c] text-7xl font-black tracking-tighter">R$14,90</div>
            </div>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => goToCheckout(CHECKOUT_LINKS.UPSELL)}
                className="w-full bg-[#37c87c] text-white font-black py-6 rounded-2xl shadow-xl transition-all text-xl animate-pulse-button uppercase tracking-tight"
              >
                QUERO O PACOTE PRO
              </button>
              <button 
                onClick={() => goToCheckout(CHECKOUT_LINKS.BASIC)}
                className="w-full text-red-500 font-black py-2 text-[10px] transition-colors hover:underline uppercase tracking-widest opacity-60"
              >
                Não, quero apenas o plano básico (perder bônus)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferBox;