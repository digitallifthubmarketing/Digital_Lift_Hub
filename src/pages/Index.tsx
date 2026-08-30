import SEO from "@/components/common/SEO";
import Testimonials from "@/components/home/Testimonials";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  LayoutTemplate,
  Megaphone,
  Palette,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Website Design & Development",
    description: "Beautiful, fast, and conversion-focused websites tailored for your business goals.",
    icon: Globe,
  },
  {
    title: "Website Maintenance",
    description: "Ongoing updates, support, and care to keep your digital presence secure and smooth.",
    icon: LayoutTemplate,
  },
  {
    title: "Social Media Marketing",
    description: "Content strategy, audience growth, and campaign execution that turns attention into leads.",
    icon: Megaphone,
  },
  {
    title: "Branding & Design",
    description: "Logo systems, visual identity, and creative assets that help your business stand out.",
    icon: Palette,
  },
  {
    title: "Reels & Short Video",
    description: "High-performing short-form videos that keep your brand visible and relevant online.",
    icon: Video,
  },
  {
    title: "Affiliate Marketing",
    description: "Performance-driven partnerships that expand reach, trust, and customer acquisition efficiently.",
    icon: TrendingUp,
  },
  {
    title: "Influencer Marketing",
    description: "Creator-led campaigns that boost credibility and bring your brand in front of the right audience.",
    icon: Sparkles,
  },
  {
    title: "Email Marketing",
    description: "Lifecycle email campaigns and lead nurturing designed to increase retention and conversions.",
    icon: BarChart3,
  },
  {
    title: "SEO : Search Engine Optimization",
    description: "Organic growth through technical, on-page, and content optimization that improves visibility.",
    icon: Globe,
  },
  {
    title: "Content Marketing",
    description: "Value-led content strategy that builds authority, engagement, and long-term brand trust.",
    icon: Megaphone,
  },
  {
    title: "GTM : Go-to-Market",
    description: "Launch positioning and campaign strategy designed for strong market entry and measurable traction.",
    icon: TrendingUp,
  },
  {
    title: "Performance Analytics",
    description: "Actionable reporting and optimization based on real data, not guesswork.",
    icon: BarChart3,
  },
];

const proofPoints = [
  "Custom website experiences built to convert",
  "Brand-first creative with measurable marketing strategy",
  "Responsive support from strategy to launch",
];

const processSteps = [
  { step: "01", title: "Discover", text: "We learn your market, goals, and growth blockers." },
  { step: "02", title: "Design", text: "We shape a clear digital identity and customer journey." },
  { step: "03", title: "Build", text: "We launch, optimize, and refine the experience across channels." },
];

const stats = [
  { value: "100+", label: "Projects delivered" },
  { value: "3x", label: "Average engagement lift" },
  { value: "24/7", label: "Support mindset" },
];

const Index = () => {
  return (
    <main className="overflow-hidden">
      <SEO
        title="Digital Lift Hub | Web Development, Social Media & Branding"
        description="Hyderabad digital agency: website design & maintenance, social media, reels, branding, campaigns, and analytics. Request a proposal today."
      />

      <section className="relative overflow-hidden bg-[#f4ebd7] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.28),transparent_24%)]" aria-hidden="true" />
        <div className="section-shell relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-800 shadow-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-[hsl(var(--accent))]" />
              digital growth partners
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-slate-900 md:text-6xl">
              Lift your brand with a digital presence that performs.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-700">
              We help businesses grow through standout websites, social media strategy, branding, video content, and conversion-first digital experiences.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/quotation"
                className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-semibold text-[hsl(var(--accent-foreground))] shadow-[0_18px_35px_-18px_rgba(245,158,11,0.8)] transition hover:-translate-y-0.5"
              >
                Request a proposal
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_35px_-18px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-800">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-2 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent))]" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel gold-ring relative rounded-[2rem] border border-white/10 p-6 text-slate-900">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Growth snapshot</div>
                    <div className="mt-2 text-3xl font-black">+68%</div>
                  </div>
                  <div className="rounded-2xl bg-[hsl(var(--accent))]/15 p-3 text-[hsl(var(--accent))]">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Brand visibility</span>
                      <span className="font-medium text-white">92%</span>
                    </div>
                    <div className="mt-2 h-2.5 rounded-full bg-slate-800">
                      <div className="h-2.5 w-[92%] rounded-full bg-[hsl(var(--accent))]" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Campaign conversion</span>
                      <span className="font-medium text-white">81%</span>
                    </div>
                    <div className="mt-2 h-2.5 rounded-full bg-slate-800">
                      <div className="h-2.5 w-[81%] rounded-full bg-[#f4c95d]" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">What we do</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Strategy, design, and growth in one place</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(15,23,42,0.9)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
              <Link
                to={`/quotation?service=${encodeURIComponent(title)}`}
                className="mt-5 inline-flex items-center text-sm font-semibold text-[hsl(var(--primary))] transition group-hover:text-[hsl(var(--accent))]"
              >
                Inquire now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100/80 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Why clients choose us</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">A premium experience from first click to last conversion</h2>
            <div className="mt-8 space-y-5">
              {[
                "Design-first strategy with clear business goals",
                "Modern, mobile-friendly experiences that feel premium",
                "Transparent communication and execution built around results",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              { number: "6+", label: "Years of creative strategy" },
              { number: "24/7", label: "Responsive client support" },
              { number: "90%", label: "Clients return for growth work" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-[0_20px_50px_-35px_rgba(15,23,42,0.8)]">
                <div className="text-4xl font-black text-slate-900">{metric.number}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">How we work</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Simple process, meaningful results</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {processSteps.map(({ step, title, text }) => (
            <div key={step} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.8)]">
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[hsl(var(--accent))]">{step}</div>
              <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="section-shell pb-20">
        <div className="rounded-[2rem] bg-[var(--gradient-hero)] p-8 text-white shadow-[0_32px_80px_-32px_rgba(15,23,42,0.8)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Let’s build your next move</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl md:text-black/85">Ready to grow a brand people trust?</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                to="/quotation"
                className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-semibold text-[hsl(var(--accent-foreground))] shadow-[0_18px_35px_-18px_rgba(245,158,11,0.8)] transition hover:-translate-y-0.5"
              >
                Book a consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;