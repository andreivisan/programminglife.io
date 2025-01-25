import { Code2, Brain, Database, Building2 } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Enterprise Web Development",
      description: "Building scalable, modern web applications with cutting-edge technologies and best practices.",
      icon: <Code2 className="w-8 h-8 text-neon-cyan" />,
    },
    {
      title: "AI Tools Development",
      description: "Creating powerful AI solutions using Python and Go for business automation and innovation.",
      icon: <Brain className="w-8 h-8 text-neon-purple" />,
    },
    {
      title: "Systems Design",
      description: "Expert consultation on building robust, scalable system architectures for modern applications.",
      icon: <Database className="w-8 h-8 text-neon-blue" />,
    },
    {
      title: "Software Architecture",
      description: "Strategic guidance on software architecture patterns and best practices for complex systems.",
      icon: <Building2 className="w-8 h-8 text-neon-cyan" />,
    },
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-mint/60 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive solutions for your technology needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 backdrop-blur-lg border border-white/10 rounded-lg hover:border-neon-cyan/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-orbitron text-white mb-3">{service.title}</h3>
              <p className="text-mint/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};