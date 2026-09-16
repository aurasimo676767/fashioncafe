# Fashion Cafè — bozza del sito

Proposta visiva per il Fashion Cafè: **una pagina sola**, da mostrare al proprietario dal telefono.
È una bozza, non un sito finito: niente backend, niente prenotazioni, niente gestionale.

## Avviare il progetto

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build di produzione
```

Next.js 16 con App Router, TypeScript e Tailwind CSS 4. Nessuna dipendenza oltre a queste.

## Dove si mettono le mani

| Cosa | File |
| --- | --- |
| Menu (categorie, voci, prezzi) | `content/menu.ts` |
| Nome, frasi, eventi, contatti, orari | `content/site.ts` |
| Colori e tipografia | `app/globals.css` |
| Foto | `public/foto/` (sorgenti e tagli: `foto-sorgenti/README.md`) |

Il menu è guidato dai dati: si aggiunge una voce in `content/menu.ts` e la pagina si
aggiorna da sola. Nessun testo è scritto dentro i componenti.

## Palette

Chiara, rosa e crema. Il viola scuro è un accento (footer, titoli, pulsanti), mai il fondo.

| token | valore | uso |
| --- | --- | --- |
| `--bianco` | `#FFF7FB` | fondo della pagina |
| `--crema` | `#FFF1E8` | sezione "Il locale" |
| `--rosa-chiaro` | `#F3C7D9` | chip del menu, voce in evidenza |
| `--rosa` | `#E79AB8` | accenti |
| `--lilla` | `#C9B4E5` | sezione eventi |
| `--viola` | `#9C7BC0` | prezzi, link |
| `--viola-scuro` | `#3E2B4F` | titoli, pulsanti, footer |

## Da sostituire prima di pubblicare

- [ ] Indirizzo, telefono, orari e Instagram in `content/site.ts` (ora sono segnaposto)
- [ ] Voci e prezzi veri in `content/menu.ts`
- [ ] Altre foto del locale: bancone, dolci, colazioni, il locale la sera
- [ ] Eventi reali al posto dei due di esempio

## Pubblicare su Vercel

```bash
npx vercel          # anteprima
npx vercel --prod   # produzione
```

Vercel riconosce Next.js da solo: nessuna configurazione da aggiungere.
