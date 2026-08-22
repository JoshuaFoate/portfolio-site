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
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 mx-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">
                I&apos;m a Software Engineer looking for my next role, interested in Frontend, Backend, 
                Full-stack, or other Softare Engineering positions. I hold a Bachelor&apos;s degree in 
                Computer Science from the University of Texas at San Antonio, and previously worked at 
                Amazon as a Software Development Engineer. Outside of work, I love playing video games, 
                going to the gym, reading, and spending time with my dogs.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 rounded-full border border-black/10 text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}