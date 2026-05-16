import { createFileRoute } from "@tanstack/react-router";
import {
  Star, ShieldCheck, Leaf, TruckIcon, Stethoscope, Award, ArrowRight,
  Quote, Plus, Minus, Newspaper, ChevronRight, Heart, Droplets, Scale,
  Sparkles, Soup, Flower2, Bone, Flame, CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

import heroDoctor from "@/assets/hero-doctor.jpg";
import productHairOil from "@/assets/product-hair-oil.jpg";
import productChyawanprash from "@/assets/product-chyawanprash.jpg";
import productKumkumadi from "@/assets/product-kumkumadi.jpg";
import productAshwagandha from "@/assets/product-ashwagandha.jpg";
import herbsCraft from "@/assets/herbs-craft.jpg";
import blogHerbs from "@/assets/blog-herbs.jpg";
import blogGoldenMilk from "@/assets/blog-golden-milk.jpg";
import blogYoga from "@/assets/blog-yoga.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jayshri Ayurveda — Authentic Ayurvedic Care, Premium Herbal Products" },
      {
        name: "description",
        content:
          "Personalised Ayurvedic consultations and GMP-certified herbal formulations for diabetes, hair fall, digestion, skin, joint pain and more. Book a free vaidya consultation today.",
      },
      { property: "og:title", content: "Jayshri Ayurveda — Ancient Wisdom, Modern Vitality" },
      {
        property: "og:description",
        content:
          "Doctor-led Ayurvedic treatments and 100% natural herbal products, delivered across India.",
      },
    ],
  }),
  component: HomePage,
});

const concerns = [
  { label: "Diabetes", note: "Sugar balance", Icon: Droplets },
  { label: "Weight Loss", note: "Metabolic care", Icon: Scale },
  { label: "Hair Fall", note: "Scalp & roots", Icon: Sparkles },
  { label: "Skin Care", note: "Glow & clarity", Icon: Flower2 },
  { label: "Digestion", note: "Agni & gut", Icon: Soup },
  { label: "Women's Health", note: "Hormonal balance", Icon: Heart },
  { label: "Joint Pain", note: "Mobility & relief", Icon: Bone },
  { label: "Vitality", note: "Strength & energy", Icon: Flame },
];

const products = [
  {
    name: "Tejasvi Hair Oil",
    sub: "Bhringraj · Brahmi · Amla",
    price: 549,
    mrp: 699,
    rating: 4.9,
    reviews: 1284,
    tag: "Bestseller",
    image: productHairOil,
  },
  {
    name: "Royal Chyawanprash",
    sub: "Classical 40-herb immunity tonic",
    price: 749,
    mrp: 899,
    rating: 4.8,
    reviews: 942,
    tag: "Best Value",
    image: productChyawanprash,
  },
  {
    name: "Kumkumadi Glow Serum",
    sub: "Saffron · Manjishtha · Lotus",
    price: 1299,
    mrp: 1599,
    rating: 4.9,
    reviews: 2156,
    tag: "New",
    image: productKumkumadi,
  },
  {
    name: "Pure Ashwagandha",
    sub: "KSM-66® roots · 60 capsules",
    price: 449,
    mrp: 549,
    rating: 4.8,
    reviews: 3120,
    tag: "Top Rated",
    image: productAshwagandha,
  },
];

const why = [
  { Icon: Stethoscope, t: "Experienced Vaidyas", d: "35+ year doctor-led protocols rooted in classical texts." },
  { Icon: Leaf, t: "100% Natural & Safe", d: "No steroids, no synthetics, no side-effects — ever." },
  { Icon: Award, t: "GMP-Certified Quality", d: "ISO 9001 + AYUSH approved manufacturing at every batch." },
  { Icon: TruckIcon, t: "Fast Pan-India Delivery", d: "Discreet packaging, free shipping over ₹999." },
];

const testimonials = [
  {
    name: "Anjali Mehta",
    place: "Mumbai",
    text: "After three months on Dr. Sharma's protocol my sugar levels dropped from 240 to 128 fasting. I feel lighter, calmer and finally in control.",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    place: "Bengaluru",
    text: "Tried everything for hair fall. Tejasvi oil + their inner-wellness capsules — visible difference in 8 weeks. Genuine products, genuine care.",
    rating: 5,
  },
  {
    name: "Priya Iyer",
    place: "Pune",
    text: "The vaidya consultation alone was worth it. He listened for 40 minutes before recommending anything. Felt like real medicine.",
    rating: 5,
  },
];

const press = ["The Hindu", "Times of India", "Vogue India", "Forbes", "Mint", "YourStory"];

const blogs = [
  { tag: "Herbs 101", t: "The 7 Ayurvedic herbs every Indian kitchen should keep", time: "6 min", image: blogHerbs },
  { tag: "Recipes", t: "Golden milk: the bedtime ritual for deeper sleep", time: "4 min", image: blogGoldenMilk },
  { tag: "Lifestyle", t: "Dinacharya: a daily routine to balance all three doshas", time: "8 min", image: blogYoga },
];

const faqs = [
  {
    q: "Are Jayshri Ayurveda products safe for long-term use?",
    a: "Yes. Every formulation is built from classical references, manufactured under GMP/AYUSH certification and lab-tested for heavy metals and microbial purity. They are designed for sustained, daily use.",
  },
  {
    q: "How does the free consultation work?",
    a: "Book online and our vaidya calls you within 24 hours for a 20-30 minute conversation. You receive a personalised prescription, dietary plan and follow-up schedule by email.",
  },
  {
    q: "Will I see results quickly?",
    a: "Ayurveda treats root causes, so chronic conditions usually need 8-12 weeks of consistent use. Many people feel digestive and energy improvements within the first 2 weeks.",
  },
  {
    q: "Do you ship outside India?",
    a: "We currently ship across India in 3-5 business days. International shipping to USA, UK, UAE and Singapore is available on request.",
  },
  {
    q: "Can I take Ayurvedic medicines alongside allopathic treatment?",
    a: "In most cases yes, but please share your current prescriptions during consultation so the vaidya can advise on timing and combinations safely.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-ivory text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 size-[600px] rounded-full bg-leaf/10 blur-3xl pointer-events-none" />
        <div className="absolute top-40 -left-32 size-[400px] rounded-full bg-gold/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream border border-border mb-6">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-deep">
                GMP Certified · Since 1984
              </span>
            </div>
            <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.02] text-forest-deep text-balance mb-6">
              Ancient remedies <br />
              <span className="italic text-clay">for modern rhythm.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-9">
              Personalised Ayurvedic care designed by experienced vaidyas — treating the root
              cause of chronic ailments with 100% natural, doctor-formulated herbal medicines.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <button className="group inline-flex items-center gap-2 bg-forest text-ivory px-7 py-4 rounded-full text-sm font-semibold hover:bg-forest-deep transition-all shadow-glow">
                Book Free Consultation
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold border border-border bg-ivory hover:bg-cream transition-all">
                Shop Products
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { Icon: ShieldCheck, t: "GMP Certified" },
                { Icon: Leaf, t: "100% Natural" },
                { Icon: Stethoscope, t: "Doctor Recommended" },
              ].map(({ Icon, t }) => (
                <div key={t} className="flex items-center gap-2">
                  <Icon className="size-4 text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 animate-reveal [animation-delay:160ms]">
            <div className="relative">
              <div className="absolute inset-0 -m-3 rounded-[2rem] bg-gradient-to-tr from-gold/30 via-transparent to-leaf/20 blur-2xl" />
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden ring-1 ring-border shadow-glow">
                <img
                  src={heroDoctor}
                  alt="Dr. Jayshri Sharma, founding Ayurvedic doctor"
                  width={1024}
                  height={1280}
                  className="size-full object-cover"
                />
              </div>
              {/* Floating doctor card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-ivory rounded-2xl p-5 max-w-[260px] shadow-glow border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="size-1.5 rounded-full bg-leaf animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-leaf">
                    Available today
                  </span>
                </div>
                <p className="font-serif text-base italic text-forest-deep leading-snug">
                  "We don't just treat symptoms — we restore balance."
                </p>
                <div className="mt-3 pt-3 border-t border-border text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Dr. Jayshri Sharma · BAMS, MD
                </div>
              </div>
              {/* Floating rating */}
              <div className="absolute -top-4 -right-3 bg-ivory rounded-2xl px-4 py-3 shadow-soft border border-border hidden sm:block">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">
                  4.9 · 12,400+ reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCERNS */}
      <section className="py-20 lg:py-28 px-5 lg:px-8 bg-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <span className="eyebrow">Find your remedy</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-forest-deep mt-3 max-w-2xl">
                Healing by concern.
              </h2>
            </div>
            <a href="#" className="text-sm font-semibold text-forest hover:text-gold inline-flex items-center gap-1">
              Browse all concerns <ChevronRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {concerns.map(({ label, note, Icon }) => (
              <button
                key={label}
                className="group bg-ivory p-6 lg:p-8 text-left hover:bg-cream transition-colors flex flex-col gap-4 min-h-[170px]"
              >
                <div className="size-11 rounded-full bg-gold/10 grid place-items-center group-hover:bg-gold/20 transition-colors">
                  <Icon className="size-5 text-forest" />
                </div>
                <div>
                  <div className="font-serif text-lg text-forest-deep mb-1">{label}</div>
                  <div className="text-xs text-muted-foreground">{note}</div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground mt-auto group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Why Jayshri</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-forest-deep mt-3 mb-6 text-balance">
              Sourced from the Ghats, formulated by vaidyas.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every batch is grown on partner farms across Uttarakhand and Kerala, then
              processed by hand using slow-extraction methods that preserve the volatile
              compounds modern manufacturing loses.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: "35+", l: "Years" },
                { n: "120k+", l: "Patients" },
                { n: "4.9★", l: "Google Rating" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-gold pl-4">
                  <div className="font-serif text-2xl text-forest-deep">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold">
              Our sourcing journey <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="sm:row-span-2 rounded-3xl overflow-hidden">
              <img
                src={herbsCraft}
                alt="Hand-ground Ayurvedic herbs"
                loading="lazy"
                width={1200}
                height={1200}
                className="size-full object-cover aspect-square sm:aspect-auto"
              />
            </div>
            {why.map(({ Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl bg-cream/60 border border-border p-6 hover:bg-cream transition-colors"
              >
                <div className="size-10 rounded-full bg-forest text-gold grid place-items-center mb-4">
                  <Icon className="size-4" />
                </div>
                <h4 className="font-serif text-lg text-forest-deep mb-2">{t}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 lg:py-28 px-5 lg:px-8 bg-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <span className="eyebrow">Apothecary</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-forest-deep mt-3">
                Bestselling formulations.
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["All", "Bestsellers", "Hair", "Skin", "Wellness"].map((c, i) => (
                <button
                  key={c}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                    i === 0
                      ? "bg-forest text-ivory"
                      : "bg-ivory border border-border text-foreground/70 hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article
                key={p.name}
                className="group bg-ivory rounded-2xl border border-border overflow-hidden hover:shadow-glow transition-all"
              >
                <div className="relative aspect-square overflow-hidden bg-cream">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-gold text-forest-deep text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <button
                    aria-label="Wishlist"
                    className="absolute top-3 right-3 size-8 rounded-full bg-ivory/90 grid place-items-center hover:bg-ivory hover:text-clay transition-colors"
                  >
                    <Heart className="size-4" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-forest-deep leading-tight">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-3">{p.sub}</p>
                  <div className="flex items-center gap-1.5 mb-4">
                    <Star className="size-3.5 fill-gold text-gold" />
                    <span className="text-xs font-semibold text-foreground">{p.rating}</span>
                    <span className="text-xs text-muted-foreground">({p.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-serif text-xl text-forest-deep">₹{p.price}</span>
                      <span className="ml-2 text-xs text-muted-foreground line-through">
                        ₹{p.mrp}
                      </span>
                    </div>
                    <button className="inline-flex items-center gap-1.5 bg-forest text-ivory px-4 py-2 rounded-full text-xs font-semibold hover:bg-forest-deep transition-colors">
                      <Plus className="size-3.5" /> Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 px-5 lg:px-8 bg-forest text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Real Stories
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl mt-3 text-ivory text-balance max-w-2xl">
                12,400+ patients, healing the natural way.
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-ivory/5 border border-ivory/10 rounded-full pl-2 pr-5 py-2">
              <div className="size-9 rounded-full bg-ivory grid place-items-center">
                <span className="font-bold text-forest text-sm">G</span>
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 fill-current" />
                  ))}
                  <span className="ml-1 text-xs font-semibold text-ivory">4.9</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-ivory/60">
                  Google Reviews
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl bg-ivory/5 backdrop-blur-sm border border-ivory/10 p-7 hover:bg-ivory/10 transition-colors"
              >
                <Quote className="size-7 text-gold mb-5" />
                <blockquote className="font-serif text-lg leading-snug text-ivory mb-6">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-1 text-gold mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <figcaption className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gold/20 grid place-items-center font-serif text-gold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ivory">{t.name}</div>
                    <div className="text-[11px] uppercase tracking-widest text-ivory/50">
                      {t.place} · Verified
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-14 px-5 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Newspaper className="size-4 text-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              As seen in
            </span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center">
            {press.map((p) => (
              <span
                key={p}
                className="font-serif text-lg sm:text-xl italic text-forest-deep/40 hover:text-forest-deep transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 lg:py-28 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <span className="eyebrow">Journal</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-forest-deep mt-3">
                Wisdom for daily wellness.
              </h2>
            </div>
            <a href="#" className="text-sm font-semibold text-forest hover:text-gold inline-flex items-center gap-1">
              All articles <ChevronRight className="size-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((b) => (
              <article key={b.t} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-cream">
                  <img
                    src={b.image}
                    alt={b.t}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-gold font-semibold">{b.tag}</span>
                  <span>·</span>
                  <span>{b.time} read</span>
                </div>
                <h3 className="font-serif text-xl text-forest-deep leading-snug group-hover:text-clay transition-colors">
                  {b.t}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + NEWSLETTER + CONTACT */}
      <section className="py-20 lg:py-28 px-5 lg:px-8 bg-cream/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Questions answered</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-forest-deep mt-3 mb-10">
              Frequently asked.
            </h2>
            <FaqList />
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Newsletter */}
            <div className="rounded-3xl bg-forest text-ivory p-8 lg:p-10 shadow-glow">
              <h3 className="font-serif text-2xl mb-3">Weekly wisdom in your inbox.</h3>
              <p className="text-sm text-ivory/70 mb-6 leading-relaxed">
                Seasonal Ayurvedic tips, dosha-balancing recipes and member-only offers.
              </p>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-ivory/10 border border-ivory/20 rounded-full px-5 py-3 text-sm placeholder:text-ivory/40 focus:outline-none focus:ring-1 focus:ring-gold text-ivory"
                />
                <button className="bg-gold text-forest-deep px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gold-soft transition-colors">
                  Subscribe
                </button>
              </form>
              <div className="mt-5 flex items-center gap-2 text-[11px] text-ivory/50">
                <CheckCircle2 className="size-3.5 text-gold" /> No spam. Unsubscribe anytime.
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl bg-ivory border border-border p-8 lg:p-10">
              <span className="eyebrow">Visit the clinic</span>
              <h3 className="font-serif text-2xl text-forest-deep mt-3 mb-5">
                Speak to a vaidya today.
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li>📍 112, Sector 18, Vasundhara Enclave, New Delhi</li>
                <li>📞 +91 98765 43210 · Mon-Sat, 9am-7pm</li>
                <li>✉️ care@jayshri.in</li>
              </ul>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-forest text-ivory py-3.5 rounded-full text-sm font-semibold hover:bg-forest-deep transition-colors">
                Book Free Consultation <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            >
              <span className="font-serif text-lg text-forest-deep group-hover:text-clay transition-colors">
                {f.q}
              </span>
              <span className="size-8 rounded-full border border-border grid place-items-center shrink-0 text-forest">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
