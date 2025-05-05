
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

const Experience = () => {
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('experience');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences = [
    {
      title: "Lead Data Scientist",
      company: "Great Learning",
      period: "Nov 2024 - Present",
      accomplishments: [
        "Scaled call analytics using advanced prompt engineering techniques to evaluate more than 300K calls every month with 92% accuracy",
        "Implemented LLM as Judge to ensure model reliability, reducing false positives by 18%",
        "Led end-to-end analytics for AI Mentors' adoption, tracking over 100K user interactions monthly",
        "Analyzed user feedback, identifying 40% dissatisfaction; recommended UI updates that increased engagement by 50% within a few months",
        "Automated stakeholder dashboards reducing manual reporting time by 15 hours/week"
      ]
    },
    {
      title: "Data Scientist",
      company: "Piramal Capital and Housing Finance",
      period: "Jun 2022 - Oct 2024",
      accomplishments: [
        "Implemented an x-sell model to identify potential personal loan customers with 86% recall rate",
        "Spearheaded the Strategic Expansion Initiative utilizing CIBIL data, contributing to opening 60 new branches",
        "Generated INR 3,200 Cr in assets under management within 2 months of launch",
        "Designed a data-driven policy for the sales team improving sales target by 56% in two months",
        "Developed a LightGBM hiring optimization model with 74% F1 score increasing incentive-earning employees by 10%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/30 to-90%">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <Briefcase className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="space-y-8 relative">
          {/* Timeline connector */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/70 to-primary/10 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-card/90 to-card/80 backdrop-blur-sm relative ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${index * 200}ms`, transition: 'all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)' }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 h-6 w-6 rounded-full bg-primary animate-pulse-glow hidden md:block"></div>
              
              <CardHeader className="border-b border-border/30 pb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                  </div>
                  <CardDescription className="text-right font-medium text-primary">{exp.period}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc pl-5 space-y-3">
                  {exp.accomplishments.map((accomplishment, i) => (
                    <li 
                      key={i}
                      className={`${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${(index * 200) + (i * 100)}ms`, transition: 'all 0.5s ease-out' }}
                    >
                      {accomplishment}
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

export default Experience;
