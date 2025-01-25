import { Navbar } from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // This would normally come from an API
  const blogPosts = {
    1: {
      title: "Getting Started with Modern Web Development",
      content: `Modern web development has evolved significantly over the past few years. With the advent of new frameworks, tools, and best practices, it's crucial to stay up-to-date with the latest trends and technologies.

In this article, we'll explore the fundamental concepts and tools that every modern web developer should know. From React and TypeScript to containerization and cloud deployment, we'll cover everything you need to get started.

Key topics we'll discuss:
- Modern JavaScript and TypeScript
- React and its ecosystem
- Build tools and bundlers
- Testing and deployment strategies
- Performance optimization techniques`,
      date: "2024-02-15",
      readTime: "5 min read",
    },
    2: {
      title: "Building Scalable AI Systems with Python",
      content: `Artificial Intelligence has become an integral part of modern software systems. Building scalable AI solutions requires careful consideration of architecture, data processing, and deployment strategies.

This guide will walk you through the process of building production-ready AI systems using Python. We'll cover best practices, common pitfalls, and optimization techniques.

Topics covered:
- AI system architecture
- Data processing pipelines
- Model training and evaluation
- Deployment and scaling
- Monitoring and maintenance`,
      date: "2024-02-10",
      readTime: "8 min read",
    },
    3: {
      title: "System Design Best Practices",
      content: `Designing scalable and maintainable systems is crucial for modern applications. This article explores key principles and patterns that help create robust system architectures.

We'll dive deep into various aspects of system design, from high-level architecture to specific implementation details.

Key areas we'll explore:
- Scalability patterns
- Distributed systems
- Data storage solutions
- Caching strategies
- Message queues and event-driven architectures`,
      date: "2024-02-05",
      readTime: "6 min read",
    },
  } as const;

  const postId = id ? parseInt(id) : null;
  const post = postId && postId in blogPosts ? blogPosts[postId as keyof typeof blogPosts] : null;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-12">
        <Link to="/blog" className="inline-flex items-center text-mint hover:text-mint-muted mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        <article>
          <h1 className="text-3xl md:text-4xl font-orbitron mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex gap-4 text-sm text-mint/40 mb-8">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <div className="prose prose-invert prose-mint max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-mint/80 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;