import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <section id="experience">Experience</section>
      <section id="projects">Projects</section>
    </main>
  )
}
