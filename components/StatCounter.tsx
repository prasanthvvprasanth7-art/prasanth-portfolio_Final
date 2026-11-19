"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export function StatCounter({ value, suffix="", label, display }: {
  value: number; suffix?: string; label: string; display?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once:true, margin:"-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const c = animate(0, value, {
      duration: 1.5, ease:[0.22,1,0.36,1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => c.stop();
  }, [isInView, value]);

  return (
    <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ duration:0.5 }} className="text-center">
      <p className="font-display text-3xl font-bold sm:text-4xl">
        {display ?? <span ref={ref}>{count}</span>}{suffix}
      </p>
      <p className="mt-1 text-xs text-ink-900/50 dark:text-mist-400">{label}</p>
    </motion.div>
  );
}
