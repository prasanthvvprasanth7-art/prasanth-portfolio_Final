"use client";
import { motion } from "framer-motion";

export function SectionHeading({ index, kicker, title, description, align = "left" }: {
  index: string; kicker: string; title: string; description?: string; align?: "left"|"center";
}) {
  return (
    <motion.div initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
      className={`mb-12 max-w-2xl ${align==="center" ? "mx-auto text-center" : ""}`}>
      <span className="kicker">{index} — {kicker}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-[2.2rem]">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-900/60 dark:text-mist-300/80">{description}</p>
      )}
    </motion.div>
  );
}
