import { Linkedin, Mail, Github } from "lucide-react";
import profilePhoto from "@/assets/profile_photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col lg:flex-row">
      {/* Left Half - Name & Image */}
      <div className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center p-2 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Profile Image */}
          <div className="relative group">
            {/* <div className="absolute -inset-1 bg-gradient-vibrant rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 " /> */}
            <div className="absolute -inset-1 bg-gradient-vibrant rounded-full blur-md opacity-75 " />
            <div className="relative w-64 h-84 rounded-full overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Profile photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name */}
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight animate-color-gradient-sync">
              Jessica Culver
            </h1>
            <p className="mt-3 text-lg lg:text-xl text-muted-foreground font-body font-light tracking-wide animate-color-gradient-sync">
              Software Engineer. Frontend-Focused.
            </p>
          </div>
        </div>
      </div>

      {/* Right Half - About & Contact */}
      <div className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center p-16 ">
        <div>
          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-lg font-display font-semibold uppercase tracking-widest mb-6 text-foreground ">
              About Me
            </h2>
            <p className="text-lg lg:text-xl font-body font-light leading-relaxed text-primary">
              Hi, I’m <span className="font-semibold animate-color-gradient-sync">Jessica 👋</span><br/><br/> 
              I’m a software engineer with 6+ years of experience designing and building scalable applications—from backend systems and APIs to polished, user-facing features.
              I love turning ideas into products people actually enjoy using—whether that means refining a user experience, untangling complex logic, or shipping features end-to-end. 
              I care about writing thoughtful code, collaborating with others, and continuously learning new technologies.<br/><br/>
              Currently, I’m exploring new opportunities. If you’re hiring, looking to partner on a project, build something interesting, or just trade ideas, feel free to reach out!
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-display font-semibold text-foreground uppercase tracking-widest mb-6">
              Get In Touch
            </h2>
            <div className="flex flex-wrap gap-4">
              <ContactLink 
                href="https://www.linkedin.com/in/jessica-m-culver/" 
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <ContactLink 
                href="jessmculver@gmail.com" 
                icon={<Mail className="w-5 h-5" />}
                label="Email"
              />
              <ContactLink 
                href="https://github.com/jculver1" 
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
    <span className="text-foreground group-hover:text-foreground transition-colors duration-300">
      {icon}
    </span>
    <span className="font-body font-medium text-foreground group-hover:text-foreground transition-colors duration-300">
      {label}
    </span>
  </a>
);

export default Index;
