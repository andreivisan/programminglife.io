import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold nav-link">
              programminglife.io
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
            <Button variant="secondary" className="bg-secondary hover:bg-secondary/80">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mint hover:text-mint-muted"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-lg">
            <Link
              to="/blog"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-secondary hover:bg-secondary/80">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};