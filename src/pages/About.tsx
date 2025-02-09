
import { Navbar } from "@/components/Navbar";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Youtube, Twitter } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

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
        <div className="w-full max-w-7xl mx-auto relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
          
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
              <Button 
                asChild
                className="mt-6 w-fit py-3 px-6 rounded-lg font-orbitron text-neon-cyan border border-neon-cyan bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-neon-cyan hover:border-transparent hover:text-white transition-all duration-300"
              >
                <a 
                  href="https://andreivisan.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit My Website
                </a>
              </Button>
            </div>

            {/* Right content */}
            <div className="flex-1 relative flex items-center justify-center">
              <div className="relative w-full h-[600px]">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-40">
                  <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#22D3EE"
                    speed={0.5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
