/**
 * Il menu vive qui: si aggiorna questo file e la pagina si ricostruisce da sola.
 *
 * DEMO — poche voci di esempio, chiaramente da sostituire con il listino vero.
 */

export type Voce = {
  nome: string;
  descrizione?: string;
  prezzo: string;
};

export type Categoria = {
  id: string;
  nome: string;
  voci: Voce[];
};

export const categorie: Categoria[] = [
  {
    id: "colazione",
    nome: "Colazione",
    voci: [
      { nome: "Espresso", prezzo: "1,20" },
      { nome: "Cappuccino", descrizione: "Anche con soia, avena o mandorla", prezzo: "1,60" },
      { nome: "Cornetto", descrizione: "Vuoto, crema o confettura", prezzo: "1,50" },
      { nome: "Spremuta d'arancia", prezzo: "3,50" },
    ],
  },
  {
    id: "dolci",
    nome: "Dolci",
    voci: [
      { nome: "Torta della casa", descrizione: "Al trancio, cambia ogni settimana", prezzo: "4,00" },
      { nome: "Cheesecake", descrizione: "Ai frutti rossi", prezzo: "4,50" },
      { nome: "Tiramisù", prezzo: "5,00" },
    ],
  },
  {
    id: "salato",
    nome: "Salato",
    voci: [
      { nome: "Toast", descrizione: "Prosciutto cotto e formaggio", prezzo: "4,50" },
      { nome: "Focaccia farcita", prezzo: "6,00" },
      { nome: "Insalatona", descrizione: "Di stagione", prezzo: "9,00" },
    ],
  },
  {
    id: "bevande",
    nome: "Bevande",
    voci: [
      { nome: "Tè e infusi", prezzo: "3,50" },
      { nome: "Bibite", prezzo: "3,00" },
      { nome: "Calice di vino", prezzo: "5,00" },
      { nome: "Birra alla spina", prezzo: "5,00" },
    ],
  },
];

export const notaMenu =
  "Voci e prezzi sono di esempio: il listino vero si aggiorna in un file solo, senza rifare il sito.";
