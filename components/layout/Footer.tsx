"use client";

import Link from "next/link";
import { PROJECT_VARS } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-gray-300">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img
              src="/images/logo-footer.svg"
              alt="Genius Technology Logo"
              className="h-15 mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Genius Technology is an IT services and software development company
              delivering reliable, scalable, and business-focused digital
              solutions for modern organisations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/web-development" className="hover:text-white">Web Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-white">App Development</Link></li>
              <li><Link href="/services/seo-services" className="hover:text-white">SEO Services</Link></li>
              <li><Link href="/services/ui-ux-design" className="hover:text-white">UI/UX Design</Link></li>
              <li><Link href="/services/cloud-solutions" className="hover:text-white">Cloud Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white hover:underline">View all services →</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-white">Why Choose Us</Link></li>
              <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Contact
            </h3>
            <p className="text-sm text-gray-400">
              Email:
              <br />
              <a
                href="mailto:info@geniustechnology.in"
                className="hover:text-white"
              >
                info@geniustechnology.in
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Head Office:
              <br />
              227, Second Floor, VIP View Complex<br />
              VIP Road, Vadodara<br />
              Gujarat 390022, India
            </p>

            {/* Social (allowed only FB + IG) */}
            <div className="mt-4 flex gap-4">
              <a href="https://www.facebook.com/geniustechnologyin" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/geniustechnology.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span>© {PROJECT_VARS.ESTABLISHED_YEAR} - {new Date().getFullYear()} {PROJECT_VARS.BRAND_NAME} | India. All rights reserved.</span>
          <Link href="/" className="hover:text-white">Genius Technology official website</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;