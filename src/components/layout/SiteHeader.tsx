import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/quotation", label: "Quotation" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="section-shell flex items-center justify-between py-3.5">
        <Link to="/" className="flex items-center gap-3" aria-label="Digital Lift Hub home">
          
          {/* Replaced BrandMark component with your public SVG */}
          <img 
            src="/brand-mark.svg" 
            alt="Digital Lift Hub Logo" 
            className="h-12 w-auto shrink-0 object-contain"
          />
          
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">Digital Lift Hub</div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Marketing Agency</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `story-link text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-slate-600 hover:text-primary"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden text-sm font-medium text-slate-600 transition hover:text-primary sm:inline-flex">
            Book a strategy call
          </Link>
          <Link
            to="/quotation"
            className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--accent-foreground))] shadow-[0_10px_25px_-12px_rgba(245,158,11,0.9)] transition hover:-translate-y-0.5"
            aria-label="Request a Quote"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;