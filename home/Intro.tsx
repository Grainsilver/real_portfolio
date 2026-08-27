import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Photo */}
<div className="flex-shrink-0">
  <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-[#2A1A12]/20 shadow-md">
    <Image
  src="/profile.jpg"
  alt="Lilian E. Agbonkpolor"
  width={160}
  height={160}
  className="rounded-xl object-cover border border-[#2A1A12]/20 shadow-md"
/>
  </div>
</div>

        {/* Text */}
        <div className="flex-1">
          <p className="text-[#5A4638] font-medium mb-3 tracking-wide uppercase text-sm">
            Full-Stack Developer & Automation Specialist
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#1A120C]">
            Building scalable systems that solve real problems
          </h1>

          <div className="mt-6 space-y-4 text-[#4A3B30] leading-relaxed max-w-xl">
            <p>
              I am a full-stack developer focused on building modern, scalable
              web applications. I create systems that simplify complexity and
              work reliably at scale.
            </p>
            <p>
              Core stack: MERN, TypeScript, GraphQL, React Native, Docker,
              CI/CD, SQL & NoSQL databases. I also bring experience in
              automation, lead generation, and business operations.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">   {/* Intro.tsx, was gap-4 */}
            <a href="#booking" className="btn">
              Book a Consultation
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-[10px] border border-[#2A1A12]/30 text-[#2A1A12] hover:bg-[#2A1A12]/5 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}