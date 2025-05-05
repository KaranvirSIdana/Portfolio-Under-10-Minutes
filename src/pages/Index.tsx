
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MathBackground from "@/components/MathBackground";
import DataViz from "@/components/DataViz";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Karanvir - Data Scientist & AI Specialist";
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <MathBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <DataViz />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
