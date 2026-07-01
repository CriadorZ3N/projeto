import React, { useState } from "react";
import { Lead } from "../types";
import { Download, Search, Trash2, X, PlusCircle, BarChart3, Users, UsersRound, Sparkles } from "lucide-react";

interface AdminDashboardProps {
  leads: Lead[];
  onClose: () => void;
  onClearLeads: () => void;
  onDeleteLead: (id: string) => void;
  onAddMockLeads: () => void;
}

export default function AdminDashboard({
  leads,
  onClose,
  onClearLeads,
  onDeleteLead,
  onAddMockLeads,
}: AdminDashboardProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate and trigger CSV file download
  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert("Não há leads para exportar.");
      return;
    }

    const headers = ["ID", "Nome", "E-mail", "Cargo", "Empresa", "Pontuação Diagnóstico", "Data Cadastro"];
    const rows = leads.map((lead) => [
      lead.id,
      lead.name,
      lead.email,
      lead.jobTitle,
      lead.company || "Não Informada",
      lead.invisibleCostScore,
      lead.registeredAt,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(";"), ...rows.map((row) => row.map((val) => `"${val}"`).join(";"))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `leads_despertar_profissional_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metric computations
  const averageScore =
    leads.length > 0 ? (leads.reduce((sum, lead) => sum + lead.invisibleCostScore, 0) / leads.length).toFixed(1) : "0";

  const criticalCount = leads.filter((lead) => lead.invisibleCostScore >= 12).length;
  const criticalPercent = leads.length > 0 ? Math.round((criticalCount / leads.length) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" id="admin-panel">
      
      {/* Container */}
      <div className="w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Dashboard Header */}
        <div className="p-6 border-b border-zinc-900 bg-zinc-900/40 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-brand glow" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                Painel do Criador - Monitoramento de Leads
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-zinc-100 font-light">
              Métricas do Despertar
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all"
            aria-label="Fechar Painel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-8">
          
          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-card-theme border border-zinc-800/60 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-zinc-500">Inscritos Ativos</span>
                <span className="font-mono text-2xl font-bold text-zinc-100 block mt-1">
                  {leads.length}
                </span>
              </div>
              <Users className="w-8 h-8 text-brand/10" />
            </div>

            <div className="p-4 rounded-xl bg-card-theme border border-zinc-800/60 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-zinc-500">Média Score Dor</span>
                <span className="font-mono text-2xl font-bold text-brand block mt-1">
                  {averageScore} <span className="text-xs text-zinc-500 font-normal">/16</span>
                </span>
              </div>
              <BarChart3 className="w-8 h-8 text-brand/10" />
            </div>

            <div className="p-4 rounded-xl bg-card-theme border border-zinc-800/60 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-zinc-500">Fatia Crítica</span>
                <span className="font-mono text-2xl font-bold text-red-400 block mt-1">
                  {criticalPercent}%
                </span>
              </div>
              <UsersRound className="w-8 h-8 text-red-500/10" />
            </div>

            <div className="p-4 rounded-xl bg-card-theme border border-zinc-800/60 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-zinc-500">Status Campanha</span>
                <span className="font-mono text-xs font-semibold text-emerald-500 border border-emerald-500/30 bg-emerald-500/5 px-2 py-1 rounded block mt-2 text-center">
                  CAPTURA ATIVA
                </span>
              </div>
              <Sparkles className="w-6 h-6 text-emerald-500/20" />
            </div>

          </div>

          {/* Table Operations Area */}
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Pesquisar por nome, cargo ou e-mail..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-2 pl-10 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-brand/40"
                />
                <Search className="w-3.5 h-3.5 text-zinc-700 absolute left-3.5 top-3" />
              </div>

              {/* Action Operations */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onAddMockLeads}
                  className="flex items-center gap-1.5 px-3 py-2 rounded bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-[10px] font-mono tracking-widest uppercase text-zinc-400 hover:text-zinc-200 transition-colors"
                  id="btn-seed-leads"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-brand" />
                  <span>Gerar Leads Teste</span>
                </button>

                <button
                  onClick={handleExportCSV}
                  disabled={leads.length === 0}
                  className="flex items-center gap-1.5 px-3 py-2 rounded bg-brand hover:bg-brand-hover text-white font-mono text-[10px] tracking-widest uppercase font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  id="btn-export-csv"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar CSV</span>
                </button>

                <button
                  onClick={onClearLeads}
                  disabled={leads.length === 0}
                  className="flex items-center gap-1.5 px-3 py-2 rounded border border-red-950 bg-red-950/20 hover:bg-red-950/40 text-[10px] font-mono tracking-widest uppercase text-red-400 transition-colors disabled:opacity-30"
                  id="btn-clear-leads"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Limpar Tudo</span>
                </button>
              </div>

            </div>

            {/* Leads Table Container */}
            <div className="border border-zinc-900 rounded-xl overflow-hidden bg-zinc-950 shadow-inner">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-900/40 border-b border-zinc-900 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                      <th className="p-4">Inscrito</th>
                      <th className="p-4">Cargo / Empresa</th>
                      <th className="p-4 text-center">Score Diagnóstico</th>
                      <th className="p-4">Data Registro</th>
                      <th className="p-4 text-center">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900/50 text-xs">
                    {filteredLeads.length > 0 ? (
                      filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-zinc-900/20 transition-colors">
                          <td className="p-4 space-y-0.5">
                            <p className="font-semibold text-zinc-200">{lead.name}</p>
                            <p className="font-mono text-[10px] text-zinc-500">{lead.email}</p>
                          </td>
                          <td className="p-4 space-y-0.5">
                            <p className="text-zinc-300">{lead.jobTitle}</p>
                            <p className="text-[10px] text-zinc-500 italic">{lead.company}</p>
                          </td>
                          <td className="p-4 text-center">
                            <span
                              className={`font-mono font-bold px-2 py-0.5 rounded text-[10px] ${
                                lead.invisibleCostScore >= 12
                                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                  : lead.invisibleCostScore >= 7
                                  ? "bg-brand/10 text-brand border border-brand/20"
                                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              }`}
                            >
                              {lead.invisibleCostScore} / 16
                            </span>
                          </td>
                          <td className="p-4 font-mono text-[10px] text-zinc-500">
                            {lead.registeredAt}
                          </td>
                          <td className="p-4 text-center">
                            <button
                              onClick={() => onDeleteLead(lead.id)}
                              className="p-1.5 rounded hover:bg-red-500/10 text-zinc-600 hover:text-red-400 transition-colors border border-transparent hover:border-red-550/10"
                              title="Remover Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-zinc-600 font-light">
                          Nenhum lead encontrado. Use o botão &quot;Gerar Leads Teste&quot; acima ou preencha o formulário para simular.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-900 bg-zinc-900/20 text-center">
          <p className="text-[10px] text-zinc-600 font-mono">
            Dados confidenciais sob controle interno. Cumpre as diretrizes da LGPD corporativa.
          </p>
        </div>

      </div>
    </div>
  );
}
