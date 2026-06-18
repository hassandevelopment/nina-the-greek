import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Nina The Greek team. We're looking for passionate individuals who share our love for Greek cuisine and Mediterranean hospitality. Apply now.",
  openGraph: {
    title: "Careers | Nina The Greek",
    description: "Join the Nina The Greek team in Saar, Bahrain. Apply now.",
    url: "https://ninathegreek.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
