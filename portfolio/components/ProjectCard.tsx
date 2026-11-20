
"use client";

import { motion } from "framer-motion";
import { ExternalLink, CalendarDays, MapPinned } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
      }}
      className="card group relative flex h-full min-w-0 flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      {/* Featured Badge */}
      {project.featured && (
        <span className="absolute left-3 top-3 z-20 rounded-full bg-geo-teal px-3 py-1 text-[11px] font-bold text-ink-950 shadow-md">
          Featured
        </span>
      )}

      {/* Project Image */}
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-ink-800">

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-teal-100 via-cyan-50 to-slate-200 px-6 text-center dark:from-teal-950 dark:via-slate-900 dark:to-ink-800">
            <MapPinned className="h-10 w-10 text-teal-600 dark:text-geo-teal" />

            <span className="font-display text-lg font-semibold text-ink-900 dark:text-white">
              {project.title}
            </span>

            <span className="text-xs font-medium uppercase tracking-widest text-teal-700 dark:text-geo-teal">
              Web GIS Project
            </span>
          </div>
        )}

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100" />

        {/* Project Action Buttons */}
        {(project.liveUrl || project.sourceUrl || project.projectUrl) && (
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-center gap-2 p-3 opacity-100 transition-all duration-300 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-geo-teal"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}

            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} source code`}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink-950 px-4 py-2 text-xs font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-geo-blue"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Source Code
              </a>
            )}

            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} project PDF`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-geo-teal"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Project PDF
              </a>
            )}
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Period */}
        <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-geo-teal">
          <CalendarDays className="h-3.5 w-3.5 shrink-0" />
          <span>{project.period}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold leading-snug text-ink-900 dark:text-mist-100">
          {project.title}
        </h3>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="mt-1 text-xs font-medium text-geo-amber">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-900/65 dark:text-mist-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-ink-900/10 px-3 py-1 text-[11px] font-medium text-ink-900/65 dark:border-white/10 dark:text-mist-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
