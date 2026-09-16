import Testata from "@/components/Testata";
import Apertura from "@/components/Apertura";
import Menu from "@/components/Menu";
import IlLocale from "@/components/IlLocale";
import Info from "@/components/Info";
import Chiusura from "@/components/Chiusura";

export default function Home() {
  return (
    <>
      <Testata />
      <main>
        <Apertura />
        <Menu />
        <IlLocale />
        <Info />
      </main>
      <Chiusura />
    </>
  );
}
