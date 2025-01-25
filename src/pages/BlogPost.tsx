import { Navbar } from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";

const blogMetadata = {
  1: {
    title: "Getting Started with Modern Web Development",
    date: "2024-02-15",
    readTime: "5 min read",
  },
  2: {
    title: "Building Scalable AI Systems with Python",
    date: "2024-02-10",
    readTime: "8 min read",
  },
  3: {
    title: "System Design Best Practices",
    date: "2024-02-05",
    readTime: "6 min read",
  },
} as const;

const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState<string>("");
  
  const postId = id ? parseInt(id) : null;
  const post = postId && postId in blogMetadata ? blogMetadata[postId as keyof typeof blogMetadata] : null;

  useEffect(() => {
    const fetchContent = async () => {
      if (postId) {
        try {
          const response = await fetch(`/src/content/blog-${postId}.md`);
          const text = await response.text();
          setContent(text);
        } catch (error) {
          console.error('Error loading blog post:', error);
          setContent('# Error loading blog post');
        }
      }
    };

    fetchContent();
  }, [postId]);

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
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;