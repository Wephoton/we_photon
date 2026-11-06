import Image from "next/image";
import { Layers3 } from "lucide-react";
import { dawingoProducts } from "@/lib/dawingo";

function LiveTag() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-emerald-300 animate-pulse-live">
      <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
      Live
    </span>
  );
}

function ComingSoonTag() {
  return (
    <span className="inline-flex items-center rounded-full border border-platinum/25 bg-white/5 px-3 py-1 font-display text-[11px] font-medium uppercase tracking-widest text-platinum/80">
      Coming Soon
    </span>
  );
}

export default function DawingoGrid() {
  const [resto] = dawingoProducts;
  const RestoIcon = resto.icon;

  return (
    <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
      {/* Featured live cell · Dawingo Resto, 2×2 square */}
      <article className="group relative overflow-hidden rounded-3xl border border-amber/30 bg-white/[0.04] p-8 md:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_0_56px_rgba(237,167,53,0.25)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.2),transparent)]"
        />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="inline-flex rounded-2xl border border-amber/30 bg-amber/10 p-3">
              <RestoIcon className="size-7 text-amber" aria-hidden />
            </div>
            <LiveTag />
          </div>

          <Image
            src="/brand/dawingo-resto-v2.png"
            alt="Dawingo Resto"
            width={280}
            height={85}
            className="mt-8 h-14 w-auto self-start"
          />

          <p className="mt-6 leading-relaxed text-platinum">
            {resto.tagline}. Orders, kitchen displays, billing, inventory, and
            analytics for restaurants · live today and running in production.
          </p>

          <div className="mt-auto pt-8">
            <a
              href="https://dawingo.run.place"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-amber px-6 py-3 font-display text-sm font-semibold text-abyss shadow-[0_0_24px_rgba(237,167,53,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(237,167,53,0.55)]"
            >
              View
            </a>
          </div>
        </div>
      </article>

      <article className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:backdrop-blur-md">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
            <Layers3 className="size-7 text-platinum" aria-hidden />
          </div>
          <ComingSoonTag />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold">Others</h3>
        <p className="mt-2 leading-relaxed text-platinum/90">
          More Dawingo products are on the way. Stay tuned.
        </p>
      </article>
    </div>
  );
}
