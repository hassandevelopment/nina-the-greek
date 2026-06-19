import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Nina The Greek through our gallery. Discover our dishes, dining space, and Mediterranean ambiance in Saar, Bahrain.",
  openGraph: {
    title: "Gallery | Nina The Greek",
    description:
      "A visual journey through Nina The Greek — dishes, dining space, and Mediterranean ambiance.",
    url: "https://ninathegreek.com/gallery",
  },
};

const dishes = [
  { aspect: "aspect-[3/4]", label: "Grilled Octopus" },
  { aspect: "aspect-[4/3]", label: "Mezedes Platter" },
  { aspect: "aspect-square", label: "Moussaka" },
  { aspect: "aspect-[4/3]", label: "Fresh Seafood" },
  { aspect: "aspect-[3/4]", label: "Souvlaki" },
  { aspect: "aspect-square", label: "Baklava" },
];

const spaces = [
  { label: "Main Dining" },
  { label: "Outdoor Terrace" },
  { label: "Private Room" },
  { label: "Bar Area" },
];

function PlaceholderCard({
  aspect,
  label,
}: {
  aspect: string;
  label: string;
}) {
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`${aspect} bg-gradient-to-br from-nina-blue/[.06] to-nina-blue/[.12] flex flex-col items-center justify-center gap-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
      >
        {/* Camera icon */}
        <svg
          className="w-8 h-8 text-nina-blue/20 transition-transform duration-500 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
          />
        </svg>
        <span className="font-serif text-sm text-nina-blue/25 italic">
          {label}
        </span>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-nina-blue/[.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="meander-bottom bg-nina-cream py-24 md:py-28 lg:py-32 olive-tr olive-v2">
        <div className="max-w-[1140px] mx-auto px-6 text-center relative">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-4">
            Nina The Greek
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-nina-blue">
            Gallery
          </h1>
          <p className="text-nina-body mt-4 max-w-md mx-auto">
            A visual journey through our kitchen and dining space
          </p>
        </div>
      </section>

      {/* Section 1: Our Dishes */}
      <section className="py-24 md:py-28 lg:py-32 olive-bl">
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-3">
            From Our Kitchen
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-nina-blue mb-10">
            Our Dishes
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {dishes.map((dish, index) => (
              <div key={index} className="break-inside-avoid mb-5">
                <PlaceholderCard aspect={dish.aspect} label={dish.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Our Space */}
      <section className="bg-nina-sand py-24 md:py-28 lg:py-32 olive-tr olive-v3 olive-bl-2">
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-3">
            The Experience
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-nina-blue mb-10">
            Our Space
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {spaces.map((space, index) => (
              <PlaceholderCard
                key={index}
                aspect="aspect-[16/9]"
                label={space.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Floor Plan */}
      <section className="py-24 md:py-28 lg:py-32 olive-tl olive-v3">
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-3">
            Layout
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-nina-blue mb-10">
            Floor Plan
          </h2>
          <PlaceholderCard aspect="aspect-[21/9]" label="Floor Plan" />
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-nina-navy py-24 md:py-28 lg:py-32">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-muted mb-4">
            Follow Along
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-nina-cream mb-4">
            See More on Instagram
          </h2>
          <p className="text-nina-cream/60 mb-8 max-w-md mx-auto">
            Follow us for the latest dishes, events, and behind-the-scenes
            moments.
          </p>
          <a
            href="https://www.instagram.com/nina_the_greek/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-nina-cream/30 px-8 py-3 text-nina-cream hover:bg-nina-cream/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-cream active:bg-nina-cream/15"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-sans text-xs tracking-[.2em] uppercase font-semibold">
              @nina_the_greek
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
