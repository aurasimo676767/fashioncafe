# Foto sorgenti

Qui stanno le foto originali del locale, **fuori da `public/`**: non vengono pubblicate,
servono solo a rigenerare i tagli usati dal sito.

`sala-originale.png` è l'unica foto disponibile finora. Arriva specchiata (le scritte
si leggono al contrario), quindi ogni taglio viene raddrizzato prima di essere salvato.

I tagli in `public/foto/` sono:

| file | cosa inquadra | dove si usa |
| --- | --- | --- |
| `hero-sala.jpg` | tavoli e vetrina con l'insegna | hero, su telefono |
| `hero-largo.jpg` | panoramica della sala | hero, da tablet in su |
| `sala.jpg` | la sala intera | eventi |
| `banco.jpg` | bancone e cassa | il locale, galleria |
| `lampade.jpg` | le lampade colorate | il locale, eventi |
| `insegna.jpg` | l'insegna sulla vetrina | galleria |
| `tavoli.jpg` | tavoli e sedie | galleria |
| `pietra.jpg` | il rivestimento del bancone | galleria |

Per rigenerarli serve `sharp`. Attenzione: `extract` lavora sulle coordinate
dell'immagine **originale**, il raddrizzamento (`flop`) viene applicato dopo.
