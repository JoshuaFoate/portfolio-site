const projects = [
  {
    name: "PerkPulse",
    description:
      "A recommendation engine that ranks 150+ credit cards across 14 issuers by earn rate, portal restrictions, and promotional exclusions to surface the single best credit card for any purchase. Shipped as a Next.js web app and a React Native/Expo iOS app sharing one Supabase backend.",
    stack: ["TypeScript", "Next.js", "React Native", "Supabase", "Vercel", "Stripe", "RevenueCat", "Resend"],
    links: [
      { label: "Website", href: "https://www.perkpulse.app" },
      { label: "App Store", href: "https://apps.apple.com/us/app/perkpulse/id6784066030" },
      { label: "GitHub", href: "https://github.com/JoshuaFoate/card-optimizer" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.name} className="border border-black/10 rounded-xl p-6">
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
            <div className="flex flex-wrap gap-4 mt-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
