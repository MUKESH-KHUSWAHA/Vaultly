export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/account/", "/transaction/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/account/", "/transaction/"],
      },
    ],
    sitemap: "https://vaultly-ecru.vercel.app/sitemap.xml",
  };
}
