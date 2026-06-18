import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore the full menu at Nina The Greek — mezedes, salads, grilled seafood, souvlaki, desserts, and more. Authentic Greek cuisine in Saar, Bahrain. Prices inclusive of VAT.",
  openGraph: {
    title: "Menu | Nina The Greek",
    description: "Explore the full menu at Nina The Greek — authentic Greek cuisine in Saar, Bahrain.",
    url: "https://ninathegreek.com/menu",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
