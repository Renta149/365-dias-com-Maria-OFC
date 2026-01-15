import React, { lazy, Suspense } from 'react';
import OfferBox from './components/OfferBox';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import SalesNotification from './components/SalesNotification';
import BonusSection from './components/BonusSection';
import TestimonialsSection from './components/TestimonialsSection';
import AuthorSection from './components/AuthorSection';
import { FEATURES } from './constants';

const App: React.FC = () => {
  const scrollToPlans = () => {
    const el = document.getElementById('escolha-seu-plano');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('pt-BR');
  };

  const MONTH_COVERS = [
    { name: 'Jan', url: 'https://i.imgur.com/wC8nK91.png' },
    { name: 'Fev', url: 'https://i.imgur.com/LDbd4di.png' },
    { name: 'Mar', url: 'https://i.imgur.com/18Z4DXE.png' },
    { name: 'Abr', url: 'https://i.imgur.com/3fQQO93.png' },
    { name: 'Mai', url: 'https://i.imgur.com/SjxLjrC.png' },
    { name: 'Jun', url: 'https://i.imgur.com/Xudvbk2.png' },
    { name: 'Jul', url: 'https://i.imgur.com/SnCRn1I.png' },
  ];

  const marqueeItems = [...MONTH_COVERS, ...MONTH_COVERS, ...MONTH_COVERS];

  return (
    <div className="min-h-screen text-white overflow-x-hidden selection:bg-yellow-400 selection:text-blue-900 bg-[#002147]">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_#003366_0%,_#002147_100%)] -z-10 opacity-50 pointer-events-none"></div>

      {/* Ribbon Superior - Crítico para Oferta */}
      <div className="bg-red-600 text-white text-center py-2 px-2 font-black text-base sm:text-xl md:text-3xl shadow-xl relative z-50 uppercase">
        oferta válida somente hoje: <span className="underline decoration-white/40">{getCurrentDate()}</span>
      </div>

      <header className="px-4 pt-10 pb-0 text-center max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
          Devocional diário <span className="text-yellow-300">365 dias com maria</span> - Edição 2026
        </h1>
        <h2 className="text-lg md:text-2xl font-normal opacity-80 leading-relaxed mb-12 max-w-3xl mx-auto">
          Um devocional diário com inspirações e meditações para <span className="text-yellow-300 font-bold">aprofundar sua espiritualidade mariana</span> e <span className="text-yellow-300 font-bold">fortalecer sua caminhada com Cristo</span>
        </h2>

        {/* Mockup LCP - Prioridade Máxima */}
        <div className="relative flex justify-center pt-4 mb-20 w-full">
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full scale-110"></div>
          <img 
            src="https://i.imgur.com/e8c1EQQ.png" 
            alt="Devocional 365 Dias com Maria Bundle" 
            className="w-full max-w-5xl h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            width="1200"
            height="800"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>

        <div className="mb-12">
          <button 
            onClick={scrollToPlans}
            className="w-full max-w-md bg-[#2dd461] hover:bg-[#28c055] text-white font-black text-lg md:text-xl py-5 rounded-2xl shadow-2xl transition-all animate-pulse-button uppercase tracking-tight"
          >
            GARANTIR MINHA EDIÇÃO 2026
          </button>
        </div>
      </header>

      {/* Seção Visual - Carregamento Preguiçoso */}
      <section className="px-4 py-16 text-center bg-white/5">
        <h3 className="text-3xl md:text-6xl font-black text-white mb-14 tracking-tighter">
          Veja o que você vai receber:
        </h3>
        
        <div className="relative w-full overflow-hidden mb-12">
          <div className="animate-marquee gap-6 flex">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="w-48 md:w-72 shrink-0">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20">
                  <img 
                    src={item.url} 
                    alt={`Capa ${item.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="288"
                    height="512"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <TestimonialsSection />
      </section>

      {/* Características do Produto */}
      <section className="px-6 py-20 bg-[#001835] relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-center mb-16 italic opacity-90">
            O que você encontrará nesta jornada...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl mb-6">
                  <i className="fa-solid fa-check text-white text-lg"></i>
                </div>
                <h4 className="font-black text-xl mb-3">{feature.title}</h4>
                <p className="text-white/70 leading-relaxed font-normal">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <BonusSection />

          <div id="escolha-seu-plano" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Escolha seu plano</h2>
            <p className="text-lg opacity-60 italic">Acesso imediato para começar sua jornada</p>
          </div>

          <OfferBox />
          
          <div className="my-16 flex flex-col items-center gap-6 opacity-30">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Ambiente 100% Seguro</p>
            <div className="flex gap-6 text-2xl">
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-solid fa-pix"></i>
            </div>
          </div>

          <GuaranteeSection />
          <AuthorSection />
          <FAQSection />
        </div>
      </main>

      <footer className="py-12 px-6 bg-[#000d1a] text-center text-white/30 text-sm border-t border-white/5">
        <p className="text-lg text-white/50 mb-4 font-bold italic">"A minha alma engrandece ao Senhor"</p>
        <p>&copy; 2026 Devocional 365 Dias com Maria. Todos os direitos reservados.</p>
      </footer>

      <SalesNotification />
    </div>
  );
};

export default App;