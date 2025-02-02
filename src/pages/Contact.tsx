import { Navbar } from "@/components/Navbar";
import { LampContainer } from "@/components/ui/lamp";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Youtube, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://github.com/andreivisan",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://twitter.com/andreivisan",
    },
    {
      title: "YouTube",
      icon: <Youtube className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://www.youtube.com/channel/UCKQwvIlLeqy8qKC4tKgIUTw",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://linkedin.com/in/andreivisan",
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "mailto:your.email@example.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center relative">
        <LampContainer className="w-full max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Let's Build Something <br /> Amazing Together
          </motion.h1>
        </LampContainer>
        
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xl">
          <Dock className="items-end pb-3">
            {socialLinks.map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
                  <DockLabel>{item.title}</DockLabel>
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