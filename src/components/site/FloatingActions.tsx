import { useState } from "react";
import { MessageCircle, Phone, Sparkles, X, Send } from "lucide-react";

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        {chatOpen && (
          <div className="w-[340px] max-w-[calc(100vw-3rem)] bg-ivory rounded-2xl shadow-glow border border-border overflow-hidden animate-reveal">
            <div className="bg-forest text-ivory p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-gold/20 grid place-items-center">
                  <Sparkles className="size-4 text-gold" />
                </div>
                <div>
                  <div className="font-serif text-base leading-tight">Vaidya AI</div>
                  <div className="text-[10px] uppercase tracking-widest text-ivory/60">
                    Ayurvedic Assistant
                  </div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="size-7 rounded-full hover:bg-ivory/10 grid place-items-center"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto bg-cream/40">
              <div className="bg-ivory rounded-2xl rounded-tl-sm p-3 text-sm max-w-[85%] shadow-soft">
                Namaste 🙏 Describe your symptoms or health concerns, and I'll suggest the
                right Ayurvedic remedies and doctor consultation for you.
              </div>
              <div className="flex flex-wrap gap-2">
                {["Hair fall", "Acidity", "Joint pain", "Sleep issues"].map((s) => (
                  <button
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-ivory border border-border hover:border-gold hover:text-forest transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-3 border-t border-border flex items-center gap-2 bg-ivory">
              <input
                placeholder="Describe your symptoms…"
                className="flex-1 bg-cream rounded-full px-4 py-2.5 text-sm border-none outline-none focus:ring-1 focus:ring-gold"
              />
              <button className="size-9 rounded-full bg-forest text-ivory grid place-items-center hover:bg-forest-deep">
                <Send className="size-4" />
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="group flex items-center gap-2 bg-forest text-ivory pl-3 pr-5 py-3 rounded-full shadow-glow hover:bg-forest-deep transition-all"
          aria-label="AI Health Assistant"
        >
          <span className="size-8 rounded-full bg-gold/20 grid place-items-center">
            <Sparkles className="size-4 text-gold" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider">Ask Vaidya AI</span>
        </button>

        <div className="flex gap-3">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="size-12 rounded-full bg-[#25D366] text-white grid place-items-center shadow-glow hover:scale-105 transition-transform"
            aria-label="WhatsApp"
          >
            <MessageCircle className="size-5" />
          </a>
          <a
            href="tel:+919876543210"
            className="size-12 rounded-full bg-gold text-forest-deep grid place-items-center shadow-glow hover:scale-105 transition-transform"
            aria-label="Call now"
          >
            <Phone className="size-5" />
          </a>
        </div>
      </div>
    </>
  );
}
