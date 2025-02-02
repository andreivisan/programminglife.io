import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LampContainer } from "@/components/ui/lamp";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Youtube, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://github.com/yourusername",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://twitter.com/yourusername",
    },
    {
      title: "YouTube",
      icon: <Youtube className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://youtube.com/@yourusername",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://linkedin.com/in/yourusername",
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
      <main className="flex-grow">
        <LampContainer>
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
          
          <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2">
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
        </LampContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;