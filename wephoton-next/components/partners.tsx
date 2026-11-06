/* Partner logos · drop square (1:1) images into public/partners/ using the filenames below,
   replacing the placeholder SVGs. If a logo is a PNG/JPG/WebP, change its extension here. */
const partners = [
  { logo: "/partners/northgate-group.png", name: "Northgate Group" },
  { logo: "/partners/urban-basket.png", name: "Urban Basket" },
  { logo: "/partners/cascade-stays.png", name: "Cascade Stays" },
  { logo: "/partners/medibridge.png", name: "MediBridge" },
  { logo: "/partners/kore-industries.png", name: "Kore Industries" },
  { logo: "/partners/scholars-point.png", name: "Scholars Point" },
  { logo: "/partners/swifthaul-logistics.png", name: "SwiftHaul Logistics" },
  { logo: "/partners/vertex-capital.png", name: "Vertex Capital" },
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
          {track.map(({ logo, name }, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= partners.length}
              className="flex shrink-0 overflow-hidden rounded-2xl border border-[#bab9b6]/40 bg-[#bab9b6]/70 md:backdrop-blur-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={i < partners.length ? `${name} logo` : ""}
                width={144}
                height={144}
                loading="lazy"
                className="aspect-square w-36 object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
