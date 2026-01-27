import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Genius Technology | Let's Build Something Reliable",
  description:
    "Get in touch with Genius Technology to discuss web development, app development, cloud solutions, and scalable digital products.",
};

export default function ContactPage() {
  return <ContactClient />;
}