import React from "react";
import { PROBLEM_CARDS } from "../data";
import { HeartPulse, Hourglass, Fingerprint, ShieldAlert } from "lucide-react";

export default function ProblemCards() {
  const getIcon = (id: string) => {
    switch (id) {
      case "saude":
        return <HeartPulse className="w-5 h-5 text-brand" />;
      case "tempo":
        return <Hourglass className="w-5 h-5 text-brand" />;
      case "identidade":
        return <Fingerprint className="w-5 h-5 text-brand" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-zinc-500" />;
    }
  };

  return (
    <section className="py-20 border-b border-zinc-900 bg-[#050505]" id="problemas">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand font-semibold">
            Os Três Pilares da Erosão Silenciosa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-light tracking-tight">
            O preço real que você paga para pertencer ao sistema
          </h2>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            Eles vendem como "estabilidade corporativa" ou "sucesso profissional", mas o balanço financeiro do seu tempo e corpo revela uma quebra inevitável.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="group p-6 sm:p-8 rounded-2xl bg-card-theme border border-zinc-800/60 hover:border-brand/30 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1"
              id={`card-problem-${card.id}`}
            >
              <div className="space-y-4">
                {/* Header with Icon and Subtitle */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded bg-zinc-950 border border-zinc-900 group-hover:border-brand/30 transition-colors">
                    {getIcon(card.id)}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
                    {card.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-zinc-100 font-medium group-hover:text-brand transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* Dynamic Footer with stats and impact alert */}
              <div className="mt-8 pt-6 border-t border-zinc-900 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Indicador estatístico:</span>
                  <span className="font-mono text-xs text-brand font-bold">{card.metric}</span>
                </div>
                <p className="text-[11px] text-zinc-400 italic leading-snug bg-zinc-950/40 p-2.5 rounded border-l border-zinc-800">
                  {card.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
