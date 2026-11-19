"use client";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-mist-50 dark:bg-ink-950">
      <div className="absolute inset-0 bg-aurora opacity-90 dark:opacity-100" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-geo-teal/15 blur-[140px]"
        animate={{ x: [0, 70, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-180px] top-1/3 h-[440px] w-[440px] rounded-full bg-geo-blue/12 blur-[130px]"
        animate={{ x: [0, -55, 0], y: [0, 65, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-180px] left-1/3 h-[440px] w-[440px] rounded-full bg-geo-green/12 blur-[140px]"
        animate={{ x: [0, 45, 0], y: [0, -45, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/4 h-[260px] w-[260px] rounded-full bg-geo-amber/8 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid — fades at bottom */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(62,207,207,0.08) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(62,207,207,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
