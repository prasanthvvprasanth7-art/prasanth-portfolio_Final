
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", "Featured"] as const;

type ProjectFilter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const visibleProjects =
    filter === "Featured"
      ? projects.filter((project) => project.featured)
      : projects;

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="section-container">

        {/* Section Header and Filters */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">

          {/* Heading */}
          <div className="min-w-0 flex-1">
            <SectionHeading
              index="04"
              kicker="Projects"
              title="Geospatial research & work"
              description="Web GIS applications, real-time location services, machine-learning solutions, and geospatial research projects."
            />
          </div>

          {/* Filter Buttons */}
          <div
            className="flex shrink-0 items-center gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => {
              const isActive = filter === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={isActive}
                  className={`relative isolate rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-geo-teal focus-visible:ring-offset-2 dark:focus-visible:ring-offset-ink-950 ${
                    isActive
                      ? "text-ink-950"
                      : "text-ink-900/60 hover:text-ink-900 dark:text-mist-400 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-filter-pill"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-geo-teal"
                    />
                  )}

                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {visibleProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <div className="flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-ink-900/15 p-8 text-center dark:border-white/15">
            <p className="text-sm text-ink-900/60 dark:text-mist-400">
              No featured projects available yet.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
