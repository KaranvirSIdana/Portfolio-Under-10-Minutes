
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, FileFunction, Triangle } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "LLM-based Customer Support System",
      description: "Developed an automated customer support system using fine-tuned LLMs to handle customer inquiries across multiple domains.",
      tags: ["NLP", "Transformers", "Python", "FastAPI"],
      github: "#",
      gradient: "from-blue-500/20 via-indigo-500/20 to-blue-500/20",
      formula: "P(A|B) = P(B|A)P(A)/P(B)"
    },
    {
      title: "Contextual Document Analysis",
      description: "Created a system that understands complex documents and can extract relevant information based on user queries.",
      tags: ["Information Extraction", "Semantic Search", "Vector Databases"],
      github: "#",
      gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20",
      formula: "∫f(x)dx = F(b) - F(a)"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Built a real-time dashboard to monitor and analyze sentiment across various data sources including social media and customer feedback.",
      tags: ["Sentiment Analysis", "Visualization", "React", "Python"],
      github: "#",
      gradient: "from-amber-500/20 via-orange-500/20 to-amber-500/20",
      formula: "σ = √(∑(x-μ)²/N)"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <FileFunction className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Highlighted projects showcasing my expertise in AI, NLP, and data science.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`h-full flex flex-col border-none shadow-lg transition-all duration-500 overflow-hidden bg-gradient-to-br ${project.gradient} hover-card`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <Triangle 
                    className={`text-primary/20 h-32 w-32 transform ${hoveredIndex === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'} transition-transform duration-700`}
                  />
                </div>
                <div className="relative z-10">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow relative">
                <div className="absolute bottom-0 right-0 opacity-5 transform rotate-12">
                  <span className="text-2xl font-serif">{project.formula}</span>
                </div>
                <CardDescription className="text-base text-foreground/90 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-background/80 text-primary/90 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/30 pt-4">
                <Button variant="outline" size="sm" className="w-full group hover:bg-background/50" asChild>
                  <a href={project.github}>
                    <GithubIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span>View Project</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
