import { GraduationCap, BookOpen, Brain, UserPlus } from "lucide-react";

export const MentorshipSection = () => {
  const mentorshipServices = [
    {
      title: "Career Guidance",
      description: "Get personalized career advice and guidance to accelerate your growth in tech.",
      icon: <GraduationCap className="w-8 h-8 text-neon-purple" />,
    },
    {
      title: "Technical Learning",
      description: "Master new technologies quickly with structured learning paths and hands-on practice.",
      icon: <BookOpen className="w-8 h-8 text-neon-blue" />,
    },
    {
      title: "Skill Development",
      description: "Develop essential technical and soft skills needed for career advancement.",
      icon: <Brain className="w-8 h-8 text-neon-cyan" />,
    },
    {
      title: "1-on-1 Coaching",
      description: "Personalized mentoring sessions focused on your specific goals and challenges.",
      icon: <UserPlus className="w-8 h-8 text-neon-purple" />,
    },
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
          Mentorship Programs
        </h2>
        <p className="text-mint/60 text-center mb-12 max-w-2xl mx-auto">
          Accelerate your tech career with personalized guidance and support
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentorshipServices.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 backdrop-blur-lg border border-white/10 rounded-lg hover:border-neon-purple/50 transition-all duration-300"
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