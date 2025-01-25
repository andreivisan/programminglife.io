import { Github, Twitter, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-background/80 backdrop-blur-lg border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="text-neon-cyan/60 text-sm">
            © 2024 programminglife.io · <Link to="/terms" className="hover:text-neon-cyan">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};