import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Genius Technology",
  description:
    "Review the terms and conditions governing the use of Genius Technology's website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="w-full py-24 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <p className="mb-4 text-sm font-medium tracking-wide text-[var(--brand-blue)] uppercase">
            Legal
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black max-w-4xl">
            Terms of Service
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl">
            These Terms of Service govern your access to and use of the Genius
            Technology website and related services. By using this website, you
            agree to comply with these terms.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 text-gray-700 leading-relaxed">

          <TermSection title="1. Acceptance of Terms">
            By accessing or using this website, you confirm that you have read,
            understood, and agreed to be bound by these Terms of Service. If you
            do not agree, you must not use this website.
          </TermSection>

          <TermSection title="2. About Genius Technology">
            Genius Technology is an IT and software development company based in
            Vadodara, Gujarat, India. The website provides information about our
            services, capabilities, and business offerings.
          </TermSection>

          <TermSection title="3. Use of Website">
            You agree to use this website only for lawful purposes. You must not
            attempt to disrupt, damage, or gain unauthorised access to the
            website, servers, or connected systems.
          </TermSection>

          <TermSection title="4. Intellectual Property">
            All content on this website, including text, graphics, logos, and
            design elements, is the property of Genius Technology unless stated
            otherwise. Unauthorised reproduction or distribution is prohibited.
          </TermSection>

          <TermSection title="5. Service Information">
            Information on this website is provided for general informational
            purposes only. Specific service terms, deliverables, timelines, and
            obligations are defined through formal agreements with clients.
          </TermSection>

          <TermSection title="6. Limitation of Liability">
            Genius Technology shall not be liable for any direct, indirect,
            incidental, or consequential damages resulting from the use or
            inability to use this website or its content.
          </TermSection>

          <TermSection title="7. Third-Party Links">
            This website may contain links to third-party websites. Genius
            Technology does not control or endorse these sites and is not
            responsible for their content or practices.
          </TermSection>

          <TermSection title="8. Privacy">
            Your use of this website is also governed by our Privacy Policy,
            which outlines how we collect and use personal information.
          </TermSection>

          <TermSection title="9. Modifications to Terms">
            Genius Technology reserves the right to modify these Terms of Service
            at any time. Changes will be effective immediately upon posting on
            this page.
          </TermSection>

          <TermSection title="10. Governing Law">
            These terms are governed by and interpreted in accordance with the
            laws of India. Any disputes shall be subject to the jurisdiction of
            courts located in Gujarat, India.
          </TermSection>

          <TermSection title="11. Contact Information">
            For any questions regarding these Terms of Service, please contact:
            <br />
            <strong>Email:</strong> info@geniustechnology.in
            <br />
            <strong>Address:</strong> 227, Second Floor, VIP View Complex, VIP
            Road, Vadodara, Gujarat 390022, India
          </TermSection>

        </div>
      </section>
    </main>
  );
}

/* ================= HELPERS ================= */

function TermSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4">
        {title}
      </h2>
      <p>{children}</p>
    </div>
  );
}