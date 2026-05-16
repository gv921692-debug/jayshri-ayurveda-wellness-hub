import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Phone, ShoppingBag, User, Menu, X } from "lucide-react";

const nav = [
  { label: "Shop", href: "/" },
  { label: "Treatments", href: "/" },
  { label: "Concerns", href: "/" },
  { label: "Consultation", href: "/" },
  { label: "About", href: "/" },
  { label: "Blog", href: "/" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-forest-deep text-ivory/90 text-[11px] tracking-wider text-center py-2 px-4">
        <span className="font-mono uppercase">Free shipping over ₹999</span>
        <span className="mx-3 text-gold/60">·</span>
        <span className="font-mono uppercase">Free doctor consultation with first order</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="size-9 rounded-full bg-forest grid place-items-center">
            <span className="font-serif text-ivory text-lg italic">J</span>
          </div>
          <div className="leading-none">
            <div className="font-serif text-xl text-forest-deep">Jayshri</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Ayurveda
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.href}
              className="text-foreground/75 hover:text-forest transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-2.5 rounded-full hover:bg-cream transition-colors" aria-label="Search">
            <Search className="size-4 text-foreground/70" />
          </button>
          <a
            href="tel:+919876543210"
            className="hidden sm:flex p-2.5 rounded-full hover:bg-cream transition-colors"
            aria-label="Call"
          >
            <Phone className="size-4 text-foreground/70" />
          </a>
          <button className="p-2.5 rounded-full hover:bg-cream transition-colors" aria-label="Account">
            <User className="size-4 text-foreground/70" />
          </button>
          <button className="relative p-2.5 rounded-full hover:bg-cream transition-colors" aria-label="Cart">
            <ShoppingBag className="size-4 text-foreground/70" />
            <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-gold text-[9px] font-bold text-forest-deep grid place-items-center">
              2
            </span>
          </button>
          <button className="hidden md:inline-flex ml-3 items-center bg-forest text-ivory px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-forest-deep transition-all">
            Book Consultation
          </button>
          <button
            className="lg:hidden p-2.5 rounded-full hover:bg-cream"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-ivory">
          <nav className="px-5 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80 hover:text-forest"
              >
                {n.label}
              </Link>
            ))}
            <button className="mt-2 bg-forest text-ivory py-3 rounded-full text-xs font-semibold uppercase tracking-wider">
              Book Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
