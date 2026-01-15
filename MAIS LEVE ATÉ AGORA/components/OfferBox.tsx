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
    // Remove o '?' inicial se existir no search para evitar duplicidade
    const cleanParams = params.startsWith('?') ? params.substring(1) : params;
    return baseUrl.includes('?') ? `${baseUrl}&${cleanParams}` : `${baseUrl}?${cleanParams}`;
  };

  const handleBasicClick = () => {
    setShowUpsell(true);
  };

  const closeUpsell = () => {
    setShowUpsell(false);
  };

  const goToCheckout = (url: string, planName: string, value: number) => {
    window.location.href = getUrlWithParams(url);
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto px-4 relative">
      
      {/* Plano Básico */}
      <div className="flex-1 flex flex-col">
        <div className="flex-grow bg-[#2b435f] rounded-[2.5rem] p-8 shadow-xl text-white flex flex-col border border-white/10 relative overflow-hidden transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <i className="fa-solid fa-bolt-lightning text-yellow-400 text-xl"></i>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold leading-none text-white">Plano Básico</h3>
              <p className="text-xs text-white font-bold uppercase tracking-wider mt-1 opacity-70">Pagamento Único</p>
            </div>
          </div>

          <div className="text-left mb-8">
            <p className="text-white/60 text-sm font-bold line-through">De R$ 49,90</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">R$9</span>
              <span className="text-lg font-bold text-white">,90</span>
            </div>
          </div>

          <div className="space-y-4 mb-10 flex-grow">
            {BASIC_BENEFITS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                {item.strikethrough ? (
                  <i className="fa-solid fa-xmark text-red-500 mt-1 text-sm"></i>
                ) : (
                  <i className="fa-solid fa-check text-yellow-400 mt-1 text-sm"></i>
                )}
                <p className={`text-sm font-normal text-left ${item.strikethrough ? 'text-white line-through decoration-red-600 decoration-2 opacity-60' : 'text-white'}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={handleBasicClick}
            className="w-full bg-[#2dd461] hover:bg-[#28c055] text-white font-bold py-5 rounded-2xl shadow-[0_10px_30px_rgba(45,212,97,0.3)] transition-all text-lg uppercase tracking-tighter"
          >
            Garantir Plano Básico
          </button>
        </div>
      </div>

      {/* Plano Premium */}
      <div className="flex-1 bg-[#fcf9f2] rounded-[2.5rem] p-8 shadow-2xl text-slate-800 flex flex-col border-4 border-yellow-400 relative transition-all mt-0 lg:mt-0">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4a017] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg z-20 whitespace-nowrap">
          <i className="fa-solid fa-star text-sm"></i>
          <span className="text-xs font-bold uppercase tracking-widest">Mais Vendido</span>
        </div>

        <div className="flex items-center gap-4 mb-6 mt-2">
          <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
            <i className="fa-solid fa-crown text-[#d4a017] text-xl"></i>
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-[#002147] leading-none">Plano Premium</h3>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Pagamento Único</p>
          </div>
        </div>

        <div className="text-left mb-8">
          <p className="text-stone-400 text-sm font-bold line-through">De R$ 149,90</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[#002147]">R$17</span>
            <span className="text-lg font-bold text-[#002147]">,90</span>
          </div>
        </div>

        <div className="space-y-4 mb-10 flex-grow">
          {PREMIUM_BENEFITS.map((item, idx) => {
            const isBonus = item.text.includes('Bônus:');
            return (
              <div key={idx} className="flex items-start gap-3">
                <i className="fa-solid fa-check text-[#d4a017] mt-1 text-sm"></i>
                <p className={`text-sm text-left ${idx === 0 && !isBonus ? 'text-[#b8860b] font-bold' : 'text-black font-normal'}`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <button 
          onClick={() => goToCheckout(CHECKOUT_LINKS.PREMIUM, 'Plano Premium', 17.90)}
          className="w-full bg-[#2dd461] hover:bg-[#28c055] text-white font-bold py-5 rounded-2xl shadow-[0_10px_30px_rgba(45,212,97,0.3)] transition-all animate-pulse-button text-lg uppercase tracking-tighter"
        >
          Garantir Plano Premium
        </button>
      </div>

      {/* Upsell Modal */}
      {showUpsell && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeUpsell}></div>
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative z-[1001] animate-[scaleIn_0.3s_ease-out] text-center">
            
            <h2 className="text-[#f39c12] text-2xl md:text-3xl font-black leading-tight mb-4">
              ESPERE! Você está prestes a garantir a oferta completa!
            </h2>
            
            <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed mb-6">
              Por apenas R$5,00 a mais, leve o Pacote Premium e transforme o <span className="font-bold italic">devocional</span> em uma experiência ainda mais rica, divertida e inesquecevel.
            </p>

            <div className="bg-[#f4fcf6] rounded-3xl py-6 px-4 mb-8">
              <p className="text-[#27ae60] text-sm md:text-base font-bold mb-1">
                De <span className="line-through">R$297,00</span> por apenas
              </p>
              <div className="text-[#2dd461] text-5xl md:text-6xl font-black tracking-tighter">
                R$14,90
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => goToCheckout(CHECKOUT_LINKS.UPSELL, 'Plano Upsell Premium', 14.90)}
                className="w-full bg-[#00e640] text-white font-black py-5 rounded-2xl shadow-[0_10px_25px_rgba(0,230,64,0.3)] transition-all transform active:scale-95 text-xl flex items-center justify-center gap-3 animate-pulse-button"
              >
                Quero Aproveitar
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              
              <button 
                onClick={() => goToCheckout(CHECKOUT_LINKS.BASIC, 'Plano Básico Checkout Final', 9.90)}
                className="w-full bg-red-500/70 hover:bg-red-600/70 text-white font-bold py-3 rounded-2xl text-sm transition-colors"
              >
                Não, Quero o plano básico mesmo.
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default OfferBox;