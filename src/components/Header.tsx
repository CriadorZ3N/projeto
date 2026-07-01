import React from "react";
import { ShieldAlert } from "lucide-react";

interface HeaderProps {
  onOpenAdmin: () => void;
  leadCount: number;
}

export default function Header({ onOpenAdmin, leadCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-6 h-6 bg-brand flex items-center justify-center font-black text-black text-xs tracking-tighter transition-transform duration-500 group-hover:scale-105">
            X
          </div>
          <span className="font-mono tracking-[0.2em] text-xs font-bold text-zinc-100 group-hover:text-brand transition-colors">
            PROJETO DESPERTAR
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-400">
          <a href="#problemas" className="hover:text-brand transition-colors">O Custo</a>
          <a href="#narrativa" className="hover:text-brand transition-colors">A História</a>
          <a href="#diagnostico" className="hover:text-brand transition-colors">Diagnóstico</a>
          <a href="#promessa" className="hover:text-brand transition-colors">O Evento</a>
          <a href="#inscricao" className="hover:text-brand transition-colors">Inscrição</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-800 hover:border-brand/40 bg-zinc-900/40 hover:bg-zinc-900 text-[10px] font-mono tracking-widest uppercase text-zinc-400 hover:text-brand transition-all duration-300"
            id="btn-admin-panel"
            title="Visualizar Leads Cadastrados"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-brand" />
            <span>Admin ({leadCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
