"use client";

import { useState } from "react";
import ThankYouModal from "@/components/ui/ThankYouModal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import PageHero from "@/components/ui/PageHero";
import {
  TrendingUp,
  Users,
  Award,
  Gift,
  Building2,
} from "lucide-react";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  responsibilities: string[];
  skills: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Vadodara, India",
    employmentType: "Full-time",
    experience: "2-4 Years",
    responsibilities: [
      "Develop responsive web applications using React.js and Next.js",
      "Collaborate with UI/UX designers to implement pixel-perfect designs",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and maintain code quality standards",
    ],
    skills: ["React.js / Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Vadodara, India",
    employmentType: "Full-time",
    experience: "3-5 Years",
    responsibilities: [
      "Design and develop scalable server-side applications",
      "Build efficient RESTful APIs and microservices",
      "Implement database design and optimization strategies",
      "Ensure security and performance best practices",
    ],
    skills: ["Node.js / Python", "PostgreSQL / MongoDB", "Docker", "AWS / Cloud"],
  },
  {
    id: 3,
    title: "UI / UX Designer",
    department: "Design",
    location: "Vadodara, India / Hybrid",
    employmentType: "Full-time",
    experience: "2-5 Years",
    responsibilities: [
      "Create intuitive user flows and wireframes for web and mobile apps",
      "Design high-fidelity prototypes and visual designs",
      "Conduct user research and analyze user behavior",
      "Collaborate with developers to ensure design implementation",
    ],
    skills: ["Figma / Adobe XD", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Vadodara, India",
    employmentType: "Full-time",
    experience: "1-3 Years",
    responsibilities: [
      "Plan and execute digital marketing campaigns across channels",
      "Manage social media presence and content strategy",
      "Analyze campaign performance and optimize for better results",
      "Implement SEO strategies to improve organic search rankings",
    ],
    skills: ["SEO / SEM", "Social Media Marketing", "Google Analytics", "Content Strategy"],
  },
  {
    id: 5,
    title: "QA Engineer",
    department: "Quality Assurance",
    location: "Vadodara, India / Hybrid",
    employmentType: "Full-time",
    experience: "2-4 Years",
    responsibilities: [
      "Develop and execute test plans and test cases",
      "Perform manual and automated testing for web applications",
      "Identify, document, and track software defects",
      "Collaborate with developers to ensure quality deliverables",
    ],
    skills: ["Selenium / Cypress", "API Testing", "JIRA", "Performance Testing"],
  },
  {
    id: 6,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Vadodara, India",
    employmentType: "Full-time",
    experience: "3-6 Years",
    responsibilities: [
      "Build end-to-end web applications from concept to deployment",
      "Develop both frontend and backend components",
      "Integrate third-party APIs and services",
      "Mentor junior developers and contribute to technical decisions",
    ],
    skills: ["React.js / Node.js", "Database Design", "DevOps Basics", "System Architecture"],
  },
];

export default function CareersClient() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (jobId: number) => {
    setExpandedCards((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const handleApply = (job: Job) => {
    setSelectedJob(job);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fake API call - intentionally ignored
      await fetch("https://geniustechnology.in/api/career-application", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      });
    } catch {
      // IGNORE ALL ERRORS (MANDATORY BY SPEC)
    } finally {
      setTimeout(() => {
        setLoading(false);
        setSelectedJob(null);
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();
      }, 1000);
    }
  };

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <PageHero
        category="Careers"
        title="Build Your Career |With Genius Technology"
        description="Join a team focused on building reliable, scalable, and meaningful digital solutions for modern businesses."
      />

      {/* WHY CHOOSE US / CAREER GROWTH / PERKS */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="mb-4 text-sm uppercase tracking-wide text-[var(--brand-blue)]">
              Why Join Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">
              Build Your Future With a Team That Values Growth
            </h2>
          </div>

          {/* Three Main Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Why Choose Us Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[var(--brand-blue)]/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[var(--brand-blue)]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Why Choose Us</h3>
              <p className="text-gray-600 mb-6">
                Work on challenging projects with cutting-edge technologies. We foster
                innovation, collaboration, and continuous learning in a supportive environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[var(--brand-blue)]" />
                  Innovative project portfolio
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[var(--brand-blue)]" />
                  Collaborative team culture
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[var(--brand-blue)]" />
                  Client-focused approach
                </li>
              </ul>
            </div>

            {/* Career Growth Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Career Growth</h3>
              <p className="text-gray-600 mb-6">
                Your growth is our priority. We provide clear career paths, skill
                development opportunities, and mentorship programs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Structured career progression
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Regular performance reviews
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Internal mobility options
                </li>
              </ul>
            </div>

            {/* Perks & Benefits Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <Gift className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Perks & Benefits</h3>
              <p className="text-gray-600 mb-6">
                Enjoy a comprehensive benefits package designed to support your
                well-being and work-life balance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  Competitive salary packages
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  Health insurance coverage
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  Flexible working arrangements
                </li>
              </ul>
            </div>
          </div>

          {/* More Benefits You Will Love */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3">
                More Benefits You Will Love
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We go beyond the basics to ensure you have everything you need to thrive
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <BenefitCard
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="Flexible Hours"
                description="Work when you're most productive"
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
              />
              <BenefitCard
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                }
                label="Health Insurance"
                description="Comprehensive coverage for you"
                iconBg="bg-red-100"
                iconColor="text-red-600"
              />
              <BenefitCard
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                }
                label="Learning Budget"
                description="Grow your skills with us"
                iconBg="bg-purple-100"
                iconColor="text-purple-600"
              />
              <BenefitCard
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                }
                label="Remote Work"
                description="Work from anywhere you like"
                iconBg="bg-green-100"
                iconColor="text-green-600"
              />
              <BenefitCard
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  </svg>
                }
                label="Free Snacks & Drinks"
                description="Fuel your day on us"
                iconBg="bg-amber-100"
                iconColor="text-amber-600"
              />
              <BenefitCard
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                }
                label="Modern Workspace"
                description="State-of-the-art office space"
                iconBg="bg-indigo-100"
                iconColor="text-indigo-600"
              />
              <BenefitCard
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                }
                label="Performance Bonus"
                description="Rewarded for your success"
                iconBg="bg-yellow-100"
                iconColor="text-yellow-600"
              />
              <BenefitCard
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                }
                label="Job Security"
                description="Stable and growing company"
                iconBg="bg-teal-100"
                iconColor="text-teal-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid gap-6">
          {jobs.map((job) => {
            const isExpanded = expandedCards.includes(job.id);

            return (
              <div
                key={job.id}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Card Header */}
                <div className="p-6 cursor-pointer" onClick={() => toggleCard(job.id)}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Job Title & Department */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-[var(--brand-dark)]">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-[var(--brand-light)] text-[var(--brand-blue)] text-xs font-medium rounded-full">
                          {job.department}
                        </span>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.employmentType}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(job);
                        }}
                        className="px-6 py-3 rounded-xl bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5"
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(job.id);
                        }}
                        className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-200"
                      >
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--brand-dark)] mb-3 flex items-center gap-2">
                          <svg className="w-4 h-4 text-[var(--brand-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] mt-2 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--brand-dark)] mb-3 flex items-center gap-2">
                          <svg className="w-4 h-4 text-[var(--brand-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Required Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-[var(--brand-light)] text-[var(--brand-gray)] text-sm rounded-lg">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* APPLY MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative animate-fadeUp">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-2">Apply for {selectedJob.title}</h3>
            <p className="text-sm text-gray-500 mb-6">
              {selectedJob.department} - {selectedJob.location}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Full Name" required />
              <Input label="Email" type="email" required />
              <Input label="Phone" required />
              <Input label="Current Location" required />

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--brand-dark)]">
                  Resume (PDF/DOC, max 5MB)
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[var(--brand-light)] file:text-[var(--brand-blue)] hover:file:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--brand-dark)]">
                  Cover Letter (optional)
                </label>
                <textarea
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-all duration-200 flex justify-center shadow-lg shadow-blue-200"
              >
                {loading ? <LoadingSpinner /> : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      <ThankYouModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Thank you! Our team will review your application and reach you soon."
      />
    </main>
  );
}

// HELPERS

function Input({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-[var(--brand-dark)]">{label}</label>
      <input
        type={type}
        required={required}
        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all"
      />
    </div>
  );
}

function BenefitCard({
  icon,
  label,
  description,
  iconBg,
  iconColor = "text-black",
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
  iconBg: string;
  iconColor?: string;
}) {
  return (
    <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--brand-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className={`relative z-10 w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-4 group-hover:bg-white/20 transition-transform duration-300 group-hover:scale-110`}>
        <span className={`${iconColor} group-hover:text-white w-8 h-8 block transition-colors duration-300`}>
          {icon}
        </span>
      </div>
      <h4 className="relative z-10 text-black font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-white">{label}</h4>
      <p className="relative z-10 text-gray-600 text-sm transition-colors duration-300 group-hover:text-white/90">{description}</p>
    </div>
  );
}

