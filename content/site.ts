/**
 * Contenuti del sito. Il menu sta in `content/menu.ts`.
 *
 * Indirizzo, telefono, Instagram e orari vengono dalla scheda Google e dal
 * profilo Instagram del locale: da confermare col proprietario prima di
 * considerarli definitivi. Il listino invece è ancora di esempio.
 */

export const locale = {
  nome: "Fashion Cafè",
  claim: "Colazione, dolci e caffè. Dalle quattro del mattino.",
  /** Usata nei metadati: è quello che si legge nell'anteprima del link. */
  descrizione: "Bar e caffetteria a Vittoria: colazione, dolci e caffè dalle quattro del mattino.",
  intro:
    "Bancone lungo, tavoli vicino alla vetrina, la macchina del caffè accesa quando fuori è ancora buio. Si entra per un espresso e si resta per una fetta di torta.",
};

/**
 * Orari di apertura. `apre` e `chiude` sono in minuti dalla mezzanotte:
 * servono a calcolare se il locale è aperto adesso.
 */
export const orari = [
  { giorni: "Lunedì — Sabato", ore: "04:00 — 21:00", settimana: [1, 2, 3, 4, 5, 6], apre: 240, chiude: 1260 },
  { giorni: "Domenica", ore: "04:00 — 13:00", settimana: [0], apre: 240, chiude: 780 },
];

export const info = {
  indirizzo: ["Via Magenta 388", "97019 Vittoria (RG)"],
  /** All'angolo con Via Milano: è così che lo indicano loro. */
  riferimento: "All'angolo con Via Milano",
  telefono: "+39 353 327 5367",
  instagram: "@fashioncafe_____",
  instagramUrl: "https://instagram.com/fashioncafe_____",
  nota: "Recapiti e orari presi dalla scheda Google e da Instagram: da confermare.",
};

/** Ricerca su Google Maps dell'indirizzo, invece della home del servizio. */
export const mappaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [locale.nome, ...info.indirizzo].join(" "),
)}`;

export const notaBozza = "Bozza: il listino è di esempio, da sostituire con quello vero.";

export const navigazione = [
  { href: "#menu", etichetta: "Menu" },
  { href: "#locale", etichetta: "Il locale" },
  { href: "#info", etichetta: "Info" },
];
