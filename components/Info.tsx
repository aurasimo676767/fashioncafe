import StatoApertura from "./StatoApertura";
import { info, mappaUrl, orari } from "@/content/site";

export default function Info() {
  return (
    <section id="info" className="border-t border-linea px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <h2 className="titolo text-4xl md:text-5xl">Dove siamo</h2>

          <p className="mt-5 text-lg leading-relaxed">
            {info.indirizzo.map((riga) => (
              <span key={riga} className="block">
                {riga}
              </span>
            ))}
            <span className="mt-1 block text-base text-grigio">{info.riferimento}</span>
          </p>

          <p className="mt-4">
            <a href={`tel:${info.telefono.replace(/\s/g, "")}`} className="block hover:text-fucsia">
              {info.telefono}
            </a>
            <a
              href={info.instagramUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="block hover:text-fucsia"
            >
              {info.instagram}
            </a>
          </p>

          <a
            href={mappaUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-fucsia px-7 text-sm font-semibold text-white transition-colors hover:bg-fucsia-cupo"
          >
            Apri la mappa
          </a>
        </div>

        <div className="mt-10 md:col-span-6 md:col-start-7 md:mt-0">
          <StatoApertura className="text-sm font-semibold text-fucsia-cupo" />

          <dl className="mt-4">
            {orari.map((riga) => (
              <div
                key={riga.giorni}
                className="flex justify-between gap-6 border-b border-linea py-3 last:border-b-0"
              >
                <dt className="text-grigio">{riga.giorni}</dt>
                <dd className="tabular-nums">{riga.ore}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  );
}
