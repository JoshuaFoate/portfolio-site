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
            I&apos;m a <strong>Software Engineer</strong> looking for my next role. I hold a Bachelor&apos;s degree in
            <strong> Computer Science</strong> from the University of Texas at San Antonio, and previously worked at
            <strong> Amazon</strong> as a Software Development Engineer.
          </p>
          <p className="text-xl leading-relaxed">Here are some of the technical skills I have:</p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside mt-6 text-lg">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p className="text-xl leading-relaxed mt-6">
            Outside of work, I love playing video games, going to the gym, reading, and spending time with my dogs.
          </p>
        </div>
        <div className="shrink-0">
          <Image src="/me.jpeg" alt="Joshua Foate" width={280} height={280} className="rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}