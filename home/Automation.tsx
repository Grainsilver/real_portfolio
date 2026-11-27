"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SyntheticEvent } from "react";

type Step = { src: string; caption: string };

type Workflow = {
  title: string;
  status: string;
  desc: string;
  stack: string[];
  video: { src: string; poster: string };
  steps: Step[];
};

const workflows: Workflow[] = [
  {
    title: "n8n Workflow Automation",
    status: "Completed",
    desc: "Automated business workflows built with n8n, connecting a Next.js app to Airtable, Gmail and Cal.com to remove repetitive manual tasks.",
    stack: ["n8n", "Next.js", "Airtable", "Gmail", "Cal.com"],
    video: { src: "/n8n/HarborVale_vid.mp4", poster: "/n8n/1_cover.jpg" },
    steps: [
      { src: "/n8n/2_intake_form.jpg", caption: "Client intake form" },
      { src: "/n8n/3_n8n_workflow.jpg", caption: "n8n workflow" },
      { src: "/n8n/4_airtable_crm.jpg", caption: "Airtable CRM record" },
      { src: "/n8n/5_booking_confirmed.jpg", caption: "Booking confirmed" },
      { src: "/n8n/6_dashboard_follow_up.jpg", caption: "Dashboard and follow-up" },
    ],
  },
  {
    title: "Zapier Automation Workflow",
    status: "Completed",
    desc: "Multi-step Zapier automations that move data between tools and trigger actions without manual effort.",
    stack: ["Zapier", "Airtable", "Slack", "APIs"],
    video: {
      src: "/zappier/Brightside_Zapier_Demo.mp4",
      poster: "/zappier/Brightside_thumbnail.jpg",
    },
    steps: [
      { src: "/zappier/02_zap_workflow.jpg", caption: "Zap workflow" },
      { src: "/zappier/04_airtable_record.jpg", caption: "Airtable record" },
      { src: "/zappier/06_slack_alerts.jpg", caption: "Slack alerts" },
    ],
  },

    {
    title: "Salesforce Sandbox Refresh",
    status: "Completed",
    desc: "An n8n workflow that copies Salesforce Production data into a Sandbox: Accounts, Contacts and Opportunities stay linked, personal data is masked, and re-runs update instead of duplicating. Every run ends with a Pass/Fail report.",
    stack: ["n8n", "Salesforce", "JWT / OAuth 2.0", "REST API", "Docker"],
    video: {
      src: "/salesforce/Sandbox_Refresh_Assistant_Demo.mp4",
      poster: "/salesforce/01_cover.jpg",
    },
    steps: [
      { src: "/salesforce/02_workflow.jpg", caption: "n8n workflow" },
      { src: "/salesforce/03_masking.jpg", caption: "Data masking" },
      { src: "/salesforce/04_upsert.jpg", caption: "Upsert on Source Id" },
      { src: "/salesforce/05_jwt.jpg", caption: "JWT secure login" },
      { src: "/salesforce/06_report.jpg", caption: "Pass/Fail report" },
    ],
  },
];


const line = "color-mix(in srgb, var(--text) 14%, transparent)";
const soft = "color-mix(in srgb, var(--text) 8%, transparent)";

// Blocks the right-click menu on media
const block = (e: SyntheticEvent) => e.preventDefault();

export default function Automation() {
  const [open, setOpen] = useState<Step | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section
      id="automation-projects"
      className="px-6 py-20 max-w-6xl mx-auto scroll-mt-24"
    >
      {/* Heading */}
      <div className="mb-14 max-w-2xl">
        <p
          className="text-xs font-bold uppercase tracking-[0.25em]"
          style={{ color: "var(--muted)" }}
        >
          Automation &amp; Systems
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold mt-3 leading-tight"
          style={{ color: "var(--text)" }}
        >
          Workflows that run the business for you
        </h2>
        <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
          Real automations from first form submission to final follow-up. Watch
          each one run, then step through how it works.
        </p>
      </div>

      <div className="space-y-12">
        {workflows.map((w, wi) => (
          <article
            key={w.title}
            className="rounded-3xl p-6 md:p-10 border"
            style={{ backgroundColor: "var(--card)", borderColor: line }}
          >
            {/* Title row */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className="text-5xl font-bold leading-none"
                  style={{ color: soft }}
                >
                  {String(wi + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "var(--text)" }}
                >
                  {w.title}
                </h3>
              </div>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full border"
                style={{ color: "var(--text)", borderColor: line }}
              >
                ● {w.status}
              </span>
            </div>

            <p
              className="mt-5 max-w-3xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {w.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {w.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ color: "var(--text)", backgroundColor: soft }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Video in a browser-style frame */}
            <div
              className="mt-8 rounded-2xl overflow-hidden border shadow-xl"
              style={{ borderColor: line, backgroundColor: "var(--bg)" }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: line }}
              >
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span
                  className="ml-3 text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  Live walkthrough
                </span>
              </div>
              <video
                src={w.video.src}
                poster={w.video.poster}
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                onContextMenu={block}
                playsInline
                preload="none"
                className="w-full aspect-video bg-black object-contain"
              />
            </div>

            {/* Steps */}
            <p
              className="mt-10 mb-4 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)" }}
            >
              How it works · click to enlarge
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {w.steps.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setOpen(s)}
                  className="group text-left cursor-zoom-in"
                >
                  <div
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                    style={{ borderColor: line, backgroundColor: "var(--bg)" }}
                  >
                    <Image
                      src={s.src}
                      alt={s.caption}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      draggable={false}
                      onContextMenu={block}
                      className="object-cover select-none transition duration-500 group-hover:scale-105"
                    />
                    {/* Invisible layer so right-click never reaches the image */}
                    <div className="absolute inset-0" onContextMenu={block} />
                    <span
                      className="absolute top-2 left-2 text-[11px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "var(--bg)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p
                    className="mt-2 text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    {s.caption}
                  </p>
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-10 bg-black/85 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute top-4 right-5 text-3xl text-white/80 hover:text-white"
          >
            ×
          </button>
          <div className="relative w-full max-w-5xl h-[75vh]">
            <Image
              src={open.src}
              alt={open.caption}
              fill
              sizes="90vw"
              draggable={false}
              onContextMenu={block}
              className="object-contain select-none"
            />
            <div className="absolute inset-0" onContextMenu={block} />
          </div>
          <p className="mt-4 text-sm text-white/90">{open.caption}</p>
        </div>
      )}
    </section>
  );
}