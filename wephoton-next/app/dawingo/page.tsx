import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DawingoGrid from "@/components/dawingo";
import { Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Dawingo Multiverse · Our Universe",
  description:
    "The Dawingo Multiverse: Wephoton's own SaaS product family · Dawingo Resto is live now, with more products coming soon.",
};

export default function DawingoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 h-[30rem] w-[70rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.12),transparent)]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-widest text-amber">
            <Rocket className="size-3.5" aria-hidden />
            New Launch · Our Own Product
          </p>

          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl">
            The Dawingo{" "}
            <span className="bg-gradient-to-r from-amber to-white/80 bg-clip-text text-transparent">
              Multiverse
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-platinum">
            One product family for every operation a business runs · built,
            hosted, and supported entirely by Wephoton. Dawingo Resto is live
            in production today; more products are coming soon.
          </p>

          <div className="mt-14">
            <DawingoGrid />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
