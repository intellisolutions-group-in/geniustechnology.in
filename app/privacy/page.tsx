import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Genius Technology",
  description:
    "Read the privacy policy of Genius Technology to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="w-full py-24 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <p className="mb-4 text-sm font-medium tracking-wide text-[var(--brand-blue)] uppercase">
            Legal
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black max-w-4xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl">
            This Privacy Policy explains how Genius Technology collects, uses,
            discloses, and safeguards your information when you visit our
            website or interact with our services.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 text-gray-700 leading-relaxed">

          <PolicySection title="1. Introduction">
            Genius Technology is committed to protecting your privacy. This
            policy applies to all information collected through our website and
            related services. By using our website, you agree to the practices
            described in this policy.
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            We may collect personal information such as your name, email
            address, company name, and message details when you submit a contact
            or inquiry form. We do not collect payment information or sensitive
            personal data.
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            The information we collect is used to respond to inquiries, provide
            requested services, improve our website, and communicate relevant
            information related to our offerings.
          </PolicySection>

          <PolicySection title="4. Data Sharing & Disclosure">
            We do not sell, trade, or rent your personal information. Data may be
            shared only when required by law or to protect the rights, safety,
            and security of Genius Technology.
          </PolicySection>

          <PolicySection title="5. Cookies & Tracking Technologies">
            Our website may use basic cookies to improve user experience and
            analyse site usage. You can choose to disable cookies through your
            browser settings.
          </PolicySection>

          <PolicySection title="6. Data Security">
            We implement appropriate technical and organisational measures to
            protect your information from unauthorised access, disclosure, or
            misuse. However, no internet transmission is completely secure.
          </PolicySection>

          <PolicySection title="7. Third-Party Links">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those external
            sites.
          </PolicySection>

          <PolicySection title="8. Data Retention">
            We retain personal information only for as long as necessary to
            fulfil the purposes outlined in this policy, unless a longer
            retention period is required by law.
          </PolicySection>

          <PolicySection title="9. Your Rights">
            You have the right to request access, correction, or deletion of
            your personal data. Requests can be made by contacting us using the
            details below.
          </PolicySection>

          <PolicySection title="10. Changes to This Policy">
            Genius Technology reserves the right to update this Privacy Policy
            at any time. Updates will be reflected on this page with a revised
            effective date.
          </PolicySection>

          <PolicySection title="11. Contact Information">
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
            <br />
            <strong>Email:</strong> info@geniustechnology.in
            <br />
            <strong>Address:</strong> 227, Second Floor, VIP View Complex, VIP
            Road, Vadodara, Gujarat 390022, India
          </PolicySection>

        </div>
      </section>
    </main>
  );
}

/* ================= HELPERS ================= */

function PolicySection({
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