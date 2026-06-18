import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Events",
  description: "Host your next gathering at Nina The Greek. Private dining, corporate events, and celebrations with bespoke Greek menus in Saar, Bahrain.",
  openGraph: {
    title: "Private Events | Nina The Greek",
    description: "Host your next gathering at Nina The Greek with bespoke Greek menus in Saar, Bahrain.",
    url: "https://ninathegreek.com/private-events",
  },
};

export default function PrivateEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
