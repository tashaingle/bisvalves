import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-start justify-center bg-charcoal px-5 pt-24 md:px-10">
      <p className="text-[13px] text-brass-bright font-medium">404</p>
      <h1 className="mt-4 font-display text-5xl text-ink font-semibold">Line not found.</h1>
      <p className="mt-4 max-w-md text-mist">
        That route does not exist in this system. Return to the catalogue or
        talk to engineering.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/products"
          className="btn btn-primary"
        >
          Explore products
        </Link>
        <Link
          href="/"
          className="btn btn-secondary"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
