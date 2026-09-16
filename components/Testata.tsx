"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { locale, mappaUrl, navigazione } from "@/content/site";

const stanghetta =
  "absolute left-0 block h-0.5 w-6 rounded-full bg-inchiostro transition-all duration-300";

export default function Testata() {
  const [aperto, setAperto] = useState(false);

  useEffect(() => {
    if (!aperto) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aperto]);

  // Da tablet in su il pannello e il suo pulsante spariscono: se restasse
  // aperto la pagina resterebbe bloccata senza modo di chiuderlo.
  useEffect(() => {
    const largo = window.matchMedia("(min-width: 768px)");
    function chiudi() {
      if (largo.matches) setAperto(false);
    }
    largo.addEventListener("change", chiudi);
    return () => largo.removeEventListener("change", chiudi);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-linea bg-latte/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        {/* Il marchio intero, schiacciato a 36px, non si legge: qui basta il simbolo col nome. */}
        <a href="#top" className="flex items-center gap-2.5" aria-label={locale.nome}>
          <Image
            src="/brand/simbolo-fucsia.png"
            alt=""
            aria-hidden
            width={1140}
            height={966}
            priority
            className="h-8 w-auto"
          />
          <span className="titolo text-xl">{locale.nome}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navigazione.map((voce) => (
            <a key={voce.href} href={voce.href} className="text-sm text-grigio transition-colors hover:text-fucsia">
              {voce.etichetta}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={mappaUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="hidden min-h-10 items-center rounded-full bg-inchiostro px-5 text-sm font-semibold text-latte transition-colors hover:bg-fucsia md:flex"
          >
            Come arrivare
          </a>

          <button
            type="button"
            onClick={() => setAperto((stato) => !stato)}
            aria-expanded={aperto}
            aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
            className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="relative block h-3 w-6">
              <span className={`${stanghetta} ${aperto ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`${stanghetta} ${aperto ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {aperto && (
        <div className="fixed inset-0 top-16 bg-latte px-5 md:hidden">
          <nav className="flex flex-col pt-6">
            {navigazione.map((voce) => (
              <a
                key={voce.href}
                href={voce.href}
                onClick={() => setAperto(false)}
                className="titolo border-b border-linea py-4 text-3xl"
              >
                {voce.etichetta}
              </a>
            ))}
            <a
              href={mappaUrl}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setAperto(false)}
              className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-inchiostro px-6 font-semibold text-latte"
            >
              Come arrivare
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
