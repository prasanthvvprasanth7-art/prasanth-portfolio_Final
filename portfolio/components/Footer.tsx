"use client";
import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

const navLinks = [
  { href:"#about",          label:"About" },
  { href:"#skills",         label:"Skills" },
  { href:"#experience",     label:"Experience" },
  { href:"#projects",       label:"Projects" },
  { href:"#education",      label:"Education" },
  { href:"#certifications", label:"Certifications" },
  { href:"#contact",        label:"Contact" },
];

const socials = [
  { icon: Linkedin, href: profile.social.linkedin, label:"LinkedIn" },
  { icon: Github,   href: profile.social.github,   label:"GitHub" },
  { icon: Mail,     href:`mailto:${profile.email}`, label:"Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-900/6 bg-white/40 py-16 backdrop-blur dark:border-white/6 dark:bg-ink-900/40">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_auto_auto]">
          {/* brand */}
          <div>
            <a href="#hero" className="font-display text-2xl font-bold tracking-tight">
              {profile.initials}<span className="text-geo-teal">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-900/55 dark:text-mist-400">
              {profile.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon:Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 text-ink-900/50 transition-all hover:-translate-y-0.5 hover:border-geo-teal/40 hover:text-geo-teal dark:border-white/10 dark:text-mist-400">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-900/40 dark:text-mist-500">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-900/60 transition-colors hover:text-geo-teal dark:text-mist-400">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-900/40 dark:text-mist-500">More</p>
            <ul className="space-y-2.5">
              {navLinks.slice(4).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-900/60 transition-colors hover:text-geo-teal dark:text-mist-400">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink-900/6 pt-8 dark:border-white/6">
          <p className="flex items-center gap-1.5 text-xs text-ink-900/40 dark:text-mist-500">
            Built with <Heart className="h-3.5 w-3.5 fill-geo-teal text-geo-teal" /> by {profile.name} · {new Date().getFullYear()}
          </p>
          <motion.button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} whileHover={{ y:-3 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 text-ink-900/50 transition-colors hover:border-geo-teal/40 hover:text-geo-teal dark:border-white/10 dark:text-mist-400"
            aria-label="Back to top">
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
