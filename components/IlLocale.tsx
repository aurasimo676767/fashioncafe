import Image from "next/image";
import { locale } from "@/content/site";

export default function IlLocale() {
  return (
    <section id="locale" className="border-t border-linea px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:items-center md:gap-12">
        <div className="md:col-span-5">
          <h2 className="titolo text-4xl md:text-5xl">Il locale</h2>
          <p className="mt-5 max-w-[48ch] leading-relaxed text-grigio">{locale.intro}</p>
        </div>

        {/* La sola fotografia del sito: una, larga, senza cornice. */}
        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl md:col-span-7 md:mt-0 md:aspect-[4/3]">
          <Image
            src="/foto/locale.jpg"
            alt="La sala del Fashion Cafè, con il bancone e i tavoli vicino alla vetrina"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
