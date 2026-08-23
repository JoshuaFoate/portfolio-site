"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { FaGithub, FaApple } from "react-icons/fa6";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    name: "PerkPulse",
    description:
      "A credit card optimization app that allows users to see every benefit and perk offered by their cards, track benefits, and more!",
    image: "/projects/perkpulse.png",
    links: [
      { label: "Website", href: "https://www.perkpulse.app", icon: Globe },
      { label: "App Store", href: "https://apps.apple.com/us/app/perkpulse/id6784066030", icon: FaApple },
      { label: "GitHub", href: "https://github.com/JoshuaFoate/card-optimizer", icon: FaGithub },
    ],
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="px-6 max-w-5xl mx-auto py-20">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous project"
          className="shrink-0 p-2 rounded-lg bg-foreground text-background border-[3px] border-black shadow-[inset_0_3px_0_0_#cfdfe3,inset_0_-3px_0_0_#4b7581] hover:brightness-75 active:shadow-[inset_0_1px_0_0_#cfdfe3,inset_0_-1px_0_0_#4b7581] transition cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="relative flex-1 p-3 bg-foreground border-[3px] border-black shadow-[inset_0_4px_0_0_#cfdfe3,inset_0_-4px_0_0_#4b7581] rounded-lg">
          <div className="relative aspect-[3/4] md:aspect-video overflow-hidden rounded-md border-2 border-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image src={project.image} alt={`Screenshot of the ${project.name} app`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="text-base text-white/80 mt-1 max-w-lg">{project.description}</p>
                  <div className="flex gap-4 mt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-white hover:text-white/60 transition-colors"
                      >
                        <link.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next project"
          className="shrink-0 p-2 rounded-lg bg-foreground text-background border-[3px] border-black shadow-[inset_0_3px_0_0_#cfdfe3,inset_0_-3px_0_0_#4b7581] hover:brightness-75 active:shadow-[inset_0_1px_0_0_#cfdfe3,inset_0_-1px_0_0_#4b7581] transition cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to project ${i + 1}`}
            className="relative h-1 w-8 rounded-full bg-foreground/20 overflow-hidden cursor-pointer"
          >
            {i === index && (
              <motion.div
                layoutId="project-indicator"
                className="absolute inset-0 bg-foreground rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}