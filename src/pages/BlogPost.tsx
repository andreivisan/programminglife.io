import { Navbar } from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useEffect, useState } from "react";

// Function to extract content without frontmatter
const extractContent = (markdown: string) => {
  const frontmatterRegex = /^---\n[\s\S]*?\n---\n*/;
  return markdown.replace(frontmatterRegex, '');
};

const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState<string>("");
  const [metadata, setMetadata] = useState<{
    title: string;
    date: string;
    readTime: string;
  } | null>(null);
  
  const postId = id ? parseInt(id) : null;

  useEffect(() => {
    const fetchContent = async () => {
      if (postId) {
        try {
          const module = await import(`@/content/blog-${postId}.md?raw`);
          const rawContent = module.default;
          
          // Extract frontmatter
          const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
          const match = rawContent.match(frontmatterRegex);
          
          if (match) {
            const frontmatter = match[1];
            const data: Record<string, string> = {};
            
            frontmatter.split('\n').forEach(line => {
              const [key, ...valueParts] = line.split(':');
              if (key && valueParts.length) {
                data[key.trim()] = valueParts.join(':').replace(/^[\s"]+|[\s"]+$/g, '');
              }
            });
            
            setMetadata({
              title: data.title,
              date: data.date,
              readTime: data.readTime
            });
          }
          
          // Set content without frontmatter
          setContent(extractContent(rawContent));
        } catch (error) {
          console.error('Error loading blog post:', error);
          setContent('# Error loading blog post');
        }
      }
    };

    fetchContent();
  }, [postId]);

  if (!metadata) {
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
            {metadata.title}
          </h1>
          <div className="flex gap-4 text-sm text-mint/40 mb-8">
            <span>{metadata.date}</span>
            <span>{metadata.readTime}</span>
          </div>
          <div className="prose prose-lg prose-invert max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;