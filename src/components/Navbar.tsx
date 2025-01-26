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
            <Link to="/" className="text-xl font-bold font-orbitron text-neon-cyan hover:text-neon-cyan/80 transition-colors">
              programminglife.io
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/blog" className="font-orbitron text-mint hover:text-mint-muted transition-colors">
              Blog
            </Link>
            <Link to="/pricing" className="font-orbitron text-mint hover:text-mint-muted transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="font-orbitron text-mint hover:text-mint-muted transition-colors">
              Contact
            </Link>
            <Button variant="secondary" className="bg-neon-purple hover:bg-neon-purple/80 font-orbitron">
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
              className="block px-3 py-2 font-orbitron text-mint hover:text-mint-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 font-orbitron text-mint hover:text-mint-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 font-orbitron text-mint hover:text-mint-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-neon-purple hover:bg-neon-purple/80 font-orbitron">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};