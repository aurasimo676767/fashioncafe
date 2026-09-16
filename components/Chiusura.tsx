import Image from "next/image";
import { info, locale, notaBozza } from "@/content/site";

export default function Chiusura() {
  return (
    <footer className="bg-inchiostro px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Image
          src="/brand/logo-notte.png"
          alt={locale.nome}
          width={1218}
          height={917}
          className="w-40 md:w-48"
        />

        <div className="text-sm text-latte/60">
          <a
            href={info.instagramUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="block text-latte transition-colors hover:text-fucsia"
          >
            {info.instagram}
          </a>
          <p className="mt-2">{notaBozza}</p>
        </div>
      </div>
    </footer>
  );
}
