const skills = [
    "Python",
    "TypeScript",
    "Java",
    "Next.js",
    "React",
    "Node.js",
    "JavaScript",
    "AWS",
    "SQL",
];

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed mb-4">
                I&apos;m a <strong>Software Engineer</strong> looking for my next role. I hold a Bachelor&apos;s degree in
                <strong> Computer Science</strong> from the University of Texas at San Antonio, and previously worked at 
                <strong> Amazon</strong> as a Software Development Engineer.
            </p>
            <p className="text-lg leading-relaxed">
                Here are some of the technical skills I have:
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside mt-6">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <p className="text-lg leading-relaxed mt-6">
                Outside of work, I love playing video games, going to the gym, reading, and spending time 
                with my dogs.
            </p>
        </section>
    );
}