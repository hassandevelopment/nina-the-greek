"use client";

import { useState, useRef, useEffect } from "react";
import { menuCategories } from "@/data/menu";

function formatBD(price: number): string {
  return "BD " + price.toFixed(3);
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(
    menuCategories[0].slug
  );
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      const container = tabsRef.current;
      const tab = activeTabRef.current;
      const scrollLeft =
        tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeCategory]);

  const activeCategoryData = menuCategories.find(
    (c) => c.slug === activeCategory
  );

  return (
    <main>
      {/* Page Header */}
      <section className="bg-nina-cream py-24 md:py-28 lg:py-32">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
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

      {/* Menu Content */}
      <section className="py-24 md:py-28 lg:py-32">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Category Tabs */}
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto pb-2 mb-10 -mx-1.5 px-1.5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {menuCategories.map((category) => {
              const isActive = category.slug === activeCategory;
              return (
                <button
                  key={category.slug}
                  ref={isActive ? activeTabRef : null}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`
                    shrink-0 px-5 py-2.5 text-sm font-medium
                    transition-colors duration-200 cursor-pointer
                    ${
                      isActive
                        ? "bg-nina-blue text-nina-cream"
                        : "bg-white text-nina-body border border-nina-blue/16 hover:border-nina-blue/30 hover:bg-nina-blue/5"
                    }
                  `}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Menu Items */}
          {activeCategoryData && (
            <div className="space-y-3">
              {activeCategoryData.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-start justify-between gap-4 bg-white px-5 py-4 border hover:shadow-sm transition-colors duration-200"
                  style={{ borderColor: "rgba(26,75,140,.16)" }}
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg font-medium text-nina-blue leading-snug">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="font-serif italic text-nina-body text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 font-sans text-sm tracking-wider text-nina-sky mt-0.5 tabular-nums">
                    {formatBD(item.price)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
