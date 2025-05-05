
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";

const Interests = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const checkScrollable = () => {
      if (containerRef.current) {
        setIsScrollable(containerRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };
    
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);
  
  const handleScroll = () => {
    if (containerRef.current) {
      const position = containerRef.current.scrollLeft / 
        (containerRef.current.scrollWidth - containerRef.current.clientWidth);
      setScrollPosition(position);
    }
  };
  
  const interestCategories = [
    {
      title: "Artificial Intelligence",
      items: [
        "Latest advancements in LLMs and NLP",
        "Ethical implications of AI development",
        "Human-AI collaboration models",
        "Future of work with AI integration"
      ],
      icon: "🤖",
      bgClass: "from-blue-500/10 to-indigo-500/10",
      mathSymbol: "∑"
    },
    {
      title: "History",
      items: [
        "Ancient civilizations",
        "World War era",
        "Socio-political movements",
        "History of technological revolutions"
      ],
      icon: "📜",
      bgClass: "from-amber-500/10 to-yellow-500/10",
      mathSymbol: "∴"
    },
    {
      title: "Politics",
      items: [
        "Global governance systems",
        "Policy implications of technology",
        "International relations",
        "Democratic processes"
      ],
      icon: "🏛️",
      bgClass: "from-emerald-500/10 to-green-500/10",
      mathSymbol: "∝"
    },
    {
      title: "Reading",
      items: [
        "Non-fiction on technology",
        "Historical biographies",
        "Political theory",
        "Science fiction"
      ],
      icon: "📚",
      bgClass: "from-purple-500/10 to-pink-500/10",
      mathSymbol: "∫"
    }
  ];

  return (
    <section id="interests" className="py-20 bg-gradient-to-b from-background to-muted/30 to-90%">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Interests & Passions</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          Beyond my professional expertise, I'm passionate about exploring these subjects.
        </p>
        
        {isScrollable && (
          <div className="max-w-xs mx-auto mb-6 bg-muted h-1 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300 ease-out"
              style={{ width: `${scrollPosition * 100}%` }}
            ></div>
          </div>
        )}

        <div 
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar"
          onScroll={handleScroll}
        >
          {interestCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`snap-start flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] h-full bg-gradient-to-br ${category.bgClass} backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all hover-card`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center relative overflow-hidden">
                    <span className="text-3xl">{category.icon}</span>
                    <span className="absolute text-4xl opacity-10 -top-1 -right-1 font-serif">{category.mathSymbol}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="flex items-start equation-box py-1"
                      style={{ animationDelay: `${itemIndex * 0.1}s` }}
                    >
                      <span className="inline-block mr-2 mt-0.5 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
