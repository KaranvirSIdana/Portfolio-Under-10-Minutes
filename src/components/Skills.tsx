
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Large Language Models", "NLP", "Transformer Architectures", "Fine-tuning", "Prompt Engineering", "PyTorch", "TensorFlow"]
    },
    {
      title: "Data Science",
      skills: ["Python", "R", "SQL", "Data Visualization", "Statistical Analysis", "Feature Engineering", "Big Data"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter", "Git", "Docker", "AWS", "Azure", "Kubernetes", "MLflow"]
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Technical Mentoring", "Project Management", "Research", "Technical Writing", "Client Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-muted px-3 py-1 rounded-full text-sm"
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
