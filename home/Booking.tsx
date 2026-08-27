export default function Booking() {
  return (
    <section id="booking"
 className="px-6 py-16 max-w-6xl mx-auto min-h-screen flex items-center justify-center">
      <div className="card max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A120C] mb-4">
          Let’s Work Together
        </h2>
        <p className="text-[#4A3B30] mb-8 max-w-lg mx-auto">
          Ready to build something scalable? Book a free 30-minute consultation
          and let’s discuss your project.
        </p>

        <div className="card max-w-3xl mx-auto text-center">   {/* Booking.tsx, was gap-4 */}
          <a
            href="mailto:agbonkpolorlilianesohe@gmail.com?subject=Project Inquiry"
            className="btn"
          >
            Send Email
          </a>
          <a
            href="https://calendly.com/agbonkpolorlilianesohe/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-[10px] border border-[#2A1A12]/40 text-[#2A1A12] hover:bg-[#2A1A12]/5 transition"
          >
            Book a Call
          </a>
        </div>

        <p className="text-xs text-[#5A4638] mt-8">
          Usually replies within 24 hours
        </p>
      </div>
    </section>
  );
}