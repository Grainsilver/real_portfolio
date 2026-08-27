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
    title: "NHS Document Flagging AI Agent",
    desc: "An AI agent that automatically scans and flags NHS PDF documents based on defined criteria.",
    stack: "TypeScript · AI/LLM · PDF Processing",
    github: "",
    demo: "https://ai-agent-4qub.vercel.app",
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
    title: "Automation Tool",
    desc: "A workflow automation platform for streamlining repetitive business processes.",
    stack: "Coming Soon",
    github: "",
    demo: "",
    status: "In Progress",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A120C]">Projects</h2>
          <p className="text-[#5A4638] mt-2">Selected work & experiments</p>
        </div>
        <span className="text-sm text-[#2A1A12] border border-[#2A1A12]/25 px-3 py-1 rounded-full">
          More coming soon
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="card group block">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg text-[#1A120C] group-hover:text-[#2A1A12] transition">
                {p.title}
              </h3>
              <span className="text-xs text-[#2A1A12] bg-[#2A1A12]/10 px-2 py-1 rounded">
                {p.status}
              </span>
            </div>
            <p className="text-[#4A3B30] text-sm leading-relaxed">{p.desc}</p>
            <p className="text-xs text-[#2A1A12] mt-4 font-medium">{p.stack}</p>

            {(p.github || p.demo) && (
  <div className="relative z-10 flex gap-4 mt-4">
    {p.github && (
      
       <a href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium underline text-[#2A1A12] hover:text-[#5A4638] transition"
      >
        GitHub →
      </a>
    )}
    {p.demo && (
      
        <a href={p.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium underline text-[#2A1A12] hover:text-[#5A4638] transition"
      >
        Live Demo →
      </a>
    )}
  </div>
)}
          </div>
        ))}
      </div>
    </section>
  );
}