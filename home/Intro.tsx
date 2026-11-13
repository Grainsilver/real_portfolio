import Image from "next/image";

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "REST APIs",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "API & AI Integrations",
  "CI/CD",
];

export default function Intro() {
  return (
    <section id="intro" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div
            className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border shadow-md"
            style={{ borderColor: "rgba(42,26,18,0.2)" }}
          >
            <Image
              src="/profile.jpg"
              alt="Lilian E. Agbonkpolor"
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <p
            className="font-medium mb-3 tracking-wide uppercase text-sm"
            style={{ color: "var(--text)" }}
          >
            Software Engineer
          </p>

          <h1
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: "var(--text)" }}
          >
            Turning ideas into powerful digital solutions.
          </h1>

          <div
            className="mt-6 space-y-4 leading-relaxed max-w-2xl"
            style={{ color: "var(--muted)" }}
          >
            <p style={{ color: "var(--muted)" }}>
              I build modern web applications, SaaS products, and intelligent
              software solutions that help businesses solve real problems,
              simplify complex processes, and deliver better digital
              experiences.
            </p>
            <p style={{ color: "var(--muted)" }}>
              From developing applications from the ground up to integrating
              APIs and building data-driven systems, I focus on creating
              practical, reliable software that meets real business needs.
            </p>
          </div>

          {/* Stack */}
          <div className="mt-8">
            <h2
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              What I work with
            </h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 rounded-full border"
                  style={{
                    color: "var(--text)",
                    borderColor: "rgba(42,26,18,0.25)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Approach */}
          <p
            className="mt-8 leading-relaxed max-w-2xl"
            style={{ color: "var(--muted)" }}
          >
            <span className="font-semibold" style={{ color: "var(--text)" }}>
              My approach:
            </span>{" "}
            Understand the problem, design the right solution, and build
            software that makes a meaningful difference.
          </p>

          {/* Call to action */}
          <p
            className="mt-6 text-lg font-medium max-w-2xl"
            style={{ color: "var(--text)" }}
          >
            Have an idea or a technical challenge? Let&apos;s turn it into
            something that works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="#booking" className="btn text-center">
              Book a Consultation
            </a>
            <a
              href="#projects"
              className="text-center px-6 py-3 rounded-[10px] border font-semibold transition hover:opacity-70"
              style={{
                borderColor: "rgba(42,26,18,0.3)",
                color: "var(--text)",
              }}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}