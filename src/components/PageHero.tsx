export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
  image?: string;
}) {
  return (
    <section className="border-b border-black/8 bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">{kicker}</p>
        <h1 className="mt-4 max-w-5xl font-display text-5xl leading-[0.92] font-semibold text-night uppercase md:text-7xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-night/70">{lede}</p>
        )}
      </div>
    </section>
  );
}
