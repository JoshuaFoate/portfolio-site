const experience = [
    {
        title: "Software Development Engineer",
        company: "Amazon",
        location: "Seattle, WA",
        dates: "June 2025 - April 2026",
        bullets: [
            "Led the migration from Bandwidth phone numbers to AWS Chime SDK, a system now handling about 11 million calls per month.",
            "Designed the internal replacement to AWS Chime SDK, presented the design for sign-off to 7+ mid-senior engineers, and launched it to production.",
            "Restored a live outage affecting Alexa Emergency Assist as on-call engineer by tracing the failure to a stalled AWS Lambda through CloudWatch logs.",
        ],
    },
    {
        title: "Software Development Engineer Intern",
        company: "Amazon",
        location: "Seattle, WA",
        dates: "June 2024 - August 2024",
        bullets: [
            "Built a monitoring framework in TypeScript for a signaling service API, generating CloudWatch metrics and alarms still used by 10+ engineers today.",
            "Authored technical documentation and presented the framework's architecture to gain consensus from 7+ mid-senior engineers.",
        ],
    },
    {
        title: "Research Assistant Intern",
        company: "Sandia National Laboratories",
        location: "Albuquerque, NM",
        dates: "June 2023 - May 2024",
        bullets: [
            "Conducted independent research on quantum optimization algorithms in Python, benchmarking a custom algorithm against classical combinatorial optimization methods.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
            <h2 className = "text-3xl font-bold mb-8">Experience</h2>
            <div className="flex flex-col gap-8">
                {experience.map((job) => (
                    <div key={job.title + job.company}>
                        <div className="flex justify-between flex-wrap gap-x-4">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <span className="text-sm text-gray-500">{job.dates}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">
                            {job.company} · {job.location}
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            {job.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}