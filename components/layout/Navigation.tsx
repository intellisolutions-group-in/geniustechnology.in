"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code,
  Smartphone,
  Search,
  Paintbrush,
  ShoppingCart,
  Cloud,
  GitBranch,
  Plug,
  Users,
  Database,
} from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ===== CLOSE ON OUTSIDE CLICK ===== */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [servicesOpen]);

  /* ===== CLOSE ON ESC ===== */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
      <Link
        href="/"
        className={isActive("/") ? "text-[var(--brand-blue)]" : ""}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={isActive("/about") ? "text-[var(--brand-blue)]" : ""}
      >
        About
      </Link>

      {/* ===== SERVICES BUTTON ===== */}
      <div ref={menuRef} className="relative">
        <button
          onClick={() => setServicesOpen((prev) => !prev)}
          className={`relative flex items-center gap-1 ${
            pathname.startsWith("/services")
              ? "text-[var(--brand-blue)]"
              : "hover:text-[var(--brand-blue)]"
          }`}
        >
          Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="currentColor"
            className={`transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button>

        {/* ===== MEGA MENU ===== */}
        {servicesOpen && (
          <div
            className="
              absolute
              left-1/2
              top-full
              mt-6
              w-[1000px]
              max-w-[calc(100vw-2rem)]
              -translate-x-1/2
              bg-white
              border
              rounded-xl
              shadow-lg
              z-50
            "
          >
            <div className="grid grid-cols-3 gap-10 p-8">
              {/* COLUMN 1 */}
              <div>
                <p className="mb-4 text-xs font-semibold text-gray-500">
                  DEVELOPMENT
                </p>
                <ServiceItem icon={Code} label="Web Development" href="/services/web-development" />
                <ServiceItem icon={Smartphone} label="App Development" href="/services/app-development" />
                <ServiceItem icon={Plug} label="API Development" href="/services/api-development" />
              </div>

              {/* COLUMN 2 */}
              <div>
                <p className="mb-4 text-xs font-semibold text-gray-500">
                  MARKETING & DESIGN
                </p>
                <ServiceItem icon={Search} label="Digital Marketing" href="/services/digital-marketing" />
                <ServiceItem icon={Paintbrush} label="UI / UX Design" href="/services/ui-ux-design" />
                <ServiceItem icon={ShoppingCart} label="E-commerce Solutions" href="/services/ecommerce-solutions" />
              </div>

              {/* COLUMN 3 */}
              <div>
                <p className="mb-4 text-xs font-semibold text-gray-500">
                  INFRASTRUCTURE
                </p>
                <ServiceItem icon={Cloud} label="Cloud Solutions" href="/services/cloud-solutions" />
                <ServiceItem icon={GitBranch} label="DevOps Services" href="/services/devops-services" />
                <ServiceItem icon={Database} label="ERP Solutions" href="/services/erp-solutions" />
                <ServiceItem icon={Users} label="CRM Development" href="/services/crm-development" />
              </div>
            </div>

            <div className="border-t px-8 py-4">
              <Link
                href="/services"
                onClick={() => setServicesOpen(false)}
                className="text-sm font-medium text-[var(--brand-blue)]"
              >
                View all services →
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link
        href="/portfolio"
        className={isActive("/portfolio") ? "text-[var(--brand-blue)]" : ""}
      >
        Portfolio
      </Link>

      <Link
        href="/careers"
        className={isActive("/careers") ? "text-[var(--brand-blue)]" : ""}
      >
        Careers
      </Link>

      <Link
        href="/blogs"
        className={isActive("/blogs") ? "text-[var(--brand-blue)]" : ""}
      >
        Blogs
      </Link>

      {/* Animated Contact Button */}
      <Link href="/contact" className="contact-button group">
  <div className="bg-container">
    <span>Contact</span>
    <span>Contact</span>
  </div>

  <div className="arrow-container">
    <svg
      width="25"
      height="25"
      viewBox="0 0 45 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
        fill="currentColor"
      />
    </svg>
  </div>
</Link>
    </nav>
  );
};

/* ===== HELPER COMPONENT ===== */
const ServiceItem = ({
  icon: Icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href: string;
}) => (
  <Link
    href={href}
    className="flex items-center gap-3 py-2 text-sm hover:text-[var(--brand-blue)]"
  >
    <Icon className="h-4 w-4 text-[var(--brand-blue)]" />
    <span>{label}</span>
  </Link>
);

export default Navigation;

