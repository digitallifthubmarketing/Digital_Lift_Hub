import SEO from "@/components/common/SEO";
import { useEffect, useMemo, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ArrowRight, Check, Download, FileText, Sparkles } from "lucide-react";

// Mapped each deliverable item directly to its service key
const deliverableMapping = [
  { serviceKey: "Website Design & Development", name: "Website Architecture & UI/UX", qty: 1, unit: "project" },
  { serviceKey: "Website Maintenance & Servicing", name: "Website Maintenance & Support", qty: 1, unit: "monthly" },
  { serviceKey: "Social Media Marketing", name: "Social Media Posts", qty: 6, unit: "per month" },
  { serviceKey: "Reels & Short Video Editing", name: "Reels Editing", qty: 4, unit: "per month" },
  { serviceKey: "Branding & Graphic Design", name: "Branding & Design", qty: 1, unit: "bundle" },
  { serviceKey: "Affiliate Marketing", name: "Affiliate Campaign Setup", qty: 1, unit: "monthly" },
  { serviceKey: "Influencer Marketing", name: "Influencer Collaboration Strategy", qty: 1, unit: "campaign" },
  { serviceKey: "Email Marketing", name: "Email Funnel & Automation", qty: 1, unit: "monthly" },
  { serviceKey: "SEO : Search Engine Optimization", name: "SEO Optimization Sprint", qty: 1, unit: "monthly" },
  { serviceKey: "Content Marketing", name: "Content Calendar & Planning", qty: 1, unit: "monthly" },
  { serviceKey: "GTM : Go-to-Market", name: "Go-to-Market Strategy", qty: 1, unit: "launch" },
  { serviceKey: "SEM: Search Engine Marketing (Paid Google search ads)", name: "Google Search Ads Management", qty: 1, unit: "monthly" },
  { serviceKey: "PPC: Pay-Per-Click (Paid advertising where you pay per click)", name: "PPC Campaign Management", qty: 1, unit: "monthly" },
  { serviceKey: "SMO: Social Media Optimization (Organic social profile growth)", name: "Organic Social Profile Growth", qty: 1, unit: "monthly" },
  { serviceKey: "ASO: App Store Optimization (Ranking apps in Apple/Google stores)", name: "App Store Optimization", qty: 1, unit: "monthly" },
  { serviceKey: "ORM: Online Reputation Management (Managing reviews and PR)", name: "Reputation & Review Management", qty: 1, unit: "monthly" },
  { serviceKey: "CRO: Conversion Rate Optimization (Improving website sales)", name: "Conversion Optimization Review", qty: 1, unit: "monthly" },
  { serviceKey: "CTR: Click-Through Rate (Ad performance metrics)", name: "CTR Performance Review", qty: 1, unit: "monthly" },
  { serviceKey: "Marketing Strategy & Campaign Planning", name: "Strategy & Planning", qty: 1, unit: "monthly" },
  { serviceKey: "Analytics & Reporting", name: "Analytics Report", qty: 1, unit: "monthly" },
];

const services = [
  { key: "Website Design & Development" },
  { key: "Website Maintenance & Servicing" },
  { key: "Social Media Marketing" },
  { key: "Reels & Short Video Editing" },
  { key: "Branding & Graphic Design" },
  { key: "Affiliate Marketing" },
  { key: "Influencer Marketing" },
  { key: "Email Marketing" },
  { key: "SEO : Search Engine Optimization" },
  { key: "Content Marketing" },
  { key: "GTM : Go-to-Market" },
  { key: "SEM: Search Engine Marketing (Paid Google search ads)" },
  { key: "PPC: Pay-Per-Click (Paid advertising where you pay per click)" },
  { key: "SMO: Social Media Optimization (Organic social profile growth)" },
  { key: "ASO: App Store Optimization (Ranking apps in Apple/Google stores)" },
  { key: "ORM: Online Reputation Management (Managing reviews and PR)" },
  { key: "CRO: Conversion Rate Optimization (Improving website sales)" },
  { key: "CTR: Click-Through Rate (Ad performance metrics)" },
  { key: "Marketing Strategy & Campaign Planning" },
  { key: "Analytics & Reporting" },
];

const serviceHighlights = [
  "Strategy-first planning",
  "Premium branding & design",
  "Retention-focused content execution",
  "Clear monthly reporting",
];

const Quotation = () => {
  const [params, setParams] = useSearchParams();
  const selected = useMemo(() => new Set((params.get("service") || "").split(",").filter(Boolean)), [params]);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!params.get("service")) {
      setParams({ service: services.map((s) => s.key).join(",") });
    }
  }, [params, setParams]);

  const toggle = (key: string) => {
    const cur = new Set(selected);
    if (cur.has(key)) cur.delete(key);
    else cur.add(key);
    setParams({ service: Array.from(cur).join(",") });
  };

  const selectedServices = services.filter((s) => selected.has(s.key));

  // Filter deliverables dynamically based on selected services
  const activeDeliverables = useMemo(() => {
    return deliverableMapping.filter((item) => selected.has(item.serviceKey));
  }, [selected]);

  // Professional Multi-page PDF Generator with Headers, Footers & Proper Margins
  const downloadPdf = async () => {
    if (!quoteRef.current) return;

    const canvas = await html2canvas(quoteRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
    });

    const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Page Margins and Printable Dimensions
    const marginX = 40;
    const headerHeight = 45;
    const footerHeight = 40;
    const printWidth = pageWidth - marginX * 2;
    const printHeight = pageHeight - headerHeight - footerHeight;

    // Convert full canvas height to PDF unit scale
    const totalContentHeightInPdf = (canvas.height * printWidth) / canvas.width;
    const totalPages = Math.ceil(totalContentHeightInPdf / printHeight);

    // Canvas slicing parameters
    const sliceCanvasHeight = (printHeight * canvas.width) / printWidth;

    for (let i = 0; i < totalPages; i++) {
      if (i > 0) pdf.addPage();

      // --- 1. HEADER (Pages after page 1 or all pages) ---
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139); // Slate-500
      pdf.text("DIGITAL LIFT HUB — SERVICE SCOPE PROPOSAL", marginX, 28);

      pdf.setFont("helvetica", "normal");
      pdf.text("+91 93461 22148 | digitallifthubmarketing@gmail.com", pageWidth - marginX, 28, { align: "right" });

      pdf.setDrawColor(226, 232, 240); // Slate-200 border
      pdf.setLineWidth(0.75);
      pdf.line(marginX, 34, pageWidth - marginX, 34);

      // --- 2. SLICE & DRAW BODY CONTENT ---
      const sourceY = i * sliceCanvasHeight;
      const currentSliceHeight = Math.min(sliceCanvasHeight, canvas.height - sourceY);

      // Create a temporary canvas for this page's slice
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = currentSliceHeight;

      const pageCtx = pageCanvas.getContext("2d");
      if (pageCtx) {
        pageCtx.fillStyle = "#ffffff";
        pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        pageCtx.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          currentSliceHeight,
          0,
          0,
          canvas.width,
          currentSliceHeight
        );

        const pageImgData = pageCanvas.toDataURL("image/png");
        const renderedHeight = (currentSliceHeight * printWidth) / canvas.width;
        pdf.addImage(pageImgData, "PNG", marginX, headerHeight, printWidth, renderedHeight, undefined, "FAST");
      }

      // --- 3. FOOTER ---
      const footerY = pageHeight - 22;
      pdf.setDrawColor(226, 232, 240);
      pdf.setLineWidth(0.75);
      pdf.line(marginX, footerY - 8, pageWidth - marginX, footerY - 8);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(148, 163, 184); // Slate-400
      pdf.text("Confidential & Proprietary • Digital Lift Hub", marginX, footerY);
      pdf.text(`Page ${i + 1} of ${totalPages}`, pageWidth - marginX, footerY, { align: "right" });
    }

    pdf.save("Digital-Lift-Hub-Proposal.pdf");
  };

  return (
    <main className="overflow-hidden">
      <SEO title="Service Proposal | Digital Lift Hub" description="Interactive proposal builder with deliverable scope and downloadable PDF." />

      <section className="relative overflow-hidden bg-[#f4ebd7] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.25),transparent_22%)]" aria-hidden="true" />
        <div className="section-shell relative py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-800 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
              proposal builder
            </div>
            <h1 className="text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-6xl">Custom growth proposal</h1>
            <p className="mt-4 text-lg text-slate-700 md:text-xl">
              Select the services you need and generate a polished proposal ready for discussion and approval.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.8)] xl:sticky xl:top-24 xl:h-fit">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-900">Choose services</h2>
              <div className="rounded-full bg-[hsl(var(--accent))]/15 px-2.5 py-1 text-xs font-semibold text-[hsl(var(--primary))]">
                {selectedServices.length} selected
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {services.map((s) => {
                const isChecked = selected.has(s.key);

                return (
                  <label
                    key={s.key}
                    className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border p-4 transition ${
                      isChecked
                        ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5 shadow-sm"
                        : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-md border ${isChecked ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white" : "border-slate-300 bg-white"}`}>
                        {isChecked && <Check className="h-3.5 w-3.5" />}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{s.key}</span>
                    </div>

                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(s.key)}
                      aria-label={`Select ${s.key}`}
                      className="sr-only"
                    />
                  </label>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">Included</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {serviceHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[hsl(var(--accent))]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="space-y-5">
            {/* The ref container captured for PDF */}
            <div ref={quoteRef} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)] md:p-8">
              <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--primary))]">Digital Lift Hub</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">Service Scope Proposal</h2>
                  <p className="mt-2 text-sm text-slate-500">Hyderabad, Telangana • digitallifthubmarketing@gmail.com • +91 93461 22148</p>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <img src="/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png" alt="Digital Lift Hub logo" className="h-12 w-12" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Digital Lift Hub</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Marketing Agency</div>
                  </div>
                </div>
              </header>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Scope</p>
                  <p className="mt-2 text-xl font-black text-slate-900">{selectedServices.length}</p>
                  <p className="text-sm text-slate-600">Selected services</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Delivery</p>
                  <p className="mt-2 text-xl font-black text-slate-900">Weekly</p>
                  <p className="text-sm text-slate-600">Rollouts & updates</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Support</p>
                  <p className="mt-2 text-xl font-black text-slate-900">Monthly</p>
                  <p className="text-sm text-slate-600">Reporting & insights</p>
                </div>
              </div>

              {/* Dynamic Deliverables Table */}
              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Deliverable</th>
                      <th className="px-4 py-3 font-semibold">Qty</th>
                      <th className="px-4 py-3 font-semibold">Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeDeliverables.length > 0 ? (
                      activeDeliverables.map((item) => (
                        <tr key={item.name} className="border-t border-slate-200">
                          <td className="px-4 py-3 text-slate-700">{item.name}</td>
                          <td className="px-4 py-3 text-slate-700">{item.qty}</td>
                          <td className="px-4 py-3 text-slate-700">{item.unit}</td>
                        </tr>
                      ))
                    ) : (
                      <tr className="border-t border-slate-200">
                        <td colSpan={3} className="px-4 py-6 text-center text-slate-500">
                          No services currently selected.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Included services</h3>
                  <ul className="mt-4 space-y-2">
                    {selectedServices.length > 0 ? (
                      selectedServices.map((s) => (
                        <li key={s.key} className="flex items-center gap-2 text-slate-700">
                          <Check className="h-4 w-4 text-[hsl(var(--accent))]" />
                          {s.key}
                        </li>
                      ))
                    ) : (
                      <li className="text-slate-500">No services selected yet.</li>
                    )}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-[hsl(var(--accent))]/25 bg-[hsl(var(--accent))]/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--primary))]">Proposal notes</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    Delivery includes weekly rollouts, monthly performance notes, brand support, and a collaborative review process for smooth execution.
                  </p>
                  <p className="mt-3 text-xs text-slate-500">Weekly Off: Sunday</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={downloadPdf}
                disabled={selectedServices.length === 0}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[0_18px_35px_-18px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>

              <Link
                to="/agreement"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-3 text-sm font-semibold text-[hsl(var(--accent-foreground))] shadow-[0_18px_35px_-18px_rgba(245,158,11,0.75)] transition hover:-translate-y-0.5"
              >
                Proceed to discussion
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Contact us
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Quotation;