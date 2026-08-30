"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", "Featured"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "Featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="relative py-28">
      <div className="section-container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="04" kicker="Projects" title="Geospatial research & work"
            description="Academic research and professional projects spanning flood modelling, fire susceptibility, and sediment dynamics." />
          <div className="mb-12 flex gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  filter===f ? "text-ink-950" : "text-ink-900/55 hover:text-ink-900 dark:text-mist-400"
                }`}>
                {filter===f && (
                  <motion.span layoutId="proj-pill" transition={{ type:"spring", duration:0.45 }}
                    className="absolute inset-0 rounded-full bg-geo-teal" />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
