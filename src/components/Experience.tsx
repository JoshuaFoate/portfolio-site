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
      "Took the FALQON algorithm, which was designed specifically to solve MaxCut (classical combinatorial optimiztaion problem) and created a generic version of the algorithm to be used and tested on any classical combinatorial problem.",
    ],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const job = experience[selected];

  return (
    <section id="experience" className="px-6 max-w-5xl mx-auto py-20">
      <SectionHeading>Experience</SectionHeading>
      <div className="flex flex-col md:flex-row gap-8">
        <ul className="flex flex-col gap-1 shrink-0 w-full md:w-38 border-r border-foreground/10">
          {experience.map((item, index) => (
            <li key={item.title + item.company}>
              <button
                onClick={() => setSelected(index)}
                className={`w-full block text-left pl-0 pr-0 py-2 border-r-2 -mr-px transition-colors cursor-pointer ${
                  index === selected
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted hover:text-heading"
                }`}
              >
                {item.company}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex-1 min-w-0 min-h-96 pr-0 md:pr-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-heading">{job.title}</h3>
              <p className="text-sm text-muted mb-4">
                {job.company} · {job.location} · {job.dates}
              </p>
              <ul className="space-y-3 text-lg max-w-prose">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-3.5 h-3.5 shrink-0 mt-1.5 bg-foreground border border-black shadow-[inset_1px_1px_0_0_#cfdfe3,inset_-1px_-1px_0_0_#4b7581]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
