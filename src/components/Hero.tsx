import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center text-center px-6 pt-24 pb-20">
      <h1 className="text-6xl md:text-7xl font-bold">Joshua Foate</h1>
      <p className="text-2xl mt-4">Software Engineer currently living in Austin, TX.</p>
      <a
        href="mailto:joshuafoate@gmail.com"
        className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background w-fit font-medium"
      >
        <Mail size={18} />
        Contact me!
      </a>
    </section>
  );
}