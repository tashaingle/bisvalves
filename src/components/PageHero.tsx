export function PageHero({
  kicker,
  title,
  lede,
  image,
}: {
  kicker: string;
  title: string;
  lede?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink pt-28 pb-16 md:pt-36 md:pb-24">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">{kicker}</p>
        <h1 className="mt-4 max-w-5xl font-display text-5xl leading-[0.92] font-semibold text-paper uppercase md:text-7xl">
          {title}
        </h1>
        {lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{lede}</p>}
      </div>
    </section>
  );
}
