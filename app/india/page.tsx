import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Genius Technology India | Operations and Contact",
  description: "Genius Technology operations in India. Official contact and business information.",
};

export default function IndiaPage() {
  return (
    <main className="w-full bg-white">
      <PageHero
        category="Country Operations"
        title="Genius Technology in India"
        description="Official information regarding our operations, services, and contact details in India."
      />

      <section className="w-full py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="prose prose-lg text-gray-700">
            <p>
              Genius Technology operates in India, providing IT solutions and software development services. 
              Our operations focus on delivering technical solutions, maintaining systems, and supporting our clients.
            </p>
            
            <h2>Nature of Operations</h2>
            <p>
              Our engineering and development teams are based in Vadodara, Gujarat. From this location, we handle:
            </p>
            <ul>
              <li>Software and Web Development</li>
              <li>Cloud Infrastructure Management</li>
              <li>Technical Support and Maintenance</li>
            </ul>

            <h2>Contact Information</h2>
            <p>
              For official inquiries, verification, or business discussions, please use the following contact details:
            </p>
            <p>
              <strong>Address:</strong><br />
              227, Second Floor, VIP View Complex<br />
              VIP Road, Vadodara<br />
              Gujarat 390022, India
            </p>
            <p>
              <strong>Email:</strong> info@geniustechnology.in
            </p>

            <h2>Important Links</h2>
            <p>
              To learn more about our company or to get in touch with our team, please visit our official pages:
            </p>
            <ul>
              <li><Link href="/about" className="text-[var(--brand-blue)] hover:underline">About Genius Technology</Link></li>
              <li><Link href="/contact" className="text-[var(--brand-blue)] hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
