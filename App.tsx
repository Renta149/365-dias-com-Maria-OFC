import React from 'react';
import OfferBox from './components/OfferBox';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import SalesNotification from './components/SalesNotification';
import IdealForSection from './components/IdealForSection';
import ProductContentsSection from './components/ProductContentsSection';
import BonusSection from './components/BonusSection';
import CountdownTimer from './components/CountdownTimer';
import { FEATURES } from './constants';

// Fixed CoverItem by moving it outside of the App component and typing it with React.FC
// This resolves the TypeScript error where 'key' was not expected in the props type definition.
const CoverItem: React.FC<{ item: { name: string; url: string } }> = ({ item }) => (
  <div className="w-48 md:w-72 shrink-0 px-3">
    <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 transition-transform hover:scale-105 duration-300">
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
    <p className="mt-4 text-white/50 text-xs font-bold uppercase tracking-widest">{item.name}</p>
  </div>
);

const App: React.FC = () => {
  const scrollToPlans = () => {
    const el = document.getElementById('escolha-seu-plano');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('pt-BR');
  };

  const MONTH_COVERS = [
    { name: 'Janeiro', url: 'https://i.imgur.com/wC8nK91.png' },
    { name: 'Fevereiro', url: 'https://i.imgur.com/LDbd4di.png' },
    { name: 'Março', url: 'https://i.imgur.com/18Z4DXE.png' },
    { name: 'Abril', url: 'https://i.imgur.com/3fQQO93.png' },
    { name: 'Maio', url: 'https://i.imgur.com/SjxLjrC.png' },
    { name: 'Junho', url: 'https://i.imgur.com/Xudvbk2.png' },
    { name: 'Julho', url: 'https://i.imgur.com/SnCRn1I.png' },
  ];

  // Avatares para prova social
  const AVATARS = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop"
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden selection:bg-yellow-400 selection:text-blue-900 bg-[#1d1d1d]">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_#2a2a2a_0%,_#1d1d1d_100%)] -z-10 opacity-50 pointer-events-none"></div>

      {/* Ribbon Superior - Oferta */}
      <div className="bg-red-600 text-white text-center py-2 px-2 font-normal text-[12px] xs:text-[14px] sm:text-[22px] md:text-[28px] lg:text-[38px] xl:text-[45px] shadow-xl relative z-50 uppercase whitespace-nowrap overflow-hidden">
        ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <span className="underline decoration-white/40">{getCurrentDate()}</span>
      </div>

      {/* Selo de Compra Segura - Abaixo da faixa vermelha */}
      <div className="flex justify-center pt-4 pb-0 relative z-40">
        <div className="bg-[#2dd461] px-4 py-1.5 rounded-full flex items-center gap-2.5 shadow-lg border border-black/10">
          <span className="text-sm md:text-base">🔒</span>
          <span className="text-[11px] md:text-[13px] font-semibold text-black uppercase tracking-tighter">
            COMPRA 100% SEGURA E PROTEGIDA
          </span>
        </div>
      </div>

      <header className="px-4 pt-6 pb-0 text-center max-w-5xl mx-auto">
        {/* Título Principal */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 tracking-tight">
          Devocional diário <span className="text-yellow-300">365 dias com maria</span> - Edição 2026
        </h1>

        {/* Mockup LCP - Adicionado rounded-3xl para arredondar extremidades */}
        <div className="relative flex justify-center pt-2 mb-4 w-full">
          <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-110"></div>
          <div className="rounded-3xl overflow-hidden relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img 
              src="https://i.imgur.com/8squ2g7.png" 
              alt="Devocional 365 Dias com Maria Bundle" 
              className="w-full max-w-4xl h-auto block"
              width="1200"
              height="800"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>

        {/* Subheadline Persuasiva: Fonte Regular e Cor Viva */}
        <h2 className="text-lg md:text-2xl font-normal leading-relaxed mb-6 max-w-4xl mx-auto text-white">
          Descubra o devocional simples que <span className="text-yellow-400">aprofunda sua fé todos os dias</span>, fortalecendo sua <span className="text-yellow-400">espiritualidade com Maria</span> e sua <span className="text-yellow-400">caminhada com Cristo</span>.
        </h2>

        <div className="mb-2">
          <button 
            onClick={scrollToPlans}
            className="w-full max-w-md bg-[#2dd461] hover:bg-[#28c055] text-white font-bold text-lg md:text-xl py-5 rounded-2xl shadow-2xl transition-all animate-pulse-button uppercase tracking-tight"
          >
            GARANTIR MINHA EDIÇÃO 2026
          </button>
        </div>
      </header>

      {/* Seção Visual - Prova Social */}
      <section className="px-4 py-8 text-center bg-[#1d1d1d] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-[14px] md:text-lg font-normal text-white mb-2 leading-snug">
            Você recebe tudo na hora, direto no seu <span className="inline-flex items-center gap-1.5 font-normal"><i className="fa-brands fa-whatsapp text-[#25d366] text-xl"></i> WhatsApp</span> <br className="hidden md:block" /> e no seu <span className="inline-flex items-center gap-1.5 font-normal"><i className="fa-solid fa-square-envelope text-red-500 text-xl"></i> e-mail</span>
          </p>

          <div className="flex justify-center -space-x-4 mb-2">
            {AVATARS.map((url, i) => (
              <img 
                key={i} 
                src={url} 
                className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-[#1d1d1d] object-cover shadow-lg" 
                alt="Cliente"
              />
            ))}
          </div>

          <p className="text-[10px] md:text-lg font-bold text-white/70 tracking-[0.2em] uppercase transition-all">
            MAIS DE 1.000 CLIENTES!
          </p>
        </div>
      </section>

      {/* BLOCO SELECIONADO NA COR PRETA #000000 - CARROSSEL CORRIGIDO */}
      <section className="py-20 text-center bg-[#000000] border-y border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto mb-12 px-4">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Veja um dos materiais que você vai receber na prática:
          </h3>
        </div>
        
        {/* Carrossel de Capas Infinito */}
        <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="animate-marquee flex flex-nowrap">
            {/* Trilha 1 */}
            <div className="flex flex-nowrap">
              {MONTH_COVERS.map((item, idx) => (
                <CoverItem key={`t1-${idx}`} item={item} />
              ))}
            </div>
            {/* Trilha 2 (Duplicata Exata) */}
            <div className="flex flex-nowrap">
              {MONTH_COVERS.map((item, idx) => (
                <CoverItem key={`t2-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Características do Produto */}
      <section className="px-4 py-12 bg-[#fefaf9] relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-10 text-[#2c1810] leading-tight px-4">
            O que você <span className="text-red-600 block sm:inline">vai aprender:</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-0">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
                <div className="text-5xl mb-6">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-2xl mb-4 text-[#6b3e2e]">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed font-normal text-lg">
                  {feature.description.split(' ').map((word, i) => {
                    const isKeyword = ["virtudes", "Deus", "fé", "confiança", "caminhada", "Cristo", "Palavra"].some(k => word.toLowerCase().includes(k.toLowerCase()));
                    return isKeyword ? <strong key={i} className="text-gray-800 font-bold">{word} </strong> : word + " ";
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nova Seção: Ideal para você que deseja */}
      <IdealForSection />

      {/* Seção baseada nos anexos enviados */}
      <ProductContentsSection />

      {/* BonusSection movida para fora do main para ocupar largura total sem as bordas cinzas */}
      <BonusSection />

      <main className="px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* CABEÇALHO DE PLANOS FIEL À IMAGEM */}
          <div id="escolha-seu-plano" className="mb-14 scroll-mt-24 flex flex-col items-center gap-6">
            {/* Título Dual Tone: Branco e Vermelho - Fonte Aumentada conforme solicitado */}
            <h2 className="text-5xl md:text-[110px] font-black text-center leading-[0.9] tracking-tighter max-w-5xl mx-auto">
              <span className="text-white block">Escolha o Melhor</span>
              <span className="text-[#ff3b3b] block">Plano Para Você!</span>
            </h2>
          </div>

          {/* CRONÔMETRO REGRESSIVO - Reposicionado abaixo do título conforme solicitado */}
          <CountdownTimer />

          <OfferBox />
          
          <div className="my-8 flex flex-col items-center gap-2 opacity-30">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Ambiente 100% Seguro</p>
            <div className="flex gap-6 text-2xl text-white">
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-solid fa-barcode"></i>
              <i className="fa-solid fa-pix"></i>
            </div>
          </div>

          <GuaranteeSection />
          <FAQSection />
        </div>
      </main>

      <footer className="py-10 px-6 bg-[#000d1a] text-center text-white/30 text-sm border-t border-white/5">
        <p className="text-lg text-white/50 mb-3 font-bold italic">"A minha alma engrandece ao Senhor"</p>
        <p>&copy; 2026 Devocional 365 Dias com Maria. Todos os direitos reservados.</p>
      </footer>

      <SalesNotification />
    </div>
  );
};

export default App;