import CoverParticles from "@/components/cover-particles";
import HeroSection from "@/components/hero-sesion";

export default function Home() {
  return (
    <main>
      <div className="flex main-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <HeroSection />
      </div>
    </main>
  );
}
