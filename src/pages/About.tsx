
import { Navbar } from "@/components/Navbar";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Github, Linkedin, Mail, Youtube, Twitter } from "lucide-react";

const About = () => {
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
      href: "mailto:contact@programminglife.io",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background hero-gradient">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-16">
        <Card className="w-full max-w-7xl mx-auto bg-black/[0.96] relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          
          <div className="flex flex-col md:flex-row h-full min-h-[500px]">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-b from-mint to-mint-muted">
                Hi, I am Andrei
              </h1>
              <h2 className="mt-2 text-2xl md:text-3xl font-orbitron text-mint-muted">
                I code and create stuff.
              </h2>
              <p className="mt-4 text-mint/80 max-w-lg leading-relaxed">
                I'm a software engineer and YouTube content creator based in Switzerland. 
                I have great interest in full-stack development, content creation, 
                learning performance and learning methodologies and I love helping 
                others learn better.
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>

        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xl z-50">
          <Dock className="items-end pb-3 glass-card bg-background/20 backdrop-blur-xl border-neon-cyan hover:border-neon-purple transition-colors duration-300">
            {socialLinks.map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                <DockItem className="aspect-square rounded-full bg-background/20 backdrop-blur-xl border border-white/10 hover:border-neon-cyan/50 transition-colors duration-300">
                  <DockLabel className="bg-background/80 border-neon-cyan text-mint">
                    {item.title}
                  </DockLabel>
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

export default About;
