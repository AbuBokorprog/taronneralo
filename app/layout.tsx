import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "তারুণ্যের আলো সংগঠন | মানবতার জন্য একসাথে",
    template: "%s | তারুণ্যের আলো সংগঠন",
  },
  description:
    "তারুণ্যের আলো সংগঠন একটি স্বেচ্ছাসেবী সামাজিক সংগঠন। আমরা গরিব, অসহায় ও দুঃস্থ মানুষের পাশে দাঁড়িয়ে গ্রাম, সমাজ ও রাষ্ট্রের কল্যাণে কাজ করি।",

  keywords: [
    "তারুণ্যের আলো সংগঠন",
    "সামাজিক সংগঠন বাংলাদেশ",
    "স্বেচ্ছাসেবী সংগঠন",
    "গরিব মানুষের সাহায্য",
    "মানবিক সহায়তা",
    "NGO Bangladesh",
    "Volunteer Organization",
  ],

  authors: [{ name: "তারুণ্যের আলো সংগঠন" }],
  creator: "তারুণ্যের আলো সংগঠন",
  publisher: "তারুণ্যের আলো সংগঠন",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "তারুণ্যের আলো সংগঠন | মানবতার জন্য একসাথে",
    description:
      "আমরা গরিব, অসহায় ও দুঃস্থ মানুষের পাশে দাঁড়িয়ে মানবিক সহায়তা প্রদান করি। আপনিও মানবতার এই যাত্রায় অংশ নিতে পারেন।",
    url: "https://tarunneralo.org", // পরে real domain দিবে
    siteName: "তারুণ্যের আলো সংগঠন",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // পরে image add করবে
        width: 1200,
        height: 630,
        alt: "তারুণ্যের আলো সংগঠন",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "তারুণ্যের আলো সংগঠন | মানবতার জন্য একসাথে",
    description: "মানবতার কল্যাণে কাজ করা একটি স্বেচ্ছাসেবী সামাজিক সংগঠন।",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://tarunneralo.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
