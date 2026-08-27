"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/home/Intro";
import Services from "@/home/Services";
import Projects from "@/home/Projects";
import Booking from "@/home/Booking";

const techLogos = [
  { icon: "/icons/supabass.WEBP", name: "" },
  { icon: "/icons/Zappier.jpeg", name: "" },
  { icon: "/icons/zustand-original.svg", name: "" },
  { icon: "/icons/vscode-original.svg", name: "" },
  { icon: "/icons/vite-original-wordmark.svg", name: "" },
  { icon: "/icons/vercel-original-wordmark.svg", name: "" },
  { icon: "/icons/typescript-original.svg", name: "" },
  { icon: "/icons/trello.png", name: "" },
  { icon: "/icons/tailwinds.WEBP", name: "" },
  { icon: "/icons/redux.PNG", name: "" },
  { icon: "/icons/rust.PNG", name: "" },
  { icon: "/icons/slack.PNG", name: "" },
  { icon: "/icons/powershell-original.svg", name: "" },
  { icon: "/icons/postman-original.svg", name: "" },
  { icon: "/icons/postgresql-original-wordmark.svg", name: "" },
  { icon: "/icons/playwright-original.svg", name: "" },
  { icon: "/icons/oauth-original.svg", name: "" },
  { icon: "/icons/npm-original-wordmark.svg", name: "" },
  { icon: "/icons/nextjs-original-wordmark.svg", name: "" },
  { icon: "/icons/mysql-original-wordmark.svg", name: "" },
  { icon: "/icons/make.PNG", name: "" },
  { icon: "/icons/Lemlist.PNG", name: "" },
  { icon: "/icons/hubspot.jpeg", name: "" },
  { icon: "/icons/devicon-original.svg", name: "" },
  { icon: "/icons/html5-original-wordmark.svg", name: "" },
  { icon: "/icons/mongodb-original-wordmark.svg", name: "" },
  { icon: "/icons/express-original-wordmark.svg", name: "" },
  { icon: "/icons/docker-original-wordmark.svg", name: "" },
  { icon: "/icons/git-original-wordmark.svg", name: "" },
  { icon: "/icons/css3-original-wordmark.svg", name: "" },
  { icon: "/icons/GraphQL.PNG", name: "" },
  { icon: "/icons/clickup.PNG", name: "" },
  { icon: "/icons/amazonwebservices-original-wordmark.svg", name: "" },
  { icon: "/icons/Apollo.jpeg", name: "" },
  { icon: "/icons/asana.jpeg", name: "" },
  { icon: "/icons/figma.png", name: "" },
  { icon: "/icons/bash-original.svg", name: "" },
  { icon: "/icons/canva-original.svg", name: "" },
  { icon: "/icons/cloudflare-original-wordmark (1).svg", name: "" },
];

type Pos = { left: number; top: number; dur: number; delay: number };

export default function Home() {
  const [positions, setPositions] = useState<Pos[]>([]);

  useEffect(() => {
  const count = techLogos.length;
  setPositions(
    techLogos.map((_, i) => ({
      // even horizontal band per logo, with slight jitter so it's not a grid
      left: (i / count) * 100 + (Math.random() * (100 / count) * 0.6),
      top: -(Math.random() * 800) - 100,   // deeper stagger so they don't clump vertically
      dur: 14 + Math.random() * 12,
      delay: Math.random() * -30,
    }))
  );
}, []);

  return (
    <>
      <div className="tech-bg">
        <div className="floating-logos">
          {positions.length > 0 &&
            techLogos.map((tech, i) => (
              <div
                key={i}
                className="tech-tag"
                style={{
                  left: `${positions[i].left}%`,
                  top: `${positions[i].top}px`,
                  animationDuration: `${positions[i].dur}s`,
                  animationDelay: `${positions[i].delay}s`,
                }}
              >
                <Image
                  src={tech.icon}
                  alt="Technology Logo"
                  width={40}
                  height={40}
                />
              </div>
            ))}
        </div>
      </div>

      <Navbar />

      <main className="page-wrapper">
        <Intro />
        <Services />
        <Projects />
        <Booking />
      </main>

      <Footer />
    </>
  );
}