import React, { useState } from "react";
import { Lead } from "../types";
import { Calendar, CheckCircle2, CopyCheck, Mail, ShieldCheck, User } from "lucide-react";

interface LeadFormProps {
  onRegister: (lead: Lead) => void;
}

export const CTA_OPTIONS = [
  "Chega de vender minha vida. Quero me inscrever.",
  "Reservar meu lugar no despertar.",
  "Quero retomar o controle da minha carreira.",
  "Não serei apenas mais um número. Quero participar.",
  "Inscrição gratuita: Garanta seu futuro hoje."
];

export default function LeadForm({ onRegister }: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [selectedCTA, setSelectedCTA] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Por favor, informe seu nome completo.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Por favor, insira um e-mail válido.");
      return;
    }
    if (!jobTitle.trim()) {
      setErrorMsg("Informe seu cargo atual para personalizar seu diagnóstico.");
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const newLead: Lead = {
        id: Math.random().toString(36).substring(2, 9),
        name: name.trim(),
        email: email.trim(),
        jobTitle: jobTitle.trim(),
        company: company.trim() || "Não Informada",
        invisibleCostScore: Math.floor(Math.random() * 8) + 8, // mock score for random lead if not completed quiz
        registeredAt: new Date().toLocaleString("pt-BR"),
      };

      onRegister(newLead);
      setIsSubmitting(false);
      setIsRegistered(true);
    }, 1200);
  };

  return (
    <section className="py-24 bg-[#050505] relative" id="inscricao">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,77,0,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-card-theme border border-zinc-850/60 rounded-3xl overflow-hidden p-6 sm:p-10 shadow-2xl relative">
          
          {/* Form Explainer Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand font-bold">
                Garanta sua vaga hoje
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-zinc-100 font-light tracking-tight leading-snug">
                Você vai aceitar calado ou tomar o controle?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                O acesso à transmissão oficial é gratuito, mas restrito a profissionais cadastrados. Ao se inscrever, você receberá um link de acesso individualizado criptografado em seu e-mail corporativo ou pessoal.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-900/60">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">Privacidade Blindada</h4>
                  <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                    Seus dados não serão vendidos ou expostos. Entendemos a sensibilidade de buscar libertação profissional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">Acesso Vitalício Gravado</h4>
                  <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                    Apenas os cadastrados receberão o replay editado e o material complementar de apoio operacional.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-serif italic text-zinc-500 pt-2 border-t border-zinc-900/20">
              &ldquo;O sistema não quer que você esteja aqui. Mas você precisa estar.&rdquo;
            </div>
          </div>

          {/* Form Submission Panel (7 cols) */}
          <div className="lg:col-span-7">
            {!isRegistered ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="lead-capture-form">
                
                {/* Error Banner */}
                {errorMsg && (
                  <div className="p-3 bg-red-950/40 border border-red-900/40 rounded-lg text-xs text-red-400 font-light">
                    {errorMsg}
                  </div>
                )}

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-name" className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    Seu nome completo
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lead-name"
                      placeholder="Ex: Carlos de Souza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-brand/50 rounded-lg px-4 py-3 pl-10 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-colors"
                    />
                    <User className="w-4 h-4 text-zinc-700 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-email" className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    E-mail preferencial (Seguro)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="lead-email"
                      placeholder="Ex: carlos@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-brand/50 rounded-lg px-4 py-3 pl-10 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-colors"
                    />
                    <Mail className="w-4 h-4 text-zinc-700 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Cargo & Company Inputs Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="lead-job" className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      Cargo atual
                    </label>
                    <input
                      type="text"
                      id="lead-job"
                      placeholder="Ex: Gerente Operacional"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-brand/50 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lead-company" className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      Empresa (Opcional)
                    </label>
                    <input
                      type="text"
                      id="lead-company"
                      placeholder="Ex: Multinacional S/A"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-brand/50 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Copywriter CTA Switcher (Visual Test Panel) */}
                <div className="p-3.5 rounded-xl border border-zinc-900 bg-zinc-950/60 space-y-2 mt-2">
                  <div className="flex items-center gap-1.5">
                    <CopyCheck className="w-3.5 h-3.5 text-brand" />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">
                      Seletor de Copy da Chamada (Teste A/B Visual)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {CTA_OPTIONS.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setSelectedCTA(index)}
                        className={`text-[9px] font-mono px-2 py-1.5 rounded transition-colors ${
                          selectedCTA === index
                            ? "bg-brand/10 border border-brand/40 text-brand font-bold"
                            : "bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/60 text-zinc-400"
                        }`}
                      >
                        CTA {index + 1}
                      </button>
                    ))}
                  </div>
                  <p className="text-[9px] text-zinc-600 font-light">
                    Escolha qual das 5 chamadas provocadoras você prefere exibir no botão principal.
                  </p>
                </div>

                {/* Main Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-brand hover:bg-brand-hover font-mono text-xs uppercase tracking-widest font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  id="btn-register-action"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Criptografando Inscrição...</span>
                    </>
                  ) : (
                    <span>{CTA_OPTIONS[selectedCTA]}</span>
                  )}
                </button>

              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-6 animate-fade-in" id="registration-success">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-2xl text-zinc-100 font-light">Você Deu o Primeiro Passo</h4>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                    Sua inscrição no evento <strong>O Despertar da Consciência Profissional</strong> foi validada e criptografada com sucesso.
                  </p>
                </div>

                {/* Next Steps List */}
                <div className="w-full p-4 rounded-xl border border-zinc-900 bg-zinc-950 text-left space-y-3 max-w-md">
                  <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-wider">Próximos passos fundamentais:</span>
                  
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="font-mono text-brand font-bold">1.</span>
                    <p className="text-zinc-300">
                      <strong>Confirme sua Caixa de Entrada:</strong> Enviamos uma mensagem de confirmação para <span className="text-brand font-mono text-[11px]">{email}</span>. Verifique também sua caixa de spam ou aba de promoções.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs pt-2 border-t border-zinc-900/40">
                    <span className="font-mono text-brand font-bold">2.</span>
                    <p className="text-zinc-300">
                      <strong>Agende o Horário:</strong> Reserve na sua agenda do dia <strong>9 de Julho de 2026, às 20:00</strong>. Não haverá reprise aberta ao público comum.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsRegistered(false)}
                  className="text-zinc-500 hover:text-zinc-300 font-mono text-[10px] uppercase tracking-wider transition-colors pt-2 underline underline-offset-4"
                >
                  Inscrever outro e-mail
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
