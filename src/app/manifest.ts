import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nina The Greek",
    short_name: "Nina The Greek",
    description: "Authentic Greek cuisine in Saar, Bahrain.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e2d5a",
    theme_color: "#0e2d5a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
