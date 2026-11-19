
"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  CalendarDays,
  Github,
  Globe,
} from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="card group relative flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-lg"
    >
      {/* Featured Badge */}
      {project.featured && (
        <span className="absolute left-3 top-3 z-20 rounded-full bg-geo-teal px-3 py-1 text-[11px] font-bold text-ink-950">
          Featured
        </span>
      )}

      {/* Project Image + Hover Buttons */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-geo-teal/20 via-geo-blue/20 to-ink-800">

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Hover Action Buttons */}
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 p-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">

          {/* Live Demo */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-ink-950 shadow-md transition-transform hover:-translate-y-0.5"
            >
              <Globe className="h-3.5 w-3.5" />
              Live Demo
              <ExternalLink className="h-3 w-3" />
            </a>
          )}

          {/* Source Code */}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-geo-teal px-4 py-2.5 text-xs font-semibold text-ink-950 shadow-md transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-3.5 w-3.5" />
              Source Code
              <ExternalLink className="h-3 w-3" />
            </a>
          )}

          {/* Existing PDF Button */}
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-ink-950 shadow-md transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open Project PDF
            </a>
          )}

        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-6">

        {/* Period */}
        <div className="mb-1 flex items-center gap-1.5 text-[11px] text-geo-teal">
          <CalendarDays className="h-3.5 w-3.5" />
          {project.period}
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold leading-snug">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-0.5 text-xs font-medium text-geo-amber">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-900/60 dark:text-mist-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-900/8 px-3 py-1 text-[11px] font-medium text-ink-900/55 dark:border-white/8 dark:text-mist-400"
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
