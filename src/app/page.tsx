import HeroBackground from "@/components/heroBackground";
import Navbar from "@/components/navbar";
import Image from "next/image";
import BestSellers from "./BestSellers/page";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />

      <HeroBackground />

      <BestSellers />
    </main>
  );
}
