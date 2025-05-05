
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareDot, FileFunction, Microscope } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Publications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const publications = [
    {
      title: "Dual-LLM Call Evaluation Framework",
      description: "A novel approach using multiple language models to evaluate customer service calls with high accuracy and reduced false positives.",
      journal: "AI in Business Operations, 2023",
      icon: <SquareDot className="h-8 w-8" />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Feature Adoption Analysis Using AI Mentors",
      description: "Tracking and analyzing over 100,000 user interactions monthly to optimize AI-driven learning experiences.",
      journal: "Educational Technology Innovations, 2024",
      icon: <FileFunction className="h-8 w-8" />,
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Geographic Expansion Strategy Using CIBIL Data",
      description: "A data-driven approach to identify high-potential and low-risk areas for strategic business expansion.",
      journal: "Journal of Finance Analytics, 2023",
      icon: <Microscope className="h-8 w-8" />,
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % publications.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [publications.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: activeIndex * (containerRef.current.clientWidth / 1.5),
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-background to-muted/30 to-90%">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Publications</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Research and practical applications of statistical methods and AI in business contexts.
        </p>

        <div 
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6"
        >
          {publications.map((pub, idx) => (
            <div 
              key={idx} 
              className={`snap-start flex-shrink-0 w-full md:w-[85%] lg:w-[75%] 
                ${idx === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}
                transition-all duration-500 ease-out`}
              onClick={() => setActiveIndex(idx)}
            >
              <Card className={`h-full overflow-hidden bg-gradient-to-br border-none shadow-lg ${pub.color} backdrop-blur-sm hover:shadow-xl transition-all`}>
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-3 bg-background/40 text-primary">
                      {pub.icon}
                    </div>
                    <CardTitle className="text-xl">{pub.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">{pub.description}</p>
                  <p className="text-sm text-muted-foreground font-medium">{pub.journal}</p>
                  
                  <div className="mt-6 flex space-x-1 justify-center">
                    {publications.map((_, dotIdx) => (
                      <span 
                        key={dotIdx}
                        className={`block h-2 w-2 rounded-full transition-all duration-300 
                          ${dotIdx === activeIndex ? 'bg-primary w-6' : 'bg-primary/30'}`}
                        onClick={() => setActiveIndex(dotIdx)}
                      ></span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
