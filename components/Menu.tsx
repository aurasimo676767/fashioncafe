"use client";

import { useState } from "react";
import { categorie, notaMenu } from "@/content/menu";

export default function Menu() {
  // `content/menu.ts` è fatto per essere riscritto a mano: se resta senza
  // categorie la sezione sparisce, invece di far fallire la build.
  const [attiva, setAttiva] = useState(categorie[0]?.id ?? "");
  const categoria = categorie.find((voce) => voce.id === attiva) ?? categorie[0];
  if (!categoria) return null;

  return (
    <section id="menu" className="border-t border-linea bg-cipria/40 px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="titolo text-4xl md:text-5xl">Il menu</h2>

        {/* Le categorie scorrono: su un telefono non devono mai andare a capo. */}
        <div className="-mx-5 mt-7 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2">
            {categorie.map((voce) => {
              const scelta = voce.id === attiva;
              return (
                <button
                  key={voce.id}
                  type="button"
                  onClick={() => setAttiva(voce.id)}
                  aria-pressed={scelta}
                  className={`min-h-11 rounded-full px-5 text-sm whitespace-nowrap transition-colors ${
                    scelta
                      ? "bg-inchiostro font-semibold text-latte"
                      : "bg-white text-grigio hover:text-inchiostro"
                  }`}
                >
                  {voce.nome}
                </button>
              );
            })}
          </div>
        </div>

        {/* Listino, non card: nome, filetto, prezzo. */}
        <ul className="mt-8">
          {categoria.voci.map((voce) => (
            <li key={voce.nome} className="border-b border-linea py-4 last:border-b-0">
              <div className="flex items-baseline gap-3">
                <h3 className="titolo text-xl md:text-2xl">{voce.nome}</h3>
                <span className="h-px flex-1 bg-linea" aria-hidden />
                <span className="font-semibold text-fucsia-cupo tabular-nums">{voce.prezzo}</span>
              </div>
              {voce.descrizione && (
                <p className="mt-1 text-[0.9375rem] text-grigio">{voce.descrizione}</p>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-relaxed text-grigio">{notaMenu}</p>
      </div>
    </section>
  );
}
