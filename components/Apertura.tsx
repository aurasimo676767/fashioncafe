import Image from "next/image";
import StatoApertura from "./StatoApertura";
import { locale, mappaUrl } from "@/content/site";

export default function Apertura() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-12 pb-14 md:px-8 md:pt-20 md:pb-20">
      {/* Il vapore del logo, ingrandito e appena visibile: la firma del locale. */}
      <Image
        src="/brand/simbolo-fucsia.png"
        alt=""
        aria-hidden
        width={1140}
        height={966}
        className="pointer-events-none absolute -top-16 -right-24 w-72 opacity-[0.07] md:-top-24 md:right-0 md:w-[30rem]"
      />

      {/*
        Sul telefono tutto è centrato: il marchio è largo e allineato a sinistra
        lasciava un vuoto a destra che sbilanciava la schermata.
        Da tablet in su, dove c'è spazio, torna l'allineamento a sinistra.
      */}
      <div className="entra relative mx-auto max-w-6xl text-center md:text-left">
        <Image
          src="/brand/logo.png"
          alt={`${locale.nome} — bar e caffetteria`}
          width={1218}
          height={917}
          priority
          className="mx-auto w-56 md:mx-0 md:w-80"
        />

        <p className="titolo mx-auto mt-8 max-w-[16ch] text-[2.75rem] md:mx-0 md:max-w-[18ch] md:text-7xl">
          {locale.claim}
        </p>

        <StatoApertura className="mt-6 justify-center text-sm font-semibold text-fucsia-cupo md:justify-start" />

        <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#menu"
            className="flex min-h-12 items-center rounded-full bg-fucsia px-7 text-sm font-semibold text-white transition-colors hover:bg-fucsia-cupo"
          >
            Il menu
          </a>
          <a
            href={mappaUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="flex min-h-12 items-center rounded-full border border-linea px-7 text-sm font-semibold transition-colors hover:border-fucsia hover:text-fucsia"
          >
            Come arrivare
          </a>
        </div>
      </div>
    </section>
  );
}
