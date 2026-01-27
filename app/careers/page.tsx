import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Genius Technology | Join Our Team",
  description:
    "Explore career opportunities at Genius Technology. Apply for engineering, design, and technology roles based in Vadodara or Remote.",
};

export default function CareersPage() {
  return <CareersClient />;
}