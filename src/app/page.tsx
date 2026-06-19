import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="meander-bottom-cream relative flex items-center justify-center min-h-screen overflow-hidden">
        <Image
          src="/assets/hero-watercolor.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nina-navy/80 to-nina-navy/60" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="eyebrow text-nina-cream/80 mb-8">
            Saar &middot; Kingdom of Bahrain
          </p>
          <Image
            src="/assets/logo-cream.png"
            alt="Nina The Greek"
            width={280}
            height={80}
            className="mx-auto mb-8"
          />
          <p className="font-serif italic text-xl md:text-2xl text-nina-cream/90 mb-12">
            Authentic Greek &amp; Mediterranean Dining
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-block px-8 py-3.5 border border-nina-cream/60 text-nina-cream font-sans text-sm font-medium uppercase tracking-[.2em] hover:bg-nina-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-nina-cream active:bg-nina-cream/20 transition-opacity"
            >
              View Menu
            </Link>
            <Link
              href="/reserve"
              className="inline-block px-8 py-3.5 border border-nina-cream/60 text-nina-cream font-sans text-sm font-medium uppercase tracking-[.2em] hover:bg-nina-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-nina-cream active:bg-nina-cream/20 transition-opacity"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Scroll cue */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-nina-cream/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── The Menu ── */}
      <section className="bg-nina-navy text-nina-cream pt-24 md:pt-28 pb-24 md:pb-28">
        <div className="container-narrow">
          <div className="text-center mb-12 md:mb-14">
            <p className="eyebrow !text-nina-muted mb-4">The Menu</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-nina-cream">
              Explore Our Offerings
            </h2>
          </div>
        </div>

        <Image
          src="/assets/menu-page-1.png"
          alt="Nina The Greek menu"
          width={3491}
          height={2522}
          sizes="100vw"
          className="block w-full h-auto"
          priority={false}
        />

        <div className="container-narrow">
          <div className="text-center mt-12 md:mt-14">
            <Link
              href="/menu"
              className="inline-block font-serif text-nina-cream/80 hover:text-nina-cream transition-opacity text-lg"
            >
              Explore the Full Menu &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Private Events ── */}
      <section className="section-padding bg-nina-cream">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/hero-watercolor.png"
                alt="Private dining at Nina The Greek"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="eyebrow mb-4">Private Events</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-nina-blue mb-6">
                Host Your Next Gathering
              </h2>
              <div className="space-y-4 text-base leading-[1.7] text-nina-body mb-8">
                <p>
                  From corporate gatherings and milestone celebrations to intimate
                  private dining, our team creates unforgettable experiences
                  tailored to your occasion.
                </p>
                <p>
                  Let us bring the warmth of Greek hospitality to your next event,
                  with bespoke menus, dedicated service, and an atmosphere that
                  makes every gathering feel special.
                </p>
              </div>
              <Link
                href="/private-events"
                className="inline-block px-8 py-3.5 bg-nina-blue text-nina-cream font-sans text-sm font-medium uppercase tracking-[.2em] hover:bg-nina-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-nina-blue active:bg-nina-navy transition-opacity"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visit ── */}
      <section className="section-padding bg-white">
        <div className="container-narrow max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Visit Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-nina-blue">
              Find Us in Saar
            </h2>
          </div>

          <div className="relative overflow-hidden rounded">
            {/* Background image */}
            <Image
              src="/assets/hero-watercolor.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-nina-navy/70" />

            {/* Overlay card */}
            <div className="relative z-10 py-16 px-8 md:px-16 text-center text-nina-cream">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto mb-10 text-left">
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[.3em] text-nina-muted mb-3">
                    Address
                  </h3>
                  <p className="font-serif text-nina-cream/90 leading-relaxed">
                    Avenue 57, Maqabah
                    <br />
                    Saar, Kingdom of Bahrain
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[.3em] text-nina-muted mb-3">
                    Hours
                  </h3>
                  <p className="font-serif text-nina-cream/90 leading-relaxed">
                    Open Daily
                    <br />
                    3:00 PM &ndash; 11:00 PM
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[.3em] text-nina-muted mb-3">
                    Phone
                  </h3>
                  <p className="font-serif text-nina-cream/90">
                    <a
                      href="tel:+97317322777"
                      className="hover:text-nina-cream transition-opacity"
                    >
                      1732 2777
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[.3em] text-nina-muted mb-3">
                    Instagram
                  </h3>
                  <p className="font-serif text-nina-cream/90">
                    <a
                      href="https://www.instagram.com/nina_the_greek/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-nina-cream transition-opacity"
                    >
                      @nina_the_greek
                    </a>
                  </p>
                </div>
              </div>

              <Link
                href="/reserve"
                className="inline-block px-8 py-3.5 bg-nina-blue text-nina-cream font-sans text-sm font-medium uppercase tracking-[.2em] hover:bg-nina-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-nina-cream active:bg-nina-navy transition-opacity"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
