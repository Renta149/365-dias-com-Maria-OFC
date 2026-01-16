import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Converte para o horário de Brasília (UTC-3)
      const nowUTC = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      const nowBrasilia = new Date(nowUTC.getTime() - 3 * 3600000);
      
      // Define a próxima meia-noite no horário de Brasília
      const midnightBrasilia = new Date(nowBrasilia);
      midnightBrasilia.setHours(24, 0, 0, 0);
      
      const diff = midnightBrasilia.getTime() - nowBrasilia.getTime();
      
      if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        });
      } else {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Execução inicial

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto bg-[#cc1a1a] rounded-[1.5rem] p-4 md:p-6 shadow-2xl border-4 border-white/10 mb-10 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-col items-center gap-1">
        {/* Label superior */}
        <p className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] opacity-90 mb-1">
          OFERTA LIMITADA – TERMINA EM:
        </p>

        {/* Display do Timer - Fontes Reduzidas conforme solicitado */}
        <div className="flex items-center justify-center gap-2 md:gap-4 text-white">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums leading-none">
              {timeLeft.hours}
            </span>
          </div>
          
          <span className="text-3xl md:text-4xl font-black mb-1">:</span>
          
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums leading-none">
              {timeLeft.minutes}
            </span>
          </div>

          <span className="text-3xl md:text-4xl font-black mb-1">:</span>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums leading-none">
              {timeLeft.seconds}
            </span>
          </div>
        </div>

        {/* Labels das Unidades */}
        <div className="flex justify-between w-full max-w-[220px] md:max-w-[300px] mt-1 px-1">
          <span className="text-[8px] md:text-[10px] font-bold text-white/70 uppercase tracking-widest text-center w-16">Horas</span>
          <span className="text-[8px] md:text-[10px] font-bold text-white/70 uppercase tracking-widest text-center w-16">Minutos</span>
          <span className="text-[8px] md:text-[10px] font-bold text-white/70 uppercase tracking-widest text-center w-16">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;