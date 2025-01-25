import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Modern Web Development",
      excerpt: "Learn the essential tools and technologies for modern web development...",
      date: "2024-02-15",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Scalable AI Systems with Python",
      excerpt: "A comprehensive guide to developing AI systems that can scale...",
      date: "2024-02-10",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "System Design Best Practices",
      excerpt: "Essential principles and patterns for designing robust systems...",
      date: "2024-02-05",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-orbitron mb-8 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
          Blog
        </h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="glass-card p-6 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-orbitron text-white mb-3">{post.title}</h2>
              <p className="text-mint/60 mb-4">{post.excerpt}</p>
              <div className="flex gap-4 text-sm text-mint/40">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;