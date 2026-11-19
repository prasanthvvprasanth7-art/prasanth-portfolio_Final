"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, Calendar } from "lucide-react";
import { certifications, workshops } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="section-container">
        <SectionHeading index="06" kicker="Certifications & Workshops" title="Continuous learning"
          description="Ongoing professional development through courses, IIRS workshops, and national-level seminars." />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Certifications */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-base font-semibold">
              <Award className="h-5 w-5 text-geo-teal" /> Courses &amp; Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div key={cert.title} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.45, delay:i*0.07 }}
                  className="card flex items-start gap-4 p-5 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-geo-teal/15 to-geo-blue/15">
                    <Award className="h-4.5 w-4.5 text-geo-teal" />
                  </div>
                  <div>
                    <span className="mb-1 inline-block rounded-full bg-geo-teal/10 px-2.5 py-0.5 text-[11px] font-semibold text-geo-teal">
                      {cert.category}
                    </span>
                    <h4 className="text-sm font-semibold leading-snug">{cert.title}</h4>
                    <p className="mt-1 text-xs text-ink-900/45 dark:text-mist-500">{cert.issuer} · {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-base font-semibold">
              <BookOpen className="h-5 w-5 text-geo-amber" /> Workshops &amp; Seminars
            </h3>
            <div className="space-y-3">
              {workshops.map((w, i) => (
                <motion.div key={w.title} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.45, delay:i*0.06 }}
                  className="card flex items-start gap-4 p-4 hover:-translate-y-0.5 hover:shadow-md">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-geo-amber" />
                  <div>
                    <p className="text-sm font-semibold leading-snug">{w.title}</p>
                    <p className="mt-0.5 text-xs text-ink-900/45 dark:text-mist-500">{w.organizer} · {w.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
