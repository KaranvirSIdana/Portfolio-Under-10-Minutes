
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Add animation keyframes to tailwind.config.js
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Karanvir - Data Scientist & AI Specialist";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
