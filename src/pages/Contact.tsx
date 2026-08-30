import { useState } from "react";
import SEO from "@/components/common/SEO";
import { ArrowRight, Mail, MapPin, MessageSquareText, Phone, Send, Sparkles } from "lucide-react";

const contactMethods = [
  {
    title: "Email us",
    value: "digitallifthubmarketing@gmail.com",
    href: "mailto:digitallifthubmarketing@gmail.com",
    icon: Mail,
  },
  {
    title: "Call us",
    value: "+91 93461 22148 · +91 93980 36854",
    href: "tel:+919346122148",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Hyderabad, Telangana",
    href: "https://maps.google.com/?q=Hyderabad+Telangana",
    icon: MapPin,
  },
];

const Contact = () => {
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

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
        setTimeout(() => setStatus("IDLE"), 3000);
      } else {
        setStatus("ERROR");
        setTimeout(() => setStatus("IDLE"), 3000);
      }
    } catch {
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 3000);
    }
  };

  return (
    <main className="overflow-hidden">
      <SEO
        title="Contact | Digital Lift Hub"
        description="Contact Digital Lift Hub in Hyderabad. Phone, email, and a contact form with Map."
      />

      <section className="relative overflow-hidden bg-[#f4ebd7] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.28),transparent_24%)]" aria-hidden="true" />
        <div className="section-shell relative py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-800 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
              Let’s talk growth
            </div>
            <h1 className="text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-6xl">Tell us what you want to build.</h1>
            <p className="mt-5 text-lg text-slate-700 md:text-xl">
              Whether you need a premium website, stronger branding, or a growth strategy, we are ready to shape the next move for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)] md:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Contact details</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">We would love to hear from you.</h2>

              <div className="mt-8 space-y-4">
                {contactMethods.map(({ title, value, href, icon: Icon }) => (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[hsl(var(--primary))]/30 hover:bg-white"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</div>
                      <div className="mt-1 text-base font-medium text-slate-800">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Response time</p>
                  <p className="text-lg font-bold text-slate-900">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)] md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Send a message</p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">Start your project</h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                <Send className="h-5 w-5" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Name
                  <input
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[hsl(var(--primary))] focus:bg-white"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="text-sm font-medium text-slate-700">
                  Email
                  <input
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[hsl(var(--primary))] focus:bg-white"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Phone
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[hsl(var(--primary))] focus:bg-white"
                  name="phone"
                  placeholder="Your phone number"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Message
                <textarea
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[hsl(var(--primary))] focus:bg-white"
                  name="message"
                  placeholder="Tell us about your business, goals, and timeline"
                  rows={5}
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-semibold text-[hsl(var(--accent-foreground))] transition hover:-translate-y-0.5"
              >
                Send message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)]">
          <iframe
            title="Digital Lift Hub on Google Maps"
            className="h-[340px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Hyderabad%2C%20Telangana&output=embed"
          ></iframe>
        </div>
      </section>

      {status === "SUCCESS" && (
        <div className="fixed right-4 top-4 z-50 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30">
          ✅ Your message has been sent!
        </div>
      )}
      {status === "ERROR" && (
        <div className="fixed right-4 top-4 z-50 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/30">
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </main>
  );
};

export default Contact;
