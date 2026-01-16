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
      <div className="w-full max-w-md flex flex-col bg-white rounded-[2rem] border border-gray-200 shadow-lg text-slate-900 overflow-hidden transition-all duration-300">
        <div className="pt-10 pb-4">
          <h3 className="text-4xl font-black text-center text-slate-900 tracking-tight uppercase">Plano básico</h3>
        </div>

        {/* Imagem Plano Básico - Borda preta e mais fina */}
        <div className="px-6 mb-4">
          <img 
            src="https://i.imgur.com/aRVKSDJ.png" 
            alt="Mockup Plano Básico" 
            className="w-full h-auto rounded-[2rem] border-2 border-black shadow-md"
          />
        </div>

        {/* Benefits List */}
        <div className="px-8 space-y-3 mb-8 mt-4 flex-grow">
          {BASIC_BENEFITS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 border-b border-gray-100 last:border-0 pb-2">
              {item.strikethrough ? (
                <i className="fa-solid fa-circle-exclamation text-red-400 mt-1 text-[10px]"></i>
              ) : (
                <i className="fa-solid fa-check text-[#2dd461] mt-1 text-xs"></i>
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
             <span className="text-6xl font-black text-[#2dd461] tracking-tighter">R$9,90</span>
          </div>
        </div>

        <div className="px-6 pb-10">
          <button 
            onClick={handleBasicClick}
            className="w-full bg-[#2dd461] hover:bg-[#28c055] text-white font-black py-5 px-4 rounded-2xl shadow-lg transition-all text-base leading-tight animate-pulse-button uppercase tracking-tight mb-6"
          >
            GARANTIR MINHA EDIÇÃO 2026
          </button>

          {/* Box de Nudge Social */}
          <div className="bg-[#fff9c4] border border-[#fdd835] rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
            <p className="text-slate-800 font-black text-sm md:text-base text-center leading-tight">
              92% das pessoas aproveitam a oferta abaixo:
            </p>
            <div className="w-10 h-10 bg-[#2dd461] rounded-full flex items-center justify-center shadow-lg">
              <i className="fa-solid fa-arrow-down text-white text-lg"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Devocional Pro - VERSÃO MAIS BONITA */}
      <div className="w-full max-w-md flex flex-col bg-gradient-to-b from-white via-[#f0fdf4] to-[#e8f5e9] rounded-[2.5rem] border-[6px] border-[#2dd461]/20 shadow-[0_35px_60px_-15px_rgba(45,212,97,0.15)] text-slate-900 overflow-visible relative ring-2 ring-[#2dd461]/5">
        
        {/* Selo VIP Superior: MAIS VENDIDO - Efeito de escala removido */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2dd461] to-[#10b981] text-white px-8 py-2.5 rounded-full flex items-center gap-2 shadow-[0_8px_20px_rgba(45,212,97,0.3)] z-50 whitespace-nowrap border-2 border-white cursor-default">
          <span className="text-sm">👑</span>
          <span className="text-[12px] font-black uppercase tracking-widest">A ESCOLHA MAIS POPULAR</span>
        </div>

        {/* Conteúdo do Topo Premium */}
        <div className="mt-14 px-6 flex flex-col items-center gap-6">
           {/* Texto Chamativo */}
           <div className="flex flex-col items-center gap-1">
             <span className="bg-[#2dd461]/10 text-[#059669] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-1">Conteúdo VIP Completo</span>
             <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter uppercase text-center flex items-center justify-center gap-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-700">
                  Devocional
                </span>
                <span className="text-[#2dd461]">Pro</span>
                <span className="normal-case">📖</span>
             </h3>
           </div>
        </div>

        {/* Imagem Plano Premium - Borda preta e mais fina - Efeito de escala removido */}
        <div className="px-6 mt-8 mb-4 relative">
          <div className="absolute inset-0 bg-[#2dd461]/5 blur-2xl rounded-full scale-90 -z-10"></div>
          <img 
            src="https://i.imgur.com/GqtpMSE.png" 
            alt="Mockup Plano Premium" 
            className="w-full h-auto rounded-[2rem] border-2 border-black shadow-xl"
          />
        </div>

        {/* Benefits List Premium - Estilizada */}
        <div className="px-8 space-y-3.5 mb-8 mt-6 flex-grow">
          {PREMIUM_BENEFITS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 border-b border-[#2dd461]/10 last:border-0 pb-2.5 group">
              <div className="bg-[#2dd461] rounded-full p-1 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-check text-white text-[10px]"></i>
              </div>
              <p className="text-[14px] md:text-[15px] font-bold text-left leading-snug text-slate-800 tracking-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Premium - Ultra Destacado */}
        <div className="text-center mb-8 bg-white/50 py-6 rounded-3xl mx-6 border border-white/80 shadow-inner">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Acesso Imediato & Vitalício</p>
          <p className="text-red-500 text-sm font-bold line-through mb-1 uppercase tracking-widest opacity-60">de R$ 149,90 por:</p>
          <div className="flex justify-center items-center gap-1">
             <span className="text-2xl font-bold text-slate-800 self-start mt-2">R$</span>
             <span className="text-8xl font-black text-[#2dd461] tracking-tighter leading-none">17,90</span>
          </div>
          <p className="text-[#059669] text-[11px] font-black mt-2 bg-[#2dd461]/5 inline-block px-3 py-1 rounded-lg">Pague uma vez, use para sempre!</p>
        </div>

        {/* CTA Premium - Máximo Destaque */}
        <div className="px-6 pb-12">
          <button 
            onClick={() => goToCheckout(CHECKOUT_LINKS.PREMIUM)}
            className="w-full bg-[#2dd461] hover:bg-[#28c055] text-white font-black py-7 px-4 rounded-[1.5rem] shadow-[0_20px_40px_rgba(45,212,97,0.3)] transition-all text-base md:text-xl leading-tight animate-pulse-button uppercase tracking-tight border-b-[6px] border-[#22a44b] active:border-b-0 active:translate-y-[6px] whitespace-nowrap"
          >
            QUERO O MEU ACESSO PRO AGORA
          </button>
          
          <div className="mt-4 flex flex-col items-center justify-center gap-1 text-center">
            <div className="flex items-center gap-2 opacity-40">
              <i className="fa-solid fa-lock text-[10px]"></i>
              <span className="text-[9px] font-bold uppercase tracking-widest">Ambiente 100% Criptografado</span>
            </div>
            {/* Texto de Prova Social Verde */}
            <p className="text-[#2dd461] text-[11px] md:text-[13px] font-black uppercase tracking-tight mt-1">
              1.979 pessoas escolheram essa oferta
            </p>
          </div>
        </div>

        {/* Trust Badges footer card */}
        <div className="border-t border-[#2dd461]/10 pt-4 pb-8 flex justify-center items-center gap-5 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
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
              Por apenas <span className="text-[#2dd461] font-black">R$5,00 a mais</span>, leve o <span className="font-black italic underline decoration-[#f39c12]/30">Devocional Pro 📖</span> com todos os bônus e acesso vitalício.
            </p>
            <div className="bg-[#f4fcf6] rounded-3xl py-8 px-4 mb-8 border-2 border-[#2dd461]/10">
              <p className="text-[#27ae60] text-xs font-black mb-1 uppercase tracking-widest">Oferta Exclusiva Agora:</p>
              <div className="text-[#2dd461] text-7xl font-black tracking-tighter">R$14,90</div>
            </div>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => goToCheckout(CHECKOUT_LINKS.UPSELL)}
                className="w-full bg-[#2dd461] text-white font-black py-6 rounded-2xl shadow-xl transition-all text-xl animate-pulse-button uppercase tracking-tight"
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