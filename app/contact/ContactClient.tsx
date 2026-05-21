"use client";

import { useState } from "react";
import Link from "next/link";
import ThankYouModal from "@/components/ui/ThankYouModal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import PageHero from "@/components/ui/PageHero";

export default function ContactClient() {
  /* ================= PHASE 3 STATE ================= */
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <PageHero
        category="Contact Us"
        title="Get in Touch with Genius Technology"
        description="Whether you are planning a new product, improving an existing system, or looking for a reliable technology partner — we're here to help."
      />

      {/* ================= CONTACT SECTION ================= */}
      <section className="w-full py-24 bg-white opacity-0 animate-[fadeUp_0.8s_ease-out_0.15s_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Column - Contact Cards */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                  Get in Touch
                </h2>
                <p className="mt-4 text-gray-600">
                  Choose the most convenient way to reach us — we're always happy to
                  talk.
                </p>
              </div>

              <div className="space-y-6">
                <ContactCard
                  title="Email Us"
                  value="info@geniustechnology.in"
                  sub="We reply within 24 hours"
                  icon="email"
                />

                <ContactCard
                  title="Visit Us"
                  value="227, Second Floor, VIP View Complex, VIP Road, Vadodara, Gujarat 390022"
                  sub="India"
                  icon="location"
                />
                <SocialCard />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                Tell Us About Your Requirements
              </h2>

              <p className="mt-4 text-gray-600">
                Share a few details and our team will get back to you shortly.
              </p>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <Input label="Full Name" placeholder="Your name" />
                <Input label="Email Address" placeholder="you@example.com" />
                <Input label="Company (optional)" placeholder="Company name" />

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-[var(--brand-blue)] text-white flex justify-center"
                >
                  {loading ? <LoadingSpinner /> : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Find Us Here
            </h2>
            <p className="mt-4 text-gray-600">
              Visit our office in Vadodara, Gujarat
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2270.6556287478434!2d73.20470400000002!3d22.326561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf3fcf5a1eab%3A0x5f6f90da147465aa!2sGenius%20Technology%20-%20IT%20%26%20Software%20Solutions%20Vadodara!5e1!3m2!1sen!2sus!4v1770900535297!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Looking for a Long-Term Technology Partner?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We focus on clarity, reliability, and scalable solutions.
          </p>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex px-8 py-3 rounded-lg border border-[var(--brand-blue)] text-[var(--brand-blue)]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SUCCESS MODAL ================= */}
      <ThankYouModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Thank you! We will reach you soon."
      />
    </main>
  );
}

/* ================= HELPERS ================= */

function ContactCard({ title, value, sub, icon }: any) {
  return (
    <div className="relative rounded-2xl p-8 border border-gray-200 bg-white hover:shadow-xl transition overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand-blue)]" />
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
          {icon === 'email' && (
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}
          {icon === 'phone' && (
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          )}
          {icon === 'location' && (
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </div>
        <div>
          <p className="text-sm uppercase text-gray-500">{title}</p>
          <p className="mt-1 text-xl font-semibold">{value}</p>
          <p className="mt-1 text-sm text-gray-600">{sub}</p>
        </div>
      </div>
    </div>
  );
}

function SocialCard() {
  return (
    <div className="relative rounded-2xl p-8 border border-gray-200 bg-white hover:shadow-xl transition overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand-blue)]" />
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </div>
        <div>
          <p className="text-sm uppercase text-gray-500 mb-3">Follow Us</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/geniustechnologyin" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-blue)] transition" aria-label="Facebook">
              <svg className="w-5 h-5 text-black hover:text-[var(--brand-blue)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/geniustechnology.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-blue)] transition" aria-label="Instagram">
              <svg className="w-5 h-5 text-black hover:text-[var(--brand-blue)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3"
      />
    </div>
  );
}

