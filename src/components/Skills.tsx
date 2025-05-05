
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Large Language Models", "NLP", "Transformer Architectures", "Fine-tuning", "Prompt Engineering", "PyTorch", "TensorFlow"],
      bgClass: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Data Science",
      skills: ["Python", "R", "SQL", "Data Visualization", "Statistical Analysis", "Feature Engineering", "Big Data"],
      bgClass: "from-emerald-500/10 to-green-500/10"
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter", "Git", "Docker", "AWS", "Azure", "Kubernetes", "MLflow"],
      bgClass: "from-amber-500/10 to-yellow-500/10"
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Technical Mentoring", "Project Management", "Research", "Technical Writing", "Client Communication"],
      bgClass: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute h-96 w-96 rounded-full bg-primary blur-3xl -top-10 -left-10"></div>
        <div className="absolute h-96 w-96 rounded-full bg-primary blur-3xl -bottom-10 -right-10"></div>
      </div>
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">A comprehensive set of technical and soft skills that enable me to deliver end-to-end AI solutions.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`h-full border-none shadow-lg bg-gradient-to-br ${category.bgClass} backdrop-blur-sm hover:shadow-xl transition-all`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-background/80 border border-border px-3 py-1.5 rounded-full text-sm transition-all hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
