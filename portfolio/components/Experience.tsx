"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-container">
        <SectionHeading index="03" kicker="Experience" title="Where I've worked"
          description="Hands-on industry experience translating geospatial expertise into real-world deliverables." />

        <div className="relative">
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-geo-teal/50 via-geo-teal/10 to-transparent sm:block" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.55, delay:i*0.07 }}
                className="relative flex gap-6">
                <div className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full
                  border border-geo-teal/25 bg-white shadow-sm dark:bg-ink-800 sm:flex">
                  <Briefcase className="h-4 w-4 text-geo-teal" />
                </div>
                <div className="card flex-1 p-6 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                      <p className="text-sm font-medium text-geo-teal">{item.company} · {item.location}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-full bg-geo-teal/10 px-3 py-1 text-xs font-semibold text-geo-teal">
                        {item.period}
                      </span>
                      <span className="rounded-full bg-ink-900/5 px-2.5 py-0.5 text-[11px] font-medium capitalize text-ink-900/50 dark:bg-white/5 dark:text-mist-400">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-ink-900/60 dark:text-mist-300/85">{item.description}</p>
                  <ul className="mb-4 space-y-2">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-ink-900/65 dark:text-mist-300/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-geo-teal" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-ink-900/8 px-3 py-1 text-xs font-medium text-ink-900/55 dark:border-white/8 dark:text-mist-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
