"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import {
  ArrowRight,
  Calendar,
  Clock,
  ChevronRight,
  TrendingUp,
  X,
  User,
  Tag,
} from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-ai-enterprise-software-development",
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way enterprises build, deploy, and maintain software solutions for modern businesses.",
    category: "Artificial Intelligence",
    author: "Rahul Patel",
    authorRole: "Senior AI Engineer",
    date: "Dec 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    slug: "cloud-migration-strategies-legacy-systems",
    title: "Cloud Migration Strategies for Legacy Systems",
    excerpt: "A comprehensive guide to modernizing your legacy applications and successfully migrating to cloud infrastructure without disruption.",
    category: "Cloud Computing",
    author: "Priya Sharma",
    authorRole: "Cloud Architecture Lead",
    date: "Dec 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    slug: "cybersecurity-best-practices-modern-web-applications",
    title: "Cybersecurity Best Practices for Modern Web Applications",
    excerpt: "Learn essential security measures to protect your web applications from emerging threats and vulnerabilities in the digital landscape.",
    category: "Cybersecurity",
    author: "Amit Kumar",
    authorRole: "Security Consultant",
    date: "Dec 5, 2024",
    readTime: "10 min read",
  },
  {
    id: 4,
    slug: "microservices-architecture-benefits-implementation-guide",
    title: "Microservices Architecture: Benefits and Implementation Guide",
    excerpt: "Discover how microservices can improve scalability and maintainability in complex software systems for enterprise applications.",
    category: "Software Architecture",
    author: "Vikram Singh",
    authorRole: "Principal Architect",
    date: "Nov 28, 2024",
    readTime: "7 min read",
  },
  {
    id: 5,
    slug: "digital-transformation-trends-2025",
    title: "Digital Transformation Trends Shaping 2025",
    excerpt: "Key technology trends that are driving digital transformation across industries and how your business can leverage them effectively.",
    category: "Digital Transformation",
    author: "Neha Gupta",
    authorRole: "Digital Strategy Director",
    date: "Nov 20, 2024",
    readTime: "5 min read",
  },
  {
    id: 6,
    slug: "optimizing-react-performance-tips-techniques",
    title: "Optimizing React Performance: Tips and Techniques",
    excerpt: "Practical strategies to improve your React application performance and deliver better user experiences across all devices.",
    category: "Web Development",
    author: "Rahul Patel",
    authorRole: "Senior Frontend Developer",
    date: "Nov 15, 2024",
    readTime: "9 min read",
  },
];

const categories = [
  { name: "All Posts", count: 6 },
  { name: "Artificial Intelligence", count: 1 },
  { name: "Cloud Computing", count: 1 },
  { name: "Cybersecurity", count: 1 },
  { name: "Software Architecture", count: 1 },
  { name: "Digital Transformation", count: 1 },
  { name: "Web Development", count: 1 },
];

export default function BlogsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts =
    selectedCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <PageHero
        category="Our Blog"
        title="Insights & Perspectives |on Technology"
        description="Stay informed with the latest trends, best practices, and expert insights from our team of technology professionals."
      />

      {/* FEATURED POST */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-blue-700" />
            <div className="absolute inset-0 bg-[url('/images/hero-illustration.svg')] opacity-10 bg-cover bg-center" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  Featured Post
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href={`/blogs/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--brand-blue)] font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES & POSTS */}
      <section className="w-full py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* CATEGORY FILTER */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex gap-3 min-w-max pb-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${selectedCategory === category.name
                    ? "bg-[var(--brand-blue)] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {category.name}
                  <span className="ml-2 opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* BLOG POSTS GRID */}
          <div>
            {selectedCategory !== "All Posts" && (
              <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">
                  Showing: <strong>{selectedCategory}</strong>
                </span>
                <button
                  onClick={() => setSelectedCategory("All Posts")}
                  className="ml-auto text-sm text-[var(--brand-blue)] hover:underline flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear filter
                </button>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Tag className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    No posts found
                  </h3>
                  <p className="text-gray-600">
                    There are no posts in this category yet.
                  </p>
                  <button
                    onClick={() => setSelectedCategory("All Posts")}
                    className="mt-4 px-6 py-2 bg-[var(--brand-blue)] text-white rounded-lg hover:bg-[var(--brand-blue-dark)] transition-colors"
                  >
                    View all posts
                  </button>
                </div>
              )}
            </div>


          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Have a Topic You'd Like Us to Cover?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We're always looking for new topics to explore. Let us know what
            interests you and we'll create content around it.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3 rounded-lg bg-[var(--brand-blue)] text-white font-medium hover:bg-[var(--brand-blue-dark)] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <article className="group h-full bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[var(--brand-blue)] hover:shadow-lg transition-all duration-300 cursor-pointer p-6">
        <span className="inline-block px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium rounded-full mb-4">
          {post.category}
        </span>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-[var(--brand-blue)] transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-end pt-4 border-t border-gray-100">
          <span className="flex items-center gap-2 text-[var(--brand-blue)] font-medium text-sm group-hover:gap-3 transition-all">
            Read More
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  );
};

