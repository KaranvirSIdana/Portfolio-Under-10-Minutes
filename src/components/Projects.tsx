
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LLM-based Customer Support System",
      description: "Developed an automated customer support system using fine-tuned LLMs to handle customer inquiries across multiple domains.",
      tags: ["NLP", "Transformers", "Python", "FastAPI"],
      github: "#",
      gradient: "from-blue-500/20 via-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Contextual Document Analysis",
      description: "Created a system that understands complex documents and can extract relevant information based on user queries.",
      tags: ["Information Extraction", "Semantic Search", "Vector Databases"],
      github: "#",
      gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Built a real-time dashboard to monitor and analyze sentiment across various data sources including social media and customer feedback.",
      tags: ["Sentiment Analysis", "Visualization", "React", "Python"],
      github: "#",
      gradient: "from-amber-500/20 via-orange-500/20 to-amber-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Highlighted projects showcasing my expertise in AI, NLP, and data science.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
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
