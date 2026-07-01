import React, { useState, useEffect } from "react";
import { Lead } from "./types";
import { IDENTIFICATION_LIST, EVENT_PROMISE, TESTIMONIALS } from "./data";
import Header from "./components/Header";
import CountdownTimer from "./components/CountdownTimer";
import TitleCarousel from "./components/TitleCarousel";
import StorySection from "./components/StorySection";
import ProblemCards from "./components/ProblemCards";
import DiagnosticTool from "./components/DiagnosticTool";
import LeadForm from "./components/LeadForm";
import AdminDashboard from "./components/AdminDashboard";
import { Check, HelpCircle, Shield, ArrowDown, Sparkles, MapPin, Calendar, Compass, UserCheck } from "lucide-react";

// Pre-seeded mock leads to populate the dashboard with realistic data on first load
const INITIAL_MOCK_LEADS: Lead[] = [
  {
    id: "lead-1",
    name: "Mariana Alencar",
    email: "mariana.alencar@corpmail.com",
    jobTitle: "Gerente Sênior de Projetos",
    company: "TechGlobal Solutions",
    invisibleCostScore: 14,
    registeredAt: "30/06/2026 14:15:22"
  },
  {
    id: "lead-2",
    name: "Rodrigo Vasconcelos",
    email: "rodrigo.v@financepartner.br",
    jobTitle: "Consultor de Riscos Sênior",
    company: "Partner Finance",
    invisibleCostScore: 11,
    registeredAt: "30/06/2026 16:40:05"
  },
  {
    id: "lead-3",
    name: "Camila Guimarães",
    email: "camila.guimaraes@lawcorp.com.br",
    jobTitle: "Advogada Corporativa M&A",
    company: "Guimarães & Associados",
    invisibleCostScore: 15,
    registeredAt: "30/06/2026 18:22:11"
  }
];

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Load leads from localStorage or seed initials
  useEffect(() => {
    const stored = localStorage.getItem("despertar_leads");
    if (stored) {
      try {
        setLeads(JSON.parse(stored));
      } catch (e) {
        setLeads(INITIAL_MOCK_LEADS);
      }
    } else {
      localStorage.setItem("despertar_leads", JSON.stringify(INITIAL_MOCK_LEADS));
      setLeads(INITIAL_MOCK_LEADS);
    }
  }, []);

  const saveLeadsToStorage = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem("despertar_leads", JSON.stringify(updatedLeads));
  };

  const handleRegisterLead = (newLead: Lead) => {
    const updated = [newLead, ...leads];
    saveLeadsToStorage(updated);
  };

  const handleDeleteLead = (id: string) => {
    const updated = leads.filter((lead) => lead.id !== id);
    saveLeadsToStorage(updated);
  };

  const handleClearAllLeads = () => {
    if (window.confirm("Deseja realmente apagar todos os leads do banco de dados local?")) {
      saveLeadsToStorage([]);
    }
  };

  const handleAddMockLeads = () => {
    const mockNames = [
      "Felipe Nogueira",
      "Fernanda Castelo",
      "Gabriel Peixoto",
      "Julio César Fontes",
      "Beatriz Vasques"
    ];
    const mockJobs = [
      "Coordenador de Operações",
      "Analista de BI Pleno",
      "Gerente de Produto",
      "Diretor Administrativo",
      "Especialista de RH"
    ];
    const mockCompanies = [
      "Inova Corporate",
      "Vero S/A",
      "MaxTech Solutions",
      "Alpha Consultoria",
      "Pessoas & Carreira"
    ];

    const generated: Lead[] = mockNames.map((name, index) => ({
      id: "mock-" + Math.random().toString(36).substring(2, 7),
      name,
      email: name.toLowerCase().replace(" ", ".") + "@empresa.com",
      jobTitle: mockJobs[index],
      company: mockCompanies[index],
      invisibleCostScore: Math.floor(Math.random() * 8) + 8, // 8-15 points
      registeredAt: new Date().toLocaleString("pt-BR")
    }));

    const updated = [...generated, ...leads];
    saveLeadsToStorage(updated);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-brand/30 selection:text-white" id="main-app">
      
      {/* Absolute top badge - Editorial Warning */}
      <div className="bg-red-950/80 border-b border-red-900/40 text-[10px] sm:text-xs font-mono py-2 text-center text-red-400 px-4 tracking-wider uppercase">
        Este site contém reflexões brutas. Não recomendado para quem busca autoajuda corporativa rasa.
      </div>

      {/* Header component */}
      <Header onOpenAdmin={() => setIsAdminOpen(true)} leadCount={leads.length} />

      <main>
        
        {/* HERO SECTION */}
        <section className="relative min-h-[92vh] flex items-center pt-10 pb-20 overflow-hidden border-b border-zinc-900" id="hero">
          
          {/* Abstract dark gradients background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full filter blur-[140px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (Hero Content - 7 cols) */}
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                
                {/* Visual Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800/80 text-[10px] font-mono tracking-widest uppercase text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
                  <span>O Despertar da Consciência Profissional</span>
                </div>

                {/* Massive Provocative Heading */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-zinc-100 leading-tight font-extralight tracking-tight">
                  Sua vida não cabe em <span className="italic text-brand glow font-normal">oito horas</span> diárias.
                </h1>

                {/* Editorial Subtitle */}
                <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Enquanto você constrói o patrimônio de outras pessoas sob o selo de &ldquo;carreira sólida&rdquo;, o tempo que não volta se esvai silenciosamente. É hora de recalcular o preço da sua energia.
                </p>

                {/* Interactive Dynamic Countdown Grid */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block">
                    A transmissão gratuita iniciará em:
                  </span>
                  <CountdownTimer />
                </div>

                {/* Direct Action triggers */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="#inscricao"
                    className="w-full sm:w-auto px-6 py-4 rounded bg-brand hover:bg-brand-hover text-white text-xs font-mono tracking-widest uppercase font-bold shadow-lg hover:shadow-brand/20 hover:-translate-y-0.5 transition-all duration-300 text-center"
                  >
                    Garanta Sua Vaga Gratuita
                  </a>
                  <a
                    href="#diagnostico"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-400 hover:text-zinc-100 text-xs font-mono tracking-widest uppercase transition-colors text-center"
                  >
                    <span>Fazer Diagnóstico do Custo</span>
                    <ArrowDown className="w-4 h-4 text-brand" />
                  </a>
                </div>

              </div>

              {/* Right Column (Hero Graphic Art - 5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl group">
                  {/* Overlay shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10" />
                  
                  {/* Generated Image */}
                  <img
                    src="/src/assets/images/corporate_burnout_badge_1782873911038.jpg"
                    alt="Crachá corporativo desgastado e relógio sob penumbra do crepúsculo"
                    className="w-full aspect-[4/3] object-cover filter brightness-75 contrast-125 hover:scale-105 transition-transform duration-[4000ms]"
                    referrerPolicy="no-referrer"
                    id="hero-burnout-badge"
                  />

                  {/* Absolute positioning badge quote */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                    <p className="font-serif text-sm sm:text-base italic text-zinc-200 leading-snug">
                      &ldquo;O sistema lucra com a sua exaustão. Até quando você vai financiar isso?&rdquo;
                    </p>
                    <div className="flex justify-between items-center text-[9px] font-mono text-brand font-bold uppercase tracking-widest border-t border-zinc-800/40 pt-2">
                      <span>Reflexão Nº 06</span>
                      <span>Crachá vs Vida</span>
                    </div>
                  </div>
                </div>

                {/* Sub-graphics background decoration */}
                <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />
              </div>

            </div>
          </div>
        </section>

        {/* PROVOCATIVE TITLE EXPLORER SECTION */}
        <section className="py-20 bg-[#050505] border-b border-zinc-900">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Estudo de Impacto</span>
              <h2 className="font-serif text-2xl text-zinc-100 font-light">Perguntas que o seu gerente evita fazer</h2>
            </div>
            <TitleCarousel />
          </div>
        </section>

        {/* PROBLEM BENTO GRID CARDS (Saúde, Tempo, Identidade) */}
        <ProblemCards />

        {/* STORYTIMELINE & LIFE SIMULATION */}
        <StorySection />

        {/* IDENTIFICATION SECTION ("Para quem é?") */}
        <section className="py-20 bg-[#050505] border-b border-zinc-900 relative">
          
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              {/* Image / Icon container (5 cols) */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-8 rounded-2xl bg-card-theme border border-zinc-800/60 space-y-4 relative">
                  <div className="w-12 h-12 rounded-full bg-red-500/5 border border-red-500/20 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-serif text-xl text-zinc-100 font-light">
                    Você se enxerga nesse ciclo?
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">
                    O primeiro passo para quebrar uma prisão silenciosa é admitir que as paredes existem. O sistema opera nos convencendo de que a nossa exaustão é um sinal individual de fraqueza, quando na verdade é um sintoma estrutural de produção.
                  </p>
                </div>
              </div>

              {/* Bullet List details (7 cols) */}
              <div className="md:col-span-7 space-y-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand font-bold block">
                  Reconhecimento de Perfil
                </span>
                <h2 className="font-serif text-3xl text-zinc-100 font-light tracking-tight leading-snug">
                  Quem precisa urgentemente acordar?
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {IDENTIFICATION_LIST.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-zinc-850 bg-card-theme flex items-start gap-4 hover:border-brand/20 transition-colors"
                    >
                      <div className="p-1 rounded bg-brand/10 border border-brand/30 text-brand font-mono text-xs font-bold mt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE DIAGNOSTIC QUIZ */}
        <DiagnosticTool />

        {/* THE PROMISE SECTION (A Saída / O Evento) */}
        <section className="py-24 bg-[#050505] border-b border-zinc-900 relative" id="promessa">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full filter blur-[140px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand font-bold px-2.5 py-1 rounded bg-brand/10 border border-brand/20 inline-block">
                O Manifesto da Saída
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-zinc-100 font-light tracking-tight leading-tight">
                {EVENT_PROMISE.title}
              </h2>
              <p className="text-zinc-400 font-serif italic text-base sm:text-lg">
                &ldquo;{EVENT_PROMISE.subtitle}&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Promo details text (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                  {EVENT_PROMISE.text}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {EVENT_PROMISE.details.map((detail, index) => (
                    <div key={index} className="p-4 rounded-xl bg-card-theme border border-zinc-800/60">
                      <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-wider block mb-1">
                        {detail.label}:
                      </span>
                      <span className="font-serif text-sm text-zinc-200 font-medium">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event credentials lock (5 cols) */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-2xl bg-card-theme border border-zinc-800/60 text-center space-y-6">
                  <div className="w-14 h-14 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-brand" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg text-zinc-200">Credencial Digital Gratuita</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      O evento será transmitido em ambiente fechado para evitar represálias de RHs corporativos ou monitoramentos institucionais. Sua presença é 100% anônima aos demais participantes.
                    </p>
                  </div>

                  <a
                    href="#inscricao"
                    className="w-full py-3.5 rounded-lg border border-brand hover:bg-brand/10 font-mono text-xs uppercase tracking-widest font-bold text-brand hover:text-white transition-all duration-300 block"
                  >
                    Confirmar Minha Presença Livre
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SOCIAL PROOF / AUTHORITY TESTIMONIALS */}
        <section className="py-20 bg-[#050505] border-b border-zinc-900" id="autoridade">
          <div className="max-w-6xl mx-auto px-4">
            
            {/* Section Heading */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Relatos de Desconexão Reais
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-light">
                Aqueles que romperam a inércia da exploração
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
                Profissionais de alta performance que recalcularam o preço do seu tempo e hoje exercem suas profissões com maestria, liberdade e verdadeira presença familiar.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-6 sm:p-8 rounded-2xl bg-card-theme border border-zinc-800/60 flex flex-col justify-between hover:border-brand/30 transition-all duration-300"
                >
                  <blockquote className="font-serif text-sm sm:text-base text-zinc-300 italic leading-relaxed font-light relative">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 pt-6 border-t border-zinc-900/40 flex items-center gap-3">
                    {/* Abstract initial badge */}
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-xs font-mono font-bold text-brand glow">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-200">
                        {testimonial.name}, {testimonial.age} anos
                      </h4>
                      <p className="text-[10px] text-zinc-500 font-mono font-light mt-0.5 leading-tight">
                        {testimonial.formerJob}
                      </p>
                      <p className="text-[9px] text-brand font-mono tracking-wider font-semibold uppercase mt-1">
                        {testimonial.currentStatus}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FORM CAPTURE (LEADFORM) */}
        <LeadForm onRegister={handleRegisterLead} />

      </main>

      {/* FOOTER */}
      <footer className="py-12 bg-[#050505] border-t border-zinc-900 text-center space-y-4">
        <div className="flex justify-center items-center gap-2.5 text-xs font-mono tracking-widest text-zinc-400">
          <div className="w-5 h-5 bg-brand flex items-center justify-center font-black text-black text-[10px]">X</div>
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-zinc-100">PROJETO DESPERTAR</span>
        </div>
        
        <p className="text-zinc-600 text-[11px] max-w-xl mx-auto leading-relaxed px-4 font-light">
          Aviso Legal: Os dados preenchidos no formulário de inscrição são protegidos localmente sob rígido controle de confidencialidade e simulação educacional. O Despertar da Consciência Profissional é um evento independente, focado em discussões sobre carreira, qualidade de vida e liberdade financeira.
        </p>

        <div className="text-[10px] text-zinc-700 font-mono flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
          <span>&copy; {new Date().getFullYear()} Despertar Profissional.</span>
          <a href="#" className="hover:text-zinc-500 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-zinc-500 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-zinc-500 transition-colors">LGPD Seguro</a>
        </div>
      </footer>

      {/* ADMIN LEAD DASHBOARD MODAL */}
      {isAdminOpen && (
        <AdminDashboard
          leads={leads}
          onClose={() => setIsAdminOpen(false)}
          onClearLeads={handleClearAllLeads}
          onDeleteLead={handleDeleteLead}
          onAddMockLeads={handleAddMockLeads}
        />
      )}

    </div>
  );
}
