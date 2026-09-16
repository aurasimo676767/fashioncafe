# Fashion Café

Sito vetrina per **Fashion Café**, caffetteria di specialità di giorno e cocktail bar la sera.

Pagina singola statica: nessun build step, nessuna dipendenza da installare.

## Contenuti

- `index.html` — struttura della pagina (hero, il locale, menu, eventi, contatti, prenotazione)
- `assets/css/style.css` — stili, palette chiara/scura automatica, layout responsive
- `assets/js/main.js` — menu mobile, tab del menu, stato "aperto/chiuso" in tempo reale, form prenotazione
- `assets/img/` — immagini del locale (da popolare)

## Sviluppo locale

Basta aprire `index.html` nel browser. Per servirlo via HTTP:

```bash
python -m http.server 8000
# poi apri http://localhost:8000
```

## Personalizzazione

| Cosa | Dove |
| --- | --- |
| Indirizzo, telefono, email | sezione `#contatti` in `index.html` |
| Voci e prezzi del menu | blocchi `.menu-panel` in `index.html` |
| Eventi in programma | sezione `#eventi` in `index.html` |
| Orari di apertura | costante `HOURS` in `assets/js/main.js` **e** tabella `.hours` in `index.html` |
| Colori e font | variabili `:root` in `assets/css/style.css` |

Gli orari vivono in due punti: `HOURS` guida il badge "Aperto ora" in pagina, la tabella
è il testo che leggono i clienti. Aggiornali insieme.

## Da fare

- [ ] Sostituire i testi segnaposto (indirizzo, P.IVA, recapiti) con quelli reali
- [ ] Aggiungere foto del locale in `assets/img/` e una `og:image`
- [ ] Collegare il form prenotazione a un servizio reale (oggi è una demo lato client)
- [ ] Pubblicare su GitHub Pages (Settings → Pages → branch `main`, cartella `/`)
