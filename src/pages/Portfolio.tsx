import SEO from "@/components/common/SEO";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Globe,
  Instagram,
  Palette,
  Play,
  Plus,
  Search,
  Sparkles,
  TrendingUp,
  Video,
  Youtube,
} from "lucide-react";

const caseStudies = [
  {
    title: "Vindhya Health Care",
    category: "Healthcare & Clinic Web Platform",
    url: "https://vindhyahealthcare.in",
    displayUrl: "vindhyahealthcare.in",
    summary:
      "A clean, patient-first healthcare website that improved trust, clarity, and digital discovery for a growing clinic brand.",
    impact: "49% more appointment inquiries",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    tags: ["Web Design", "Development", "Local SEO", "Responsive UI"],
  },
  {
    title: "Frezzo",
    category: "Brand & E-commerce Showcase",
    url: "https://frezzo.co.in/",
    displayUrl: "frezzo.co.in",
    summary:
      "A premium brand experience crafted to turn product visibility into customer interest through sleek presentation and stronger mobile engagement.",
    impact: "Improved conversion experience",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    tags: ["Brand Experience", "UI/UX", "Web Development", "Performance"],
  },
];

const creatorGrowth = [
  {
    icon: <Video className="h-5 w-5 text-[hsl(var(--accent))]" />,
    title: "Cinematic Intros & 3D Animations",
    text: "High-impact visuals that make channels feel premium from the first second.",
  },
  {
    icon: <Palette className="h-5 w-5 text-[hsl(var(--accent))]" />,
    title: "Brand Identity, Logos & Posters",
    text: "Custom channel branding and promotional assets that create instant recognition.",
  },
  {
    icon: <Play className="h-5 w-5 text-[hsl(var(--accent))]" />,
    title: "Long-form & Shorts/Reels Editing",
    text: "Retention-focused editing that keeps viewers engaged and improves watch time.",
  },
  {
    icon: <Search className="h-5 w-5 text-[hsl(var(--accent))]" />,
    title: "YouTube SEO & Channel Growth",
    text: "Optimized metadata and content strategy designed to improve discoverability.",
  },
];

const youtubeChannels = [
  { name: "Kakatiya Music", url: "https://www.youtube.com/@kakatiyamusic3411", handle: "@kakatiyamusic3411" },
  { name: "Supreme Production", url: "https://www.youtube.com/@SupremeProduction2025", handle: "@SupremeProduction2025" },
  { name: "Manjunath Decorations", url: "https://www.youtube.com/@manjunathdecorations4826", handle: "@manjunathdecorations4826" },
  { name: "Maripelly Studios", url: "https://www.youtube.com/@maripellystudios4294", handle: "@maripellystudios4294" },
  { name: "Naveena Reddy", url: "https://www.youtube.com/@iamnaveenareddy", handle: "@iamnaveenareddy" },
  { name: "APN MUSIC", url: "https://www.youtube.com/@APNENTERTAINMENTS1", handle: "@APNENTERTAINMENTS1" },
  { name: "SV Star Music", url: "https://www.youtube.com/@SVStarMusic", handle: "@SVStarMusic" },
  { name: "V Music", url: "https://www.youtube.com/@VMusic-888", handle: "@VMusic-888" },
  { name: "Tiger Folks", url: "https://www.youtube.com/@Tigerfolks", handle: "@Tigerfolks" },
  { name: "ND MUSIC", url: "https://www.youtube.com/@NDMUSIC_009", handle: "@NDMUSIC_009" },
  { name: "TRIVIKRAM ARTS", url: "https://www.youtube.com/@TRIVIKRAMARTSTRIVIKRAMARTS", handle: "@TRIVIKRAMARTSTRIVIKRAMARTS" },
  { name: "Praneeth Tunes", url: "https://www.youtube.com/@Praneethtunes", handle: "@Praneethtunes" },
  { name: "Nalgonda Gaddar Narsanna Official", url: "https://www.youtube.com/channel/UC6JWkNLDcMW4Pr9wkBVZM2A", handle: "Official Channel" },
];

const instagramHandles = [
  { name: "actress_naveena_official", url: "https://www.instagram.com/actress_naveena_official", handle: "@actress_naveena_official" },
  { name: "layamouni_official", url: "https://www.instagram.com/layamouni_official/", handle: "@layamouni_official" },
  { name: "manohar_tgpolice", url: "https://www.instagram.com/manohar_tgpolice/", handle: "@manohar_tgpolice" },
  { name: "_apn_music", url: "https://www.instagram.com/_apn_music/", handle: "@_apn_music" },
  { name: "kalavathi_mega_events_official", url: "https://www.instagram.com/kalavathi_mega_events_official/", handle: "@kalavathi_mega_events_official" },
];

const portfolioStats = [
  { value: "50+", label: "YouTube channels supported" },
  { value: "5+", label: "Years of creative growth" },
  { value: "100%", label: "Brand-first execution" },
];

const Portfolio = () => {
  return (
    <main className="overflow-hidden">
      <SEO
        title="Portfolio & Previous Works | Digital Lift Hub"
        description="Explore our past web development projects and digital content creation for 50+ YouTube channels and Instagram creators."
      />

      <section className="relative overflow-hidden bg-[#f4ebd7] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.25),transparent_22%)]" aria-hidden="true" />
        <div className="section-shell relative grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-800 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
              selected work
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-6xl">
              Work that feels premium and performs.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-slate-700">
              From high-converting websites to attention-grabbing content systems, we build digital experiences that look strong and move businesses forward.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {portfolioStats.map((stat) => (
                <div key={stat.label} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
                  <span className="font-bold text-slate-900">{stat.value}</span> {stat.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-[2rem] border border-white/10 bg-white/5 p-5 text-slate-900 shadow-[0_35px_90px_-30px_rgba(15,23,42,0.75)]">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Portfolio snapshot</p>
                    <p className="mt-3 text-3xl font-black">+68%</p>
                  </div>
                  <div className="rounded-2xl bg-[hsl(var(--accent))]/15 p-3 text-[hsl(var(--accent))]">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {caseStudies.map((project) => (
                    <div key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">{project.title}</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{project.category}</p>
                        </div>
                        <div className="rounded-full bg-[hsl(var(--accent))]/15 px-2 py-1 text-[10px] font-semibold text-[hsl(var(--accent))]">
                          {project.impact}
                        </div>
                      </div>
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Our flagship work</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Case studies built to impress clients</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.8)]">
              <div className={`h-52 bg-gradient-to-br ${project.gradient} p-6 text-white`}>
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                      Live project
                    </span>
                  </div>

                  <div>
                    <div className="text-2xl font-black">{project.title}</div>
                    <div className="mt-2 text-sm text-white/80">{project.displayUrl}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="rounded-full bg-[hsl(var(--accent))]/15 px-3 py-1 text-xs font-semibold text-[hsl(var(--primary))]">
                    {project.impact}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))]"
                  >
                    Visit site <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-5 text-base leading-relaxed text-slate-600">{project.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100/80 py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Creative execution</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Built for visibility, trust, and momentum</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {creatorGrowth.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.8)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))]/5">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channels Section */}
      <section className="section-shell py-20">
        <div className="mb-10 flex items-center gap-3">
          <Youtube className="h-7 w-7 text-red-500" />
          <h2 className="text-3xl font-black tracking-tight text-slate-900">YouTube channels we’ve helped grow</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {youtubeChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-red-200 hover:bg-red-50"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="truncate">
                  <p className="truncate font-semibold text-slate-900">{channel.name}</p>
                  <p className="truncate text-xs text-slate-500">{channel.handle}</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-red-500" />
              </div>
            </a>
          ))}

          {/* +more Box for YouTube */}
          <div className="flex flex-col justify-center items-center rounded-[1.5rem] border border-dashed border-red-300 bg-red-50/50 p-4 text-center transition hover:border-red-400 hover:bg-red-50">
            <p className="text-base font-bold text-red-600">+more</p>
            <p className="text-xs text-slate-500 mt-0.5">50+ total creator channels</p>
          </div>
        </div>
      </section>

      {/* Instagram Handles Section */}
      <section className="section-shell pb-20">
        <div className="mb-10 flex items-center gap-3">
          <Instagram className="h-7 w-7 text-pink-500" />
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Instagram creators we’ve elevated</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {instagramHandles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-pink-200 hover:bg-pink-50"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-900">{profile.name}</p>
                  <p className="truncate text-xs text-slate-500">{profile.handle}</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-pink-500" />
              </div>
            </a>
          ))}

          {/* +more Box for Instagram */}
          <div className="flex flex-col justify-center items-center rounded-[1.5rem] border border-dashed border-pink-300 bg-pink-50/50 p-4 text-center transition hover:border-pink-400 hover:bg-pink-50">
            <p className="text-base font-bold text-pink-600">+more</p>
            <p className="text-xs text-slate-500 mt-0.5">Multiple creator profiles</p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="rounded-[2rem] bg-[var(--gradient-hero)] p-8 text-white shadow-[0_35px_90px_-30px_rgba(15,23,42,0.8)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Let’s build your next standout impression</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl text-slate-700 ">Your brand deserves a portfolio that feels unforgettable.</h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="/quotation"
                className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-semibold text-[hsl(var(--accent-foreground))] shadow-[0_18px_35px_-18px_rgba(245,158,11,0.8)] transition hover:-translate-y-0.5"
              >
                Get a proposal <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;