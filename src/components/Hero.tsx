import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center text-center px-6 pt-24 pb-20">
      <h1 className="font-pixel text-6xl md:text-4xl leading-relaxed text-heading">Joshua Foate</h1>
      <p className="text-2xl mt-4 py-3">Software Engineer currently living in Austin, TX</p>
      <a
        href="mailto:joshuafoate@gmail.com"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-foreground text-background w-fit font-medium border-[3px] border-black shadow-[inset_0_4px_0_0_#cfdfe3,inset_0_-4px_0_0_#4b7581] hover:brightness-75 active:shadow-[inset_0_2px_0_0_#cfdfe3,inset_0_-2px_0_0_#4b7581] transition cursor-pointer"
      >
        <Mail size={18} />
        Contact me!
      </a>
    </section>
  );
}