import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <section id="projects">Projects</section>
    </main>
  )
}
