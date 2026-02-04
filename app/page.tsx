import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Diferenciais } from "@/components/Diferenciais";
import { Servicos } from "@/components/Servicos";
import { SobreMim } from "@/components/SobreMim";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Diferenciais />
        <Servicos />
        <SobreMim />
        <Footer />
      </main>
      <FloatingCTA />
    </>
  );
}
