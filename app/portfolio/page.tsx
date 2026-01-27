import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Genius Technology – Digital Solutions & Case Studies",
  description:
    "Explore selected projects and case studies by Genius Technology, showcasing scalable, reliable digital solutions built for modern businesses.",
  keywords:
    "Genius Technology Portfolio, IT Projects, Software Case Studies",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}