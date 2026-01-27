import { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blogs & Insights | Genius Technology",
  description: "Stay updated with the latest technology insights, trends, and best practices from our expert developers and consultants.",
  keywords: "tech blogs, software development insights, technology trends, IT solutions, digital transformation",
};

export default function BlogsPage() {
  return <BlogsClient />;
}

