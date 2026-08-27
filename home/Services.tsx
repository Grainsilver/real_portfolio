const services = [
  {
    title: "Full-Stack Web Development",
    desc: "Building scalable applications with modern web technologies.",
    icon: "💻",
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
  },
  {
    title: "Lead Generation & SEO",
    desc: "Optimizing online presence and generating quality leads.",
    icon: "📈",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A120C]">Services</h2>
        <p className="text-[#5A4638] mt-3">What I can help you build</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="card text-center">
            <div className="text-3xl mb-4">{s.icon}</div>
            <h3 className="font-semibold text-lg text-[#1A120C]">{s.title}</h3>
            <p className="text-[#4A3B30] mt-3 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}