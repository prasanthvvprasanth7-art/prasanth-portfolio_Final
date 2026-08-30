"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Linkedin, Github, Mail, MapPin, Instagram } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ── Left copy ───────────────────────────────────────────── */}
          <div>
            {/* availability badge */}
            <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-geo-teal/25 bg-geo-teal/8 px-4 py-1.5 text-xs font-medium text-geo-teal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-geo-teal opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-geo-teal" />
              </span>
              Open to opportunities · India &amp; Remote
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.08 }}
              className="font-display text-[2.6rem] font-bold leading-[1.07] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Hi, I&apos;m{" "}
              <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.16 }}
              className="mt-3 font-display text-lg font-medium text-ink-900/55 dark:text-mist-300 sm:text-xl">
              {profile.title}
            </motion.p>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.22 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-900/60 dark:text-mist-300/80">
              {profile.summary}
            </motion.p>

            {/* location */}
            <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0.3 }}
              className="mt-4 flex items-center gap-1.5 text-sm text-ink-900/40 dark:text-mist-400">
              <MapPin className="h-4 w-4 text-geo-amber" />
              {profile.location}
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.32 }}
              className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View My Projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </motion.div>

            {/* socials */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0.44 }}
  className="mt-9 flex items-center gap-3">
  {[
    { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: profile.social.github,   icon: Github,   label: "GitHub" },
    { href: `mailto:${profile.email}`, icon: Mail,   label: "Email" },
    { href: profile.social.instagram, icon: Instagram, label: "Instagram" }, // ✅ Added here
  ].map(({ href, icon: Icon, label }) => (
    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 text-ink-900/55 transition-all hover:-translate-y-1 hover:border-geo-teal/40 hover:text-pink-500 dark:border-white/10 dark:text-mist-400">
      <Icon className="h-[18px] w-[18px]" />
    </a>
  ))}
</motion.div>

          </div>

          {/* ── Right card ──────────────────────────────────────────── */}
          <motion.div initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.75, delay:0.18 }}
            className="relative mx-auto hidden w-full max-w-[360px] lg:block">

            {/* glow halo */}
            <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-geo-teal/25 via-geo-blue/18 to-geo-green/18 blur-3xl" />

            <div className="glass relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] px-8 py-14 shadow-glass">
              {/* big initials */}
              <span className="font-display text-[7rem] font-black leading-none tracking-tighter text-ink-900/8 dark:text-white/8 select-none">
                {profile.initials}
              </span>

              {/* orbit ring */}
              <motion.div animate={{ rotate:360 }} transition={{ duration:22, repeat:Infinity, ease:"linear" }}
                className="pointer-events-none absolute inset-6 rounded-full border border-dashed border-geo-teal/20" />

              {/* stat chips */}
              <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
                className="absolute -bottom-4 -left-6 rounded-2xl border border-ink-900/8 bg-white/90 px-5 py-3.5 shadow-glass dark:border-white/10 dark:bg-ink-700/90">
                <p className="font-display text-2xl font-bold">{profile.stats[0].value}+</p>
                <p className="text-xs text-ink-900/50 dark:text-mist-400">{profile.stats[0].label}</p>
              </motion.div>

              <motion.div animate={{ y:[0,10,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
                className="absolute -right-5 -top-4 rounded-2xl border border-ink-900/8 bg-white/90 px-5 py-3.5 shadow-glass dark:border-white/10 dark:bg-ink-700/90">
                <p className="font-display text-2xl font-bold">{profile.stats[1].value}+</p>
                <p className="text-xs text-ink-900/50 dark:text-mist-400">{profile.stats[1].label}</p>
              </motion.div>

              <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:7, repeat:Infinity, ease:"easeInOut", delay:1 }}
                className="absolute right-0 bottom-16 rounded-2xl border border-ink-900/8 bg-white/90 px-5 py-3.5 shadow-glass dark:border-white/10 dark:bg-ink-700/90">
                <p className="font-display text-2xl font-bold">7.8</p>
                <p className="text-xs text-ink-900/50 dark:text-mist-400">CGPA</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a href="#about" aria-label="Scroll"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-xs text-ink-900/35 dark:text-mist-500 sm:flex"
        animate={{ y:[0,7,0] }} transition={{ duration:2.2, repeat:Infinity }}>
        Scroll <ArrowDown className="h-3.5 w-3.5" />
      </motion.a>
    </section>
  );
}
