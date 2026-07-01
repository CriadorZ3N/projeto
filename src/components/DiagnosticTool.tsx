import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data";
import { Award, ChevronRight, FileText, Info, RefreshCw, ShieldAlert } from "lucide-react";

export default function DiagnosticTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (points: number) => {
    const nextAnswers = [...selectedAnswers, points];
    setSelectedAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  const totalScore = selectedAnswers.reduce((sum, val) => sum + val, 0);

  // Score evaluation
  const getEvaluation = (score: number) => {
    if (score <= 6) {
      return {
        level: "Consciência Ativa",
        color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/5",
        description: "Você ainda mantém limites saudáveis entre o profissional e o humano. Sente as pressões normais do mercado, mas não permitiu que o crachá apagasse seus princípios. O evento ajudará você a estruturar o próximo passo para blindar sua independência de forma definitiva.",
        alert: "Atenção: A pressão corporativa é cumulativa. Não se sabote permitindo pequenos abusos diários."
      };
    } else if (score <= 11) {
      return {
        level: "Erosão em Progresso",
        color: "text-brand border-brand/30 bg-brand/5",
        description: "Você está no ponto de inflexão mais perigoso. Seu corpo dá sinais claros de cansaço que um mero fim de semana não apaga mais, e você já está ausente mentalmente de momentos familiares importantes. Você está vendendo mais do que deveria em nome de uma falsa estabilidade.",
        alert: "Alerta Médio: Se você não mudar seus hábitos e mentalidade agora, em breve cruzará a linha do esgotamento."
      };
    } else {
      return {
        level: "Saturação Crítica (Emergência Existencial)",
        color: "text-red-500 border-red-500/30 bg-red-500/5",
        description: "Diagnóstico urgente. Você se fundiu ao seu cargo corporativo. Sua mente está permanentemente ativada pelo stress do trabalho, seu sono está degradado e sua vida pessoal virou um apêndice da empresa. Você está sendo consumido de forma ativa pelo sistema, alimentando as metas dele com o seu tempo de vida irreparável.",
        alert: "Urgência Máxima: Este estado é insustentável a médio prazo. Sua saúde mental e suas relações estão sob ameaça severa."
      };
    }
  };

  const evaluation = getEvaluation(totalScore);

  return (
    <section className="py-20 border-b border-zinc-900 bg-[#050505]" id="diagnostico">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand font-semibold px-2 py-1 rounded bg-brand/10 border border-brand/20">
            Ferramenta Reflexiva Confidencial
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-light tracking-tight">
            Diagnóstico de Sobrecarga Existencial
          </h2>
          <p className="text-zinc-500 text-sm font-light">
            Responda sinceramente. Ninguém na sua empresa saberá as suas respostas. Meça o impacto silencioso da sua jornada atual.
          </p>
        </div>

        {/* Diagnostic Panel Card */}
        <div className="bg-card-theme border border-zinc-800/60 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden relative" id="quiz-panel">
          
          {!showResult ? (
            <div className="space-y-6">
              
              {/* Quiz progress / current step */}
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500 border-b border-zinc-800/40 pb-4">
                <span>Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                <span className="text-brand font-bold">Confidencial</span>
              </div>

              {/* Progress bar indicator */}
              <div className="w-full h-[3px] bg-zinc-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question heading */}
              <div className="space-y-2 py-4">
                <h3 className="font-serif text-xl sm:text-2xl text-zinc-100 leading-relaxed font-light">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h3>
                <p className="text-xs text-zinc-500 font-light italic">
                  &ldquo;{QUIZ_QUESTIONS[currentStep].subtitle}&rdquo;
                </p>
              </div>

              {/* Quiz Options */}
              <div className="grid grid-cols-1 gap-4">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.points)}
                    className="group w-full text-left p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/40 hover:bg-zinc-900/40 hover:border-brand/30 transition-all duration-200 flex items-center justify-between"
                  >
                    <div className="space-y-1 pr-4">
                      <p className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
                        {option.text}
                      </p>
                      {option.description && (
                        <p className="text-[11px] text-zinc-500 font-light group-hover:text-zinc-400">
                          {option.description}
                        </p>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-brand group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              
              {/* Result Header */}
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800/40 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">Laudo Técnico Emitido</span>
                  </div>
                  <h3 className="font-serif text-2xl text-zinc-100">Resultado do Diagnóstico</h3>
                </div>
                <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800/80 text-right">
                  <span className="text-[9px] font-mono uppercase text-zinc-500 block">Pontuação total:</span>
                  <span className="font-mono text-xl font-bold text-brand glow block">{totalScore} / 16</span>
                </div>
              </div>

              {/* Score Level badge and customized message */}
              <div className={`p-6 rounded-xl border ${evaluation.color} space-y-4`}>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">
                    Classificação: {evaluation.level}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {evaluation.description}
                </p>
                <div className="text-xs border-t border-zinc-800/40 pt-3 font-medium flex items-center gap-2">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>{evaluation.alert}</span>
                </div>
              </div>

              {/* Call to action connecting to registration */}
              <div className="p-6 bg-zinc-950/40 rounded-xl border border-zinc-900/60 text-center space-y-4">
                <h4 className="font-serif text-base sm:text-lg text-zinc-200">
                  O sistema quer silenciar esse cansaço. Você vai continuar aceitando isso?
                </h4>
                <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
                  Este diagnóstico prova que sua carreira está extraindo um pedaço irrecuperável de sua essência diariamente. No dia 9 de Julho, às 20h, daremos o primeiro passo prático para estruturar sua libertação profissional de forma calculada e real.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <a
                    href="#inscricao"
                    className="w-full sm:w-auto px-6 py-3 rounded bg-brand hover:bg-brand-hover font-mono text-xs uppercase tracking-widest font-bold text-white shadow-lg transition-all duration-300 text-center"
                  >
                    Quero Garantir Meu Lugar no Despertar
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded border border-zinc-800 hover:border-zinc-750 bg-zinc-900/30 text-zinc-400 text-xs font-mono tracking-widest uppercase hover:text-zinc-200 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Refazer Diagnóstico</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
