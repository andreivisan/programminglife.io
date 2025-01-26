import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ServicesSection } from "./ServicesSection";
import { MentorshipSection } from "./MentorshipSection";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start hero-gradient pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 animate-fade-up bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent">
          Level Up Your Tech Career
        </h1>
        <p className="text-xl md:text-2xl text-mint/80 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Expert mentorship and freelancing services to accelerate your growth in tech.
          From web development to AI, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/80 font-orbitron">
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button asChild size="lg" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-orbitron">
            <a href="#mentorship-section">
              View Services
            </a>
          </Button>
        </div>
      </div>
      <MentorshipSection />
      <ServicesSection />
    </div>
  );
};