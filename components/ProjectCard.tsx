"use client";
import { motion } from "framer-motion";
import { ExternalLink, CalendarDays } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="card group relative flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-lg"
    >
      {project.featured && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-geo-teal px-3 py-1 text-[11px] font-bold text-ink-950">
          Featured
        </span>
      )}

      {/* image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink-800">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* hover CTA — opens the project PDF from Google Drive */}
        {project.projectUrl && (
          <div className="absolute inset-x-0 bottom-0 flex translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
              aria-label={`Open ${project.title} PDF`}
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open Project PDF
            </a>
          </div>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-1 flex items-center gap-1.5 text-[11px] text-geo-teal">
          <CalendarDays className="h-3.5 w-3.5" />
          {project.period}
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="mt-0.5 text-xs font-medium text-geo-amber">{project.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-900/60 dark:text-mist-400">
          {project.description}
        </p>
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
