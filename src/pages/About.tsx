import SEO from "@/components/common/SEO";
import { ArrowRight, CheckCircle2, Compass, Lightbulb, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Strategy with purpose",
    text: "We start with business goals and buyer behavior so every design, post, and campaign serves a clear purpose.",
    icon: Compass,
  },
  {
    title: "Creative that converts",
    text: "Visual storytelling matters. We build premium assets that earn attention and move people to act.",
    icon: Lightbulb,
  },
  {
    title: "Growth that stays honest",
    text: "We believe in clear communication, consistent reporting, and realistic marketing decisions that build momentum.",
    icon: Sparkles,
  },
];

const founders = [
  {
    name: "Laxman",
    role: "Co-Founder & Creative Manager",
    text: "Leads brand design and content quality ensuring every creative is scroll-stopping, polished, and aligned with the business vision.",
    image: "/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png",
  },
  {
    name: "Sai Krishna",
    role: "Co-Founder & Digital Strategist",
    text: "Owns the growth strategy, campaign planning, and performance analysis so brands can scale with clarity and confidence.",
    image: "/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png",
  },
];

const About = () => {
  return (
    <main className="overflow-hidden">
      <SEO
        title="About Digital Lift Hub"
        description="Our story, mission and the founders behind Digital Lift Hub in Hyderabad."
      />

      <section className="relative overflow-hidden bg-[#f4ebd7] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.3),transparent_22%)]" aria-hidden="true" />
        <div className="section-shell relative py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-800">About digital lift hub</p>
            <h1 className="text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-6xl">We build digital brands people trust.</h1>
            <p className="mt-5 text-lg text-slate-700 md:text-xl">
              Digital Lift Hub is a Hyderabad-based digital growth studio helping businesses stand out with premium web experiences, content strategy, and measurable brand growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Our story</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">A creative studio built for modern businesses.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We believe great digital growth is not just about posting content or building a website. It is about creating a clear identity, a memorable experience, and consistent progress that turns attention into real business outcomes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              From strategy and branding to execution and reporting, we work closely with clients to build systems that feel premium, perform smoothly, and support long-term growth.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.8)]">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "5+", label: "Years of creative strategy" },
                { value: "50+", label: "Channels supported" },
                { value: "100%", label: "Brand-first execution" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-black text-slate-900">{item.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100/80 py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">What drives us</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Our principles</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.8)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Meet the founders</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">The people behind the work</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {founders.map((person) => (
            <article key={person.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.8)] md:p-8">
              <div className="flex items-center gap-5">
                <img src={person.image} alt={`${person.name} - ${person.role}`} className="h-20 w-20 rounded-2xl bg-slate-100 p-3" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{person.name}</h3>
                  <p className="text-sm font-medium text-[hsl(var(--primary))]">{person.role}</p>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-600">{person.text}</p>

              <div className="mt-6 space-y-2">
                {[
                  "Branded creative direction",
                  "Performance-focused execution",
                  "Clear, consistent communication",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent))]" />
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="rounded-[2rem] bg-[var(--gradient-hero)] p-8 text-white shadow-[0_35px_90px_-30px_rgba(15,23,42,0.8)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Let’s create your next chapter</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl text-black">Ready to grow with a team that understands your brand?</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link to="/quotation" className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-semibold text-[hsl(var(--accent-foreground))] transition hover:-translate-y-0.5">
                Request a proposal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
