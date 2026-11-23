type Project = {
  title: string;
  desc: string;
  stack: string;
  github?: string;
  demo?: string;
  status: string;
};

const projects: Project[] = [
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
  {
    title: "n8n Workflow Automation",
    desc: "Automated business workflows built with n8n, connecting apps and APIs to remove repetitive manual tasks.",
    github: "https://github.com/Grainsilver/n8n-workflow-automation",
     stack: "n8n · Next.js · Airtable · Gmail · Cal.com . APIs . Automation",
    demo: "",
    status: "Completed",
  },
  {
    title: "Zapier Automation Workflow",
    desc: "Multi-step Zapier automations that move data between tools and trigger actions without manual effort.",
    stack: "Zapier · APIs · Airtable · Gmail · Slack . Automation",
    github: "https://github.com/Grainsilver/zapier-automation-workflow",
    demo: "",
    status: "Completed",
  },
  {
    title: "Automation Tool",
    desc: "A workflow automation platform for streamlining repetitive business processes.",
    stack: "Coming Soon",
    github: "",
    demo: "",
    status: "Coming Soon",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>
            Projects
          </h2>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            Selected work & experiments
          </p>
        </div>
        <span
          className="text-sm border px-3 py-1 rounded-full"
          style={{ color: "var(--text)", borderColor: "rgba(42,26,18,0.25)" }}
        >
          More coming soon
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          // The whole card opens the live demo if there is one, otherwise the GitHub repo
          const mainLink = p.demo || p.github;

          return (
            <div
              key={i}
              className={`card group relative ${mainLink ? "cursor-pointer" : ""}`}
            >
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
  );
}