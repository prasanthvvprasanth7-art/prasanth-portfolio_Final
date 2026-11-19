"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "#about",         label: "About" },
  { href: "#skills",        label: "Skills" },
  { href: "#experience",    label: "Experience" },
  { href: "#projects",      label: "Projects" },
  { href: "#education",     label: "Education" },
  { href: "#certifications",label: "Certifications" },
  { href: "#contact",       label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("#about");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="section-container">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${scrolled ? "glass-light shadow-glass" : "bg-transparent"}`}>

          <a href="#hero" className="font-display text-lg font-bold tracking-tight">
            {profile.initials}<span className="text-geo-teal">.</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-ink-900 dark:text-white"
                    : "text-ink-900/50 hover:text-ink-900 dark:text-mist-400 dark:hover:text-mist-100"
                }`}>
                {active === link.href && (
                  <motion.span layoutId="nav-pill" transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 rounded-full bg-ink-900/5 dark:bg-white/10" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={profile.resumeUrl}
              className="hidden rounded-full bg-geo-teal/15 px-4 py-2 text-xs font-semibold text-geo-teal transition-colors hover:bg-geo-teal/25 sm:block">
              Resume / CV
            </a>
            <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 dark:border-white/10 lg:hidden">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }} className="mt-2 overflow-hidden rounded-2xl glass-light lg:hidden">
              <div className="flex flex-col gap-1 p-3">
                {links.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-ink-900/75 hover:bg-ink-900/5 dark:text-mist-300 dark:hover:bg-white/5">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
