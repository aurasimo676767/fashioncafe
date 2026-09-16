/**
 * Contenuti del sito. Il menu sta in `content/menu.ts`.
 * I valori marcati DEMO sono segnaposto: vanno sostituiti con quelli veri.
 */

export const locale = {
  nome: "Fashion Cafè",
  claim: "Colazione, dolci e caffè. Dalle sette del mattino.",
  /** Usata nei metadati: è quello che si legge nell'anteprima del link. */
  descrizione: "Bar e caffetteria: colazione, dolci e caffè dalle sette.",
  intro:
    "Bancone lungo, tavoli vicino alla vetrina, la macchina del caffè sempre accesa. Si entra per un espresso e si resta per una fetta di torta.",
};

/**
 * Orari di apertura. `apre` e `chiude` sono in minuti dalla mezzanotte:
 * servono a calcolare se il locale è aperto adesso.
 */
export const orari = [
  { giorni: "Lunedì — Giovedì", ore: "07:00 — 20:00", settimana: [1, 2, 3, 4], apre: 420, chiude: 1200 },
  { giorni: "Venerdì — Sabato", ore: "07:00 — 24:00", settimana: [5, 6], apre: 420, chiude: 1440 },
  { giorni: "Domenica", ore: "08:00 — 20:00", settimana: [0], apre: 480, chiude: 1200 },
];

/** DEMO — nessuno di questi dati è reale. */
export const info = {
  indirizzo: ["Via Esempio 12", "00000 Città (XX)"],
  telefono: "+39 000 000 0000",
  instagram: "@fashioncafe",
  instagramUrl: "https://instagram.com/",
  nota: "Indirizzo, telefono, orari e Instagram sono segnaposto: vanno sostituiti con quelli veri.",
};

/** Ricerca su Google Maps dell'indirizzo, invece della home del servizio. */
export const mappaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [locale.nome, ...info.indirizzo].join(" "),
)}`;

export const notaBozza = "Bozza: contenuti di esempio, da sostituire con quelli del locale.";

export const navigazione = [
  { href: "#menu", etichetta: "Menu" },
  { href: "#locale", etichetta: "Il locale" },
  { href: "#info", etichetta: "Info" },
];
