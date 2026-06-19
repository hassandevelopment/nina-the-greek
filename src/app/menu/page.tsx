import Image from "next/image";

export default function MenuPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-nina-cream py-24 md:py-28 lg:py-32 olive-tr olive-v2">
        <div className="max-w-[1140px] mx-auto px-6 text-center relative">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-4">
            Nina The Greek
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-nina-blue mb-4">
            Our Menu
          </h1>
          <p className="text-nina-body text-sm max-w-md mx-auto">
            Prices inclusive of 10% VAT &amp; 5% government levy
          </p>
        </div>
      </section>

      {/* Full Menu Image */}
      <section className="bg-nina-cream pb-24 md:pb-28 lg:pb-32">
        <Image
          src="/assets/menu-page-1.png"
          alt="Nina The Greek full menu"
          width={3491}
          height={2522}
          sizes="100vw"
          className="block w-full h-auto"
          priority
        />
      </section>
    </main>
  );
}
