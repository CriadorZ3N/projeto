import React, { useState } from "react";
import { STORY_DATA } from "../data";
import { Clock, HeartOff, Landmark, Milestone, ShieldAlert } from "lucide-react";

export default function StorySection() {
  const [years, setYears] = useState(10);

  // Approximate metrics based on corporate stress averages
  const hoursWorked = years * 11 * 22 * 8; // approx hours per year excluding holidays
  const hoursOvertimeUnpaid = Math.round(years * 48 * 8.5); // unpaid extra pressure
  const weekendsCompromised = Math.round(years * 48 * 0.4); // thinking about work or active
  const healthDebtIndex = Math.min(100, Math.round(years * 4.2 + 15));

  return (
    <section className="py-20 border-b border-zinc-900 bg-[#050505] relative overflow-hidden" id="narrativa">
      {/* Background visual styling */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Story Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono tracking-widest uppercase text-zinc-400">
              <ShieldAlert className="w-3 h-3 text-brand" />
              <span>O Choque de Realidade</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-zinc-100 leading-tight font-light tracking-tight">
              {STORY_DATA.headline}
            </h2>

            <p className="font-mono text-xs text-brand/90 font-bold uppercase tracking-widest">
              {STORY_DATA.highlight}
            </p>

            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              <p>{STORY_DATA.subheadline}</p>
              <div className="p-4 rounded bg-card-theme border-l-2 border-brand italic text-zinc-300 font-serif my-6">
                &ldquo;{STORY_DATA.fullText}&rdquo;
              </div>
            </div>
          </div>

          {/* Life Sold Simulator Widget (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-card-theme border border-zinc-800/60 relative shadow-xl">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                simulador interativo
              </div>

              <h3 className="font-serif text-xl text-zinc-100 mb-2 flex items-center gap-2">
                <Milestone className="w-5 h-5 text-brand" />
                O Custo do seu Amanhã
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Ajuste os anos de dedicação planejados na sua carreira atual para calcular o imposto invisível que você pagará.
              </p>

              {/* Slider Controller */}
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500">Tempo planejado:</span>
                  <span className="text-brand font-bold">{years} anos</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-brand cursor-ew-resize bg-zinc-800 rounded-lg h-1.5"
                  id="life-range-slider"
                />
                <div className="flex justify-between text-[9px] font-mono text-zinc-600">
                  <span>1 ano</span>
                  <span>40 anos</span>
                </div>
              </div>

              {/* Results metrics breakdown */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                <div className="p-3.5 rounded bg-zinc-950/40 border border-zinc-900/60">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-600" />
                    <span>Vida no Monitor</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-zinc-200 block">
                    {hoursWorked.toLocaleString("pt-BR")}h
                  </span>
                  <span className="text-[9px] text-zinc-500 block mt-0.5">
                    Vendidas sob contrato.
                  </span>
                </div>

                <div className="p-3.5 rounded bg-zinc-950/40 border border-zinc-900/60">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-brand" />
                    <span>Extra Invisível</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-brand glow block">
                    +{hoursOvertimeUnpaid.toLocaleString("pt-BR")}h
                  </span>
                  <span className="text-[9px] text-zinc-500 block mt-0.5">
                    De ansiedade e horas extras.
                  </span>
                </div>

                <div className="p-3.5 rounded bg-zinc-950/40 border border-zinc-900/60">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    <HeartOff className="w-3.5 h-3.5 text-brand" />
                    <span>Finais de Semana</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-zinc-200 block">
                    {weekendsCompromised} dias
                  </span>
                  <span className="text-[9px] text-zinc-500 block mt-0.5">
                    Comprometidos psicologicamente.
                  </span>
                </div>

                <div className="p-3.5 rounded bg-zinc-950/40 border border-zinc-900/60">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    <Landmark className="w-3.5 h-3.5 text-zinc-600" />
                    <span>Dívida de Saúde</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-brand block">
                    {healthDebtIndex}%
                  </span>
                  <span className="text-[9px] text-zinc-500 block mt-0.5">
                    Nível de saturação vital.
                  </span>
                </div>

              </div>

              {/* Harsh truth disclaimer */}
              <div className="p-3.5 rounded bg-brand/5 border border-brand/20 text-xs text-brand/95 leading-relaxed font-light">
                <strong>A Recompensa Padrão:</strong> Daqui a {years} anos, o patrimônio da sua empresa terá multiplicado, mas seu tempo terá expirado de vez. Você receberá uma placa metálica polida e uma demissão afável. A família terá crescido à margem dos seus relatórios.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
