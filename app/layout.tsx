import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maaki-rasoi.example"),
  title: {
    default: "Maa Ki Rasoi | Best Vegetarian Family Restaurant in Indore",
    template: "%s | Maa Ki Rasoi Indore",
  },
  description:
    "Maa Ki Rasoi is Indore's trusted homestyle vegetarian restaurant in Sudama Nagar, serving North Indian, South Indian, Chinese, biryani, fast food and fresh delivery till midnight.",
  keywords: [
    "Best vegetarian restaurant in Indore",
    "Family restaurant in Sudama Nagar",
    "Veg food delivery Indore",
    "North Indian food Indore",
    "Homestyle food Indore",
    "Maa Ki Rasoi Indore",
  ],
  openGraph: {
    title: "Maa Ki Rasoi | Homely Taste, Served Fresh Every Day",
    description:
      "Premium vegetarian family dining and fast food delivery from Gopur Square, Sudama Nagar, Indore.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1753357303396-704b5abe8945?auto=format&fit=crop&w=1400&q=80",
        width: 1400,
        height: 900,
        alt: "Pav bhaji for Maa Ki Rasoi in Sudama Nagar, Indore",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
