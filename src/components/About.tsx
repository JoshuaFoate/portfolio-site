import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const skills = [
  "Python", "TypeScript", "Java", "Next.js", "React",
  "Node.js", "JavaScript", "AWS", "SQL",
];

export default function About() {
  return (
    <section id="about" className="px-6 max-w-5xl mx-auto py-20">
      <SectionHeading>About Me</SectionHeading>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <p className="text-xl leading-relaxed mb-4">
            I&apos;m a <strong className="text-foreground">Software Engineer</strong> looking for my next role. I hold a Bachelor&apos;s degree in
            <strong className="text-foreground"> Computer Science</strong> from the University of Texas at San Antonio, and previously worked at
            <strong className="text-foreground"> Amazon</strong> as a Software Development Engineer.
          </p>
          <p className="text-xl leading-relaxed">Here are some of the technical skills I have:</p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6 text-lg text-foreground">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 shrink-0 bg-foreground border border-black shadow-[inset_1px_1px_0_0_#cfdfe3,inset_-1px_-1px_0_0_#4b7581]" />
                {skill}
              </li>
            ))}
          </ul>
          <p className="text-xl leading-relaxed mt-6">
            Outside of work, I love playing video games, going to the gym, reading, and spending time with my dogs.
          </p>
        </div>
        <div className="shrink-0">
          <div className="p-3 bg-foreground border-[3px] border-black shadow-[inset_0_4px_0_0_#cfdfe3,inset_0_-4px_0_0_#4b7581] rounded-lg">
            <Image src="/me.jpeg" alt="Joshua Foate" width={280} height={280} className="rounded-md object-cover block border-2 border-black" />
          </div>
        </div>
      </div>
    </section>
  );
}