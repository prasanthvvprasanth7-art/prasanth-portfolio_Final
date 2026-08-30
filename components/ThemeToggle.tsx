"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} aria-label="Toggle dark mode"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 backdrop-blur transition-colors hover:border-geo-teal/30 dark:border-white/10 dark:bg-white/5">
      <Sun  className="h-[17px] w-[17px] scale-100 rotate-0   text-ink-900 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[17px] w-[17px] scale-0  rotate-90 text-mist-100 transition-all duration-300 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
