"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Compass, Code2, Layers, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = { Globe, Compass, Code2, Layers };

const barColors = [
  "from-geo-teal to-geo-blue",
  "from-geo-blue to-geo-green",
  "from-geo-green to-geo-teal",
  "from-geo-amber to-geo-teal",
];

export function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="relative py-28">
      <div className="section-container">
        <SectionHeading index="02" kicker="Skills" title="Tools & technologies"
          description="A categorised snapshot of the GIS platforms, programming languages, and specialist software I use daily." />

        {/* category tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <button key={cat.category} onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active===i ? "text-ink-950 dark:text-ink-950" : "text-ink-900/55 hover:text-ink-900 dark:text-mist-400 dark:hover:text-mist-100"
                }`}>
                {active===i && (
                  <motion.span layoutId="skills-pill" transition={{ type:"spring", duration:0.45 }}
                    className="absolute inset-0 rounded-full bg-geo-teal" />
                )}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{cat.category}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-16 }} transition={{ duration:0.3 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories[active].skills.map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.38, delay:i*0.05 }} className="card p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold">{skill.name}</span>
                  <span className="text-xs text-ink-900/45 dark:text-mist-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-900/6 dark:bg-white/8">
                  <motion.div initial={{ width:0 }} whileInView={{ width:`${skill.level}%` }}
                    viewport={{ once:true }} transition={{ duration:1, delay:i*0.06, ease:[0.22,1,0.36,1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${barColors[active % barColors.length]}`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
