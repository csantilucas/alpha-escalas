// src/components/common/Sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; // Importando ícones para controle no celular

export function Sidebar() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar no celular

  const isAdmin = user?.typeUser === "admin";

  const menuItems = [
    { label: "Dashboard", href: "/dashboard", show: true },
    { label: "Atendimentos", href: "/atendimentos", show: true }, // 🟢 Novo item liberado para todos
    { label: "Plantonistas", href: "/plantonistas", show: isAdmin },
    { label: "Usuários", href: "/usuarios", show: isAdmin },
  ];

  return (
    <>
      {/* 🟢 BOTÃO DE MENU (Apenas visível no Celular) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:text-zinc-100 transition-all active:scale-95"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🟢 SIDEBAR RESPONSIVA */}
      <aside 
        className={cn(
          // Padrão Desktop: Fixo na lateral esquerda
          "w-56 h-screen bg-zinc-900/40 border-r border-zinc-800/80 flex flex-col justify-between p-4 select-none font-sans antialiased shrink-0 z-40 transition-transform duration-300 ease-in-out",
          // Padrão Mobile: Vira uma gaveta flutuante controlada pelo estado isOpen
          "fixed inset-y-0 left-0 -translate-x-full md:relative md:translate-x-0 bg-zinc-950 md:bg-zinc-900/40",
          isOpen && "translate-x-0"
        )}
      >
        <div className="flex flex-col gap-6">
          {/* Logo Minimalista */}
          <div className="px-2 pt-10 md:pt-0">
            <h1 className="text-base font-bold text-zinc-100 tracking-tight">Alpha Software</h1>
            <p className="text-xs text-zinc-500 mt-0.5">Escalas de atendimento</p>
          </div>

          {/* Itens do Menu */}
          <nav className="flex flex-col gap-1.5">
            {menuItems
              .filter((item) => item.show)
              .map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)} // Fecha o menu automaticamente no celular ao clicar em um link
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors border border-transparent",
                      isActive
                        ? "bg-zinc-800/60 text-zinc-100 border-zinc-700/80"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </nav>
        </div>

        {/* Perfil e Botão Sair */}
        <div className="flex flex-col gap-3.5 pt-4 border-t border-zinc-800/80 px-2">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-zinc-200 truncate">
              {user?.name}
            </span>
            <span className="text-xs text-zinc-500 capitalize font-medium">
              {user?.typeUser}
            </span>
          </div>

          <button
            onClick={signOut}
            className="text-left text-xs font-semibold text-red-500/90 hover:text-red-400 transition-colors"
          >
            Sair do sistema
          </button>
        </div>
      </aside>
    </>
  );
}