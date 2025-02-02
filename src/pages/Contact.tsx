import { Navbar } from "@/components/Navbar";
import { LampContainer } from "@/components/ui/lamp";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Youtube, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-mint hover:text-mint-muted" />,
      href: "https://github.com/andreivisan",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-mint hover:text-mint-muted" />,
      href: "https://twitter.com/andreivisan",
    },
    {
      title: "YouTube",
      icon: <Youtube className="h-full w-full text-mint hover:text-mint-muted" />,
      href: "https://www.youtube.com/channel/UCKQwvIlLeqy8qKC4tKgIUTw",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-mint hover:text-mint-muted" />,
      href: "https://linkedin.com/in/andreivisan",
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-mint hover:text-mint-muted" />,
      href: "mailto:your.email@example.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-[100vw] overflow-hidden">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-mint to-lila py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Let's Build Something <br /> Amazing Together
            </motion.h1>
          </LampContainer>
        </div>
        
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xl z-50">
          <Dock className="items-end pb-3 glass-card bg-background/20 backdrop-blur-xl border-neon-cyan hover:border-neon-purple transition-colors duration-300">
            {socialLinks.map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                <DockItem className="aspect-square rounded-full bg-background/20 backdrop-blur-xl border border-white/10 hover:border-neon-cyan/50 transition-colors duration-300">
                  <DockLabel className="bg-background/80 border-neon-cyan text-mint">{item.title}</DockLabel>
                  <DockIcon>{item.icon}</DockIcon>
                </DockItem>
              </a>
            ))}
          </Dock>
        </div>
      </main>
    </div>
  );
};

export default Contact;