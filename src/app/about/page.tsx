import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the story behind Nina The Greek, an authentic Greek and Mediterranean restaurant in Saar, Bahrain. Meet Chef Hussain and learn about our passion for fresh ingredients, handcrafted dishes, and warm Greek hospitality.",
  openGraph: {
    title: "Our Story | Nina The Greek",
    description:
      "Discover the story behind Nina The Greek, an authentic Greek and Mediterranean restaurant in Saar, Bahrain.",
    url: "https://ninathegreek.com/about",
  },
};

const values = [
  {
    title: "Quality Ingredients",
    description:
      "We source the freshest seafood, premium meats, and authentic Mediterranean produce to ensure every dish meets the highest standard.",
  },
  {
    title: "Authentic Recipes",
    description:
      "Our menu draws from generations of Greek culinary tradition, refined with modern technique and presented with artistry.",
  },
  {
    title: "Warm Hospitality",
    description:
      "In the spirit of Greek philoxenia, every guest is welcomed like family, from the first greeting to the last bite.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="section-padding bg-nina-navy text-nina-cream">
        <div className="container-narrow max-w-3xl text-center">
          <p className="eyebrow !text-nina-muted mb-6">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] mb-6">
            The Heart of Nina
          </h1>
          <p className="font-serif text-lg md:text-xl text-nina-cream/70 leading-relaxed">
            Bringing the warmth, flavors, and spirit of Greece to the
            Kingdom of Bahrain.
          </p>
        </div>
      </section>

      {/* ── Restaurant Story ── */}
      <section className="section-padding bg-nina-cream">
        <div className="container-narrow max-w-3xl">
          <div className="space-y-6 font-serif text-lg md:text-xl leading-[1.7] text-nina-body">
            <p>
              Nina The Greek is an authentic Greek and Mediterranean restaurant
              in Bahrain, bringing the flavors, hospitality, and charm of Greece
              to the heart of the Kingdom.
            </p>
            <p>
              Inspired by traditional Greek cuisine and coastal Mediterranean
              dining, we offer a carefully curated menu featuring fresh seafood,
              premium meats, handcrafted starters, homemade pita, signature
              salads, and indulgent desserts.
            </p>
            <p>
              Every element of Nina The Greek has been thoughtfully designed to
              create an immersive dining experience. From the hand-painted
              watercolor murals that line our walls to the carefully curated
              playlist of Mediterranean melodies, each detail reflects our deep
              love for Greek culture and tradition.
            </p>
          </div>

          {/* Pull quote */}
          <div className="my-14 py-10 border-t border-b border-nina-blue/20">
            <div className="meander-rule" />
            <blockquote className="font-serif italic text-2xl md:text-3xl text-nina-blue text-center leading-snug mt-6">
              &ldquo;From our warm hospitality and vibrant atmosphere to our
              handcrafted dishes and artistic interiors, every detail is designed
              to transport guests to the Greek islands.&rdquo;
            </blockquote>
          </div>

          <div className="space-y-6 font-serif text-lg md:text-xl leading-[1.7] text-nina-body">
            <p>
              Our kitchen is led by a team passionate about honoring authentic
              Greek recipes while embracing the creativity of modern
              Mediterranean cuisine. We believe that great food starts with great
              ingredients, and we go to extraordinary lengths to source the
              finest produce, seafood, and spices.
            </p>
          </div>
        </div>
      </section>

      {/* ── Meet the Chef ── */}
      <section className="section-padding bg-nina-sand">
        <div className="container-narrow max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="aspect-[3/4] bg-nina-blue/10 flex items-center justify-center">
              <span className="text-nina-blue/30 font-sans text-xs uppercase tracking-[.3em]">
                Chef Photo
              </span>
            </div>

            {/* Bio */}
            <div>
              <p className="eyebrow mb-4">The Chef</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-nina-blue mb-6">
                Chef Hussain
              </h2>
              <div className="space-y-4 text-base leading-[1.7] text-nina-body">
                <p>
                  A passionate young chef specializing in French and
                  Mediterranean cuisine, with extensive training in some of
                  France&apos;s finest Michelin-starred restaurants.
                </p>
                <p>
                  His expertise includes innovative menu development and leading
                  pre-opening operations for new dining ventures. He thrives in
                  fast-paced environments, bringing creativity and precision to
                  every dish he creates.
                </p>
                <p>
                  At Nina The Greek, Chef Hussain brings together his classical
                  French technique with a deep appreciation for Mediterranean
                  ingredients, crafting dishes that honor tradition while
                  surprising the palate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="meander-bottom section-padding bg-white">
        <div className="container-narrow max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-xl md:text-2xl font-medium mb-4 text-nina-blue">
                  {value.title}
                </h3>
                <p className="text-base leading-[1.7] text-nina-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section-padding bg-nina-navy text-nina-cream">
        <div className="container-narrow max-w-3xl text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[.3em] text-nina-muted mb-4">
                Location
              </h3>
              <p className="font-serif text-nina-cream/90 leading-relaxed">
                Avenue 57, Maqabah
                <br />
                Saar, Kingdom of Bahrain
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[.3em] text-nina-muted mb-4">
                Hours
              </h3>
              <p className="font-serif text-nina-cream/90 leading-relaxed">
                Open Daily
                <br />
                3:00 PM &ndash; 11:00 PM
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[.3em] text-nina-muted mb-4">
                Connect
              </h3>
              <p className="font-serif text-nina-cream/90 leading-relaxed">
                <a
                  href="tel:+97317322777"
                  className="hover:text-nina-cream transition-opacity block"
                >
                  1732 2777
                </a>
                <a
                  href="https://www.instagram.com/nina_the_greek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nina-cream transition-opacity block mt-1"
                >
                  @nina_the_greek
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
