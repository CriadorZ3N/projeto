import React, { useState, useEffect } from "react";
import { PROVOCATIVE_TITLES } from "../data";
import { ArrowLeft, ArrowRight, Layers, ListFilter, Quote } from "lucide-react";

export default function TitleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!isPlaying || showAll) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROVOCATIVE_TITLES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, showAll]);

  const nextTitle = () => {
    setCurrentIndex((prev) => (prev + 1) % PROVOCATIVE_TITLES.length);
    setIsPlaying(false);
  };

  const prevTitle = () => {
    setCurrentIndex((prev) => (prev - 1 + PROVOCATIVE_TITLES.length) % PROVOCATIVE_TITLES.length);
    setIsPlaying(false);
  };

  return (
    <div className="w-full py-12 px-6 sm:px-10 rounded-2xl bg-card-theme relative overflow-hidden shadow-2xl" id="provocative-titles">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-zinc-900/30 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header controls */}
      <div className="flex items-center justify-between mb-8 border-b border-zinc-800/40 pb-4">
        <div className="flex items-center gap-2">
          <Quote className="w-4 h-4 text-brand glow" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">
            Provocações Imediatas
          </span>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-brand/40 text-zinc-400 hover:text-brand transition-colors"
        >
          {showAll ? (
            <>
              <Layers className="w-3.5 h-3.5" />
              <span>Modo Carrossel</span>
            </>
          ) : (
            <>
              <ListFilter className="w-3.5 h-3.5" />
              <span>Ver Todos os 10</span>
            </>
          )}
        </button>
      </div>

      {!showAll ? (
        <div className="min-h-[220px] sm:min-h-[180px] flex flex-col justify-between">
          <div className="relative">
            {/* Massive background quote mark */}
            <span className="absolute -top-12 -left-6 font-serif text-[120px] text-zinc-900/60 select-none pointer-events-none leading-none">
              “
            </span>
            <blockquote className="relative z-10 font-serif text-2xl sm:text-3xl lg:text-4xl text-zinc-100 font-light tracking-tight leading-relaxed italic pr-4">
              {PROVOCATIVE_TITLES[currentIndex]}
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-zinc-800/40">
            {/* Slide Index / Status */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-brand font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-1 w-24 h-[2px] bg-zinc-900 rounded-full overflow-hidden">
                {PROVOCATIVE_TITLES.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-full transition-all duration-300 ${
                      idx === currentIndex ? "w-1/3 bg-brand" : "w-[6.6%] bg-zinc-850"
                    }`}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] text-zinc-500">
                {PROVOCATIVE_TITLES.length}
              </span>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTitle}
                className="p-2 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="Provocação Anterior"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 font-mono text-[9px] uppercase tracking-widest text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                {isPlaying ? "pausar autoplay" : "iniciar autoplay"}
              </button>
              <button
                onClick={nextTitle}
                className="p-2 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="Próxima Provocação"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-2 custom-scroll">
          {PROVOCATIVE_TITLES.map((title, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:bg-zinc-900/40 hover:border-brand/20 transition-all duration-300 flex gap-4"
            >
              <span className="font-mono text-xs text-brand font-semibold shrink-0 mt-0.5">
                {String(idx + 1).padStart(2, "0")}.
              </span>
              <p className="font-serif text-sm sm:text-base text-zinc-300 leading-relaxed">
                {title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
