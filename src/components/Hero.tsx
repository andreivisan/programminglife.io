import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-up">
          Level Up Your Tech Career
        </h1>
        <p className="text-xl md:text-2xl text-mint/80 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Expert mentorship and freelancing services to accelerate your growth in tech.
          From web development to AI, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-primary hover:bg-primary/80">
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-mint/20 hover:bg-mint/5">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
};