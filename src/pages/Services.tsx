import SEO from "@/components/common/SEO";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  LayoutTemplate,
  MapPin,
  Megaphone,
  MessageSquare,
  Palette,
  PencilRuler,
  Shield,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceList = [
  {
    key: "Website Design & Development",
    desc: "Modern, fast, mobile-friendly websites designed to convert visitors into customers.",
    icon: Globe,
  },
  {
    key: "Website Maintenance & Servicing",
    desc: "Regular updates, speed optimization, bug fixes, and security monitoring that keep your site running smoothly.",
    icon: LayoutTemplate,
  },
  {
    key: "Social Media Marketing",
    desc: "Creative content planning and audience engagement designed to grow visibility and trust over time.",
    icon: Megaphone,
  },
  {
    key: "Reels & Short Video Editing",
    desc: "Short-form videos built for attention, retention, and stronger brand recall across platforms.",
    icon: Video,
  },
  {
    key: "Branding & Graphic Design",
    desc: "Logo systems, templates, posters, and cohesive visual assets that make your brand memorable.",
    icon: Palette,
  },
  {
    key: "Affiliate Marketing",
    desc: "Performance-led affiliate partnerships that widen reach and bring in qualified traffic at scale.",
    icon: TrendingUp,
  },
  {
    key: "Influencer Marketing",
    desc: "Creator collaborations designed to build trust, boost awareness, and reach the right audience faster.",
    icon: Sparkles,
  },
  {
    key: "Email Marketing",
    desc: "Lead nurturing and customer retention campaigns that turn interest into repeat business.",
    icon: BarChart3,
  },
  {
    key: "SEO : Search Engine Optimization",
    desc: "Search visibility strategy that improves rankings, organic traffic, and long-term business growth.",
    icon: Globe,
  },
  {
    key: "Content Marketing",
    desc: "Brand storytelling and content planning that builds authority, trust, and engagement across channels.",
    icon: Megaphone,
  },
  {
    key: "GTM : Go-to-Market",
    desc: "Launch strategy and positioning support to help your product or service enter the market with confidence.",
    icon: PencilRuler,
  },
  {
    key: "SEM: Search Engine Marketing (Paid Google search ads)",
    desc: "High-intent paid search campaigns that deliver immediate visibility and measurable leads.",
    icon: BarChart3,
  },
  {
    key: "PPC: Pay-Per-Click (Paid advertising where you pay per click)",
    desc: "Return-focused paid campaigns built to generate clicks, leads, and sales with controlled spending.",
    icon: TrendingUp,
  },
  {
    key: "SMO: Social Media Optimization (Organic social profile growth)",
    desc: "Profile and community optimization that strengthens brand presence and organic reach across platforms.",
    icon: Megaphone,
  },
  {
    key: "ASO: App Store Optimization (Ranking apps in Apple/Google stores)",
    desc: "App visibility improvements that increase discovery, installs, and conversion within app stores.",
    icon: Globe,
  },
  {
    key: "ORM: Online Reputation Management (Managing reviews and PR)",
    desc: "Reputation strategy that builds positive perception and protects your brand image online.",
    icon: Shield,
  },
  {
    key: "CRO: Conversion Rate Optimization (Improving website sales)",
    desc: "Data-backed optimization focused on increasing sales, signups, and engagement from your visitors.",
    icon: CheckCircle2,
  },
  {
    key: "CTR: Click-Through Rate (Ad performance metrics)",
    desc: "Performance tracking that improves ad quality and helps campaigns reach stronger click-through results.",
    icon: BarChart3,
  },
  {
    key: "Local SEO",
    desc: "Geo-focused optimization that helps nearby customers discover your business and choose you first.",
    icon: Globe,
  },
  {
    key: "Geo-Targeted",
    desc: "Location-based targeting designed to reach the right audiences in the right cities, regions, and pincodes.",
    icon: MapPin,
  },
  {
    key: "Pin-Code WhatsApp/SMS",
    desc: "Direct local outreach and campaign messaging that helps businesses connect with highly relevant audiences.",
    icon: MessageSquare,
  },
  {
    key: "Marketing Strategy & Campaign Planning",
    desc: "Focused planning for campaigns, monthly objectives, and smarter execution across your digital channels.",
    icon: PencilRuler,
  },
  {
    key: "Analytics & Reporting",
    desc: "Performance reviews and clear insights to help you understand what is working and what to improve.",
    icon: BarChart3,
  },
];

const processValues = [
  "Business-first strategy",
  "Clean, premium design execution",
  "Consistent communication and reporting",
  "Scalable creative systems",
];

const Services = () => {
  return (
    <main className="overflow-hidden">
      <SEO
        title="Digital Marketing Services in Hyderabad | Digital Lift Hub"
        description="Explore digital marketing, website development, brand promotion, social media, SEO, content, and performance marketing services in Hyderabad."
        keywords={[
          "digital marketing services Hyderabad",
          "best digital marketing",
          "brand promotion services",
          "website development Hyderabad",
        ]}
      />

      

      <section className="section-shell py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">What we offer</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Everything your brand needs to grow online</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceList.map(({ key, desc, icon: Icon }) => (
            <article key={key} className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(15,23,42,0.9)]">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">{key}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{desc}</p>
              </div>

              <Link
                to={`/quotation?service=${encodeURIComponent(key)}`}
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))] transition group-hover:text-[hsl(var(--accent))]"
                aria-label={`Request proposal for ${key}`}
              >
                Get proposal <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100/80 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Why brands choose us</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">A better digital process from start to scale.</h2>
            <div className="mt-8 space-y-4">
              {processValues.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.8)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--primary))]">How we work</p>
            <div className="mt-6 space-y-5">
              {[
                { step: "01", title: "Discover", text: "We understand your audience, goals, and brand story." },
                { step: "02", title: "Design", text: "We craft the visual identity and digital experience around that direction." },
                { step: "03", title: "Deliver", text: "We launch, optimize, and guide the growth with reporting and support." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-sm font-black text-[hsl(var(--primary-foreground))]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="rounded-[2rem] bg-[var(--gradient-hero)] p-8 text-white shadow-[0_35px_90px_-30px_rgba(15,23,42,0.8)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Start with the right support</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl text-black">Need a tailored package for your business?</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link to="/quotation" className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-semibold text-[hsl(var(--accent-foreground))] transition hover:-translate-y-0.5">
                Build proposal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;