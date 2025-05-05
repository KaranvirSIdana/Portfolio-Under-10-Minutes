
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Interests = () => {
  const interestCategories = [
    {
      title: "Artificial Intelligence",
      items: [
        "Latest advancements in LLMs and NLP",
        "Ethical implications of AI development",
        "Human-AI collaboration models",
        "Future of work with AI integration"
      ]
    },
    {
      title: "History",
      items: [
        "Ancient civilizations",
        "World War era",
        "Socio-political movements",
        "History of technological revolutions"
      ]
    },
    {
      title: "Politics",
      items: [
        "Global governance systems",
        "Policy implications of technology",
        "International relations",
        "Democratic processes"
      ]
    },
    {
      title: "Reading",
      items: [
        "Non-fiction on technology",
        "Historical biographies",
        "Political theory",
        "Science fiction"
      ]
    }
  ];

  return (
    <section id="interests" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Interests & Passions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interestCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
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
