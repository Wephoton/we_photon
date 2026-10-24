import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Wephoton took our delivery app from a rough idea to the Play Store and App Store in under four months. The app handles thousands of daily orders without a hiccup, and their team still answers within the hour when we need them.",
    name: "Rahul Menon",
    role: "Founder, Urban Basket",
    project: "iOS & Android app development",
  },
  {
    quote:
      "Our field-sales team runs entirely on the app they built · offline-first, synced the moment a signal returns. Crash-free sessions have stayed above 99.9% since launch. It simply works.",
    name: "Priya Sharma",
    role: "Operations Head, SwiftHaul Logistics",
    project: "Cross-platform enterprise app",
  },
  {
    quote:
      "They rebuilt our legacy booking system as a mobile app with a proper scalable backend. Bookings are up 40%, support tickets are down, and every release since has shipped on the date they promised.",
    name: "Arjun Nair",
    role: "Director, Cascade Stays",
    project: "App + backend modernisation",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-medium uppercase tracking-widest text-amber">
          Client Stories
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Apps we shipped. Words they said.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_0_36px_rgba(237,167,53,0.15)]"
            >
              <Quote className="size-7 text-amber/60" aria-hidden />
              <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber text-amber" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-platinum">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="font-display font-bold text-white">{t.name}</p>
                <p className="mt-0.5 text-xs text-platinum/80">{t.role}</p>
                <p className="mt-2 inline-block rounded-full border border-amber/25 bg-amber/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-widest text-amber">
                  {t.project}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
