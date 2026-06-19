import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding bg-nina-cream">
      <div className="container-narrow max-w-2xl text-center">
        <p className="eyebrow mb-6">404 — Page Not Found</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.03em] text-nina-blue mb-6">
          This page has wandered off
        </h1>
        <p className="font-serif text-lg md:text-xl leading-[1.7] text-nina-body mb-10">
          The page you are looking for can&rsquo;t be found. It may have moved,
          or perhaps never existed. Let us guide you back to the table.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-nina-blue text-nina-cream hover:bg-nina-navy uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-blue active:bg-nina-navy"
          >
            Return Home
          </Link>
          <Link
            href="/menu"
            className="border border-nina-blue/20 text-nina-blue hover:bg-nina-blue/5 uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-blue"
          >
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
