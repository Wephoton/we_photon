import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Rocket } from "lucide-react";

export default function DawingoTeaser() {
  return (
    <section id="dawingo" className="relative scroll-mt-20 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/2 h-[24rem] w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.12),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-amber/30 bg-white/[0.04] p-10 md:backdrop-blur-md sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-widest text-amber">
                <Rocket className="size-3.5" aria-hidden />
                New Launch · Our Own Product
              </p>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                The Dawingo Multiverse
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-platinum">
                Our proprietary SaaS family · Dawingo Resto is live today for
                restaurants, with more products coming soon.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/dawingo"
                  className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 font-display font-semibold text-abyss shadow-[0_0_28px_rgba(237,167,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(237,167,53,0.6)]"
                >
                  Explore Our Products
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center rounded-3xl border border-white/10 bg-abyss/60 p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(closest-side,rgba(237,167,53,0.14),transparent)]"
              />
              <Image
                src="/brand/dawingo-resto-v2.png"
                alt="Dawingo Resto · live now"
                width={380}
                height={115}
                className="relative h-auto w-full max-w-sm"
              />
              <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-emerald-300 animate-pulse-live">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
                Live
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
