import {
  FaLinkedin,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaBriefcase,
} from "react-icons/fa";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/lilian-agbonkpolor-595aa0394", color: "#0A66C2" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@lilian_trust1", color: "#1A120C" },
  { icon: FaFacebook, href: "https://www.facebook.com/share/1Cn47Pzvma", color: "#1877F2" },
  { icon: FaBriefcase, href: "https://www.upwork.com/freelancers/~0174b260116c7bf734", color: "#14A800" },
  { icon: FaTwitter, href: "https://x.com/LilianEsohe", color: "#1DA1F2" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2A1A12]/10 bg-[#F3EBE2] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <h2 className="text-[#1A120C] font-semibold text-xl mb-3">
              Flabby Tech Adventure
            </h2>
            <p className="text-sm text-[#5A4638] leading-relaxed">
              Full-stack development · Automation · Scalable systems
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-[#5A4638]">
            <a href="#intro" className="hover:text-[#2A1A12] transition">About</a>
            <a href="#services" className="hover:text-[#2A1A12] transition">Services</a>
            <a href="#projects" className="hover:text-[#2A1A12] transition">Projects</a>
            <a href="#booking" className="hover:text-[#2A1A12] transition">Book a Call</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center gap-4 text-xl mb-10">
          {socials.map(({ icon: Icon, href, color }) => (
            
              <a key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 hover:scale-110 transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#5A4638]">
          © {new Date().getFullYear()} Flabby Tech Adventure. All rights reserved.
        </p>
      </div>
    </footer>
  );
}