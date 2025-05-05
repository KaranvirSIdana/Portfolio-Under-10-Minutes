
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-4 py-20 relative z-10">
        <div className="animate-fade-in">
          <span className="inline-block text-sm font-semibold text-primary mb-4 px-3 py-1 border border-primary/20 rounded-full">
            Lead Data Scientist
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Karanvir</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-muted-foreground">
            Specializing in <span className="font-semibold text-foreground">Large Language Models</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            With 3+ years of experience crafting AI solutions that transform businesses.
            Passionate about advancing machine learning technology and exploring its
            applications across different domains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="px-8 text-base font-medium relative overflow-hidden group"
              onClick={() => scrollToSection("contact")}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
            <Button 
              variant="outline" 
              className="px-8 text-base font-medium border-2" 
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => scrollToSection("experience")}
          aria-label="Scroll to experience section"
          className="border border-muted-foreground/20 rounded-full h-12 w-12"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
