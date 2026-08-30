"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setDate(now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" }));
    };
    update();
    const interval = setInterval(update, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 90%, transparent)",
        borderColor: "rgba(42,26,18,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold tracking-tight text-lg" style={{ color: "var(--text)" }}>
            Lilian E. Agbonkpolor
          </h1>

          <div className="hidden sm:flex items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "var(--accent)" }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ backgroundColor: "var(--accent)" }}
              ></span>
            </span>
            <span className="tracking-wide">{date}</span>
            <span style={{ color: "rgba(42,26,18,0.3)" }}>•</span>
            <span
              className="font-medium tabular-nums tracking-wide"
              style={{ color: "var(--text)", fontFamily: "Georgia, serif" }}
            >
              {time}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--muted)" }}>
          <a href="#intro" className="hover:opacity-70 transition">About</a>
          <a href="#services" className="hover:opacity-70 transition">Services</a>
          <a href="#projects" className="hover:opacity-70 transition">Projects</a>
          <a href="#booking" className="btn text-sm py-2 px-5">
            Book a Call
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border transition hover:opacity-70"
            style={{ borderColor: "rgba(42,26,18,0.25)", color: "var(--text)" }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        <button
          className="md:hidden text-xl"
          style={{ color: "var(--text)" }}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-sm" style={{ color: "var(--muted)" }}>
          <a href="#intro" onClick={() => setOpen(false)}>About</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#booking" onClick={() => setOpen(false)} className="btn text-center">
            Book a Call
          </a>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 mt-2"
            style={{ color: "var(--text)" }}
          >
            {isDark ? "☀️ Light mode" : "🌙 Dark mode"}
          </button>
        </div>
      )}
    </nav>
  );
}