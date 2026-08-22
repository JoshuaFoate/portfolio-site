const projects = [
    {
        name: "PerkPulse",
        description: "A recommendation engine that ranks 150+ credit cards across 14 issuers by earn rate, portal restrictions, and promotional exclusions to surface the single best credit card for any purchase. Shipped as a Next.js web app and a React Native/Expo iOS app sharing one Supabase backend.",
    stack: ["TypeScript", "Next.js", "React Native", "Supabase", "Vercel", "Stripe", "RevenueCat", "Resend"],
    link: "https://github.com/JoshuaFoate/card-optimizer",
  },
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center px-6 max-2-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-black/10 rounded-xl p-6 hover:border-black/30 transition"
                    >
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full border border-black/10 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}