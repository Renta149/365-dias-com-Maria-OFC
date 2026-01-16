import React from 'react';

const ProductContentsSection: React.FC = () => {
  const items = [
    "365 Reflexões diárias inspiradas nas virtudes de Maria",
    "Orações marianas poderosas para todos os momentos",
    "Desafios práticos para fortalecer sua vida cristã",
    "Passagens bíblicas selecionadas para cada dia",
    "Acesso vitalício para ler onde e quando quiser"
  ];

  return (
    <section className="py-12 bg-[#001021] flex flex-col items-center px-4 overflow-hidden">
      {/* Header Ribbon Estilo Anexo 01 */}
      <div className="bg-[#ff3333] text-white px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,51,51,0.4)] mb-10 flex items-center justify-center gap-2 max-w-[90%] md:max-w-none">
        <span className="text-xl">🔥</span>
        <h3 className="text-sm md:text-xl font-bold uppercase tracking-tight text-center leading-tight">
          O QUE VOCÊ VAI RECEBER AO ADQUIRIR SEU PRODUTO
        </h3>
      </div>

      {/* Mockup Container - Agora com as duas imagens arredondadas e com bordas */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-center w-full max-w-4xl px-4">
        {/* Imagem 1: Tablet */}
        <div className="w-full max-w-[320px] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 duration-500 bg-white/5">
          <img 
            src="https://i.imgur.com/dwKB9hu.png" 
            alt="Tablet Mockup" 
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
        
        {/* Imagem 2: Bundle */}
        <div className="w-full max-w-[320px] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 duration-500 bg-white/5">
          <img 
            src="https://i.imgur.com/8squ2g7.png" 
            alt="Bundle Mockup" 
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>

      {/* Lista de Conteúdo Estilo Anexo 02 */}
      <div className="w-full max-w-xl bg-black/40 border border-red-600/30 rounded-[2.5rem] p-8 md:p-10 relative mt-4 shadow-[0_0_50px_rgba(255,0,0,0.1)]">
        {/* Badge Acesso Imediato - Ajustado para uma única linha com whitespace-nowrap */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2dd461] text-black px-6 py-2 rounded-full flex items-center justify-center gap-2 shadow-lg border border-white/20 whitespace-nowrap min-w-max">
          <span className="text-sm">⚡</span>
          <span className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap leading-none">
            ACESSO IMEDIATO
          </span>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-6 leading-tight mt-4">
          Devocional Diário 365 Dias com Maria
        </h3>

        <p className="text-white/60 text-sm md:text-base text-center mb-10 font-normal italic">
          Ao garantir sua edição 2026 você terá:
        </p>

        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
              <div className="bg-green-500/20 rounded-full p-1.5 mt-1 shrink-0">
                <i className="fa-solid fa-check text-green-500 text-sm md:text-base"></i>
              </div>
              <p className="text-white/90 text-lg md:text-2xl font-bold leading-tight">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text Estilo Anexo 02 */}
        <div className="mt-12 text-center">
           <p className="text-white/60 text-[12px] md:text-[14px] font-normal leading-relaxed">
            Você recebe tudo na hora, direto no seu <span className="inline-flex items-center gap-1 text-white font-normal ml-1"><i className="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span> e no seu <span className="inline-flex items-center gap-1 text-white font-normal ml-1"><i className="fa-solid fa-envelope text-red-500"></i> e-mail</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductContentsSection;