const services = [
  {
    title: "Full-Stack Web Development",
    desc: "Building scalable applications with modern web technologies.",
    icon: "💻",
    href: "#fullstack-projects",
  },
  {
    title: "Mobile Development",
    desc: "React Native apps with clean UI and performance focus.",
    icon: "📱",
  },
  {
    title: "Automation & Systems",
    desc: "Automating workflows, APIs, and business processes.",
    icon: "⚙️",
    href: "#automation-projects",
  },
  {
    title: "Lead Generation & SEO",
    desc: "Optimizing online presence and generating quality leads.",
    icon: "📈",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 max-w-6xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>
          Services
        </h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          What I can help you build
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const body = (
            <>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-lg" style={{ color: "var(--text)" }}>
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {s.desc}
              </p>
              {s.href && (
                <p className="mt-4 text-xs font-semibold" style={{ color: "var(--text)" }}>
                  View projects ↓
                </p>
              )}
            </>
          );

          return s.href ? (
            <a key={i} href={s.href} className="card text-center block">
              {body}
            </a>
          ) : (
            <div key={i} className="card text-center">
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}