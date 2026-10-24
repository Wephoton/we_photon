import {
  Building2,
  Landmark,
  Store,
  Factory,
  Hotel,
  Stethoscope,
  GraduationCap,
  Truck,
} from "lucide-react";

/* Placeholder partner marks · swap each icon + name for a real partner logo image */
const partners = [
  { icon: Building2, name: "Northgate Group", color: "from-sky-400 to-blue-600" },
  { icon: Store, name: "Urban Basket", color: "from-emerald-400 to-green-600" },
  { icon: Hotel, name: "Cascade Stays", color: "from-teal-400 to-cyan-600" },
  { icon: Stethoscope, name: "MediBridge", color: "from-rose-400 to-red-600" },
  { icon: Factory, name: "Kore Industries", color: "from-orange-400 to-red-500" },
  { icon: GraduationCap, name: "Scholars Point", color: "from-violet-400 to-purple-600" },
  { icon: Truck, name: "SwiftHaul Logistics", color: "from-amber-400 to-orange-600" },
  { icon: Landmark, name: "Vertex Capital", color: "from-indigo-400 to-blue-700" },
];

export default function Partners() {
  const track = [...partners, ...partners];

  return (
    <section aria-label="Our trusted partners" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-display text-xs font-medium uppercase tracking-widest text-amber">
          Our Trusted Partners
        </p>
      </div>

      <div className="group relative mt-10 overflow-hidden">
        {/* Edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-abyss to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-abyss to-transparent" />

        <ul className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {track.map(({ icon: Icon, name, color }, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= partners.length}
              className="flex aspect-square w-44 flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:backdrop-blur-md"
            >
              <span
                className={`flex aspect-square w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${color} shadow-lg`}
              >
                <Icon className="size-9 text-white" aria-hidden />
              </span>
              <span className="text-center font-display text-sm font-semibold tracking-wide text-platinum/90">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
