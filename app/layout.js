import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://vaultly-ecru.vercel.app"),
  title: {
    default: "Vaultly | AI-Powered Personal Finance Platform",
    template: "%s | Vaultly",
  },
  description:
    "Vaultly is a full-stack AI-powered personal finance platform that helps users track income, expenses, budgets, analyze spending, and scan receipts using Google Gemini AI.",
  keywords: [
    "AI Finance",
    "Expense Tracker",
    "Budget Planner",
    "Personal Finance",
    "Money Management",
    "Financial Dashboard",
    "Receipt Scanner",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Google Gemini",
    "AI-powered finance",
    "Budget tracking",
    "Income tracker",
    "Spending analysis",
    "Financial insights",
    "Multi-account management",
  ],
  authors: [{ name: "Mukesh Kumar" }],
  creator: "Mukesh Kumar",
  publisher: "Vaultly",
  applicationName: "Vaultly",
  category: "Finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://vaultly-ecru.vercel.app",
  },
  icons: {
    icon: "/logo-sm.png",
    apple: "/logo-sm.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaultly-ecru.vercel.app",
    siteName: "Vaultly",
    title: "Vaultly | AI-Powered Personal Finance Platform",
    description:
      "Vaultly is a full-stack AI-powered personal finance platform that helps users track income, expenses, budgets, analyze spending, and scan receipts using Google Gemini AI.",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Vaultly AI Personal Finance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaultly | AI-Powered Personal Finance Platform",
    description:
      "Vaultly is a full-stack AI-powered personal finance platform that helps users track income, expenses, budgets, analyze spending, and scan receipts using Google Gemini AI.",
    images: ["/banner.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>© 2026 Vaultly. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
