import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsGrid />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
    </main>
  );
}
