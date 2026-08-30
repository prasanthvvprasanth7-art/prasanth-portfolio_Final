"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="section-container">
        <SectionHeading index="05" kicker="Education" title="Academic background"
          description="A six-year integrated programme combining geological fieldwork with advanced geoinformatics." />

        <div className="relative">
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-geo-amber/50 via-geo-amber/10 to-transparent sm:block" />
          <div className="space-y-7">
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.5, delay:i*0.08 }}
                className="relative flex gap-6">
                <div className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-geo-amber/30 bg-white shadow-sm dark:bg-ink-800 sm:flex">
                  <GraduationCap className="h-4 w-4 text-geo-amber" />
                </div>
                <div className="card flex-1 flex-wrap items-start justify-between gap-3 p-6 hover:-translate-y-0.5 hover:shadow-md sm:flex">
                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold leading-snug">{edu.degree}</h3>
                    <p className="mt-1 text-sm font-medium text-geo-teal">{edu.institution}</p>
                    <p className="text-xs text-ink-900/45 dark:text-mist-500">{edu.location}</p>
                  </div>
                  <div className="mt-3 flex flex-col items-end gap-1.5 sm:mt-0">
                    <span className="rounded-full bg-geo-amber/10 px-3 py-1 text-xs font-semibold text-geo-amber">
                      {edu.period}
                    </span>
                    <span className="rounded-full border border-ink-900/8 px-3 py-1 text-xs font-medium dark:border-white/8">
                      {edu.gradeLabel}: {edu.grade}
                    </span>
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
