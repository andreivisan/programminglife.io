import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

// Simple function to parse frontmatter
const parseFrontmatter = (content: string) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatter = match[1];
  const data: Record<string, string> = {};
  
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      // Remove quotes and trim whitespace
      data[key.trim()] = valueParts.join(':').replace(/^[\s"]+|[\s"]+$/g, '');
    }
  });
  
  return data;
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadBlogPosts = async () => {
      const posts: BlogPost[] = [];
      
      // Get all markdown files from the content directory
      const modules = import.meta.glob('@/content/blog-*.md', { 
        query: '?raw',
        import: 'default'
      });
      
      for (const [path, loader] of Object.entries(modules)) {
        try {
          const content = await loader() as string;
          const data = parseFrontmatter(content);
          
          if (!data) {
            continue;
          }
          
          // Extract the blog ID from the filename (e.g., "blog-1.md" -> "1")
          const id = parseInt(path.match(/blog-(\d+)\.md$/)?.[1] || "0");
          
          posts.push({
            id,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            readTime: data.readTime
          });
        } catch (error) {
          console.error(`Error loading blog post from ${path}:`, error);
        }
      }
      
      // Sort posts by date (newest first)
      posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setBlogPosts(posts);
    };

    loadBlogPosts();
  }, []);

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