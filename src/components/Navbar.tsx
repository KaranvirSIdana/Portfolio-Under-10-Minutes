
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold">Karanvir</Link>
        
        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isOpen ? <X /> : <Menu />}
            </Button>
            
            {isOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-background flex flex-col p-6 animate-fade-in">
                <nav className="flex flex-col space-y-4">
                  <Link to="/" className="hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
                  <Link to="/about" className="hover:text-primary transition-colors" onClick={toggleMenu}>About</Link>
                  <Link to="/projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>Projects</Link>
                  <Link to="/contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
