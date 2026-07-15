export default function manifest() {
  return {
    name: "Vaultly - AI Personal Finance Platform",
    short_name: "Vaultly",
    description:
      "AI-powered personal finance platform for expense tracking, budget management, and financial insights",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    orientation: "portrait",
    icons: [
      {
        src: "/logo-sm.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["finance", "productivity", "business"],
  };
}
