import { useState } from "react";
import SEO from "@/components/common/SEO";
import { ArrowDownToLine, CheckCircle2, FileText, ShieldCheck, Sparkles } from "lucide-react";

const Agreement = () => {
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  const downloadPdf = async () => {
    const el = document.getElementById("agreement");
    if (!el) return;
    const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);
    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: "#ffffff",
    });
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const ratio = pageWidth / canvas.width;
    const height = canvas.height * ratio;
    pdf.addImage(img, "PNG", 0, 0, pageWidth, height);
    pdf.save("Digital-Lift-Hub-Agreement.pdf");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvgqdgao", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }

    setTimeout(() => setStatus("IDLE"), 3000);
  };

  return (
    <main className="overflow-hidden">
      <SEO
        title="Client Agreement | Digital Lift Hub"
        description="Scope, confidentiality, revisions and terms. Sign digitally via Formspree."
      />

      <section className="relative overflow-hidden bg-[#f4ebd7] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.28),transparent_24%)]" aria-hidden="true" />
        <div className="section-shell relative py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-800 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
              Client agreement
            </div>
            <h1 className="text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-6xl">Professional, clear, and ready to sign.</h1>
            <p className="mt-5 text-lg text-slate-700 md:text-xl">
              The agreement below outlines scope, timelines, revisions, confidentiality, and the commercial terms for our partnership.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div id="agreement" className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] md:p-8">
            <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[hsl(var(--primary))]">Digital Lift Hub</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight">Digital Marketing Services Agreement</h2>
              </div>
              <img
                src="/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png"
                alt="Digital Lift Hub logo"
                className="h-14 w-14 rounded-2xl bg-slate-100 p-2"
              />
            </header>

            <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700">
              <p>
                This Digital Marketing Services Agreement is entered into between <span className="font-semibold text-slate-900">Digital Lift Hub</span> ("Agency") and the Client.
              </p>

              <div>
                <h3 className="mb-2 text-base font-bold text-slate-900">Scope of Services</h3>
                <p>
                  Social Media Marketing (6+ posts/month with captions), Reels Editing (4/month), Branding & Design (logo/templates/posters/stories), Strategy & Campaign Planning, Analytics & Reporting.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold text-slate-900">Deliverables</h3>
                <p>Weekly rollouts, end-of-month performance report, and strategic guidance throughout the engagement. Weekly off: Sunday.</p>
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold text-slate-900">Revisions</h3>
                <p>Up to 2 revisions per asset. Additional revisions will be billed separately based on the requested scope.</p>
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold text-slate-900">Confidentiality</h3>
                <p>Both parties agree to keep proprietary information and strategic details confidential throughout the partnership and beyond the term where required.</p>
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold text-slate-900">Payments</h3>
                <p>Total Monthly Cost: ₹25,000. Advance ₹12,500 on onboarding; Balance ₹12,500 by month-end. Payment via UPI, NEFT, or Bank Transfer.</p>
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold text-slate-900">Termination</h3>
                <p>Either party may terminate this agreement with 7-day written notice. Any dues for completed work remain payable.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Quick actions</p>
              <button
                onClick={downloadPdf}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3.5 text-base font-semibold text-[hsl(var(--primary-foreground))] transition hover:-translate-y-0.5"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Download PDF
              </button>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Included</p>
                  <p className="text-lg font-bold text-slate-900">Transparent terms</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-slate-700">
                {[
                  "Clear service scope",
                  "Revision policy",
                  "Confidentiality protection",
                  "Transparent billing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent))]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)] md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">E-signature</p>
              <h2 className="mt-1 text-2xl font-black text-slate-900">Accept and send your agreement</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-3" aria-label="Agreement acceptance form">
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

            <label className="text-sm font-medium text-slate-700 md:col-span-1">
              Full Name
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[hsl(var(--primary))] focus:bg-white"
                name="name"
                placeholder="Your full name"
                required
              />
            </label>

            <label className="text-sm font-medium text-slate-700 md:col-span-1">
              Email
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[hsl(var(--primary))] focus:bg-white"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="text-sm font-medium text-slate-700 md:col-span-1">
              Date
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[hsl(var(--primary))] focus:bg-white"
                name="date"
                type="date"
                required
              />
            </label>

            <label className="md:col-span-3 flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <input type="checkbox" required className="h-4 w-4 rounded border-slate-300 text-[hsl(var(--primary))]" />
              I accept the terms in the Client Agreement.
            </label>

            <div className="md:col-span-3 relative flex justify-center pt-2">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-semibold text-[hsl(var(--accent-foreground))] transition hover:-translate-y-0.5">
                Submit Acceptance
              </button>

              {status === "SUCCESS" && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30">
                  ✅ Sent Successfully
                </div>
              )}
              {status === "ERROR" && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white shadow-lg shadow-red-500/30">
                  ❌ Failed to Send
                </div>
              )}
            </div>
          </form>

          <p className="mt-4 text-xs text-slate-500">
            Don’t forget to send your preferred quote after contacting us.
          </p>
        </section>
      </section>
    </main>
  );
};

export default Agreement;
