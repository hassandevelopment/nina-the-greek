import Link from "next/link";
import Image from "next/image";

const signatureDishes = [
  {
    name: "Shrimp Saganaki",
    description: "Succulent shrimp simmered in a rich tomato and feta sauce, finished with a touch of ouzo.",
    price: "BD 5.200",
  },
  {
    name: "Beef Souvlaki",
    description: "Tender marinated beef skewers, chargrilled and served with tzatziki, warm pita, and fresh herbs.",
    price: "BD 12.400",
  },
  {
    name: "Mushroom Short Ribs",
    description: "Slow-braised short ribs with wild mushroom ragu, creamy polenta, and a red wine reduction.",
    price: "BD 14.500",
  },
  {
    name: "Deconstructed Baklava",
    description: "Crispy phyllo shards layered with pistachio cream, honey syrup, and rose-scented ice cream.",
    price: "BD 3.500",
  },
  {
    name: "Seafood Orzo",
    description: "Toasted orzo tossed with shrimp, calamari, mussels, and a saffron-tomato broth.",
    price: "BD 8.000",
  },
  {
    name: "Burrata",
    description: "Creamy burrata served with heirloom tomatoes, basil oil, and crusty bread.",
    price: "BD 5.500",
  },
];

const menuCategories = [
  { number: "01", name: "Mezedes", examples: "Hummus, Tzatziki, Saganaki" },
  { number: "02", name: "Salads", examples: "Horiatiki, Fattoush" },
  { number: "03", name: "Appetizers", examples: "Shrimp Saganaki, Burrata" },
  { number: "04", name: "Main Course", examples: "Souvlaki, Seafood Orzo" },
  { number: "05", name: "Sandwiches", examples: "Gyro, Lamb Wrap" },
  { number: "06", name: "Sides", examples: "Greek Fries, Grilled Vegetables" },
  { number: "07", name: "Desserts", examples: "Baklava, Loukoumades" },
  { number: "08", name: "Beverages", examples: "Greek Coffee, Fresh Juices" },
];

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

      {/* ── Signature Dishes ── */}
      <section className="meander-bottom section-padding bg-nina-sand">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">From Our Kitchen</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-nina-blue">
              Signature Dishes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
            {signatureDishes.map((dish) => (
              <div key={dish.name} className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-nina-blue mb-1">
                    {dish.name}
                  </h3>
                  <p className="font-serif italic text-nina-body text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
                <span className="font-sans text-sm text-nina-body whitespace-nowrap pt-1">
                  {dish.price}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/menu"
              className="inline-block font-serif text-nina-blue hover:text-nina-navy transition-opacity text-lg"
            >
              Full Menu &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── The Menu ── */}
      <section className="section-padding bg-nina-navy text-nina-cream">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="eyebrow !text-nina-muted mb-4">The Menu</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-nina-cream">
              Explore Our Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
            {menuCategories.map((cat) => (
              <div key={cat.number} className="flex gap-4">
                <span className="font-sans text-sm text-nina-muted mt-1">
                  {cat.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-nina-cream mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-nina-muted leading-relaxed">
                    {cat.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
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
