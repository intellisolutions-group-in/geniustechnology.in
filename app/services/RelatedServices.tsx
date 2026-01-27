import Link from "next/link";

type Service = {
  title: string;
  desc: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    title: "Web Development",
    desc: "Scalable and secure web applications built for growth.",
    href: "/services/web-development",
  },
  {
    title: "App Development",
    desc: "High-performance mobile apps for iOS and Android.",
    href: "/services/app-development",
  },
  {
    title: "UI / UX Design",
    desc: "User-centric design that improves engagement.",
    href: "/services/ui-ux-design",
  },
  {
    title: "SEO Services",
    desc: "Increase visibility and drive organic growth.",
    href: "/services/seo-services",
  },
  {
    title: "Cloud Solutions",
    desc: "Secure and scalable cloud infrastructure.",
    href: "/services/cloud-solutions",
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing support to keep systems stable and secure.",
    href: "/services/maintenance-support",
  },
];

export default function RelatedServices({
  exclude,
}: {
  exclude?: string;
}) {
  return (
    <section className="w-full bg-gray-50 py-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.7s_forwards]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black">
          Related Services
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Explore other services that complement your digital requirements and
          help you scale faster.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.filter((s) => s.href !== exclude)
            .slice(0, 3)
            .map((service) => (
              <RelatedServiceCard key={service.href} {...service} />
            ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServiceCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        relative rounded-2xl overflow-hidden
        p-8 border border-gray-200 bg-white
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      {/* Accent line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--brand-blue)] to-transparent" />

      <h3 className="text-lg font-semibold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>

      <span className="mt-6 inline-block text-sm font-medium text-[var(--brand-blue)]">
        Learn more →
      </span>
    </Link>
  );
}