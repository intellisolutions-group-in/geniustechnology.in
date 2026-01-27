"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 50,
    suffix: "+",
    label: "Active Clients",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Industry Experience",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support & Maintenance",
  },
];

const TrustMetrics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  /* ===== Trigger when section enters ===== */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--brand-blue)]/5 py-20"
    >
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {metrics.map((metric, index) => (
            <MetricItem
              key={metric.label}
              metric={metric}
              start={start}
              delay={index * 120}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;

/* ===== Metric Item ===== */

const MetricItem = ({
  metric,
  start,
  delay,
}: {
  metric: {
    value: number;
    suffix: string;
    label: string;
  };
  start: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(metric.value / 30);

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          current = metric.value;
          clearInterval(interval);
        }
        setCount(current);
      }, 25);
    }, delay);

    return () => clearTimeout(timer);
  }, [start, metric.value, delay]);

  return (
    <div
      className={`
        transform-gpu
        transition-all duration-700 ease-out
        ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="text-4xl sm:text-5xl font-semibold text-[var(--brand-blue)]">
        {count}
        {metric.suffix}
      </div>
      <p className="mt-3 text-sm font-medium text-gray-700">
        {metric.label}
      </p>
    </div>
  );
};