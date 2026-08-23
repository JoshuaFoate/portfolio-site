"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "@/components/SectionHeading";

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
    company: "Amazon (Intern)",
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
  const [selected, setSelected] = useState(0);
  const job = experience[selected];

  return (
    <section id="experience" className="px-6 max-w-5xl mx-auto py-20">
      <SectionHeading>Experience</SectionHeading>
      <div className="flex gap-8">
        <ul className="flex flex-col gap-1 shrink-0 border-r border-foreground/10">
            {experience.map((item, index) => (
                <li key={item.title + item.company}>
                <button
                    onClick={() => setSelected(index)}
                    className={`w-full block text-right px-4 py-2 border-r-2 -mr-px transition-colors cursor-pointer ${
                    index === selected
                        ? "border-foreground text-foreground"
                        : "border-transparent text-foreground/50 hover:text-foreground/80"
                    }`}
                >
                    {item.company}
                </button>
                </li>
            ))}
        </ul>
        <div className="flex-1 min-w-0 min-h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">
                {job.company} · {job.location} · {job.dates}
              </p>
              <ul className="list-disc list-inside space-y-1 text-lg max-w-prose">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
