"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setDate(now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#F5EDE4]/90 backdrop-blur-md border-b border-[#1C1410]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-[#1C1410] font-semibold tracking-tight text-lg">
            Lilian E. Agbonkpolor
          </h1>
          <span className="hidden sm:inline text-xs text-[#5C4E42] border border-[#1C1410]/20 px-2 py-0.5 rounded-full">
            {date} · {time}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#5C4E42]">
          <a href="#intro" className="hover:text-[#1C1410] transition">About</a>
          <a href="#services" className="hover:text-[#1C1410] transition">Services</a>
          <a href="#projects" className="hover:text-[#1C1410] transition">Projects</a>
          <a href="#booking" className="btn text-sm py-2 px-5">
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden text-[#1C1410] text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-sm text-[#5C4E42]">
          <a href="#intro" onClick={() => setOpen(false)}>About</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#booking" onClick={() => setOpen(false)} className="btn text-center">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}