import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory/85 pt-20 pb-8 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 pb-14 border-b border-ivory/10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="size-10 rounded-full bg-gold/15 ring-1 ring-gold/30 grid place-items-center">
                <span className="font-serif text-gold text-xl italic">J</span>
              </div>
              <div>
                <div className="font-serif text-2xl text-ivory">Jayshri</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-ivory/50">
                  Ayurveda
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ivory/65 mb-6 max-w-sm">
              Preserving the purity of classical Ayurveda through ethically sourced herbs,
              GMP-certified manufacturing and personalised vaidya consultations.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-full border border-ivory/15 grid place-items-center hover:bg-gold hover:text-forest-deep hover:border-gold transition-colors"
                  aria-label="Social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-ivory text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              {["Best Sellers", "Hair Care", "Skin Care", "Digestion", "Diabetes", "Combos"].map(
                (l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-ivory text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              {["About Us", "Our Vaidyas", "Treatments", "Blog", "Testimonials", "Press"].map(
                (l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-ivory text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
              Visit the Clinic
            </h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex gap-3">
                <MapPin className="size-4 mt-0.5 text-gold shrink-0" />
                <span>112, Sector 18, Vasundhara Enclave,<br />New Delhi — 110096</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="size-4 text-gold shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="size-4 text-gold shrink-0" />
                <a href="mailto:care@jayshri.in" className="hover:text-gold">care@jayshri.in</a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {["GMP", "ISO 9001", "AYUSH", "FSSAI"].map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-ivory/15 text-ivory/60"
                >
                  {b} Certified
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-ivory/50">
          <span>© {new Date().getFullYear()} Jayshri Ayurveda. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
