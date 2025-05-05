
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
      github: "#"
    },
    {
      title: "Contextual Document Analysis",
      description: "Created a system that understands complex documents and can extract relevant information based on user queries.",
      tags: ["Information Extraction", "Semantic Search", "Vector Databases"],
      github: "#"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Built a real-time dashboard to monitor and analyze sentiment across various data sources including social media and customer feedback.",
      tags: ["Sentiment Analysis", "Visualization", "React", "Python"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-foreground/80">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.github}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    View Project
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
