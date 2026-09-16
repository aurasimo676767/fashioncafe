"use client";

import { useSyncExternalStore } from "react";
import { orari } from "@/content/site";

// Lo stato dipende solo dall'orologio: non c'è nessuna sorgente a cui iscriversi.
function nonCambia() {
  return () => {};
}

/** Il % 24 serve alla mezzanotte, che negli orari è scritta come 1440. */
function formatta(minuti: number) {
  const ore = String(Math.floor(minuti / 60) % 24).padStart(2, "0");
  return `${ore}:${String(minuti % 60).padStart(2, "0")}`;
}

/** Dice se il locale è aperto adesso e fino a che ora, guardando gli orari veri. */
function stato() {
  const ora = new Date();
  const minuti = ora.getHours() * 60 + ora.getMinutes();
  const oggi = orari.find((riga) => riga.settimana.includes(ora.getDay()));
  if (!oggi) return null;

  return minuti >= oggi.apre && minuti < oggi.chiude
    ? `Aperto ora, fino alle ${formatta(oggi.chiude)}`
    : `Chiuso. Riapre alle ${formatta(oggi.apre)}`;
}

export default function StatoApertura({ className = "" }: { className?: string }) {
  // Il server non sa che ore sono dove si trova chi guarda: si calcola nel browser.
  const testo = useSyncExternalStore(nonCambia, stato, () => null);
  if (!testo) return null;

  const aperto = testo.startsWith("Aperto");

  return (
    <p className={`flex items-center gap-2 ${className}`}>
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${aperto ? "bg-fucsia battito" : "bg-grigio"}`}
        aria-hidden
      />
      {testo}
    </p>
  );
}
