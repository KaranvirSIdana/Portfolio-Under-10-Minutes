
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
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="container max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Karanvir</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
          Lead Data Scientist at Great Learning
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Specializing in Large Language Models with 3+ years of experience. 
          Passionate about AI advancements, history, and politics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="px-8" onClick={() => scrollToSection("contact")}>
            Contact Me
          </Button>
          <Button variant="outline" className="px-8" onClick={() => scrollToSection("projects")}>
            View Projects
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => scrollToSection("experience")}
          aria-label="Scroll to experience section"
        >
          <ArrowDown />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
