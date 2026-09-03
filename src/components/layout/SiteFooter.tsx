import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin } from "lucide-react";
import BrandMark from "@/components/common/BrandMark";

const SiteFooter = () => {
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <BrandMark className="h-7 w-7" />
            </div>
            <div>
              <div className="font-bold text-white">Digital Lift Hub</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Growth studio</div>
            </div>
          </div>
          <p className="text-sm text-slate-400">Hyderabad, Telangana</p>
          <p className="mt-3 text-sm text-slate-400">Founders: Laxman (Co-Founder & Creative Director)</p>
          <p className="mt-1 text-sm text-slate-400">Sai Krishna (Co-Founder & Digital Strategist)</p>
        </div>

        <div>
          <h2 className="mb-4 font-semibold text-white">Contact</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[hsl(var(--accent))]" />
              <a href="mailto:digitallifthubmarketing@gmail.com" className="story-link text-slate-300 hover:text-white">
                digitallifthubmarketing@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[hsl(var(--accent))]" />
              <a href="tel:+919346122148" className="story-link text-slate-300 hover:text-white">+91 93461 22148</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[hsl(var(--accent))]" />
              <a href="tel:+919398036854" className="story-link text-slate-300 hover:text-white">+91 93980 36854</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-[hsl(var(--accent))]" />
              <span>Hyderabad, Telangana</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-semibold text-white">Company</h2>
          <ul className="space-y-3 text-sm">
            <li><Link className="story-link text-slate-300 hover:text-white" to="/services">Services</Link></li>
            <li><Link className="story-link text-slate-300 hover:text-white" to="/portfolio">Portfolio</Link></li>
            <li><Link className="story-link text-slate-300 hover:text-white" to="/quotation">Quotation</Link></li>
            <li><Link className="story-link text-slate-300 hover:text-white" to="/agreement">Client Agreement</Link></li>
            <li><Link className="story-link text-slate-300 hover:text-white" to="/privacy">Privacy Policy</Link></li>
            <li><a className="story-link text-slate-300 hover:text-white" href="/sitemap.xml" target="_blank" rel="noopener">Sitemap</a></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-semibold text-white">Stay in the loop</h2>
          <form onSubmit={handleNewsletterSubmit} className="space-y-3" aria-label="Newsletter signup">
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none ring-0 transition focus:border-[hsl(var(--accent))]"
              aria-label="Email address"
            />

            <div className="relative">
              <button className="w-full rounded-xl bg-[hsl(var(--accent))] px-3 py-2.5 text-sm font-semibold text-[hsl(var(--accent-foreground))] shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5" type="submit">
                Subscribe
              </button>

              {status === "SUCCESS" && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-emerald-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  ✅ Subscribed successfully!
                </div>
              )}
              {status === "ERROR" && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-red-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  ❌ Subscription failed!
                </div>
              )}
            </div>
          </form>

          <div className="mt-5 flex gap-3 text-slate-300">
            <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"><Youtube size={16} /></a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Digital Lift Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
