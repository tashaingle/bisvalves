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
    <section className="border-b border-rule bg-white pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <p className="label">{kicker}</p>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.04] font-semibold text-ink">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-night/70">{lede}</p>
        )}
      </div>
    </section>
  );
}
