import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MessageCircle } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="section-shell flex items-center justify-between py-3.5">
        <Link to="/" className="flex items-center gap-3" aria-label="Digital Lift Hub home">
          
          {/* Replaced BrandMark component with your public SVG */}
          <img
            src="/brand-mark.svg"
            alt="Digital Lift Hub Logo"
            width="48"
            height="48"
            className="h-12 w-12 shrink-0 object-contain"
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

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-primary hover:text-primary lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="top-1/2 bottom-auto h-auto max-h-[calc(100vh-2rem)] w-[min(88vw,22rem)] -translate-y-1/2 rounded-l-2xl bg-white px-6 py-8"
          >
            <SheetHeader className="border-b border-slate-200 pb-6 pr-8 text-left">
              <SheetTitle className="text-left text-xl font-black text-slate-900">Digital Lift Hub</SheetTitle>
              <SheetDescription className="text-left text-slate-500">Marketing Agency</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 pt-6" aria-label="Mobile navigation">
              {navItems.map((n) => (
                <SheetClose asChild key={n.to}>
                  <NavLink
                    to={n.to}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50 hover:text-primary"}`
                    }
                  >
                    {n.label}
                  </NavLink>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 space-y-3 border-t border-slate-200 pt-6">
              <SheetClose asChild>
                <Link
                  to="/quotation"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[hsl(var(--accent))] px-5 py-3 text-sm font-semibold text-[hsl(var(--accent-foreground))] shadow-[0_10px_25px_-12px_rgba(245,158,11,0.9)] transition hover:-translate-y-0.5"
                >
                  Request a Quote
                </Link>
              </SheetClose>
              <a
                href="https://wa.me/919346122148?text=Hi%20Digital%20Lift%20Hub%2C%20I%27d%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366] px-5 py-3 text-sm font-semibold text-[#128C7E] transition hover:bg-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </SheetContent>
        </Sheet>

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