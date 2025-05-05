
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calculator } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Navigation items with math symbols
  const navItems = [
    { name: "Home", path: "/", symbol: "∝" },
    { name: "Experience", path: "#experience", symbol: "∑" },
    { name: "Skills", path: "#skills", symbol: "∛" },
    { name: "Projects", path: "#projects", symbol: "∫" },
    { name: "Contact", path: "#contact", symbol: "∞" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <div className="bg-primary/10 p-1.5 rounded-full">
            <Calculator className="h-5 w-5 text-primary" />
          </div>
          <span className="flex items-baseline">
            Karanvir
            <span className="text-xs text-primary ml-1 font-serif">∇</span>
          </span>
        </Link>
        
        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isOpen ? <X /> : <Menu />}
            </Button>
            
            {isOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-md flex flex-col p-6 animate-fade-in">
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      className="flex items-center space-x-2 text-lg hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.path);
                      }}
                    >
                      <span className="text-primary/50 font-serif">{item.symbol}</span>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="group flex flex-col items-center relative overflow-hidden"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.path);
                }}
              >
                <span className="text-xs text-primary/50 font-serif group-hover:scale-125 transition-transform mb-0.5">
                  {item.symbol}
                </span>
                <span className="hover:text-primary transition-colors">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
