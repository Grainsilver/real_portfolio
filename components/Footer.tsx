import {
  FaLinkedin,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaBriefcase,
} from "react-icons/fa";

const BRAND = "Tech Adventure"; // change to "Lilian E. Agbonkpolor" if you prefer

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lilian-agbonkpolor-595aa0394", color: "#0A66C2" },
  { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@lilian_trust1", color: "var(--text)" },
  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/share/1Cn47Pzvma", color: "#1877F2" },
  { icon: FaBriefcase, label: "Upwork", href: "https://www.upwork.com/freelancers/~0174b260116c7bf734", color: "#14A800" },
  { icon: FaTwitter, label: "X (Twitter)", href: "https://x.com/LilianEsohe", color: "#1DA1F2" },
];

const links = [
  { label: "About", href: "#intro" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Book a Call", href: "#booking" },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "rgba(42,26,18,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <h2
              className="font-semibold text-xl mb-3"
              style={{ color: "var(--text)" }}
            >
              {BRAND}
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Software Engineer | Workflow Automation (n8n, Make, Zapier, Airtable)
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition hover:opacity-70"
                style={{ color: "var(--muted)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social icons */}
        <div className="flex flex-wrap items-center gap-4 text-xl mb-10">
          {socials.map(({ icon: Icon, href, color, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color,
                backgroundColor: "var(--bg)",
                border: "1px solid rgba(42,26,18,0.15)",
              }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}