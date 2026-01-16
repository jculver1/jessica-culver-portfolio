import { Linkedin, Mail, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col lg:flex-row">
      {/* Left Half - Name & Image */}
      <div className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center p-8 lg:p-16 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-vibrant rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-glow">
              <img 
                src={profilePhoto} 
                alt="Profile photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name */}
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gradient tracking-tight">
              Your Name
            </h1>
            <p className="mt-3 text-lg lg:text-xl text-muted-foreground font-body font-light tracking-wide">
              Creative Developer
            </p>
          </div>
        </div>
      </div>

      {/* Right Half - About & Contact */}
      <div className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col justify-center p-8 lg:p-16 xl:p-24">
        <div className="max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-sm font-display font-semibold text-primary uppercase tracking-widest mb-6">
              About Me
            </h2>
            <p className="text-lg lg:text-xl text-foreground/90 font-body font-light leading-relaxed">
              I'm a passionate developer and designer who loves crafting beautiful digital experiences. 
              With a keen eye for detail and a love for clean code, I transform ideas into elegant, 
              functional solutions. When I'm not coding, you'll find me exploring new technologies 
              and pushing creative boundaries.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-sm font-display font-semibold text-primary uppercase tracking-widest mb-6">
              Get In Touch
            </h2>
            <div className="flex flex-wrap gap-4">
              <ContactLink 
                href="https://linkedin.com/in/yourprofile" 
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <ContactLink 
                href="mailto:hello@example.com" 
                icon={<Mail className="w-5 h-5" />}
                label="Email"
              />
              <ContactLink 
                href="https://github.com/yourprofile" 
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const ContactLink = ({ href, icon, label }: ContactLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
  >
    <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
      {icon}
    </span>
    <span className="font-body font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
      {label}
    </span>
  </a>
);

export default Index;
