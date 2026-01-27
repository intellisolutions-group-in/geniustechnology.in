import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

import NavigateCursor from "@/components/ui/NavigateCursor";
import StaticCursor from "@/components/ui/StaticCursor";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Genius Technology - IT Services & Software Development Company",
  description: "Genius Technology is an IT services and software development company delivering reliable, scalable, and business-focused digital solutions for modern organisations.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <StaticCursor/>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
