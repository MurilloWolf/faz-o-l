import Image from "next/image";
import { star_lazy as bg } from "../assets/images";
import { Salsa } from "next/font/google";
import { CardList, Footer } from "@/components/system";

const salsa = Salsa({ subsets: ["latin"], display: "swap", weight: "400" });

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-12 gap-4 grid-rows-[400px_1fr_150px] bg-graa-50 h-fit">
        <header className="row-start-1 col-span-12  md:col-span-6 md:col-start-4 flex flex-col items-center justify-center">
          <Image
            width={150}
            height={150}
            src={bg}
            className=" w-[200px] md:w-[200px] md:h-[200px] rounded-full"
            alt="luiz inácio lula da silva ladrão filho da puta"
            lazyBoundary="Estrela do pt"
            priority
            unoptimized
          />
          <div className="p-2 py-4 ">
            <h1
              className={`text-red-800 uppercase text-4xl lg:text-6xl text-center ${salsa.className}`}
            >
              Faz <span className="text-6xl">L</span> filho da puta!
            </h1>
          </div>
        </header>
        <section className="col-span-12 row-start-2  md:col-start-1">
          <CardList />
        </section>
        <Footer />
      </main>
    </>
  );
}
