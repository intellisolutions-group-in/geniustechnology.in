"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Code,
  Smartphone,
  Plug,
  Search,
  Paintbrush,
  Cloud,
  GitBranch,
  Database,
  ChevronDown,
  ArrowRight,
  Cigarette,
  ComponentIcon,
} from "lucide-react";

const HEADER_HEIGHT = 64; // h-16

const Header = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ================= Scroll shadow ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= HARD BODY SCROLL LOCK (MOBILE ONLY) ================= */
  useEffect(() => {
    if (!(mobileOpen || mobileServicesOpen)) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      const y = Math.abs(parseInt(document.body.style.top || "0", 10));
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    };
  }, [mobileOpen, mobileServicesOpen]);

  /* ================= Sliding underline ================= */
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = (el: HTMLElement | null) => {
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({
      left: rect.left - navRect.left,
      width: rect.width,
    });
  };

  const moveToActive = () => {
    if (!navRef.current) return;

    // Exact match
    let active = navRef.current.querySelector(
      `a[href='${pathname}']`
    ) as HTMLElement | null;

    // If no exact match, check for parent path match (for sub-pages)
    if (!active) {
      const navLinks = navRef.current.querySelectorAll('a[href]');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && pathname.startsWith(href) && href !== '/') {
          active = link as HTMLElement;
        }
      });
    }

    // If still no match, hide the indicator (for pages without navlinks like /contact, /faq, etc.)
    if (!active) {
      setIndicator({ left: 0, width: 0 });
      return;
    }

    updateIndicator(active);
  };

  useLayoutEffect(() => {
    moveToActive();
  }, [pathname]);

  const closeAllMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* HEADER SPACER */}
      <div style={{ height: HEADER_HEIGHT }} />

      {/* MOBILE OVERLAY */}
      {(mobileOpen || mobileServicesOpen) && (
        <div
          onClick={closeAllMobile}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          w-full transition-all duration-300
          ${servicesOpen
            ? "bg-gray-50"
            : "bg-white border-b border-black/10"
          }
          ${scrolled && !servicesOpen ? "shadow-md" : "shadow-none"}
        `}
      >
        {/* ================= TOP BAR ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="Genius Technology Logo"
              className="h-8"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            ref={navRef}
            className="hidden md:flex justify-center gap-10 text-sm font-medium relative"
            onMouseLeave={() => moveToActive()}
          >
            <NavItem label="Home" href="/" onHover={updateIndicator} />
            <NavItem label="About" href="/about" onHover={updateIndicator} />

            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-[var(--brand-blue)]"
              onMouseEnter={(e) => {
                setServicesOpen(true);
                updateIndicator(e.currentTarget);
              }}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                  }`}
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </Link>

            <NavItem
              label="Portfolio"
              href="/portfolio"
              onHover={updateIndicator}
            />

            <NavItem
              label="Careers"
              href="/careers"
              onHover={updateIndicator}
            />

            <NavItem
              label="Blogs"
              href="/blogs"
              onHover={updateIndicator}
            />

            <span
              className="absolute -bottom-2 h-[2px] bg-[var(--brand-blue)] transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
            />
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2 rounded-lg bg-[var(--brand-blue)] text-white"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden relative z-50"
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileServicesOpen(false);
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ================= DESKTOP MEGA MENU ================= */}
        <div
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => {
            setServicesOpen(false);
            moveToActive();
          }}
          className={`
    hidden md:block w-full bg-gray-50 overflow-hidden
    transition-[max-height,opacity] duration-500 ease-in-out
    ${servicesOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}
  `}
        >
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-10">

            {/* ===== DEVELOPMENT ===== */}
            <MegaColumn title="DEVELOPMENT">
              <MegaItem icon={Code} label="Web Development" href="/services/web-development" />
              <MegaItem icon={Smartphone} label="App Development" href="/services/app-development" />
              <MegaItem icon={Plug} label="API Development" href="/services/api-development" />
              <MegaItem icon={Database} label="Custom Software" href="/services/custom-software-development" />
              <MegaItem icon={Cloud} label="SaaS Development" href="/services/saas-product-development" />
            </MegaColumn>

            {/* ===== DESIGN & MARKETING ===== */}
            <MegaColumn title="DESIGN & MARKETING">
              <MegaItem icon={Paintbrush} label="UI / UX Design" href="/services/ui-ux-design" />
              <MegaItem icon={Search} label="SEO Services" href="/services/seo-services" />
              <MegaItem icon={Search} label="Digital Marketing" href="/services/digital-marketing" />

            </MegaColumn>

            {/* ===== CLOUD & INFRA ===== */}
            <MegaColumn title="CLOUD & INFRA">
              <MegaItem icon={Cloud} label="Cloud Solutions" href="/services/cloud-solutions" />
              <MegaItem icon={GitBranch} label="DevOps Services" href="/services/devops-services" />
              <MegaItem icon={Database} label="ERP Solutions" href="/services/erp-solutions" />
              <MegaItem icon={Plug} label="System Integration" href="/services/system-integration" />
              <MegaItem icon={ComponentIcon} label="Software Consulting" href="/services/software-consulting" />
            </MegaColumn>

            {/* ===== DATA, AI & SECURITY ===== */}
            <MegaColumn title="DATA, AI & SECURITY">
              <MegaItem icon={Database} label="Data Analytics & BI" href="/services/data-analytics-business-intelligence" />
              <MegaItem icon={Code} label="AI & Automation" href="/services/ai-automation-solutions" />
              <MegaItem icon={Search} label="Cybersecurity & Compliance" href="/services/cybersecurity-compliance" />
              <MegaItem icon={Plug} label="Maintenance & Support" href="/services/maintenance-support" />
            </MegaColumn>

          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            md:hidden bg-white overflow-hidden transition-all duration-300
            ${mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-6 py-4 flex flex-col space-y-4">
            <MobileLink href="/" label="Home" close={closeAllMobile} />
            <MobileLink href="/about" label="About" close={closeAllMobile} />

            <button
              onClick={() => {
                setMobileServicesOpen(true);
                setMobileOpen(false);
              }}
              className="flex items-center justify-between w-full font-medium"
            >
              <span>Services</span>
              <ArrowRight size={18} />
            </button>

            <MobileLink href="/portfolio" label="Portfolio" close={closeAllMobile} />
            <MobileLink href="/careers" label="Careers" close={closeAllMobile} />
            <MobileLink href="/blogs" label="Blogs" close={closeAllMobile} />

            <Link
              href="/contact"
              onClick={closeAllMobile}
              className="mt-4 px-6 py-2 rounded-lg bg-[var(--brand-blue)] text-white text-center"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* ================= MOBILE SERVICES PANEL ================= */}
        <div
          className={`
            fixed inset-0 z-50 bg-white md:hidden
            transform transition-transform duration-500 ease-in-out
            ${mobileServicesOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="h-16 px-6 flex items-center border-b">
            <button
              onClick={() => setMobileServicesOpen(false)}
              className="flex items-center gap-2 font-medium"
            >
              <ChevronDown className="rotate-90" />
              Back
            </button>
            <span className="ml-4 text-lg font-semibold">Services</span>
          </div>

          <div className="px-6 py-6 flex flex-col gap-5">
            {[
              ["Web Development", "/services/web-development"],
              ["App Development", "/services/app-development"],
              ["SEO Services", "/services/seo-services"],
              ["UI / UX Design", "/services/ui-ux-design"],
              ["Cloud Solutions", "/services/cloud-solutions"],
              ["DevOps Services", "/services/devops-services"],
              ["API Development", "/services/api-development"],
              ["ERP Solutions", "/services/erp-solutions"],
            ].map(([label, href]) => (
              <Link key={href} href={href} onClick={closeAllMobile}>
                {label}
              </Link>
            ))}

            <Link
              href="/services"
              onClick={closeAllMobile}
              className="mt-6 flex items-center gap-2 font-medium text-[var(--brand-blue)]"
            >
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

/* ================= HELPERS ================= */

const NavItem = ({
  href,
  label,
  onHover,
}: {
  href: string;
  label: string;
  onHover: (el: HTMLElement | null) => void;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      ref={ref}
      href={href}
      onMouseEnter={() => onHover(ref.current)}
      className="hover:text-[var(--brand-blue)]"
    >
      {label}
    </Link>
  );
};

const MobileLink = ({
  href,
  label,
  close,
}: {
  href: string;
  label: string;
  close: () => void;
}) => (
  <Link href={href} onClick={close} className="block w-full font-medium">
    {label}
  </Link>
);

const MegaColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <p className="mb-4 text-xs font-semibold tracking-widest text-gray-500">
      {title}
    </p>
    <div className="space-y-3">{children}</div>
  </div>
);

const MegaItem = ({
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
    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[var(--brand-blue)] transition-colors"
  >
    <Icon className="h-5 w-5 text-[var(--brand-blue)]" />
    <span>{label}</span>
  </Link>
);