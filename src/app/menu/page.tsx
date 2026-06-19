import { menuCategories } from "@/data/menu";

function formatBD(price: number): string {
  return "BD " + price.toFixed(3);
}

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

      {/* Full Menu */}
      <section className="py-24 md:py-28 lg:py-32 olive-bl olive-v3">
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <div className="space-y-20 md:space-y-24">
            {menuCategories.map((category) => (
              <div key={category.slug}>
                {/* Category Heading */}
                <div className="text-center mb-10 md:mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium text-nina-blue">
                    {category.name}
                  </h2>
                  <div className="meander-rule mt-6 max-w-[120px] mx-auto" />
                </div>

                {/* Items */}
                <div className="max-w-2xl mx-auto space-y-7">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-serif text-xl md:text-2xl font-medium text-nina-blue leading-snug">
                          {item.name}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="flex-1 border-b border-dotted border-nina-blue/25 min-w-[1.5rem] translate-y-[-3px]"
                        />
                        <span className="shrink-0 font-sans text-sm tracking-wider text-nina-sky tabular-nums">
                          {formatBD(item.price)}
                        </span>
                      </div>
                      {item.description && (
                        <p className="font-serif italic text-nina-body text-sm md:text-base mt-1 leading-relaxed max-w-prose">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
