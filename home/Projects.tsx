import Image from "next/image";
import Automation from "./Automation";

type Media = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

type Project = {
  title: string;
  desc: string;
  stack: string;
  github?: string;
  demo?: string;
  status: string;
  media?: Media;
};

const fullStackProjects: Project[] = [
  {
    title: "Lead Manager",
    desc: "A full-stack lead management system with a REST API for creating and retrieving leads, status tracking, and a clean interface for managing the pipeline.",
    stack: "Next.js · Node.js · Express · PostgreSQL",
    github: "",
    demo: "https://lead-manager-nu.vercel.app",
    status: "Live",
  },
  {
    title: "CRM Tool — West Africa",
    desc: "A feature-rich CRM built for the West African market, with automation for lead management and sales workflows.",
    stack: "Next.js · Node.js · Supabase",
    github: "",
    demo: "https://crm-saas-ashen.vercel.app",
    status: "Live",
  },
  {
    title: "NHS Document Flagging AI Agent",
    desc: "An AI agent that automatically scans and flags NHS PDF documents based on defined criteria.",
    stack: "TypeScript · AI/LLM · PDF Processing",
    github: "",
    demo: "https://ai-agent-4qub.vercel.app",
    status: "Live",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-24">
      {/* Full-stack projects */}
      <section
        id="fullstack-projects"
        className="px-6 py-16 max-w-6xl mx-auto scroll-mt-24"
      >
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>
            Full-Stack Projects
          </h2>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            Web apps, APIs and SaaS products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fullStackProjects.map((p, i) => {
            const mainLink = p.demo || p.github;

            return (
              <div
                key={i}
                className={`card group relative ${mainLink ? "cursor-pointer" : ""}`}
              >
                {p.media && (
                  <div className="relative z-10 mb-4 aspect-video overflow-hidden rounded-lg">
                    {p.media.type === "video" ? (
                      <video
                        src={p.media.src}
                        poster={p.media.poster}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={p.media.src}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                )}

                <div className="flex justify-between items-start mb-3 gap-3">
                  <h3 className="font-semibold text-lg" style={{ color: "var(--text)" }}>
                    {mainLink ? (
                      <a
                        href={mainLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 after:content-['']"
                      >
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <span
                    className="text-xs px-2 py-1 rounded whitespace-nowrap"
                    style={{
                      color: "var(--text)",
                      backgroundColor: "rgba(128,128,128,0.15)",
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {p.desc}
                </p>
                <p className="text-xs mt-4 font-medium" style={{ color: "var(--text)" }}>
                  {p.stack}
                </p>

                {(p.github || p.demo) && (
                  <div className="relative z-10 flex gap-4 mt-4">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium underline transition hover:opacity-70"
                      >
                        GitHub →
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium underline transition hover:opacity-70"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Automation showcase (its own section, not cards) */}
      <Automation />
    </div>
  );
}