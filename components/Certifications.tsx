type Certification = {
  title: string;
  issuer: string;
  date: string;
};

// TODO: Replace with real certifications once available
const certifications: Certification[] = [
  { title: "Certification Title", issuer: "Issuing Organization", date: "2025" },
  { title: "Certification Title", issuer: "Issuing Organization", date: "2025" },
  { title: "Certification Title", issuer: "Issuing Organization", date: "2025" },
];

// TODO: Replace with real Google Drive folder link (set sharing to "Anyone with the link can view")
const driveLink = "https://drive.google.com/your-folder-link-here";

const hasCertifications = false; // flip to true once real data is added

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-16 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>
            Certifications
          </h2>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            Credentials & continued learning
          </p>
        </div>
        {hasCertifications && (
          
           <a href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border px-3 py-1 rounded-full transition hover:opacity-70"
            style={{ borderColor: "rgba(42,26,18,0.25)", color: "var(--text)" }}
          >
            View All →
          </a>
        )}
      </div>

      {hasCertifications ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            
              <a key={i}
               href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card block"
            >
              <h3 className="font-semibold text-lg" style={{ color: "var(--text)" }}>
                {cert.title}
              </h3>
              <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
                {cert.issuer} · {cert.date}
              </p>
            </a>
          ))}
        </div>
      ) : (
        <div
          className="card text-center py-12"
          style={{ color: "var(--muted)" }}
        >
          <p className="text-sm">Certifications coming soon.</p>
        </div>
      )}
    </section>
  );
}