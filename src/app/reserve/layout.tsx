import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description: "Reserve a table at Nina The Greek, an authentic Greek restaurant in Saar, Bahrain. Open daily 3 PM – 11 PM. Call 1732 2777 for immediate bookings.",
  openGraph: {
    title: "Reserve a Table | Nina The Greek",
    description: "Reserve a table at Nina The Greek in Saar, Bahrain. Open daily 3 PM – 11 PM.",
    url: "https://ninathegreek.com/reserve",
  },
};

export default function ReserveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
