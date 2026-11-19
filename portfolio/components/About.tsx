"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { about, profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { StatCounter } from "./StatCounter";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-container">
        <SectionHeading index="01" kicker="About Me" title="Mapping insight from data" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* summary card */}
          <motion.div initial={{ opacity:0, x:-22 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.6 }}
            className="card relative overflow-hidden p-7 sm:p-9">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-geo-teal/8 blur-3xl" />
            <p className="text-[15px] leading-[1.85] text-ink-900/70 dark:text-mist-300/85">
              {about.summary}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ink-900/8 pt-8 dark:border-white/8 sm:grid-cols-4">
              {profile.stats.map((s) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} display={s.display} />
              ))}
            </div>
          </motion.div>

          {/* highlights */}
          <motion.div initial={{ opacity:0, x:22 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.6, delay:0.1 }}
            className="flex flex-col gap-4">
            <h3 className="font-display text-xl font-semibold">Key Highlights</h3>
            {about.highlights.map((item, i) => (
              <motion.div key={i} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.07 }}
                className="card flex items-start gap-3.5 p-4 hover:-translate-y-0.5 hover:shadow-md">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-geo-green" />
                <span className="text-sm leading-relaxed text-ink-900/70 dark:text-mist-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
