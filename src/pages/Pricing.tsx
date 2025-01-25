import { Navbar } from "@/components/Navbar";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const freelancingPlans = [
    {
      name: "Basic Project",
      price: "$5,000",
      description: "Perfect for small to medium-sized projects",
      features: [
        "Project scoping and planning",
        "Regular progress updates",
        "Code documentation",
        "30-day support after delivery",
      ],
    },
    {
      name: "Professional",
      price: "$10,000",
      description: "Ideal for complex enterprise projects",
      features: [
        "Everything in Basic",
        "Architecture planning",
        "Performance optimization",
        "3 months of support",
        "Source code ownership",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale enterprise solutions",
      features: [
        "Everything in Professional",
        "Dedicated project manager",
        "24/7 priority support",
        "Custom feature development",
        "Long-term maintenance",
      ],
    },
  ];

  const mentorshipPlans = [
    {
      name: "Basic",
      price: "$200/month",
      description: "Start your learning journey",
      features: [
        "2 mentoring sessions/month",
        "Email support",
        "Learning resources",
        "Career guidance",
      ],
    },
    {
      name: "Growth",
      price: "$400/month",
      description: "Accelerate your progress",
      features: [
        "4 mentoring sessions/month",
        "Priority email support",
        "Personalized learning path",
        "Project reviews",
        "Interview preparation",
      ],
    },
    {
      name: "Professional",
      price: "$800/month",
      description: "Maximum support and guidance",
      features: [
        "8 mentoring sessions/month",
        "24/7 chat support",
        "Custom curriculum",
        "Hands-on project collaboration",
        "Job search assistance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-orbitron mb-16 text-center bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
          Pricing Plans
        </h1>

        <section className="mb-20">
          <h2 className="text-3xl font-orbitron mb-8 text-center text-white">Freelancing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freelancingPlans.map((plan, index) => (
              <div
                key={index}
                className="glass-card p-6 flex flex-col hover:border-neon-cyan/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-orbitron text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-neon-purple mb-2">{plan.price}</div>
                <p className="text-mint/60 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-neon-cyan mr-2 mt-0.5" />
                      <span className="text-mint/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-lg font-orbitron text-neon-cyan border border-neon-cyan bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-neon-cyan hover:border-transparent hover:text-white transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-orbitron mb-8 text-center text-white">Mentorship Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentorshipPlans.map((plan, index) => (
              <div
                key={index}
                className="glass-card p-6 flex flex-col hover:border-neon-purple/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-orbitron text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-neon-cyan mb-2">{plan.price}</div>
                <p className="text-mint/60 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-neon-purple mr-2 mt-0.5" />
                      <span className="text-mint/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-lg font-orbitron text-neon-cyan border border-neon-cyan bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-neon-cyan hover:border-transparent hover:text-white transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;