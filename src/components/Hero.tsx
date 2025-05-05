
import { ArrowDown, Function, SquareRoot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Data Science × AI × Statistics";
  const typingSpeed = 120;
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animated math symbols
  const mathSymbols = [
    { symbol: "π", top: "10%", left: "5%", size: "text-2xl", animation: "animate-float", delay: "0s" },
    { symbol: "∑", top: "25%", left: "15%", size: "text-3xl", animation: "animate-float", delay: "0.5s" },
    { symbol: "∫", top: "60%", left: "8%", size: "text-4xl", animation: "animate-float", delay: "1s" },
    { symbol: "√", top: "15%", right: "10%", size: "text-3xl", animation: "animate-float", delay: "1.5s" },
    { symbol: "∞", top: "70%", right: "15%", size: "text-2xl", animation: "animate-float", delay: "0.7s" },
    { symbol: "Δ", top: "40%", right: "5%", size: "text-3xl", animation: "animate-float", delay: "1.2s" }
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Animated math symbols */}
      {mathSymbols.map((symbol, index) => (
        <div 
          key={index}
          className={`absolute math-symbol ${symbol.size} text-primary/30 ${symbol.animation}`}
          style={{ 
            top: symbol.top, 
            left: symbol.left, 
            right: symbol.right,
            animationDelay: symbol.delay 
          }}
        >
          {symbol.symbol}
        </div>
      ))}
      
      <div className="container max-w-5xl mx-auto px-4 py-20 relative z-10 text-center md:text-left">
        <div className="animate-fade-in max-w-3xl mx-auto md:mx-0">
          <div className="inline-block overflow-hidden equation-box mb-4 mx-auto md:mx-0">
            <span className="inline-block text-sm font-semibold text-primary mb-4 px-4 py-2 border border-primary/20 rounded-full backdrop-blur-sm bg-background/30">
              Lead Data Scientist
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Karanvir</span>
            <span className="absolute -top-7 -right-4 md:right-auto md:left-[18rem] text-4xl text-primary/60 animate-float">∇</span>
          </h1>
          
          <div className="h-8 mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              {typedText}<span className="animate-pulse">_</span>
            </h2>
          </div>
          
          <div className="flex mb-12 max-w-xl">
            <div className="text-lg md:text-xl leading-relaxed text-center md:text-left">
              Transforming complex data into <span className="font-semibold text-foreground">actionable insights</span> with 
              <span className="inline-flex items-center mx-1 text-primary">
                <Function className="h-4 w-4 mr-1" /> 
                mathematical precision
              </span>
              and
              <span className="inline-flex items-center mx-1 text-primary">
                <SquareRoot className="h-4 w-4 mr-1" />
                statistical rigor
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
